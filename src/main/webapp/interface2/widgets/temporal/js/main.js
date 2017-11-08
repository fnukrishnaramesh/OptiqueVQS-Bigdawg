$(document).ready(function() {
	//cache false
	$.ajaxSetup({
		cache : false
	});

	temporal = new temporal();

	//call OptiqueVQS
	$('body').on('click', '#submit', function(event) {
		Channel.ClearMessage();
		Channel.message.type = 'temporal';
		Channel.message.content = new Object();
		Channel.message.content.slide = $("#slide").val();
		Channel.message.content.slider = $("#slide-rg :radio:checked").val();
		Channel.message.content.window = $("#window").val();
		Channel.message.content.windowr = $("#window-rg :radio:checked").val();
		Channel.message.content.start = $("#start").val();
		Channel.message.content.end = $("#end").val();
		Channel.Send("parent");

	});

});

function temporal() {
	this.setValues = setValues;
}

function setValues(dt) {
	$("#slide").val(dt.content.slide);
	$("#slide-r-"+dt.content.slider).attr("checked",true);
	$("input[type='radio']").checkboxradio("refresh");
	$("#window").val(dt.content.window);
	$("#window-r-"+dt.content.windowr).attr("checked",true);
	$("input[type='radio']").checkboxradio("refresh");
	$("#start").val(dt.content.start);
	$("#end").val(dt.content.end);

}
