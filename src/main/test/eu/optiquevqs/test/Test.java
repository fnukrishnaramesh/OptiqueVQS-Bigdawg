package eu.optiquevqs.test;


/*******************************************************************************
 * Copyright 2017 by the Department of Informatics (University of Oslo)
 * 
 *    This file is part of the Ontology Services Toolkit 
 *
 *******************************************************************************/

import java.io.FileNotFoundException;

import org.semanticweb.owlapi.apibinding.OWLManager;
import org.semanticweb.owlapi.model.IRI;
import org.semanticweb.owlapi.model.OWLOntologyCreationException;
import org.semanticweb.owlapi.model.OWLOntologyManager;

import uio.ifi.ontology.toolkit.projection.controller.triplestore.RDFoxProjectionManager;
import uio.ifi.ontology.toolkit.projection.view.OptiqueVQSAPI;
//import uk.ac.ox.cs.JRDFox.JRDFStoreException;

/**
 *
 * @author ernesto
 * Created on 14 Nov 2017
 *
 */
public class Test {
	
	public static void main (String args[]){
		
		
		try {
			
			//String onto_url = "file:E:/Uio/example.owl";
			String onto_url = "http://dbpedia.org";


			//String onto_url = "file:E:/ontologyExport_ (1).rdf";
			
			
			OWLOntologyManager manager = OWLManager.createConcurrentOWLOntologyManager();
			
			//new RDFoxProjectionManager(manager.loadOntology(IRI.create(onto_url)), true, true);	
			
			OptiqueVQSAPI vqs = new OptiqueVQSAPI();

			vqs.loadOntologySession(onto_url);

			System.out.println("Loaded ontos: \n "+ vqs.getOntologies());
			
			//System.out.println("Core: \n "+ vqs.getCoreConcepts(onto_url).toString(1));
			System.out.println("Core: \n "+ vqs.getCoreConcepts(onto_url).toString(1));
			//vqs.getNeighbourConcepts(onto_url, "");
			
			
		} 
		catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
		
	}

}
