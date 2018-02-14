package eu.optiquevqs.api.rest.resources.impl;

//import org.eclipse.rdf4j.query.MalformedQueryException;
//import org.eclipse.rdf4j.query.QueryEvaluationException;
//import org.eclipse.rdf4j.query.UpdateExecutionException;
import org.json.JSONException;
import org.json.JSONObject;

public class QFQueryCatalogAccessImpl {
	
	public boolean deleteAllQueries()
			throws IllegalArgumentException, JSONException {//, MalformedQueryException, QueryEvaluationException, UpdateExecutionException {
		return true;
	}
	
	public boolean deleteQuery(
			String queryID)
			throws IllegalArgumentException, JSONException { //, MalformedQueryException, QueryEvaluationException, UpdateExecutionException {
		return true;
	}
	
	public JSONObject getAvailableQueries() throws JSONException {//, MalformedQueryException, QueryEvaluationException {
		return ReadJsonFile.readFile("getQueries.json");
	}
	
	public JSONObject getAvailableQueryIds() throws JSONException {//MalformedQueryException, QueryEvaluationException{
		 return null;
	}
	
	public JSONObject getAvailableSparqlQueries() throws JSONException {// MalformedQueryException, QueryEvaluationException {
		return null;
	}
	
	public JSONObject saveQuery(
			String name,
			String desc,
			String query,
			String jsonquery,
			String status,
			String type)
			throws IllegalArgumentException, JSONException {//, MalformedQueryException, UpdateExecutionException {
		return ReadJsonFile.readFile("saveQuery.json");
	}
	 
	public JSONObject getQuery(
			String queryID)
			throws IllegalArgumentException, JSONException {//, MalformedQueryException, QueryEvaluationException {
		//return ReadJsonFile.readFile("getQuery.json");
		return new JSONObject();
	}
	
	public boolean updateQuery(
			String queryID,
			String name,
			String desc,
			String query,
			String jsonquery,
			String status,
			String type)
			throws IllegalArgumentException, JSONException{//, MalformedQueryException, UpdateExecutionException, QueryEvaluationException, JSONException {
		return true;
	}
}
