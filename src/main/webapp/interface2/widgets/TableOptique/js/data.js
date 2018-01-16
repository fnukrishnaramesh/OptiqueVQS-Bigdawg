function DataModel() {
	this.submitQuery = submitQuery;
	this.registerTQuery = registerTQuery;
}

function submitQuery(dt) {
	query = dt.content.query;

	if (dt.content.qtype == "plain") {
		if (dt.content.example == "yes") {

			//executing
			$.mobile.loading("show", {
				text : "Executing...",
				textVisible : true,
				theme : "z",
				html : ""
			});

			//extract repository paramater and forward it to iwb
			var repository = getRepository();
			if (repository != "RDF") {
				var url = getBaseUrl() + "/fuseki/OptiqueVQS/sparql?query=" + encodeURIComponent(dt.content.query.replace(/ LIMIT [0-9]+$/, "") + " LIMIT 100") + "&infer=false&queryLanguage=SPARQL&queryTarget=" + repository + "&repository=" + repository;
				//var url = getBaseUrl() + "/sparql?q=" + encodeURIComponent(dt.content.query.replace(/ LIMIT [0-9]+$/, "") + " LIMIT 100") + "&infer=false&queryLanguage=SPARQL&queryTarget=" + repository + "&repository=" + repository;
			} else {
				var url = getBaseUrl() + "/fuseki/OptiqueVQS/sparql?query=" + encodeURIComponent(dt.content.query.replace(/ LIMIT [0-9]+$/, "") + " LIMIT 100") + "&infer=false&queryLanguage=SPARQL&queryTarget=" + repository;
				//var url = getBaseUrl() + "/sparql?q=" + encodeURIComponent(dt.content.query.replace(/ LIMIT [0-9]+$/, "") + " LIMIT 100") + "&infer=false&queryLanguage=SPARQL&queryTarget=" + repository;

			}

			//submit the query
			$(document).ready(function() {
				$.ajax({
					url : url,
					//url : 'http://127.0.0.1:8888/sparql?q=SELECT+DISTINCT+%3Fx+%3Fy+%0D%0AWHERE+%7B+%0D%0A%3Fx+a+%3Fy.+%0D%0A%7D&infer=false&queryLanguage=SPARQL&query=SELECT+DISTINCT+%3Fx+%3Fy+%0D%0AWHERE+%7B+%0D%0A%3Fx+a+%3Fy.+%0D%0A%7D',
					dataType : 'json',
					username : 'admin',
					password : 'iwb',
					success : function(data) {
						$.mobile.loading("hide");
						Table.fillTable(data, dt);
					},
					error : function(textStatus, errorThrown) {
						$.mobile.loading("hide");
						$.mobile.loading('show', {
							text : 'Error!',
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

function registerTQuery() {
	data = {
		method : 'saveQuery',
		id : '1',
		params : {
			name : '',
			desc : '',
			sparqlquery : encodeSpecial(removeFormatting(query)),
			jsonquery : '',
			status : 'temporary',
			type : 'starql'
		}
	};

	$.ajax({
		type : 'POST',
		url : getBaseUrl() + '/REST/JSON/getQFQueryCatalogAccess/',
		dataType : 'json',
		contentType : 'application/json',
		data : JSON.stringify(data),
		processData : false
	}).done(function(data) {
		//extract repository paramater and forward it to iwb
		var repository = getRepository();
		//redirect
		var url = getBaseUrl() + "/resource/StarqlQuery?repository="+repository+"&query=Query:" + encodeURIComponent(data.result);
		window.open(url, '_blank');
		//console.log(data.result);
		//StarqlQuery?repository=streaming_test&query=Query:Stream
	});
}

//find the base url
function getBaseUrl() {
	var base;

	if (getURLParameter($(parent.location).attr('href'), "base") != null) {
		base = getURLParameter($(parent.location).attr('href'), "base");
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
	return (RegExp(name + '=' + '(.+?)(&|$)').exec(url)||[,null])[1];
}

//encode " to ' and escape
function encodeSpecial(text) {
	return escape(text.replace(/\"/g, "'"));
}

function removeFormatting(text) {
	return text.replace("\t", "").replace(/\r?\n|\r/g, " ");
}

dataModel = new DataModel();
