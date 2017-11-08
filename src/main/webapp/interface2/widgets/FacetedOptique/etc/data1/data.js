function getData(id) {
	var json;

	//dummy results
	switch (id) {
		case 'Well':
			json = {
				"fields" : [{
					"id" : "well-name",
					"type" : "text-basic",
					"label" : "Well",
					"value" : ""
				}, {
					"id" : "well-field1",
					"type" : "flip",
					"label" : "Field 1",
					"option" : {
						"0" : "on",
						"1" : "off"
					},
					"value" : ""
				}, {
					"id" : "well-field2",
					"type" : "slider",
					"label" : "Field 2",
					"option" : {
						"0" : "40",
						"1" : "100"
					},
					"value" : ""
				}, {
					"id" : "well-field3",
					"type" : "rangeslider",
					"label" : "Field 3",
					"option" : {
						"0" : "100",
						"0" : "100"
					},
					"value" : {
						"0" : "40",
						"1" : "80"
					}
				}]
			};
			break;
		case 'Wellbore':
			json = {
				"fields" : [{
					"id" : "wellbore-name",
					"type" : "text-basic",
					"label" : "Wbore",
					"value" : ""
				}, {
					"id" : "wellbore-field1",
					"type" : "flip",
					"label" : "Field 1",
					"option" : {
						"0" : "on",
						"1" : "off"
					},
					"value" : ""
				}, {
					"id" : "wellbore-field2",
					"type" : "slider",
					"label" : "Field 2",
					"option" : {
						"0" : "40",
						"1" : "100"
					},
					"value" : ""
				}, {
					"id" : "depth",
					"type" : "rangeslider",
					"label" : "Depth",
					"option" : {
						"0" : "100",
						"0" : "100"
					},
					"value" : {
						"0" : "40",
						"1" : "80"
					}
				}]
			};
			break;
		case 'Core':
			json = {
				"fields" : [{
					"id" : "core-name",
					"type" : "text-basic",
					"label" : "Core",
					"value" : ""
				}, {
					"id" : "core-field1",
					"type" : "flip",
					"label" : "Field 1",
					"option" : {
						"0" : "on",
						"1" : "off"
					},
					"value" : ""
				}, {
					"id" : "core-field2",
					"type" : "slider",
					"label" : "Field 2",
					"option" : {
						"0" : "40",
						"1" : "100"
					},
					"value" : ""
				}, {
					"id" : "depth",
					"type" : "rangeslider",
					"label" : "Depth",
					"option" : {
						"0" : "100",
						"0" : "100"
					},
					"value" : {
						"0" : "40",
						"1" : "80"
					}
				}]
			};
			break;
		case 'DepthInterval':
			json = {
				"fields" : [{
					"id" : "interval-name",
					"type" : "text-basic",
					"label" : "Inerval name",
					"value" : ""
				}, {
					"id" : "interval-field1",
					"type" : "flip",
					"label" : "Field 1",
					"option" : {
						"0" : "on",
						"1" : "off"
					},
					"value" : ""
				}, {
					"id" : "interval-field2",
					"type" : "slider",
					"label" : "Field 2",
					"option" : {
						"0" : "40",
						"1" : "100"
					},
					"value" : ""
				}, {
					"id" : "interval-field3",
					"type" : "rangeslider",
					"label" : "Field 3",
					"option" : {
						"0" : "100",
						"0" : "100"
					},
					"value" : {
						"0" : "40",
						"1" : "80"
					}
				}]
			};
			break;
		case 'StratigraphicUnit':
			json = {
				"fields" : [{
					"id" : "unit-name",
					"type" : "text-basic",
					"label" : "Unit Name",
					"value" : ""
				}, {
					"id" : "unit-field1",
					"type" : "flip",
					"label" : "Field 1",
					"option" : {
						"0" : "on",
						"1" : "off"
					},
					"value" : ""
				}, {
					"id" : "unit-field2",
					"type" : "slider",
					"label" : "Field 2",
					"option" : {
						"0" : "40",
						"1" : "100"
					},
					"value" : ""
				}, {
					"id" : "unit-field3",
					"type" : "rangeslider",
					"label" : "Field 3",
					"option" : {
						"0" : "100",
						"0" : "100"
					},
					"value" : {
						"0" : "40",
						"1" : "80"
					}
				}]
			};
			break;
	}
	return json;
}