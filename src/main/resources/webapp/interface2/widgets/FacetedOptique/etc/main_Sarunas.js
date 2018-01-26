var json = [ { "fields" : [ { "id" : "well-name",
          "label" : "Name",
          "type" : "text-basic",
          "value" : "",
          "usage":40000,
          "selected":false
        },
        { "id" : "well-field1",
          "label" : "B field",
          "option" : { "0" : "on",
              "1" : "off"
            },
          "type" : "flip",
          "value" : "",
          "usage":30000,
          "selected":false
        },
        { "id" : "well-field2",
          "label" : "A field",
          "option" : { "0" : "40",
              "1" : "100"
            },
          "type" : "slider",
          "value" : "",
          "usage":20000,
          "selected":false
        },
        { "id" : "well-field3",
          "label" : "A field",
          "option" : { "0" : "100" },
          "type" : "rangeslider",
          "value" : { "0" : "40",
              "1" : "80"
            },
          "usage":10000,
          "selected":false
        }
      ],
    "id" : "Well"
  },
  { "fields" : [ { "id" : "wellbore-name",
          "label" : "Name",
          "type" : "text-basic",
          "value" : "",
          "usage":40000,
          "selected":false
        },
        { "id" : "wellbore-field1",
          "label" : "A field",
          "option" : { "0" : "on",
              "1" : "off"
            },
          "type" : "flip",
          "value" : "",
          "usage":30000,
          "selected":false
        },
        { "id" : "wellbore-field2",
          "label" : "A field",
          "option" : { "0" : "40",
              "1" : "100"
            },
          "type" : "slider",
          "value" : "",
          "usage":20000,
          "selected":false
        },
        { "id" : "wellbore-field3",
          "label" : "A field",
          "option" : { "0" : "100" },
          "type" : "rangeslider",
          "value" : { "0" : "40",
              "1" : "80"
            },
          "usage":10000,
          "selected":false
        }
      ],
    "id" : "Wellbore"
  },
  { "fields" : [ { "id" : "core-name",
          "label" : "Name",
          "type" : "text-basic",
          "value" : "",
          "usage":40000,
          "selected":false
        },
        { "id" : "core-field1",
          "label" : "A field",
          "option" : { "0" : "on",
              "1" : "off"
            },
          "type" : "flip",
          "value" : "",
          "usage":30000,
          "selected":false
        },
        { "id" : "core-field2",
          "label" : "A field",
          "option" : { "0" : "40",
              "1" : "100"
            },
          "type" : "slider",
          "value" : "",
          "usage":20000,
          "selected":false
        },
        { "id" : "core-field3",
          "label" : "A field",
          "option" : { "0" : "100" },
          "type" : "rangeslider",
          "value" : { "0" : "40",
              "1" : "80"
            },
          "usage":10000,
          "selected":false
        }
      ],
    "id" : "Core"
  },
  { "fields" : [ { "id" : "interval-name",
          "label" : "Inerval name",
          "type" : "text-basic",
          "value" : "",
          "usage":40000,
          "selected":false
        },
        { "id" : "interval-field1",
          "label" : "A field",
          "option" : { "0" : "on",
              "1" : "off"
            },
          "type" : "flip",
          "value" : "",
          "usage":30000,
          "selected":false
        },
        { "id" : "interval-field2",
          "label" : "A field",
          "option" : { "0" : "40",
              "1" : "100"
            },
          "type" : "slider",
          "value" : "",
          "usage":20000,
          "selected":false
        },
        { "id" : "interval-field3",
          "label" : "A field",
          "option" : { "0" : "100" },
          "type" : "rangeslider",
          "value" : { "0" : "40",
              "1" : "80"
            },
          "usage":10000,
          "selected":false
        }
      ],
    "id" : "DepthInterval"
  },
  { "fields" : [ { "id" : "unit-name",
          "label" : "Name",
          "type" : "text-basic",
          "value" : "",
          "usage":40000,
          "selected":false
        },
        { "id" : "unit-field1",
          "label" : "A field",
          "option" : { "0" : "on",
              "1" : "off"
            },
          "type" : "flip",
          "value" : "",
          "usage":30000,
          "selected":false
        },
        { "id" : "unit-field2",
          "label" : "A field",
          "option" : { "0" : "40",
              "1" : "100"
            },
          "type" : "slider",
          "value" : "",
          "usage":20000,
          "selected":false
        },
        { "id" : "unit-field3",
          "label" : "A field",
          "option" : { "0" : "100" },
          "type" : "rangeslider",
          "value" : { "0" : "40",
              "1" : "80"
            },
          "usage":10000,
          "selected":false
        }
      ],
    "id" : "StratigraphicUnit"
  }
];

var current = 0;
var facet_id = 0;
	
			
$(document).ready(function() {
	Facet = new facet();
	//Facet.load('Well', 'none', false, false);
	$(".ui-page-active").css('background-color', '#333333');
	$(".ui-page-active").css('background','url(images/body-pattern.png) center 0px');
	$(".ui-page-active").css('background-image', 'none');
	

	$('body').on('click', '.add', function(event) {
		var message = new Object();
		message.type = 'attributeAdded';
		message.content = new Object();
		message.content.id = $(this).attr('id');
		toggleSelected(message.content.id);
		incUsage(message.content.id, true);
		message.content.node = '';
		Channel.Send('parent', message);
	});

	$('body').on('click', '.remove', function(event) {
		var message = new Object();
		message.type = 'attributeRemoved';
		message.content = new Object();
		message.content.id = $(this).attr('id');
		toggleSelected(message.content.id);
		incUsage(message.content.id, false);
		message.content.node = '';
		Channel.Send('parent', message);

	});

});

function facet() {
	this.load = load;
	this.getData = getData;
	this.formField = formField;
}

function load(id, concept, trans, bck, home) {
	facet_id = id;
	var result;
	var content = '';
	
	result = getData(concept);

	//prepare page
	content = '<div data-add-back-btn="' + bck + '" data-url="n" data-role="page" id="' + id + '" style="background: url(images/body-pattern.png) center 0px;background-color: #333333;">';
	//content += '<div data-role="header" data-id="myheader" data-position="fixed"><h1>Page header</h1>';
	//if (home)
	//	content += '<a href="#" data-icon="home" class="ui-btn-right home-btn">Home</a>';
	//content += '</div>';
	content += '<div data-role="content">';
	content += '<div id="search-wrapper">';
	content += '<ul data-role="listview" id="ul_'+id+'" data-inset="true" data-theme="c" data-filter="true" data-filter-placeholder="Search..." data-mini="true">';

	for ( i = 0; i < result.fields.length; i++) {
		content += formField(result.fields[i]);
	}

	content += '</ul>';
	content += '</div>';
	content += '</div>';
	//content += '<div data-role="footer" class="ui-bar" data-position="fixed" data-id="myfooter">';
	//content += '<h1>Footer</h1>';
	//content += '</div>';
	content += '</div>';
	content = $(content);

	//append it to the page container
	content.appendTo($.mobile.pageContainer);
	//go to it
	$.mobile.changePage("#" + id, {
		transition : trans
	});
}

function formField(params) {
	var field = '';

	field += '<li data-role="fieldcontain">';
	
	var selected=" ";
	var _class = " ";
	if (params.selected) {
		selected ='data-icon="minus" ';
		_class ='class="remove"';
	} else {
		selected ='data-icon="plus" ';
		_class ='class="add"';
	}

	//text field
	if (params.type == 'text-basic') {
		field += '<label for="' + params.id + '"><a href="#" data-role="button" '+selected+' data-iconpos="notext" data-theme="c" data-inline="true" '+_class+' id="' + params.id + '">Plus</a>' + params.label + '</label>';
		field += '<input type="text" name="' + params.id + '" id="' + params.id + '" value="" />';
	} else if (params.type == 'flip') {
		field += '<label for="' + params.id + '"><a href="#" data-role="button" '+selected+' data-iconpos="notext" data-theme="c" data-inline="true" '+_class+' id="' + params.id + '">Plus</a>' + params.label + '</label>';
		field += '<select name="' + params.id + '" id="' + params.id + '" data-role="slider">';
		field += '<option value="off">No</option>';
		field += '<option value="on" selected="">Yes</option>';
		field += '</select>';
	} else if (params.type == 'slider') {
		field += '<label for="' + params.id + '"><a href="#" data-role="button" '+selected+' data-iconpos="notext" data-theme="c" data-inline="true" '+_class+' id="' + params.id + '">Plus</a>' + params.label + '</label>';
		field += '<input type="range" name="' + params.id + '" id="' + params.id + '" value="50" min="0" max="100" data-highlight="true"  />';
	} else if (params.type == 'rangeslider') {
		field += '<div data-role="rangeslider">';
		field += '<label for="' + params.id + '"><a href="#" data-role="button" '+selected+' data-iconpos="notext" data-theme="c" data-inline="true" '+_class+' id="' + params.id + '">Plus</a>' + params.label + '</label>';
		field += '<label for="' + params.id + '_2' + '"><a href="#" data-role="button" '+selected+' data-iconpos="notext" data-theme="c" data-inline="true" '+_class+' id="' + params.id + '">Plus</a>' + params.label + '</label>';
		field += '<input type="range" name="' + params.id + '" id="' + params.id + '" min="0" max="100" value="40">';
		field += '<input type="range" name="' + params.id + '_2' + '" id="' + params.id + '_2' + '" min="0" max="100" value="80">';
		field += '</div>';
	}

	field += '</li>';

	return field;
}

//get the fields of the selected concept
function getData(id) {
	var data= "";
	for (var i = 0; i < json.length; i++) {
    	if (json[i].id==id) {
    		data = json[i];
    		current=i;
    	}
	}
	return data;
}

//save the selection state of the field
function toggleSelected (id) {
	for (var i = 0; i < json[current].fields.length; i++) {
    	if (json[current].fields[i].id==id) {
			if (json[current].fields[i].selected) {
				json[current].fields[i].selected = false;
			} else {
				json[current].fields[i].selected = true;
			}
    	}
	}
}

//increase the usage data of the selected field and sort the list accordingly
function incUsage(id, increase) {
	var temp = 0;
	var max =json[current].fields.length;
	for (var i = 0; i < json[current].fields.length; i++) {
    	if (json[current].fields[i].id==id) {
    		if (increase)
    			json[current].fields[i].usage++;
    		temp = i;
    	}
	}
	var temp_field = json[current].fields[temp];
	if (increase) {
		while(temp>0 && (json[current].fields[temp].usage>json[current].fields[temp-1].usage || json[current].fields[temp-1].selected==false)){
			json[current].fields[temp] = json[current].fields[temp-1];
			json[current].fields[temp-1] = temp_field;
			temp--;
		}
	} else {
		while(temp<max && (json[current].fields[temp+1].selected==true || json[current].fields[temp].usage<json[current].fields[temp+1].usage)){
			json[current].fields[temp] = json[current].fields[temp+1];
			json[current].fields[temp+1] = temp_field;
			temp++;
		}
	}

	$("#ul_"+facet_id).empty();
	content="";
	for ( i = 0; i < json[current].fields.length; i++) {
		$("#ul_"+facet_id).append(formField(json[current].fields[i]));
	}
	$("#ul_"+facet_id).listview('refresh');
	$('#'+facet_id).trigger('create');
}

