# OptiqueVQS
OptiqteVQS is a visual query formulation tool for expressing information needs in terms of queries over ontologies. OptiqueVQS is composed of an interface and a navigation graph extracted from the underlying ontologies. The interface components are populated and driven according to the information in the navigation graph.

Currently, the ontology is classified using [HermiT](http://www.cs.ox.ac.uk/isg/tools/HermiT/) and projected into a (navigation) graph. The navigation graph in the form of an RDF model is managed by the triplestore reasoner [RDFox](http://www.cs.ox.ac.uk/isg/tools/RDFox/).

The OptiqueVQS interface is designed as a widget based user-interface mashup (i.e., UI mashup), which aggregates a set of applications in a common graphical space, in the form of widgets, and orchestrates them for achieving common goals. Apart from flexibility and extensibility, such a modular approach provides us with the ability to combine multiple representation and interaction paradigms, and distribute functionality to appropriate widgets.


## Using OptiqueVQS

Access to the original OptiqueVQS can be done via the [Optique platform](http://optique-project.eu/northwind-tutorial/). Requires installation of the Optique platform, but it comes with a comprehensive tutorial, and an example OBDA scenario including artefacts such as ontology, data set, and mappings for online testing and download.

Alternatively (recommended) an stand-alone version (platform dependent) is available. Currently OptiqueVQS runs as a jetty server:

- Linux: 
- Windows: 
- Mac OS: 

Unzip the file and run:
> java -jar OptiqueVQS.jar

or with optional ports:
> java -jar OptiqueVQS.jar 8085 8443 8090


The server is started and the application is running. 
Browse the page using the URL, The (default) HTTP URL
> localhost:8085 

The (default) HTTPS URL
> localhost:8443


OptiqueVQS makes use of RDFox which is platform dependent. If the above pre-compiled versions do not work it is recommended to follow the steps below.


The latest source codes can also be accessed from gitlab. 

1. **Basic requirements:** git, maven and java 1.8
2. **Clone repository that deals with the ontology projection:** [https://gitlab.com/ernesto.jimenez.ruiz/ontology-services-toolkit](https://gitlab.com/ernesto.jimenez.ruiz/ontology-services-toolkit)
> git clone https://gitlab.com/ernesto.jimenez.ruiz/ontology-services-toolkit.git
3. **Manage RDFox dependency:** The library "ontology-services-toolkit" makes use of RDFox which is platform dependent. 
	1. In the lib folder, the different pre-compiled libraries for RDFox are provided.
	2. Follow the instructions in lib/mvn_install_jrdfox.txt to install the RDFox library in the local maven repository.
4. **Run mvn install** under the ontology-services-toolkit project:
> mvn clean install
5. **Clone OptiqueVQS repository:** [https://gitlab.com/ernesto.jimenez.ruiz/OptiqueVQS](https://gitlab.com/ernesto.jimenez.ruiz/OptiqueVQS)
> git clone https://gitlab.com/ernesto.jimenez.ruiz/OptiqueVQS.git
6. **Run mvn install** under the OptiqueVQS project:
> mvn clean install
7. **Run OptiqueVQS with maven:**
	1. Start the web application
> mvn exec:java@VQSStart

> mvn exec:java@VQSStart -Dexec.args="5080 5443 5090" (indicating the input ports)
	
	2. Stop the server by running the following command in another terminal
> mvn exec:java@VQSStop 

7. **Run OptiqueVQS with the compiled jar file:** the jar file *OptiqueVQS.jar* is generated in the */target* folder together with a folder with dependencies (*dependency-jars*).
> java -jar OptiqueVQS.jar
or
> java -jar OptiqueVQS.jar 5080 5443 5090

