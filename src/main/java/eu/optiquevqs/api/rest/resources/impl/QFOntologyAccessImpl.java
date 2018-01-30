package eu.optiquevqs.api.rest.resources.impl;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;

import org.json.JSONException;
import org.json.JSONObject;
import org.eclipse.rdf4j.*;
import org.eclipse.rdf4j.query.MalformedQueryException;
import org.eclipse.rdf4j.query.QueryEvaluationException;
import org.eclipse.rdf4j.query.UpdateExecutionException;
import org.semanticweb.owlapi.model.OWLOntologyCreationException;

import uio.ifi.ontology.toolkit.projection.controller.triplestore.RDFoxSessionManager;
import uio.ifi.ontology.toolkit.projection.view.OptiqueVQSAPI;
import uk.ac.ox.cs.JRDFox.JRDFoxException;

public class QFOntologyAccessImpl {
	
	private String defaultURI;
	OptiqueVQSAPI vqs;
	
	public QFOntologyAccessImpl(RDFoxSessionManager session){
		vqs = new OptiqueVQSAPI(session);
	}

	public void loadOntology(String ontologyURIStr) throws IllegalArgumentException{		
		
		
		defaultURI = ontologyURIStr;
		vqs.loadOntologySession(ontologyURIStr);
	}
	
	//TODO
	public void loadOntologyVersion(String ontologyURIStr, String ontologyURIVersionStr)
			throws IllegalArgumentException, OWLOntologyCreationException,
			UnsupportedEncodingException, JSONException {
	}
	
	//TODO
    public void reLoadOntology(String ontologyURIStr) throws IllegalArgumentException,OWLOntologyCreationException, UnsupportedEncodingException, JSONException{
    }
    
    
    //TODO
    public void setOntology(String ontologyIRI) throws IllegalArgumentException, UnsupportedEncodingException, JSONException, OWLOntologyCreationException{
    }
	
	public JSONObject getAvailableOntologies() throws FileNotFoundException, JRDFoxException{
		//return vqs.getOntologies(); //return loaded ontologies
		return ReadJsonFile.readFile("getAvailableOntologies.json");

	}
	
	public JSONObject getLoadedOntologies() throws FileNotFoundException, JRDFoxException{
		return null;
	}
	
	public JSONObject getCoreConcepts() throws JSONException{
		return getCoreConcepts(defaultURI);
	}
	
	public JSONObject getCoreConcepts(String ontologyURIStr) throws JSONException{
		return vqs.getCoreConcepts(ontologyURIStr);
	}
	
	public JSONObject getConceptFacets(String conceptURI) throws IllegalArgumentException,JSONException{
		return getConceptFacets(defaultURI, conceptURI, "");
		//return vqs.getConceptFacets(defaultURI, conceptURI);
	}
	
	public JSONObject getConceptFacets(String ontologyURIStr, String conceptURI, String partialQuery) throws IllegalArgumentException,JSONException{
		//return ReadJsonFile.readFile("getConceptFacets.json");
		return vqs.getConceptFacets(ontologyURIStr, conceptURI);
		
	}
	
	public JSONObject getNeighbourConcepts(
			String ontologyURIStr, String conceptURI, String partialQuery) throws IllegalArgumentException,JSONException{
		return getNeighbourConcepts(ontologyURIStr, conceptURI, partialQuery, true);
		//return vqs.getNeighbourConcepts(ontologyURIStr, conceptURI);
	}	
	
	public JSONObject getNeighbourConcepts(String conceptURI) throws IllegalArgumentException,JSONException{
		return getNeighbourConcepts(defaultURI, conceptURI, "", true);
		//return vqs.getNeighbourConcepts(defaultURI, conceptURI);
	}
	
	private JSONObject getNeighbourConcepts(String ontologyURIStr, String conceptURI, String partialQuery, boolean includeInverses) throws IllegalArgumentException,JSONException{
		//return ReadJsonFile.readFile("getNeighbourConcepts.json");
		return vqs.getNeighbourConcepts(ontologyURIStr, conceptURI);
		
	}
	
	public JSONObject generateSPARQLQueryFromText(
			String ontologyURIStr,
			String question,
			String runType)
			throws IllegalArgumentException, JSONException, MalformedQueryException, QueryEvaluationException,
			UpdateExecutionException, IOException {
		return null;

	}
	
	public JSONObject getDirectSubclasses(String conceptURI)
			throws IllegalArgumentException, JSONException {
		
		return getDirectSubclasses(defaultURI, conceptURI);
		
	}
	
	public JSONObject getDirectSubclasses(String ontologyURIStr, String conceptURI)
			throws IllegalArgumentException, JSONException {
		//return ReadJsonFile.readFile("getDirectSubclasses.json");
		return vqs.getDirectSubClasses(ontologyURIStr, conceptURI);
	}
	
	public JSONObject getAllSubclasses(String conceptURI)
			throws IllegalArgumentException, JSONException {
		
		return getAllSubclasses(defaultURI, conceptURI);
		
	}
	
	public JSONObject getAllSubclasses(String ontologyURIStr, String conceptURI)
			throws IllegalArgumentException, JSONException {
		return vqs.getDirectSubClasses(ontologyURIStr, conceptURI);
	}
	
	public JSONObject getDirectSuperclasses(String conceptURI)
			throws IllegalArgumentException, JSONException {
		
		return getDirectSuperclasses(defaultURI, conceptURI);
	}
	
	public JSONObject getDirectSuperclasses(String ontologyURIStr, String conceptURI)
			throws IllegalArgumentException, JSONException {
		return vqs.getDirectSuperClasses(ontologyURIStr, conceptURI);
	}
	
	public JSONObject getAllSuperclasses(String conceptURI)
			throws IllegalArgumentException, JSONException {
		
		return getAllSuperclasses(defaultURI, conceptURI);
	}
	
	public JSONObject getAllSuperclasses(String ontologyURIStr, String conceptURI)
			throws IllegalArgumentException, JSONException {
		return vqs.getDirectSuperClasses(ontologyURIStr, conceptURI);
	}
	public void clearLoadedOntologies(){
		//vqs.clearAllSessions();
	}
	
	public void clearLoadedOntology(String ontologyURIStr){
		//vqs.clearOntologySession(ontologyURIStr);
	}
    
}
