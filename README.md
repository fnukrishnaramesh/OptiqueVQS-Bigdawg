# OptiqueVQS
OptiqteVQS is a visual query formulation tool for expressing information needs in terms of queries over ontologies. OptiqueVQS is composed of an interface and a navigation graph extracted from the underlying ontologies. The interface components are populated and driven according to the information in the navigation graph.

Currently, the ontology is classified using [HermiT](http://www.cs.ox.ac.uk/isg/tools/HermiT/) and projected into a (navigation) graph. The navigation graph in the form of an RDF model is managed by the triplestore reasoner [RDFox](http://www.cs.ox.ac.uk/isg/tools/RDFox/).

The OptiqueVQS interface is designed as a widget based user-interface mashup (i.e., UI mashup), which aggregates a set of applications in a common graphical space, in the form of widgets, and orchestrates them for achieving common goals. Apart from flexibility and extensibility, such a modular approach provides us with the ability to combine multiple representation and interaction paradigms, and distribute functionality to appropriate widgets.

See details in the publications [below](#publications).


## Using OptiqueVQS via the Optique platform

Access to the original OptiqueVQS can be done via the [Optique platform](http://optique-project.eu/northwind-tutorial/). Requires installation of the Optique platform, but it comes with a comprehensive tutorial, and an example OBDA scenario including artefacts such as ontology, data set, and mappings for online testing and download.

## Using stand-alone OptiqueVQS 

Alternatively (recommended) an stand-alone version (platform dependent) is available. Currently OptiqueVQS runs as a jetty server:

- Linux: [http://sws.ifi.uio.no/project/optique-vqs/OptiqueVQS_linux.zip](http://sws.ifi.uio.no/project/optique-vqs/OptiqueVQS_linux.zip)
- Windows: TBA 
- Mac OS: TBA

Unzip the file and run:
> java -jar OptiqueVQS.jar

or with optional ports:
> java -jar OptiqueVQS.jar 8085 8443 8090


The server is started and the application is running. Browse the page using the (default) HTTP URL [http://localhost:8085](http://localhost:8085) or the (default) HTTPS URL: [https://localhost:8443](https://localhost:8443)


OptiqueVQS makes use of RDFox which is platform dependent. If the above pre-compiled versions do not work it is recommended to follow the steps below.


## Compiling OptiqueVQS

The latest source codes can be accessed from gitlab. 

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
	1. Start/stop the web application
	
> mvn exec:java@VQSStart

> mvn exec:java@VQSStart -Dexec.args="5080 5443 5090" (indicating the input ports)
	
> mvn exec:java@VQSStop 

8. **Run OptiqueVQS with the compiled jar file:** the jar file *OptiqueVQS.jar* is generated in the */target* folder together with a folder with dependencies (*dependency-jars*).

> java -jar OptiqueVQS.jar
or

> java -jar OptiqueVQS.jar 5080 5443 5090



## Publications

1. Ahmet Soylu, Evgeny Kharlamov, Dimitry Zheleznyakov, Ernesto Jimenez Ruiz, Martin Giese, Martin G. Skjaeveland, Dag Hovland, Rudolf Schlatte, Sebastian Brandt, Hallstein Lie, Ian Horrocks. **OptiqueVQS: a Visual Query System over Ontologies for Industry**. Semantic Web Journal, 2018. [link](http://semantic-web-journal.net/content/optiquevqs-visual-query-system-over-ontologies-industry-0)
2. A. Soylu, M. Giese, E. Jimenez-Ruiz, G. Vega-Gorgojo, and I. Horrocks. **Experiencing OptiqueVQS: A Multi-paradigm and Ontology-based Visual Query System for End Users**. Universal Access in the Information Society, 15(1), pages 129-152 (2016). [pdf](http://www.cs.ox.ac.uk/files/8117/uais2015_soylu.pdf)
3. A. Soylu, M. Giese, E. Kharlamov, E. Jimenez-Ruiz, D. Zheleznyakov, and I. Horrocks. **Ontology-based End-user Visual Query Formulation: Why, What, Who, How, and Which?** Universal Access in the Information Society. 2017. [pdf](http://www.cs.ox.ac.uk/files/8116/Soylu_et_al_UAIS_2016.pdf)


