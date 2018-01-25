package eu.optiquevqs.api.rest.resources.impl;

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

public class SparqlEndpointImpl {
    private static final Logger LOGGER = LoggerFactory.getLogger(SparqlEndpointImpl.class);
	public ArrayList<BindingSet> sparqlRunQuery(String sparqlEndpoint, String query) throws RDF4JException {
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
