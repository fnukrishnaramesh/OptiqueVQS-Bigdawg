package eu.optiquevqs.api.rest.resources;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.semanticweb.owlapi.model.OWLOntologyCreationException;

import eu.optiquevqs.api.rest.resources.impl.QFQueryCatalogAccessImpl;


@Path("JSON/getQFQueryCatalogAccess")
public class QFQueryCatalogAccess {
	@GET
	@Produces(MediaType.APPLICATION_JSON)  
	public String getQFQueryCatalogAccess(
			@QueryParam("method") String method,
			@QueryParam("params") String paramvalue,
			@QueryParam("qId") String queryID) throws OWLOntologyCreationException, FileNotFoundException {
				
		JSONObject jobject=new JSONObject(); 
	//	JSONArray jarray=new JSONArray();
		QFQueryCatalogAccessImpl impl=new QFQueryCatalogAccessImpl();	  
		switch (method){
		  case "deleteAllQueries":  
			  System.out.println("");
		  break;
		  case "deleteQuery":  System.out.println("String queryID");
		  break;
		//  case "getAvailableQueries":  System.out.println("");
		 // break;
		  case "getAvailableQueryIds":  System.out.println("");
		  break;
		  case "getAvailableSparqlQueries":  System.out.println("");
		  break;
		  case "getAvailableStarqlQueries":  System.out.println("");
		  break;
		  case "getQuery":  
			  jobject= impl.getQuery(queryID);
		  break;
		  case "saveQuery":  System.out.println("String name, String desc, String sparqlquery, String jsonquery, String status, String type");
		  break;
		  case "testMethod":  System.out.println("");
		  break;
		  case "updateQuery":  System.out.println("String queryID, String name, String desc, String sparqlquery, String jsonquery, String status, String type");
		  break;
		}
			  if (method.equals("getAvailableQueries")){
			        JSONParser parser = new JSONParser();

				  try {     
			        	Object  obj = parser.parse(new FileReader("E:\\UiO\\OptiqueVQS\\OptiqueVQS-Test\\JSON-data\\getQueries.json"));

			             jobject =  (JSONObject) obj;
			                   } catch (FileNotFoundException e) {
			            e.printStackTrace();
			        } catch (IOException e) {
			            e.printStackTrace();
			        } catch (ParseException e) {
			            e.printStackTrace();
			        }
			        
		  }
		//	  else 	
			  
	    
		  return jobject.toString();   
	  }
}
