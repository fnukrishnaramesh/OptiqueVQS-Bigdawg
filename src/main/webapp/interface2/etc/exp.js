// queries array
var q = new Array();

// users array
var u = new Array();

$(document).ready(function() {

	// query 1
	var q1 = [{
		id : "0",
		data : {
			id : "0",
			label : "Untitled query",
			desc : "Please provide a description here...",
			icon : "",
			$color : "#FF9900",
			isActive : true
		},
		children : []
	}];

	// query 2
	var q2 = [{
		id : "0",
		data : {
			id : "0",
			label : "Untitled query",
			desc : "Please provide a description here...",
			icon : "",
			$color : "#FF9900",
			isActive : true
		},
		children : []
	}];

	// query 3
	var q3 = [{
		id : "0",
		data : {
			id : "0",
			label : "Untitled query",
			desc : "Please provide a description here...",
			icon : "",
			$color : "#FF9900",
			isActive : true
		},
		children : []
	}];

	// query 4
	var q4 = [{
		id : "0",
		data : {
			id : "0",
			label : "Untitled query",
			desc : "Please provide a description here...",
			icon : "",
			$color : "#FF9900",
			isActive : true
		},
		children : []
	}];

	// query 5
	var q5 = [{
		id : "0",
		data : {
			id : "0",
			label : "Untitled query",
			desc : "Please provide a description here...",
			icon : "",
			$color : "#FF9900",
			isActive : true
		},
		children : []
	}];

	// query 6
	var q6 = [{
		id : "0",
		data : {
			id : "0",
			label : "Untitled query",
			desc : "Please provide a description here...",
			icon : "",
			$color : "#FF9900",
			isActive : true
		},
		children : []
	}];

	// query 7
	var q7 = [{
		id : "0",
		data : {
			id : "0",
			label : "Untitled query",
			desc : "Please provide a description here...",
			icon : "",
			$color : "#FF9900",
			isActive : true
		},
		children : []
	}];

	// query 8
	var q8 = [{
		id : "0",
		data : {
			id : "0",
			label : "Untitled query",
			desc : "Please provide a description here...",
			icon : "",
			$color : "#FF9900",
			isActive : true
		},
		children : []
	}];

	/*
	// query 9
	var q9 = [{
		"id" : "0",
		"data" : {
			"id" : "0",
			"label" : "Untitled query",
			"desc" : "Please provide a description here...",
			"icon" : "",
			"$color" : "#FFFFFF"
		},
		"adjacencies" : [{
			"nodeTo" : "c1",
			"data" : {
				"id" : "",
				"name" : "",
				"label" : "",
				"ns" : ""
			}
		}]
	}, {
		"id" : "c1",
		"data" : {
			"id" : "http://eu.optique.ontology/oil_sota_demo.owl#MainArea",
			"name" : "MainArea",
			"label" : "MainArea",
			"ns" : "http://eu.optique.ontology/oil_sota_demo.owl#",
			"icon" : "http://sws.ifi.uio.no/project/optique/qf/interface/widgets/MQbNOptique/etc/data2/icons/Area.png",
			"isActive" : true,
			"$color" : "#FF9900"
		},
		"adjacencies" : []
	}];

	// query 10
	var q10 = [{
		"id" : "0",
		"data" : {
			"id" : "0",
			"label" : "Untitled query",
			"desc" : "Please provide a description here...",
			"icon" : "",
			"$color" : "#FFFFFF"
		},
		"adjacencies" : [{
			"nodeTo" : "c1",
			"data" : {
				"id" : "",
				"name" : "",
				"label" : "",
				"ns" : ""
			}
		}]
	}, {
		"id" : "c1",
		"data" : {
			"id" : "http://eu.optique.ontology/oil_sota_demo.owl#MainArea",
			"name" : "MainArea",
			"label" : "MainArea",
			"ns" : "http://eu.optique.ontology/oil_sota_demo.owl#",
			"icon" : "http://sws.ifi.uio.no/project/optique/qf/interface/widgets/MQbNOptique/etc/data2/icons/Area.png",
			"isActive" : true,
			"$color" : "#FF9900"
		},
		"adjacencies" : []
	}];

	// query 11
	var q11 = [{
		"id" : "0",
		"data" : {
			"id" : "0",
			"label" : "Untitled query",
			"desc" : "Please provide a description here...",
			"icon" : "",
			"$color" : "#FFFFFF"
		},
		"adjacencies" : [{
			"nodeTo" : "c1",
			"data" : {
				"id" : "",
				"name" : "",
				"label" : "",
				"ns" : ""
			}
		}]
	}, {
		"id" : "c1",
		"data" : {
			"id" : "http://eu.optique.ontology/oil_sota_demo.owl#MainArea",
			"name" : "MainArea",
			"label" : "MainArea",
			"ns" : "http://eu.optique.ontology/oil_sota_demo.owl#",
			"icon" : "http://sws.ifi.uio.no/project/optique/qf/interface/widgets/MQbNOptique/etc/data2/icons/Area.png",
			"isActive" : true,
			"$color" : "#FF9900"
		},
		"adjacencies" : []
	}];

	// query 12
	var q12 = [{
		"id" : "0",
		"data" : {
			"id" : "0",
			"label" : "Untitled query",
			"desc" : "Please provide a description here...",
			"icon" : "",
			"$color" : "#FFFFFF"
		},
		"adjacencies" : [{
			"nodeTo" : "c1",
			"data" : {
				"id" : "",
				"name" : "",
				"label" : "",
				"ns" : ""
			}
		}]
	}, {
		"id" : "c1",
		"data" : {
			"id" : "http://eu.optique.ontology/oil_sota_demo.owl#MainArea",
			"name" : "MainArea",
			"label" : "MainArea",
			"ns" : "http://eu.optique.ontology/oil_sota_demo.owl#",
			"icon" : "http://sws.ifi.uio.no/project/optique/qf/interface/widgets/MQbNOptique/etc/data2/icons/Area.png",
			"isActive" : true,
			"$color" : "#FF9900"
		},
		"adjacencies" : []
	}];

	// query 13
	var q13 = [{
		"id" : "0",
		"data" : {
			"id" : "0",
			"label" : "Untitled query",
			"desc" : "Please provide a description here...",
			"icon" : "",
			"$color" : "#FFFFFF"
		},
		"adjacencies" : [{
			"nodeTo" : "c1",
			"data" : {
				"id" : "",
				"name" : "",
				"label" : "",
				"ns" : ""
			}
		}]
	}, {
		"id" : "c1",
		"data" : {
			"id" : "http://eu.optique.ontology/oil_sota_demo.owl#MainArea",
			"name" : "MainArea",
			"label" : "MainArea",
			"ns" : "http://eu.optique.ontology/oil_sota_demo.owl#",
			"icon" : "http://sws.ifi.uio.no/project/optique/qf/interface/widgets/MQbNOptique/etc/data2/icons/Area.png",
			"isActive" : true,
			"$color" : "#FF9900"
		},
		"adjacencies" : []
	}];

	// query 14
	var q14 = [{
		"id" : "0",
		"data" : {
			"id" : "0",
			"label" : "Untitled query",
			"desc" : "Please provide a description here...",
			"icon" : "",
			"$color" : "#FFFFFF"
		},
		"adjacencies" : [{
			"nodeTo" : "c1",
			"data" : {
				"id" : "",
				"name" : "",
				"label" : "",
				"ns" : ""
			}
		}]
	}, {
		"id" : "c1",
		"data" : {
			"id" : "http://eu.optique.ontology/oil_sota_demo.owl#MainArea",
			"name" : "MainArea",
			"label" : "MainArea",
			"ns" : "http://eu.optique.ontology/oil_sota_demo.owl#",
			"icon" : "http://sws.ifi.uio.no/project/optique/qf/interface/widgets/MQbNOptique/etc/data2/icons/Area.png",
			"isActive" : true,
			"$color" : "#FF9900"
		},
		"adjacencies" : []
	}];

	// query 15
	var q15 = [{
		"id" : "0",
		"data" : {
			"id" : "0",
			"label" : "Untitled query",
			"desc" : "Please provide a description here...",
			"icon" : "",
			"$color" : "#FFFFFF"
		},
		"adjacencies" : [{
			"nodeTo" : "c1",
			"data" : {
				"id" : "",
				"name" : "",
				"label" : "",
				"ns" : ""
			}
		}]
	}, {
		"id" : "c1",
		"data" : {
			"id" : "http://eu.optique.ontology/oil_sota_demo.owl#MainArea",
			"name" : "MainArea",
			"label" : "MainArea",
			"ns" : "http://eu.optique.ontology/oil_sota_demo.owl#",
			"icon" : "http://sws.ifi.uio.no/project/optique/qf/interface/widgets/MQbNOptique/etc/data2/icons/Area.png",
			"isActive" : true,
			"$color" : "#FF9900"
		},
		"adjacencies" : []
	}];

	// query 16
	var q16 = [{
		"id" : "0",
		"data" : {
			"id" : "0",
			"label" : "Untitled query",
			"desc" : "Please provide a description here...",
			"icon" : "",
			"$color" : "#FFFFFF"
		},
		"adjacencies" : [{
			"nodeTo" : "c1",
			"data" : {
				"id" : "",
				"name" : "",
				"label" : "",
				"ns" : ""
			}
		}]
	}, {
		"id" : "c1",
		"data" : {
			"id" : "http://eu.optique.ontology/oil_sota_demo.owl#MainArea",
			"name" : "MainArea",
			"label" : "MainArea",
			"ns" : "http://eu.optique.ontology/oil_sota_demo.owl#",
			"icon" : "http://sws.ifi.uio.no/project/optique/qf/interface/widgets/MQbNOptique/etc/data2/icons/Area.png",
			"isActive" : true,
			"$color" : "#FF9900"
		},
		"adjacencies" : []
	}];
	*/
	// push queries
	q.push(q1);
	q.push(q2);
	q.push(q3);
	q.push(q4);
	q.push(q5);
	q.push(q6);
	q.push(q7);
	q.push(q8);
	/*q.push(q9);
	q.push(q10);
	q.push(q11);
	q.push(q12);
	q.push(q13);
	q.push(q14);
	q.push(q15);
	q.push(q16);*/

	// push users
	u.push("P0");
	u.push("P1");
	u.push("P2");
	u.push("P3");
	u.push("P4");
	u.push("P5");
	u.push("P6");
	u.push("P7");
	u.push("P8");

	for (var i = 0; i < u.length; i++) {
		$("#user_list").append(u[i] + "<input type='checkbox' name='users' id='" + i + "'><br/>");
	}

	for (var i = 0; i < q.length; i++) {
		$("#task_list").append("T" + (i + 1) + "<input type='checkbox' name='tasks' id='" + i + "'><br/>");
	}

	$("#load").click(function() {

		$.each($("input[name='users']:checked"), function() {
			var user = $(this).attr("id");

			$.each($("input[name='tasks']:checked"), function() {
				var task = $(this).attr("id");

				q[task][0].data.label = "P" + user + " - Task " + ((parseInt(task) + 1 < 10) ? '0' : '') + (parseInt(task) + 1);
				q[task][0].data.desc = "Task " + ((parseInt(task) + 1 < 10) ? '0' : '') + (parseInt(task) + 1) + " of participant " + user;

				//console.log(q[task][0].data.label);
				saveQuery(q[task][0].data.label, q[task][0].data.desc, " ", JSON.stringify(q[task]), "final");

			});

		});

	});

});

function saveQuery(name, desc, sq, jq, st) {
	var status;
	var data;

	data = {
		method : 'saveQuery',
		id : '1',
		params : {
			name : name,
			desc : desc,
			sparqlquery : encodeSpecial(sq),
			jsonquery : encodeSpecial(jq),
			status : st
		}
	};

	$.ajax({
		type : 'POST',
		url : this.getBaseUrl() + '/REST/JSON/getQFQueryCatalogAccess/',
		dataType : 'json',
		contentType : 'application/json',
		data : JSON.stringify(data),
		async : false,
		processData : false
	}).done(function(data) {
		//console.log("done!");
	});

}

//encode " to ' and escape
function encodeSpecial(text) {
	return escape(text.replace(/\"/g, "'"));
}

//find the base url
function getBaseUrl() {
	var base;

	if ($("#base").val() != "") {
		base = $("#base").val();
	} else {

		if (window.location.protocol == 'http:')
			base = "http://" + window.location.host;
		else
			base = window.location.host;
	}

	return base;
}

