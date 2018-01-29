# OptiqueVQS
OptiqteVQS is a visual query formulation tool for expressing information needs in terms of queries over ontologies. 
OptiqueVQS is composed of an interface and a navigation graph extracted from the underlying ontologies. 
The interface components are populated and driven according to the information in the navigation graph.

## Getting Started
Instructions to get the jetty server started and VQS system running

### Environment Setup
1. Download Maven 
2. Unzip the file to the folder of your choice.
3. Add the bin directory (eg: C:\Program Files\apache-maven-3.5.2\bin) to the PATH variable.
4. Add environment variables MAVEN_HOME, M2_HOME and point to the maven directory.

### Installing
Download the code with git: 
>git clone git://github.uio.no/shahilar/OptiqueVQS
  
Build and package the web application
> cd OptiqueVQS
> mvn clean install

Start the web application
> mvn exec:java@VQSStart

The server is started and the application is running. 
Browse the page using the URL, The HTTP URL
> localhost:8080

The HTTPS URL
> localhost:8443

Stop the server by running the following command in another terminal
> mvn exec:java@VQSStop

## Build
1. Uses Maven as a build tool
2. Uses Maven Jetty plugin source code
