function DataModel() {
	this.getConcepts = getConcepts;
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
function getConcepts(cId, id, reCreate) {
	if (cId == '0') {
		$.ajax({
			url : this.getBaseUrl() + "/REST/JSON/getQFOntologyAccess/?method=getCoreConcepts&ontologyURI=" + dataModel.encodeSpecial(getURLParameter($(parent.location).attr('href'), "ontologyURI")) + "&id=1",
			dataType : 'json',
			context : document.body
		}).done(function(data) {
			mQbN.loadPage(id, data.result, reCreate);
			mQbN.changePage(id, 'slidefade');
		});

	} else {
		$.ajax({
			url : this.getBaseUrl() + "/REST/JSON/getQFOntologyAccess/?method=getNeighbourConcepts&ontologyURI=" + dataModel.encodeSpecial(getURLParameter($(parent.location).attr('href'), "ontologyURI")) + "&conceptId=" + dataModel.encodeSpecial(cId) + "&partialQuery=&id=1",
			dataType : 'json',
			context : document.body
		}).done(function(data) {
			mQbN.loadPage(id, data.result, reCreate);
			mQbN.changePage(id, 'slidefade');
		});

	}

}

dataModel = new DataModel();
