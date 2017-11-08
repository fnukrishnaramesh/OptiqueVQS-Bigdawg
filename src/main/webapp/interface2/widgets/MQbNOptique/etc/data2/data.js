function getData(id) {
	var json;
	var base = '';

	if (window.location.protocol == 'http:')
		base = "http://" + window.location.host + window.location.pathname.replace('index.html', '');
	else
		base = window.location.host + window.location.pathname.replace('index.html', '');

	//dummy results
	switch (id) {
		case '0':
			json = {
				"options" : [{
					"id" : "Company",
					"prop" : "",
					"icon" : base + "etc/data2/icons/Company.png",
					"name" : "Companies",
					"desc" : "I am looking for Companies which...",
					"cnt" : "100"
				}, {
					"id" : "Well",
					"prop" : "",
					"icon" : base + "etc/data2/icons/Well.png",
					"name" : "Wells",
					"desc" : "I am looking for Wells which...",
					"cnt" : "300"
				}, {
					"id" : "Wellbore",
					"prop" : "",
					"icon" : base + "etc/data2/icons/Wellbore.png",
					"name" : "Wellbores",
					"desc" : "I am looking for Wellbores which...",
					"cnt" : "900"
				}, {
					"id" : "Facility",
					"prop" : "",
					"icon" : base + "etc/data2/icons/Facility.png",
					"name" : "Facilities",
					"desc" : "I am looking for Facilities which...",
					"cnt" : "800"
				}, {
					"id" : "Field",
					"prop" : "",
					"icon" : base + "etc/data2/icons/Field.png",
					"name" : "Fields",
					"desc" : "I am looking for Fields which...",
					"cnt" : "200"
				}, {
					"id" : "License",
					"prop" : "",
					"icon" : base + "etc/data2/icons/License.png",
					"name" : "Licenses",
					"desc" : "I am looking for Licenses which...",
					"cnt" : "200"
				}, {
					"id" : "SeismicSurvey",
					"prop" : "",
					"icon" : base + "etc/data2/icons/SeismicSurvey.png",
					"name" : "Seismic Surveys",
					"desc" : "I am looking for Seismic Surveys which...",
					"cnt" : "200"
				}, {
					"id" : "StratigraphicUnit",
					"prop" : "",
					"icon" : base + "etc/data2/icons/StratigraphicUnit.png",
					"name" : "Stratigraphic Units",
					"desc" : "I am looking for Stratigraphic Units which...",
					"cnt" : "200"
				}]
			};
			break;
		case 'Field':
			json = {
				"options" : [{
					"id" : "Company",
					"prop" : "operatedBy",
					"icon" : base + "etc/data2/icons/Company.png",
					"name" : "Companies",
					"desc" : "Fields which are operated by Companies that...",
					"cnt" : "100"
				}, {
					"id" : "Facility",
					"prop" : "hasFacility",
					"icon" : base + "etc/data2/icons/Facility.png",
					"name" : "Facilities",
					"desc" : "Fields which have Facilities that...",
					"cnt" : "900"
				}, {
					"id" : "Wellbore",
					"prop" : "hasWellbore",
					"icon" : base + "etc/data2/icons/Wellbore.png",
					"name" : "Wellbores",
					"desc" : "Fields which have Wellbores that...",
					"cnt" : "900"
				}]
			};
			break;
		case 'Facility':
			json = {
				"options" : [{
					"id" : "Field",
					"prop" : "belongsTo",
					"icon" : base + "etc/data2/icons/Field.png",
					"name" : "Fields",
					"desc" : "Facilities which belong to Fields that...",
					"cnt" : "100"
				}]
			};
			break;
		case 'Wellbore':
			json = {
				"options" : [{
					"id" : "Field",
					"prop" : "inField",
					"icon" : base + "etc/data2/icons/Field.png",
					"name" : "Fields",
					"desc" : "Wellbores which are in Fields that...",
					"cnt" : "300"
				}]
			};
			break;
		case 'Company':
			json = {
				"options" : [{
					"id" : "Field",
					"prop" : "operatesField",
					"icon" : base + "etc/data2/icons/Field.png",
					"name" : "Fields",
					"desc" : "Companies which operate Fields that...",
					"cnt" : "300"
				}]
			};
			break;
	}
	return json;
}