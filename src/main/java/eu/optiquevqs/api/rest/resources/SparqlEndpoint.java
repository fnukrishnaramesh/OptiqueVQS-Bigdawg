package eu.optiquevqs.api.rest.resources;

import java.io.IOException;
import java.util.List;

import org.eclipse.rdf4j.model.Value;
import org.eclipse.rdf4j.query.BindingSet;
import org.json.JSONObject;

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
		List<BindingSet> results = impl.sparqlRunQuery(sparqlendpoint, query);

		return bindingsToJSON(results);
		//return impl.sparqlRunQuery("https://dbpedia.org/sparql", "select distinct ?Concept where {[] a ?Concept} LIMIT 100").toString();
	}
	
	/**
	 * Returns JSON text from a list of sparql query result bindings
	 * The format is read by the function fillTable(data,dt) in widgets/TableOptique/js/main.js
	 * @param bindings
	 * @return
	 */
	private static String bindingsToJSON(List<BindingSet> bindings){
		if(bindings.isEmpty())
			return "";

		// TODO: This should probably be done using JSONObject
		String retval = "{\"head\":{ \"vars\":[\n";
		BindingSet row0 = bindings.get(0);
		int i = 0;
		for(String header : row0.getBindingNames()){
			if(i > 0)
				retval += ", ";
			retval +=  "\"" + header + "\"";
			i++;
		}
		retval += "]},\n";

		retval += "\"results\":{\"bindings\":[\n";
		boolean firstrow = true;
		for (BindingSet result : bindings){
			if(firstrow)
				firstrow = false;
			else
				retval += ",\n";
			retval += "{";
			boolean firstcol = true;
			for(String col : result.getBindingNames()){
				if(firstcol)
					firstcol = false;
				else 
					retval += ",";
				Value val = result.getValue(col);
				retval += "\"" + col + "\":{\"value\":\"" + val.toString() + "\"}";
			}
			retval += "}";
		}
		return retval + "\n]}}";

	}
}