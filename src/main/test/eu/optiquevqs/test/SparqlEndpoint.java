package eu.optiquevqs.test;

import java.util.ArrayList;

import org.eclipse.rdf4j.RDF4JException;
import org.eclipse.rdf4j.query.BindingSet;
import org.eclipse.rdf4j.query.QueryLanguage;
import org.eclipse.rdf4j.query.TupleQuery;
import org.eclipse.rdf4j.query.TupleQueryResult;
import org.eclipse.rdf4j.repository.RepositoryConnection;
import org.eclipse.rdf4j.repository.sparql.SPARQLRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SparqlEndpoint {
    private static final Logger LOGGER = LoggerFactory.getLogger(SparqlEndpoint.class);
	public ArrayList<BindingSet> SparqlRunQuery(String sparqlEndpoint, String query) throws RDF4JException {
		LOGGER.info("Sparql Endpoint:" + sparqlEndpoint);
        ArrayList<BindingSet> results = new ArrayList<BindingSet>();
		SPARQLRepository sparqlRepository = new SPARQLRepository(sparqlEndpoint);
		sparqlRepository.initialize();
		LOGGER.info("Sparql Repository Initalized");

		//Repository Connection
		RepositoryConnection sparqlConnection = sparqlRepository.getConnection();
		LOGGER.info("Sparql Connection Estabilished");
		try {
			//Evaluate query
			TupleQuery tupleQuery = sparqlConnection.prepareTupleQuery(QueryLanguage.SPARQL, query);
			LOGGER.info("Sparql Query Evaluated");
	        TupleQueryResult result = tupleQuery.evaluate();
	        try {
                while (result.hasNext()) {  // iterate over the result
                    BindingSet bindingSet = result.next();
                    results.add(bindingSet);
                }
            } 
	        finally { result.close(); }
		}
		finally { sparqlConnection.close(); }
	    return results;
	}	
}
	
	/*public static void main (String args[]){
		String sparqlEndpoint = "https://dbpedia.org/sparql";
		SPARQLRepository sparqlRepository = new SPARQLRepository(sparqlEndpoint);
		sparqlRepository.initialize();
		
		//SPARQLRepository sparqlRepository = new SPARQLRepository("https://query.wikidata.org/sparql");
		RepositoryConnection sparqlConnection = sparqlRepository.getConnection();

		/*String query = "SELECT ?s ?desc ?authorlabel (COUNT(DISTINCT ?sitelink) as ?linkcount) WHERE {"
		        + "?s wdt:P31 wd:Q571 ."
		        + "?sitelink schema:about ?s ."
		        + "?s wdt:P50 ?author"
		        + "OPTIONAL { ?s rdfs:label ?desc filter (lang(?desc) = \"en\"). }"
		        + "OPTIONAL {"
		        + "?author rdfs:label ?authorlabel filter (lang(?authorlabel) = \"en\")."
		        + "}"
		        + "} GROUP BY ?s ?desc ?authorlabel ORDER BY DESC(?linkcount)";
		        
		        */
		/*String query = "select distinct ?Concept where {[] a ?Concept} LIMIT 100";
		TupleQuery tupleQuery = sparqlConnection.prepareTupleQuery(QueryLanguage.SPARQL, query);
		for (BindingSet bs : QueryResults.asList(tupleQuery.evaluate()))
		    System.out.println(bs);
		}*/