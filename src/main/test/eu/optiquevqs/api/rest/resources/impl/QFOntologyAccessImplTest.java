package eu.optiquevqs.api.rest.resources.impl;

import static org.junit.Assert.*;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;

import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import uio.ifi.ontology.toolkit.projection.controller.triplestore.RDFoxSessionManager;
import uio.ifi.ontology.toolkit.projection.view.OptiqueVQSAPI;

/**
 * Some integration tests, to see if the calls to ontology-services-toolit behave as expected
 * @author dag
 *
 */
public class QFOntologyAccessImplTest {

	RDFoxSessionManager session = new RDFoxSessionManager();


	@Test
	public void loadNPDOntology() throws FileNotFoundException {
		OptiqueVQSAPI vqs = new OptiqueVQSAPI(session);
		String onto_uri = "https://gitlab.com/logid/npd-factpages/raw/develop/ontology/npd-main-complete.rdf.owl";
		JSONObject json_concepts = testOntologyFromURI(vqs, onto_uri);
		JSONObject concepts = json_concepts.getJSONObject("result");
		JSONArray options = concepts.getJSONArray("options");
		vqs.clearAllSessions();
	}



	@Test
	public void loadSleggeOntology() throws FileNotFoundException {
		OptiqueVQSAPI vqs = new OptiqueVQSAPI(session);
		String onto_uri = "http://slegger.gitlab.io/slegge-obda/ontology/subsurface-exploration.ttl";
		String pw_uri_str = "http://slegger.gitlab.io/slegge-obda/ontology/subsurface-exploration#ProductionWellbore";
		JSONObject json_concepts = testOntologyFromURI(vqs, onto_uri);
		JSONObject concepts = json_concepts.getJSONObject("result");
		JSONArray options = concepts.getJSONArray("options");
		assertTrue(options.length() == 149);
		boolean found_prodwell = false;
		for(int i = 0; i < options.length(); i++){
			JSONObject option = options.getJSONObject(i);
			String name = option.getString("name");
			String ns = option.getString("ns");
			String id = option.getString("id");
			String prop_label = option.getString("label");
			if(id.equals(pw_uri_str))
				found_prodwell = true;
		}
		assertTrue(found_prodwell);
		String concepts_string = json_concepts.toString();
		assertTrue(concepts_string.length() > 100);
		JSONObject facets = vqs.getConceptFacets(onto_uri, pw_uri_str);
		JSONObject facets_result = facets.getJSONObject("result");
		JSONArray facets_fields = facets_result.getJSONArray("fields");
		assertTrue(facets_fields.length() > 1);
		boolean found_name_facet = false;
		for(int i = 0; i < facets_fields.length(); i++){
			JSONObject facet0 = facets_fields.getJSONObject(i);
			String facet_id = facet0.getString("id");
			String facet_ns = facet0.getString("ns");
			String facet_name = facet0.getString("name");
			String facet_intype = facet0.getString("inputType");
			String facet_type = facet0.getString("type");
			//JSONArray facet_params = facet0.getJSONArray("params");
			String facet_label = facet0.getString("label");
			if(facet_name.equals("name"))
				found_name_facet = true;
		}
		assertTrue(found_name_facet);
		JSONObject objprops = vqs.getNeighbourConcepts(onto_uri, pw_uri_str);
		JSONObject neighbourlist = objprops.getJSONObject("result");
		JSONArray jsonarr = neighbourlist.getJSONArray("options");
		vqs.clearAllSessions();
	}

	private JSONObject testOntologyFromURI(OptiqueVQSAPI vqs, String onto_uri) throws FileNotFoundException {
		long startTime = System.nanoTime();
		vqs.clearAllSessions();
		vqs.loadOntologySession(onto_uri);
		JSONObject jsononst = vqs.getOntologies();
		long endTime = System.nanoTime();
		System.out.println("Loading ontology: " + (endTime - startTime) / 1e9 + " secs");
		JSONArray onts = jsononst.getJSONArray("result");
		assertTrue(onts.length() >= 1);
		String onto_uri2 = onts.getString(0);
		assertTrue(onto_uri2.equals(onto_uri));
		JSONObject json_concepts = vqs.getCoreConcepts(onto_uri);
		JSONObject concepts = json_concepts.getJSONObject("result");
		JSONArray options = concepts.getJSONArray("options");
		JSONObject option = options.getJSONObject(1);
		String name = option.getString("name");
		String ns = option.getString("ns");
		String id = option.getString("id");
		String prop_label = option.getString("label");

		String concepts_string = json_concepts.toString();
		assertTrue(concepts_string.length() > 100);
		return json_concepts;
	}
}
