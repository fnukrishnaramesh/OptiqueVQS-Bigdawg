function getData(id) {
	var json;

	//dummy results
	switch (id) {
		case 'Field':
			json = {
				"fields" : [{
					"id" : "name",
					"type" : "text-basic",
					"label" : "Name",
					"value" : ""
				}, {
					"id" : "RecoverableOil",
					"type" : "rangeslider",
					"label" : "Recoverable Oil",
					"option" : {
						"0" : "0",
						"1" : "100"
					},
					"value" : {
						"0" : "0",
						"1" : "100"
					}
				}, {
					"id" : "RemainingOil",
					"type" : "rangeslider",
					"label" : "Remaining Oil",
					"option" : {
						"0" : "0",
						"1" : "100"
					},
					"value" : {
						"0" : "0",
						"1" : "100"
					}
				}]
			};
			break;
		case 'Company':
			json = {
				"fields" : [{
					"id" : "name",
					"type" : "text-basic",
					"label" : "Name",
					"value" : ""
				}]
			};
			break;
		case 'Facility':
			json = {
				"fields" : [{
					"id" : "FacilityName",
					"type" : "text-basic",
					"label" : "Name",
					"value" : ""
				}, {
					"id" : "FacilityType",
					"type" : "select-native-1",
					"label" : "Type",
					"option" : {
						"0" : "Any",
						"1" : "SINGLE WELL TEMPLATE",
						"2" : "SUBSEA STRUCTURE",
						"3" : "MULTIWELL TEMPLATE"
					},
					"value" : ""
				}, {
					"id" : "FacilityFunction",
					"type" : "select-native-1",
					"label" : "Function",
					"option" : {
						"0" : "Any",
						"1" : "OIL PRODUCER",
						"2" : "GAS PRODUCER",
						"3" : "GAS INJECTION"
					},
					"value" : ""
				}]
			};
			break;
		case 'Wellbore':
			json = {
				"fields" : [{
					"id" : "WellboreName",
					"type" : "text-basic",
					"label" : "Name",
					"value" : ""
				}, {
					"id" : "PlannedContent",
					"type" : "select-native-1",
					"label" : "Content",
					"option" : {
						"0" : "Any",
						"1" : "OIL",
						"2" : "GAS"
					},
					"value" : ""
				}, {
					"id" : "PlannedPurpose",
					"type" : "select-native-1",
					"label" : "Purpose",
					"option" : {
						"0" : "Any",
						"1" : "PRODUCTION",
						"2" : "WILDCAT",
						"3" : "APPRAISAL"
					},
					"value" : ""
				}]
			};
			break;
	}
	return json;
}