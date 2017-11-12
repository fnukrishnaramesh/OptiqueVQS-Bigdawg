package eu.optiquevqs.api.rest.resources.impl;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import org.json.JSONException;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.openrdf.query.MalformedQueryException;
import org.openrdf.query.QueryEvaluationException;

public class QFQueryCatalogAccessImpl {
	
	public JSONObject getQuery(
			String queryID)
			throws IllegalArgumentException, JSONException, MalformedQueryException, QueryEvaluationException {
		
		JSONObject jobject = new JSONObject();
		JSONParser parser = new JSONParser();
		try {
			Object  obj = parser.parse(new FileReader("getQuery.json"));

	        jobject = (JSONObject) obj;
	                   } catch (FileNotFoundException e) {
	            e.printStackTrace();
	        } catch (IOException e) {
	            e.printStackTrace();
	        } catch (ParseException e) {
	            e.printStackTrace();
	        }
		return jobject;
	        }
	
	public static void main(String[] args){
		QFQueryCatalogAccessImpl a = new QFQueryCatalogAccessImpl();
		System.out.println(a.getQuery(""));
	}
}
