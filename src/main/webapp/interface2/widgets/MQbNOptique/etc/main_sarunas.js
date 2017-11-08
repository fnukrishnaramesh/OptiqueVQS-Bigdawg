var json = [
  {
    "id": "0",
    "options": [
      {
        "id": "Well",
        "prop": "",
        "icon": "css/icons/gear.png",
        "name": "Wells",
        "desc": "Well description goes here...",
        "cnt": "100",
        "usage":0
      },
      {
        "id": "Wellbore",
        "prop": "",
        "icon": "css/icons/gear.png",
        "name": "Wellbores",
        "desc": "Wellbore description goes here...",
        "cnt": "300",
        "usage":0
      },
      {
        "id": "Core",
        "prop": "",
        "icon": "css/icons/gear.png",
        "name": "Cores",
        "desc": "Core description goes here...",
        "cnt": "900",
        "usage":0
      },
      {
        "id": "DepthInterval",
        "prop": "",
        "icon": "css/icons/gear.png",
        "name": "Depth Intervals",
        "desc": "Depth Interval description goes here...",
        "cnt": "800",
        "usage":0
      },
      {
        "id": "StratigraphicUnit",
        "prop": "",
        "icon": "css/icons/gear.png",
        "name": "Stratigraphic Units",
        "desc": "Stratigraphic Unit description goes here...",
        "cnt": "200",
        "usage":0
      }
    ]
  },
  {
    "id": "Well",
        "options": [
      {
        "id": "Wellbore",
        "prop": "hasWellbore",
        "icon": "css/icons/gear.png",
        "name": "Wellbores",
        "desc": "Wellbore description goes here...",
        "cnt": "100",
        "usage":0
      }
    ]
  },
  {
    "id": "Wellbore",
    "options": [
      {
        "id": "Well",
        "prop": "isPartOf",
        "icon": "css/icons/gear.png",
        "name": "Wells",
        "desc": "Well description goes here...",
        "cnt": "100",
        "usage":0
      },
      {
        "id": "Core",
        "prop": "hasCore",
        "icon": "css/icons/gear.png",
        "name": "Cores",
        "desc": "Core description goes here...",
        "cnt": "900",
        "usage":0
      },
      {
        "id": "DepthInterval",
        "prop": "hasDepthInterval",
        "icon": "css/icons/gear.png",
        "name": "Depth Intervals",
        "desc": "Depth Interval description goes here...",
        "cnt": "800",
        "usage":0
      }
    ]
  },
  {
    "id": "Core",
    "options": [
      {
        "id": "Wellbore",
        "prop": "isPartOf",
        "icon": "css/icons/gear.png",
        "name": "Wellbores",
        "desc": "Wellbore description goes here...",
        "cnt": "300",
        "usage":0
      },
      {
        "id": "DepthInterval",
        "prop": "intersects",
        "icon": "css/icons/gear.png",
        "name": "Depth Intervals",
        "desc": "Depth Interval description goes here...",
        "cnt": "800",
        "usage":0
      }
    ]
  },
  {
    "id":"DepthInterval",
    "options": [
      {
        "id": "Wellbore",
        "prop": "isPartOf",
        "icon": "css/icons/gear.png",
        "name": "Wellbores",
        "desc": "Wellbore description goes here...",
        "cnt": "300",
        "usage":0
      },
      {
        "id": "Core",
        "prop": "intersects",
        "icon": "css/icons/gear.png",
        "name": "Cores",
        "desc": "Core description goes here...",
        "cnt": "900",
        "usage":0
      },
      {
        "id": "StratigraphicUnit",
        "prop": "hasStratUnit",
        "icon": "css/icons/gear.png",
        "name": "Stratigraphic Units",
        "desc": "Stratigraphic Unit description goes here...",
        "cnt": "200",
        "usage":0
      }
    ]
  },
  {
    "id": "StratigraphicUnit",
    "options": [
      {
        "id": "DepthInterval",
        "prop": "isPartOf",
        "icon": "css/icons/gear.png",
        "name": "Depth Intervals",
        "desc": "Depth Intervals description goes here...",
        "cnt": "200",
        "usage":0
      }
    ]
  }
];
var current = 0;
var content_id = 0;

$(document).ready(function() {
	
	//attach option click event
	$('body').on('click', '.option', function(event) {
		incUsage($(this).attr('id'));
		load($(this).attr('id'), 'slide', true, true);
		
		var message = new Object();
		message.type = 'nodeSelected';
		message.content = new Object();
		message.content.concept = $(this).attr('id');
		message.content.prop = $(this).attr('prop');
		Channel.Send('parent', message);

		return false;
	});
	//attach home click event
	$('body').on('click', '.home-btn', function(event) {

		load("0", "slide", false, false);

		return false;
	});
	load("0", 'none', false, false);
});

function load(id, trans, bck, home) {
	var result;
	var content;
	content_id = id;

	result = getData(id);

	//prepare page
	content = '<div data-add-back-btn="' + bck + '" data-url="n" data-role="page" id="' + id + '" style="background: url(images/body-pattern.png) center 0px;background-color: #333333;">';
	//content += '<div data-role="header" data-id="myheader" data-position="fixed"><h1>Page header</h1>';
	//if (home)
	//	content += '<a href="#" data-icon="home" class="ui-btn-right home-btn">Home</a>';
	//content += '</div>';
	content += '<div data-role="content">';
	content += '<div id="search-wrapper">';
	content += '<ul data-role="listview" id= "ul_'+content_id+'" data-inset="true" data-theme="c" data-divider-theme="c" data-filter="true" data-filter-placeholder="Search...">';

	for ( i = 0; i < result.options.length; i++) {
		content += '<li class="option" id="' + result.options[i].id + '" prop="' + result.options[i].prop + '">';
		content += '<a href="#"><img src="' + result.options[i].icon + '"><h2>' + result.options[i].name + '</h2>';
		content += '<p>' + result.options[i].desc + '</p>';
		content += '<span class="ui-li-count">' + result.options[i].cnt + '</span></a>';
		content += '</li>';
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

function incUsage(id) {
	var temp = 0;
	for (var i = 0; i < json[current].options.length; i++) {
    	if (json[current].options[i].id==id) {
    		json[current].options[i].usage++;
    		temp = i;
    	}
	}
	
	var temp_field = json[current].options[temp];
		while(temp>0 && json[current].options[temp].usage>json[current].options[temp-1].usage){
			json[current].options[temp] = json[current].options[temp-1];
			json[current].options[temp-1] = temp_field;
			temp--;
	}
	
	$("#ul_"+content_id).empty();
	content="";
	for ( i = 0; i < json[current].options.length; i++) {
		content += '<li class="option" id="' + json[current].options[i].id + '" prop="' + json[current].options[i].prop + '">';
		content += '<a href="#"><img src="' + json[current].options[i].icon + '"><h2>' + json[current].options[i].name + '</h2>';
		content += '<p>' + json[current].options[i].desc + '</p>';
		content += '<span class="ui-li-count">' +json[current].options[i].cnt + '</span></a>';
		content += '</li>';
	}
	$("#ul_"+content_id).append(content);
	$("#ul_"+content_id).listview('refresh');
	$('#'+content_id).trigger('create');
}

