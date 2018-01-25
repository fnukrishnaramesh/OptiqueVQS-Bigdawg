package eu.optiquevqs.server;

import java.io.IOException;
import java.io.OutputStream;
import java.net.ConnectException;
import java.net.InetAddress;
import java.net.Socket;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.eclipse.jetty.http.HttpStatus;
import org.eclipse.jetty.security.HashLoginService;
import org.eclipse.jetty.server.Connector;
import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.HttpChannel;
import org.eclipse.jetty.server.HttpConfiguration;
import org.eclipse.jetty.server.HttpConnectionFactory;
import org.eclipse.jetty.server.Request;
import org.eclipse.jetty.server.SecureRequestCustomizer;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.ServerConnector;
import org.eclipse.jetty.server.SslConnectionFactory;
import org.eclipse.jetty.server.handler.AbstractHandler;
import org.eclipse.jetty.server.handler.ContextHandler;
import org.eclipse.jetty.server.handler.ContextHandlerCollection;
import org.eclipse.jetty.server.handler.DefaultHandler;
import org.eclipse.jetty.server.handler.HandlerList;
import org.eclipse.jetty.util.URIUtil;
import org.eclipse.jetty.util.ssl.SslContextFactory;
import org.eclipse.jetty.webapp.WebAppContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

// The VQS web application starts with the Jetty server
public class JettyStart {
	
    private static final Logger LOGGER = LoggerFactory.getLogger(JettyStart.class);
    static final int DEFAULT_HTTP_PORT = 8080;
    static final int DEFAULT_HTTPS_PORT = 8443;
    static final int DEFAULT_STOP_PORT = 8090;
    private final int httpPort;
    private final int httpsPort;
    private final int stopPort;
    
    public JettyStart(int httpPort, int httpsPort, int stopPort) {
        this.httpPort = httpPort;
        this.httpsPort = httpsPort;
        this.stopPort = stopPort;
    }
    
    public JettyStart(int httpPort, int httpsPort) {
        this.httpPort = httpPort;
        this.httpsPort = httpsPort;
        this.stopPort = DEFAULT_STOP_PORT;
    }
    
    public JettyStart() {
        this(DEFAULT_HTTP_PORT, DEFAULT_HTTPS_PORT, DEFAULT_STOP_PORT);
    }
    
    //Stop Server
    static public void stop() {
        stop(DEFAULT_STOP_PORT);
    }

    //Stops the running web application powered with Jetty Server
    //@param stopPort TCP port used to communicate with Jetty
    static public void stop(Integer stopPort) {
        try {
            Socket s = new Socket(InetAddress.getByName("127.0.0.1"), stopPort);
            LOGGER.info("Jetty stopping...");
            s.setSoLinger(false, 0);
            OutputStream out = s.getOutputStream();
            out.write(("stop\r\n").getBytes());
            out.flush();
            s.close();
        } 
        catch (ConnectException e) {
            LOGGER.info("Jetty not running!");
        } 
        catch (Exception e) {
            LOGGER.error(e.getMessage(), e);
        }
    }
    
    //Http redirect to Https
    public static class SecureSchemeHandler extends AbstractHandler{
        @Override
        public void handle(String target, Request baseRequest, HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
            HttpConfiguration httpConfig = HttpChannel.getCurrentHttpChannel().getHttpConfiguration();
            if (baseRequest.isSecure()){
                return;
            }

            if (httpConfig.getSecurePort() > 0){
                String scheme = httpConfig.getSecureScheme();
                int port = httpConfig.getSecurePort();

                String url = URIUtil.newURI(scheme,baseRequest.getServerName(),port,baseRequest.getRequestURI(),baseRequest.getQueryString());
                response.setContentLength(0);
                response.sendRedirect(url);
            }
            else{
                response.sendError(HttpStatus.FORBIDDEN_403,"!Secure");
            }
            baseRequest.setHandled(true);
        }
    }
    
	public static void main(String[] args) throws Exception {

        JettyStart jettyStart = null;
        if (args.length == 3) {
        	jettyStart = new JettyStart(Integer.valueOf(args[0]), Integer.valueOf(args[1]), Integer.valueOf(args[2]));
        } else if (args.length == 2) {
        	jettyStart = new JettyStart(Integer.valueOf(args[0]), Integer.valueOf(args[1]));
        } else {
        	jettyStart = new JettyStart();
        }
        jettyStart.start();
	}
	
    public void start() throws Exception {
		Server server = new Server();

		// HTTP Configuration
		HttpConfiguration http = new HttpConfiguration();
		http.addCustomizer(new SecureRequestCustomizer());

		//Configuration for HTTPS redirect
		http.setSecurePort(httpsPort);
		http.setSecureScheme("https");
		
		ServerConnector connector = new ServerConnector(server);
		connector.addConnectionFactory(new HttpConnectionFactory(http));
		connector.setName("unsecured"); // Named connector
		connector.setPort(httpPort);//Setting HTTP  port

		// Configuring SSL
		SslContextFactory sslContextFactory = new SslContextFactory();
		
		// Defining keystore path and passwords
		sslContextFactory.setKeyStorePath(System.getProperty("jetty.keystore.path",JettyStart.class.getResource("keystore").toExternalForm()));
        sslContextFactory.setKeyStorePassword(System.getProperty("jetty.keystore.password","optiquevqs"));
        sslContextFactory.setKeyManagerPassword(System.getProperty("jetty.keymanager.password","optiquevqs"));        
        
        //HTTPS configuration
		HttpConfiguration https = new HttpConfiguration();
		https.addCustomizer(new SecureRequestCustomizer());
				
		ServerConnector sslConnector = new ServerConnector(server, new SslConnectionFactory(sslContextFactory, "http/1.1"), new HttpConnectionFactory(https));
		sslConnector.setName("secured"); // Named connector
		sslConnector.setPort(httpsPort);//Setting HTTPs  port
		
		// Setting HTTP and HTTPS connectors
		server.setConnectors(new Connector[]{connector, sslConnector});
		
		// Wire up contexts for secure handling to named connector
        String secureHosts[] = new String[] { "@secured" };

        //Creating the Fuseki web application context
  		WebAppContext fusekiwebapp = new WebAppContext();
  		fusekiwebapp.setWar("../OptiqueVQS/src/main/webapp/fuseki/fuseki.war");
  		fusekiwebapp.setContextPath("/fuseki");
  		fusekiwebapp.setVirtualHosts(secureHosts);
  		
      		
      	//Creating the web application context
		WebAppContext webapp = new WebAppContext();
		webapp.setDescriptor(webapp + "/WEB-INF/web.xml");
		webapp.setResourceBase("../OptiqueVQS/src/main/webapp");
		webapp.setContextPath("/");
        
		webapp.setParentLoaderPriority(true);
  		webapp.setVirtualHosts(secureHosts);
  		          	  		
		// Wire up context for unsecure handling to only
        // the named 'unsecured' connector
        ContextHandler redirectHandler = new ContextHandler();
        redirectHandler.setContextPath("/");
        redirectHandler.setHandler(new SecureSchemeHandler());
        redirectHandler.setVirtualHosts(new String[]{"@unsecured"});
        
        // Establish all handlers that have a context
        ContextHandlerCollection contextHandlers = new ContextHandlerCollection();
        contextHandlers.setHandlers(new Handler[]
        { redirectHandler, webapp, fusekiwebapp });
        
        // Create server level handler tree
        HandlerList handlers = new HandlerList();
        handlers.addHandler(contextHandlers);
        handlers.addHandler(new DefaultHandler()); // round things out
               
        server.setHandler(handlers);
        
        //HashLogin Basic Authentication
        HashLoginService loginService = new HashLoginService();
        loginService.setName( "VQS Login Realm" );
        loginService.setConfig( "src/main/resources/realm.properties" );
        server.addBean( loginService );
        
		// Starting the Server
		try {
			server.start();
			LOGGER.info("Jetty server started");
			LOGGER.info("HTTPS URL: https://{}:{}", InetAddress.getLocalHost().getHostAddress(), httpsPort);
			LOGGER.info("HTTP URL: http://{}:{}", InetAddress.getLocalHost().getHostAddress(), httpPort);
			LOGGER.info("Port to stop Jetty with the 'stop' operation: {}", stopPort);

			Monitor monitor = new Monitor(stopPort, new Server[]{server});
			monitor.start();

			server.join();
			server.stop();
		}
		catch (Exception e) {
			e.printStackTrace();
		}
		finally {
			server.destroy();
		}
		LOGGER.info("Jetty server exited");
	}
}
