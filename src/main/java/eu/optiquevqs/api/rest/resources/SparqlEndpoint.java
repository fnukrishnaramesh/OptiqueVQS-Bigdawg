package eu.optiquevqs.api.rest.resources;

import java.io.IOException;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import eu.optiquevqs.api.rest.resources.impl.SparqlEndpointImpl;


@Path("JSON/sparql")
public class SparqlEndpoint {
	@GET
	@Produces(MediaType.APPLICATION_JSON)  
	public String getSparqlResult(@QueryParam("endpoint") String sparqlendpoint,
			@QueryParam("query") String query) 
					throws IOException{
		SparqlEndpointImpl impl = new SparqlEndpointImpl();
		return impl.sparqlRunQuery(sparqlendpoint, query).toString();
		//return impl.sparqlRunQuery("https://dbpedia.org/sparql", "select distinct ?Concept where {[] a ?Concept} LIMIT 100").toString();

	}
}