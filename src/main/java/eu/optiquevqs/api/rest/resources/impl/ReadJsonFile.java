package eu.optiquevqs.api.rest.resources.impl;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;

import org.json.JSONObject;

public class ReadJsonFile {

    public static JSONObject readFile(String filename) {
    	String result = "";
        try {
        	InputStream in = ReadJsonFile.class.getResourceAsStream(filename); 
        	BufferedReader br = new BufferedReader(new InputStreamReader(in));
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