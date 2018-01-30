/*******************************************************************************
 * Copyright 2017 by the Department of Informatics (University of Oslo) 
 *******************************************************************************/
package eu.optiquevqs.api.rest.resources;

import java.io.IOException;

import javax.servlet.ServletContext;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import org.json.JSONException;
import org.json.JSONObject;
import org.semanticweb.owlapi.model.OWLOntologyCreationException;

import eu.optiquevqs.api.rest.resources.impl.QFOntologyAccessImpl;
import eu.optiquevqs.server.RDFoxSessionContextListener;
import uio.ifi.ontology.toolkit.projection.controller.triplestore.RDFoxSessionManager;
import uk.ac.ox.cs.JRDFox.JRDFoxException;






@Path("JSON/getQFOntologyAccess")
public class QFOntologyAccess {
	
	//We need to define a context to keep the sessions. For each of the method we should give the session as input.
	@Context
	ServletContext context;
	
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)  
	public String getQFOntologyAccess(
			@QueryParam("method") String method,
			@QueryParam("ontologyURI") String ontologyURI,
			@QueryParam("ontologyVersionURI") String ontologyVersionURI,
			@QueryParam("conceptURI") String conceptURI,
			@QueryParam("partialQuery") String partialQuery,
			@QueryParam("question") String question,
			@QueryParam("runType") String runType) 
					throws IOException, JSONException, JRDFoxException, IllegalArgumentException, OWLOntologyCreationException {
		
		
		//Get context
		RDFoxSessionManager session = (RDFoxSessionManager) context
				.getAttribute(RDFoxSessionContextListener.RDFOX_SESSION);
		
		JSONObject jobject=new JSONObject();
		
		
		QFOntologyAccessImpl impl = new QFOntologyAccessImpl(session);
		
		
		switch (method){
		//Gets the list of identifiers of the available ontologies in the triple store
		  case "getAvailableOntologies":  
			  jobject = impl.getAvailableOntologies();
		      break;
		      
		//Gets the list of identifiers of the loaded ontologies in the VQS backend
		  case "getLoadedOntologies": 
			  jobject = impl.getLoadedOntologies();
		      break;
		      
		//Removes the loaded ontologies in the VQS backend
		  case "clearLoadedOntologies": 
			  impl.clearLoadedOntologies();
			  break;
			  
		//Removes the loaded ontologies in the VQS backend
		  case "clearLoadedOntology": 
			  impl.clearLoadedOntology(ontologyURI);
			  break;
			  
		//Gets as JSONObjects the core concepts of the ontology to be listed in the QF component
		  case "getCoreConcepts": 
			  if(ontologyURI != null && !ontologyURI.isEmpty())
				  jobject=impl.getCoreConcepts(ontologyURI);
			  else
				  jobject=impl.getCoreConcepts();
		      break;
			  
		//Given an URI ontology identifier loads a working ontology to extract the JSONObjects	  
		  case "loadOntology": 
			  impl.loadOntology(ontologyURI);
		      break;
		      
		//Given an URI ontology identifier and version loads a working ontology to extract the JSONObjects      
		  case "loadOntologyVersion": 
			  impl.loadOntologyVersion(ontologyURI, ontologyVersionURI);
		      break;
		      
		//Given an URI ontology identifier re-loads a working ontology to extract the JSONObjects
		  case "reLoadOntology": 
			  impl.reLoadOntology(ontologyURI);
 		      break;
 		      
 		//Given an URI ontology identifier set this ontology as a working ontology to extract the JSONObjects
		  case "setOntology": 
			  impl.setOntology(ontologyURI);
		      break;
		      
		//Given an ontology and a concept URI/Id, retrieves as JSONObjects the associated facets with the concept
		  case "getConceptFacets": 
			  if(ontologyURI != null && !ontologyURI.isEmpty())
				  jobject=impl.getConceptFacets(ontologyURI, conceptURI, partialQuery);
			  else
				  jobject=impl.getConceptFacets(conceptURI);
			  break;
			  
		//Given an ontology and a concept URI/Id, retrieves as JSONObjects the associated neighbours
		  case "getNeighbourConcepts":
			  if(ontologyURI != null && !ontologyURI.isEmpty())
				  jobject = impl.getNeighbourConcepts(ontologyURI, conceptURI, partialQuery);
			  else
				  jobject = impl.getNeighbourConcepts(conceptURI);
		      break;
		      
		//Generates an SPARQL query given a sentence in natural language
		  case "generateSPARQLQueryFromText": 
			  jobject = impl.generateSPARQLQueryFromText(ontologyURI, question, runType);
			  break;
			  
		//Given an ontology and a concept URI/Id, retrieves the direct subclasses
		  case "getDirectSubclasses":
			  if(ontologyURI != null && !ontologyURI.isEmpty())
				  jobject = impl.getDirectSubclasses(ontologyURI, conceptURI);
			  else
				  jobject = impl.getDirectSubclasses(conceptURI);
			  break;
			  
		//Given an ontology and a concept URI/Id, retrieves all the subclasses
		  case "getAllSubclasses":
			  if(ontologyURI != null && !ontologyURI.isEmpty())
				  jobject = impl.getAllSubclasses(ontologyURI, conceptURI);
			  else
				  jobject = impl.getAllSubclasses(conceptURI);
		      break;
		      
		//Given an ontology and a concept URI/Id, retrieves the direct superclasses
		  case "getDirectSuperclasses": 
			  if(ontologyURI != null && !ontologyURI.isEmpty())
				  jobject = impl.getDirectSuperclasses(ontologyURI, conceptURI);
			  else
				  jobject = impl.getDirectSuperclasses(conceptURI);
			  break;
			  
		//Given an ontology and a concept URI/Id, retrieves all the superclasses
		  case "getAllSuperclasses": 
			  if(ontologyURI != null && !ontologyURI.isEmpty())
				  jobject = impl.getAllSuperclasses(ontologyURI, conceptURI);
			  else
				  jobject = impl.getAllSuperclasses(conceptURI);
		      break;
		}
		
		jobject.put("id", "1");
        jobject.put("jsonrpc", "2.0");	
	  return jobject.toString();   
  }
}
