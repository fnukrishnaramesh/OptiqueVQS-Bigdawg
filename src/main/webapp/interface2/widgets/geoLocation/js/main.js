// This only demonstrates how
// you need to send a message to OptiqueVQS

$(document).ready(function() {
	//cache false
	$.ajaxSetup({ cache: false });
	
	geoLocation = new geoLocation();

	//call OptiqueVQS
	$('body').on('click', '.sendMessage', function(event) {
		Channel.ClearMessage();
		Channel.message.type = "instanceSelected";
		Channel.message.content = new Object();
		Channel.message.content.constraint = new Object();
		Channel.message.content.nodeId = "c1";
		Channel.message.content.conceptId = "http://eu.optique.ontology/oil_sota_demo.owl#Wellbore";
		Channel.message.content.conceptLabel = "Wellbore";
		Channel.message.content.conceptName = "Wellbore";
		Channel.message.content.conceptNs = "http://eu.optique.ontology/oil_sota_demo.owl#";
		Channel.message.content.constraint.id = "http://eu.optique.ontology/oil_sota_demo.owl#Wellbore_name";
		Channel.message.content.constraint.name = "Wellbore_name";
		Channel.message.content.constraint.label = "Wellbore_name";
		Channel.message.content.constraint.constr = "name of the selected wellbore instance";
		Channel.message.content.constraint.constrType = "eq";
		
		Channel.Send("parent");
		
	});

});

function geoLocation() {
	this.displayMessage = displayMessage;
}

function displayMessage(message) {
	$("#mss").val(message);
}