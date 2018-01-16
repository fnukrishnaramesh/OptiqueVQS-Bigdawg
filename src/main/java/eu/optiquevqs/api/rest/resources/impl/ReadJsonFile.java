package eu.optiquevqs.api.rest.resources.impl;

import java.io.*;
import org.json.*;

public class ReadJsonFile {

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