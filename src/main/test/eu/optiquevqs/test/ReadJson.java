package eu.optiquevqs.test;

import java.io.*;
import org.json.*;

import eu.optiquevqs.api.rest.resources.impl.QFOntologyAccessImpl;

public class ReadJson {

    public static void main(String[] args) {
    	JSONObject jobj = readFile("E:\\UiO\\OptiqueVQS\\OptiqueVQS-Test\\JSON-data\\getNeighbourConcepts.json");
       // JSONObject jobj = new JSONObject(jsonData);
        /*JSONArray jarr = new JSONArray(jobj.getJSONArray("keywords").toString());
        System.out.println("Name: " + jobj.getString("name"));
        for(int i = 0; i < jarr.length(); i++) {
            System.out.println("Keyword: " + jarr.getString(i));
        }*/
      //  System.out.println(jobj);
        System.out.println(QFOntologyAccessImpl.class.getResource("../../../../json/inputfiles/getQuery.json").getPath());
    }


    public static JSONObject readFile(String filename) {
    	String result = "";
        try {
            BufferedReader br = new BufferedReader(new FileReader(filename));
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();
            while (line != null) {
                sb.append(line);
                line = br.readLine();
            }
            result = sb.toString();
            br.close();
        } catch(Exception e) {
            e.printStackTrace();
        }
        JSONObject jobj = new JSONObject(result);
        return jobj;
    }

}