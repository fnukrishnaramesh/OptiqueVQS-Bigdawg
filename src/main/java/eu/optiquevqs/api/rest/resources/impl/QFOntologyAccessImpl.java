package eu.optiquevqs.api.rest.resources.impl;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.semanticweb.HermiT.Configuration;
import org.semanticweb.HermiT.Reasoner;
import org.semanticweb.owlapi.apibinding.OWLManager;
import org.semanticweb.owlapi.model.IRI;
import org.semanticweb.owlapi.model.OWLOntology;
import org.semanticweb.owlapi.model.OWLOntologyCreationException;
import org.semanticweb.owlapi.model.OWLOntologyManager;
import org.semanticweb.owlapi.reasoner.ConsoleProgressMonitor;
import org.semanticweb.owlapi.reasoner.InferenceType;
import org.semanticweb.owlapi.reasoner.OWLReasoner;
import org.semanticweb.owlapi.reasoner.OWLReasonerConfiguration;
import org.semanticweb.owlapi.reasoner.OWLReasonerFactory;
import org.semanticweb.owlapi.reasoner.SimpleConfiguration;
import org.semanticweb.owlapi.reasoner.structural.StructuralReasonerFactory;

public class QFOntologyAccessImpl {
	OWLReasoner reasoner;
	OWLOntology ontology;
	
	
	public List<String> getAvailableOntologies() throws OWLOntologyCreationException{
		List<String> ontologyURIs = new ArrayList<String>();
		//OWL Manager
        OWLOntologyManager manager = OWLManager.createOWLOntologyManager();
		File file = new File("ontologyExport_ (1).rdf");
		
        // Now load the local copy
        OWLOntology ont = manager.loadOntologyFromOntologyDocument(file);
        System.out.println("Loaded ontology: " + ont);
        
        
        // Obtain the location where an ontology was loaded from
        IRI documentIRI = manager.getOntologyDocumentIRI(ont);
        
        System.out.println("    from: " + documentIRI); 
                
        ontologyURIs.add(documentIRI.toString());
        
       return ontologyURIs;
	}
	
	public void loadOntology(String ontologyURIStr) throws IllegalArgumentException,OWLOntologyCreationException{
		/*************************************/
        OWLOntologyManager manager = OWLManager.createOWLOntologyManager();
		File file = new File("ontologyExport_ (1).rdf");

        // Now load the local copy/
        OWLOntology ont = manager.loadOntologyFromOntologyDocument(file);
		
		/*************************************/
	      
        OWLReasonerFactory reasonerFactory = new StructuralReasonerFactory();
        ConsoleProgressMonitor progressMonitor = new ConsoleProgressMonitor();
        OWLReasonerConfiguration config = new SimpleConfiguration(progressMonitor);
        reasoner = reasonerFactory.createReasoner(ont, config);

        reasoner.precomputeInferences();
        
        int unsat = reasoner.getUnsatisfiableClasses().getEntitiesMinusBottom().size();
		System.out.println("Ontology loaded: " + ontologyURIStr + ", axioms: " + ont.getAxiomCount() + ", unsat classes: " + unsat);
    
        }
	
	public void setOWLOntology(OWLOntology ontology){
    	this.ontology = ontology;

    	Configuration conf = new Configuration();
		conf.ignoreUnsupportedDatatypes=true;	
		
		reasoner = new Reasoner(conf, ontology);
		reasoner.precomputeInferences(InferenceType.CLASS_HIERARCHY);
    	
    }
		
	
	public static void main(String[] args) throws OWLOntologyCreationException{
		QFOntologyAccessImpl q= new QFOntologyAccessImpl();
		q.getAvailableOntologies();
       		
        q.loadOntology("file:/ontologyExport_%20(1).rdf");
	}
}
