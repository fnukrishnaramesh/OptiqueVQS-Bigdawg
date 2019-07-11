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
		JSONObject json_concepts = testOntologyFromURI(vqs, onto_uri);
		JSONObject concepts = json_concepts.getJSONObject("result");
		JSONArray options = concepts.getJSONArray("options");
		assertTrue(options.length() == 149);
		JSONObject option = options.getJSONObject(1);
		String name = option.getString("name");
		String ns = option.getString("ns");
		String id = option.getString("id");
		String prop_label = option.getString("label");
		String concepts_string = json_concepts.toString();
		assertTrue(concepts_string.length() > 100);
		vqs.clearAllSessions();
	}

	private JSONObject testOntologyFromURI(OptiqueVQSAPI vqs, String onto_uri) throws FileNotFoundException {
		vqs.clearAllSessions();
		vqs.loadOntologySession(onto_uri);
		JSONObject jsononst = vqs.getOntologies();
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
