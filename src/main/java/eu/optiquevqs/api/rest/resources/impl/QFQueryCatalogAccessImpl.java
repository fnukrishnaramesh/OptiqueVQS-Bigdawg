package eu.optiquevqs.api.rest.resources.impl;

import org.json.JSONException;
import org.json.JSONObject;
import org.openrdf.query.MalformedQueryException;
import org.openrdf.query.QueryEvaluationException;
import org.openrdf.query.UpdateExecutionException;

public class QFQueryCatalogAccessImpl {
	
	public boolean deleteAllQueries()
			throws IllegalArgumentException, JSONException, MalformedQueryException, QueryEvaluationException, UpdateExecutionException {
		return true;
	}
	
	public boolean deleteQuery(
			String queryID)
			throws IllegalArgumentException, JSONException, MalformedQueryException, QueryEvaluationException, UpdateExecutionException {
		return true;
	}
	
	public JSONObject getAvailableQueries() throws JSONException, MalformedQueryException, QueryEvaluationException {
		return ReadJsonFile.readFile(QFQueryCatalogAccessImpl.class.getResource("../../../../json/inputfiles/getQueries.json").getPath());
	}
	
	public JSONObject getAvailableQueryIds() throws MalformedQueryException, QueryEvaluationException{
		 return null;
	}
	
	public JSONObject getAvailableSparqlQueries() throws JSONException, MalformedQueryException, QueryEvaluationException {
		return null;
	}
	
	public JSONObject saveQuery(
			String name,
			String desc,
			String query,
			String jsonquery,
			String status,
			String type)
			throws IllegalArgumentException, MalformedQueryException, UpdateExecutionException {
		return ReadJsonFile.readFile(QFQueryCatalogAccessImpl.class.getResource("../../../../json/inputfiles/saveQuery.json").getPath());
	}
	 
	public JSONObject getQuery(
			String queryID)
			throws IllegalArgumentException, JSONException, MalformedQueryException, QueryEvaluationException {
		return ReadJsonFile.readFile(QFQueryCatalogAccessImpl.class.getResource("../../../../json/inputfiles/getQuery.json").getPath());
	}
	
	public boolean updateQuery(
			String queryID,
			String name,
			String desc,
			String query,
			String jsonquery,
			String status,
			String type)
			throws IllegalArgumentException, MalformedQueryException, UpdateExecutionException, QueryEvaluationException, JSONException {
		return true;
	}
}
