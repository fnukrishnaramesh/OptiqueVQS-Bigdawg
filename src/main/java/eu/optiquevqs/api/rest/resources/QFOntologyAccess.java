package eu.optiquevqs.api.rest.resources;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.semanticweb.owlapi.model.OWLOntologyCreationException;

import eu.optiquevqs.api.rest.resources.impl.QFOntologyAccessImpl;

@Path("JSON/getQFOntologyAccess")
@SuppressWarnings("unchecked")
public class QFOntologyAccess {
	@GET
	@Produces(MediaType.APPLICATION_JSON)  
	public String getQFOntologyAccess(
			@QueryParam("method") String method,
			@QueryParam("params") String ontologyURI) throws OWLOntologyCreationException {
		
		JSONObject jobject=new JSONObject();
		QFOntologyAccessImpl impl=new QFOntologyAccessImpl();

		switch (method){
		  case "getAvailableOntologies":  
		      List<String> ontologyURIs= impl.getAvailableOntologies();
		      jobject.put("result", ontologyURIs);
		        break;
		  case "getLoadedOntologies": 
			//  List<String> ontologyURIs= impl.getLoadedOntologies();
		     // jobject.put("result", ontologyURIs);
		      break;
		  case "clearLoadedOntologies": 
			  //impl.clearLoadedOntologies();
				// jobject.put("result", ontologyURIs);
			      break;
		  case "clearLoadedOntology": 
				//  impl.clearLoadedOntology(ontologyURI);
			     // jobject.put("result", ontologyURIs);
			      break;
		  case "getCoreConcepts": 
				//  JSONObject result=new JSONObject();
			  //result=impl.getCoreConcepts(ontologyURI);
			     // jobject.put("result", result);
			      break;
		  case "loadOntology": 
			  impl.loadOntology(ontologyURI);
		      jobject.put("result", null);
		      break;
		  case "loadOntologyVersion": 
			//  impl.loadOntologyVersion(ontologyURI,ontologyVersionURI);
		    //  jobject.put("result", null);
		      break;
		  case "reLoadOntology": 
				//  impl.reLoadOntology(ontologyURI);
			    //  jobject.put("result", null);
			      break;
		  case "setOntology": 
				//  impl.ontologyURI(ontologyURI);
			    //  jobject.put("result", null);
			      break;
		  case "getConceptFacets": 
				//  JSONObject result=new JSONObject();
			  //result=impl.getConceptFacets(ontologyURI,conceptURI,partialQuery);
			     // jobject.put("result", result);
			      break;
		  case "getNeighbourConcepts": 
				//  JSONObject result=new JSONObject();
			  //result=impl.getNeighbourConcepts(ontologyURI,conceptURI,partialQuery);
			     // jobject.put("result", result);
			      break;
		  case "generateSPARQLQueryFromText": 
				//  JSONObject result=new JSONObject();
			  //result=impl.generateSPARQLQueryFromText(ontologyURIStr,question,runType);
			     // jobject.put("result", result);
			      break;
		  case "getDirectSubclasses": 
				//  JSONObject result=new JSONObject();
			  //result=impl.getConceptFacets(ontologyURI,conceptURI);
			     // jobject.put("result", result);
			      break;
		  case "getAllSubclasses": 
				//  JSONObject result=new JSONObject();
			  //result=impl.getAllSubclasses(ontologyURI,conceptURI);
			     // jobject.put("result", result);
			      break;
		  case "getDirectSuperclasses": 
				//  JSONObject result=new JSONObject();
			  //result=impl.getDirectSuperclasses(ontologyURI,conceptURI);
			     // jobject.put("result", result);
			      break;
		  case "getAllSuperclasses": 
				//  JSONObject result=new JSONObject();
			  //result=impl.getAllSuperclasses(ontologyURI,conceptURI);
			     // jobject.put("result", result);
			      break;
		}		
		if (method.equals("getDirectSubclasses")){
	        JSONParser parser = new JSONParser();

		  try {     
	        	Object  obj = parser.parse(new FileReader("E:\\UiO\\OptiqueVQS\\OptiqueVQS-Test\\JSON-data\\getDirectSubclasses.json"));

	             jobject =  (JSONObject) obj;
	                   } catch (FileNotFoundException e) {
	            e.printStackTrace();
	        } catch (IOException e) {
	            e.printStackTrace();
	        } catch (ParseException e) {
	            e.printStackTrace();
	        }
	        
  }
	  else if (method.equals("getNeighbourConcepts")){
	        JSONParser parser = new JSONParser();

		  try {     
	        	Object  obj = parser.parse(new FileReader("E:\\UiO\\OptiqueVQS\\OptiqueVQS-Test\\JSON-data\\getNeighbourConcepts.json"));

	             jobject =  (JSONObject) obj;
	                   } catch (FileNotFoundException e) {
	            e.printStackTrace();
	        } catch (IOException e) {
	            e.printStackTrace();
	        } catch (ParseException e) {
	            e.printStackTrace();
	        }
	        
  }
		jobject.put("id", "1");
        jobject.put("jsonrpc", "2.0");	
	  return jobject.toString();   
  }
}
