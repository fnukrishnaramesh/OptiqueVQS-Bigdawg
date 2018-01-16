package eu.optiquevqs.api.rest.resources;

import java.io.FileNotFoundException;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.json.JSONObject;
import org.semanticweb.owlapi.model.OWLOntologyCreationException;

import eu.optiquevqs.api.rest.resources.impl.QFQueryCatalogAccessImpl;


@Path("JSON/getQFQueryCatalogAccess")
public class QFQueryCatalogAccess {
	@GET
	@Produces(MediaType.APPLICATION_JSON)  
	public String getQFQueryCatalogAccess(
			@QueryParam("method") String method,
			@QueryParam("qId") String queryID) throws OWLOntologyCreationException, FileNotFoundException {
				
		JSONObject jobject=new JSONObject(); 
		QFQueryCatalogAccessImpl impl=new QFQueryCatalogAccessImpl();	
		switch (method){
		//Delete all available queries.
		  case "deleteAllQueries": 
			  impl.deleteAllQueries();
		  break;
		  
		//Deletes the given query
		  case "deleteQuery":  
			  impl.deleteQuery(queryID);
		  break;
		  
		//Retrieves the set of available queries as JSON objects
		  case "getAvailableQueries":  
			  jobject = impl.getAvailableQueries();
		  break;
		  
		//Retrieves the set of available query IDs.
		  case "getAvailableQueryIds":  
			  jobject = impl.getAvailableQueryIds();
		  break;
		  
		//Retrieves the set of available sparql queries as JSON objects.
		  case "getAvailableSparqlQueries":  
			  jobject = impl.getAvailableSparqlQueries();
		  break;
		  
		//Retrieves the data associated with the given query identifier
		  case "getQuery":  
			  jobject= impl.getQuery(queryID);
		  break;
		}
		return jobject.toString();   
	  }
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON) 
	@Produces(MediaType.APPLICATION_JSON)
	public void postQFQueryCatalogAccess(
			@QueryParam("method") String method,
			@QueryParam("qname") String qname,
			@QueryParam("desc") String desc,
			@QueryParam("query") String query,
			@QueryParam("jsonquery") String jsonquery,
			@QueryParam("status") String status,
			@QueryParam("type") String type,
			@QueryParam("qId") String queryID) throws OWLOntologyCreationException, FileNotFoundException {
		
		QFQueryCatalogAccessImpl impl=new QFQueryCatalogAccessImpl();
		switch (method){
		//Saves the data associated with a query and returns the given query identifier
		  case "saveQuery":  
			  impl.saveQuery(qname, desc, query, jsonquery, status, type);
		  break;
			  
		//Updates an existent query
		  case "updateQuery":  
			  impl.updateQuery(queryID, qname, desc, query, jsonquery, status, type);
		  break;
		}
	}		
}
