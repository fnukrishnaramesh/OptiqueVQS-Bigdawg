function DataModel() {
	this.submitQuery = submitQuery;
}

function submitQuery(dt) {
	query = dt.content.query;
	var sparqlendpoint = dt.content.sparqlendpoint

	if(sparqlendpoint == ''){
		alert("Set a SPARQL endpoint in the menu Q-Config.");
		return;
	}

	if (dt.content.qtype == "plain") {
		if (dt.content.example == "yes") {

			//executing
			$.mobile.loading("show", {
				text : "Executing...",
				textVisible : true,
				theme : "z",
				html : ""
			});
			
			var url = getBaseUrl() + "/REST/JSON/sparql?query=" + encodeURIComponent(dt.content.query.replace(/ LIMIT [0-9]+$/, "") + " LIMIT 100") + "&endpoint=" + encodeURIComponent(dt.content.sparqlendpoint);
			//extract repository paramater and forward it to iwb
			var repository = getRepository();
			/*if (repository != "RDF") {
				var url = getBaseUrl() + "/sparql?q=" + encodeURIComponent(dt.content.query.replace(/ LIMIT [0-9]+$/, "") + " LIMIT 100") + "&infer=false&queryLanguage=SPARQL&queryTarget=" + repository + "&repository=" + repository;
			} else {
				var url = getBaseUrl() + "/sparql?q=" + encodeURIComponent(dt.content.query.replace(/ LIMIT [0-9]+$/, "") + " LIMIT 100") + "&infer=false&queryLanguage=SPARQL&queryTarget=" + repository;

			}*/

			//submit the query
			$(document).ready(function() {
				$.ajax({
					url : url,
					dataType : 'json',
					username : (getURLParameter($(location).attr('href'), "u") != null) ? getURLParameter($(location).attr('href'), "u") : "admin",
					password : (getURLParameter($(location).attr('href'), "p") != null) ? getURLParameter($(location).attr('href'), "p") : "iwb",
					success : function(data) {
						$.mobile.loading("hide");
						Table.fillTable(data, dt);
					},
					error : function(textStatus, errorThrown) {
						$.mobile.loading("hide");
						$.mobile.loading('show', {
							//text : 'Error!',
							text: "Error. Status: " + textStatus.responseText + ". Error thrown: " + errorThrown, 
							textVisible : true,
							theme : 'a',
							textonly : true,
							html : ''
						});
					}
				});
			});
		} else {
			Table.fillTable("", dt);
		}
	} else {
		Table.fillTTable(dt);
	}
}

//find the base url
function getBaseUrl() {
	var base;
	var href = $(parent.location).attr('href');
	if (getURLParameter(href, "base") != null) {
		base = getURLParameter(href, "base");
		// TODO: Temp workaround. The source of the wrong #-sign should be found and removed
		if(base.charAt(base.length-1) == '#')
			base = base.substring(0,base.length-1);
	} else {

		if (window.location.protocol == 'http:' || window.location.protocol == 'https:')
			base = window.location.protocol + "//" + window.location.host;
		else
			base = window.location.host;
	}

	return base;
}

//get repository
function getRepository() {
	return (getURLParameter($(parent.location).attr('href'), "repository") != null) ? getURLParameter($(parent.location).attr('href'), "repository") : "RDF";
}

//extract url parameters
function getURLParameter(url, name) {
	var pat = name + '=' + '(.+?)(&|$)';
	var match = RegExp(pat).exec(url);
	return (match||[,null])[1];
}

//encode " to ' and escape
function encodeSpecial(text) {
	return escape(text.replace(/\"/g, "'"));
}

function removeFormatting(text) {
	return text.replace("\t", "").replace(/\r?\n|\r/g, " ");
}

dataModel = new DataModel();
