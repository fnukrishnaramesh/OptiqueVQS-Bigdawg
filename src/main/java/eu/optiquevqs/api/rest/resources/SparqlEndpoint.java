package eu.optiquevqs.api.rest.resources;

import java.io.IOException;
import java.util.List;
import java.util.regex.Pattern;

import org.eclipse.rdf4j.model.Value;
import org.eclipse.rdf4j.query.BindingSet;
import org.json.JSONArray;
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

		String retval = bindingsToJSON(results).toString();
		return retval;
		//return impl.sparqlRunQuery("https://dbpedia.org/sparql", "select distinct ?Concept where {[] a ?Concept} LIMIT 100").toString();
	}
	
	/**
	 * Returns JSON text from a list of sparql query result bindings
	 * The format is read by the function fillTable(data,dt) in widgets/TableOptique/js/main.js
	 * 
	 * TODO: Improve the handling of rdf type declarations in the binding set??
	 * 
	 * @param bindings
	 * @return
	 */
	public static JSONObject bindingsToJSON(List<BindingSet> query_results){
		JSONObject retval = new JSONObject();
		JSONObject head = new JSONObject();
		JSONObject results = new JSONObject();
		JSONArray bindings = new JSONArray();
		JSONArray vars = new JSONArray();
		retval.put("results", results);
		retval.put("head", head);
		head.put("vars", vars);
		results.put("bindings", bindings);
		
		if(query_results.size() == 0)
			return retval;

		BindingSet row0 = query_results.get(0);
		for(String header : row0.getBindingNames())
			vars.put(header);

		for (BindingSet result : query_results){
			JSONObject binding = new JSONObject();
			for(String col : result.getBindingNames()){
				String raw_val = result.getValue(col).toString();
				String[] value_and_type = raw_val.split(Pattern.quote("^^"));
				String val = value_and_type[0];
				if(val.charAt(0) == '"')
					val = val.substring(1, val.length()-1);
				JSONObject json_value = new JSONObject().put("value", val);
				if(value_and_type.length == 2)
					json_value.put("type",value_and_type[1]);
				binding.put(col, json_value);
			}
			bindings.put(binding);
		}
		return retval;
	}	
}
