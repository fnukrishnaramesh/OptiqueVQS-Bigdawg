/**
 * 
 */
package eu.optiquevqs.api.rest.resources;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.eclipse.rdf4j.model.Value;
import org.eclipse.rdf4j.model.impl.SimpleIRI;
import org.eclipse.rdf4j.model.impl.SimpleValueFactory;
import org.eclipse.rdf4j.model.impl.URIImpl;
import org.eclipse.rdf4j.query.BindingSet;
import org.eclipse.rdf4j.query.impl.ListBindingSet;
import org.eclipse.rdf4j.sail.nativerdf.model.NativeIRI;
import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.Test;

/**
 * @author Dag Hovland
 *
 */
public class SparqlEndpointTest {


	/**
	 * Test method for {@link eu.optiquevqs.api.rest.resources.SparqlEndpoint#bindingsToJSON(java.util.List)}.
	 */
	@Test
	public void testEmptyBindingsToJSON() {
		ArrayList<BindingSet> results = new ArrayList<BindingSet>();
		JSONObject val = SparqlEndpoint.bindingsToJSON(results);
		assertTrue(val != null);
		JSONObject head = val.getJSONObject("head");
		JSONObject res = val.getJSONObject("results");
		JSONArray bindings = res.getJSONArray("bindings");
		assertTrue(bindings.length() == 0);
	}


	/**
	 * Test method for {@link eu.optiquevqs.api.rest.resources.SparqlEndpoint#bindingsToJSON(java.util.List)}.
	 */
	@Test
	public void testSingletonBindingsToJSON() {
		SimpleValueFactory svf = SimpleValueFactory.getInstance();
		ArrayList<BindingSet> bindings = new ArrayList<BindingSet>();
		String column_name = "Class_c1";
		List<String> names = new ArrayList<String>(
				Arrays.asList(column_name));		

		String iri_str = "http://test/iri/1";
		BindingSet row1 = new ListBindingSet(names, svf.createIRI(iri_str));

		bindings.add(row1);
		JSONObject val = SparqlEndpoint.bindingsToJSON(bindings);

		assertTrue(val != null);
		JSONObject results = val.getJSONObject("results");
		JSONArray binds = results.getJSONArray("bindings");
		assertTrue(binds.length() == 1);
		JSONObject json_row = binds.getJSONObject(0);

		JSONObject head = val.getJSONObject("head");
		JSONArray vars = head.getJSONArray("vars");
		assertTrue(vars.length() == 1);
		String var_name = vars.getString(0);
		assertTrue(var_name.equals(column_name));

		JSONObject iri1_json = json_row.getJSONObject(var_name);
		String iri_str2 = iri1_json.getString("value");
		assertTrue(iri_str.equals(iri_str2));

		String json_str = val.toString();
		assertTrue(json_str.length() > 2);
	}

	/**
	 * Test method for {@link eu.optiquevqs.api.rest.resources.SparqlEndpoint#bindingsToJSON(java.util.List)}.
	 */
	@Test
	public void testMoreBindingsToJSON() {
		SimpleValueFactory svf = SimpleValueFactory.getInstance();
		ArrayList<BindingSet> bindings = new ArrayList<BindingSet>();
		List<String> names = new ArrayList<String>(
				Arrays.asList("Class_c1", "Atribute_a1"));		
		BindingSet row = new ListBindingSet(names, svf.createIRI("http://test/iri/1"), svf.createLiteral("one"));
		bindings.add(row);
		row = new ListBindingSet(names, svf.createIRI("http://test/iri/2"), svf.createLiteral("\"two\"^^<owl:String>"));
		bindings.add(row);


		JSONObject val = SparqlEndpoint.bindingsToJSON(bindings);

		assertTrue(val != null);
		JSONObject results = val.getJSONObject("results");
		JSONArray binds = results.getJSONArray("bindings");
		assertTrue(binds.length() == 2);

		JSONObject json_row1 = binds.getJSONObject(0);
		JSONObject json_row2 = binds.getJSONObject(1);

		JSONObject head = val.getJSONObject("head");
		JSONArray vars = head.getJSONArray("vars");
		assertTrue(vars.length() == 2);
		for(int i = 0; i <= 1; i++){
			String var_name = vars.getString(i);
			assertTrue(var_name.equals(names.get(i)));
			JSONObject iri1_json = json_row1.getJSONObject(names.get(i));
			JSONObject iri2_json = json_row2.getJSONObject(names.get(i));
			String iri_str1 = iri1_json.getString("value");
			String iri_str2 = iri2_json.getString("value");
			//assertTrue(iri_str.equals(iri_str2));
	
		}
		
		String json_str = val.toString();
		assertTrue(json_str.length() > 10);

	}
}
