package eu.optiquevqs.test;

import org.eclipse.rdf4j.RDF4JException;

/*******************************************************************************
 * Copyright (c) 2016, 2017 Eclipse RDF4J contributors.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Distribution License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/org/documents/edl-v10.php.
 *******************************************************************************/

import org.eclipse.rdf4j.model.Model;
import org.eclipse.rdf4j.model.Statement;
import org.eclipse.rdf4j.repository.Repository;
import org.eclipse.rdf4j.repository.RepositoryConnection;
import org.eclipse.rdf4j.repository.RepositoryResult;
import org.eclipse.rdf4j.repository.sail.SailRepository;
import org.eclipse.rdf4j.rio.RDFFormat;
import org.eclipse.rdf4j.rio.Rio;
import org.eclipse.rdf4j.sail.memory.MemoryStore;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;

/**
 * RDF Tutorial example 14: Adding an RDF file directly to the database
 *
 * @author Jeen Broekstra
 */
public class RDFToDB {

	public static void main(String[] args)
			throws IOException
	{
		// Create a new Repository.
		Repository db = new SailRepository(new MemoryStore());
		db.initialize();

		// Open a connection to the database
			File file = new File("example.owl");
			String baseURI = "http://example.org/example/local";

			try {
				   RepositoryConnection con = db.getConnection();
				   try {
				      con.add(file, baseURI, RDFFormat.RDFXML);
				     
				      try (RepositoryResult<Statement> result = con.getStatements(null, null, null);) {
							while (result.hasNext()) {
								Statement st = result.next();
								System.out.println("db contains: " + st);
							}
						}
					}
					finally {
						// before our program exits, make sure the database is properly shut down.
						 con.close();
							db.shutDown();

					}
				   
				   
				}
			catch (RDF4JException e) {
				   // handle exception
				}
				catch (java.io.IOException e) {
				   // handle io exception
				}
			
			// let's check that our data is actually in the database
			
	}
}