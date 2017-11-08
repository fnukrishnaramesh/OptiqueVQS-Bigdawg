function event() {
	this.addlistener = addlistener;
}

function addlistener() {
	var onmessage = function(e) {
		var data = new Object();
		data = JSON.parse(e.data);
		var origin = e.origin;
		var source = e.source;

		// you need to modify this line to a specific action
		// for your widget
		geoLocation.displayMessage(JSON.stringify(data));
		
	};

	if ( typeof window.addEventListener != 'undefined') {
		window.addEventListener('message', onmessage, false);
	} else if ( typeof window.attachEvent != 'undefined') {
		window.attachEvent('onmessage', onmessage);
	}
}

Event = new event();
Event.addlistener();
