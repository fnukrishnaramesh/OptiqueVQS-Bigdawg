function DataModel() {
	this.getFields = getFields;
	this.getSubclasses = getSubclasses;
	this.encodeSpecial = encodeSpecial;
	this.getBaseUrl = getBaseUrl;
}

//encode #
function encodeSpecial(url) {
	return url.replace(/#/g, "%23");
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

//extract url parameters
function getURLParameter(url, name) {
	return (RegExp(name + '=' + '(.+?)(&|$)').exec(url)||[,null])[1];
}


//get concepts and relatipnships pairs
function getFields(dt, reCreate) {
	$.ajax({
		url : this.getBaseUrl() + "/REST/JSON/getQFOntologyAccess/?method=getConceptFacets&params=[%22" + dataModel.encodeSpecial(getURLParameter($(parent.location).attr('href'), "ontologyURI")) + "%22, %22" + dataModel.encodeSpecial(dt.conceptId) + "%22, %22%22]&id=1",
		dataType : 'json',
		context : document.body
	}).done(function(data) {
		dataModel.getSubclasses(dt, data, reCreate);
	});
}

//add subclass information
function getSubclasses(dt, response, reCreate) {
	$.ajax({
		url : this.getBaseUrl() + "/REST/JSON/getQFOntologyAccess/?method=getDirectSubclasses&params=[%22" + dataModel.encodeSpecial(getURLParameter($(parent.location).attr('href'), "ontologyURI")) + "%22, %22" + dataModel.encodeSpecial(dt.conceptId) + "%22]&id=1",
		dataType : 'json',
		context : document.body
	}).done(function(data) {
		//if there exists subclasses
		if (data.result.options.length > 0) {
			var sub = new Object();
			sub.options = new Object();
			//subclass info
			sub.id = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type";
			sub.name = "type";
			sub.ns = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
			sub.desc = "subclass";
			sub.label = "Type";
			sub.inputType = "subclass";
			sub.options = data.result.options;
			response.result.fields.push(sub);
		}

		Facet.loadPage(dt.nodeId, response.result, reCreate);
		Facet.changePage(dt.nodeId, 'flip');
		Facet.sortPage(dt.output, dt.constraint);
	});
}

dataModel = new DataModel();
