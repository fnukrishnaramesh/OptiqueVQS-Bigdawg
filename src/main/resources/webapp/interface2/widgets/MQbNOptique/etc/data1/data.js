function getData(id) {
	var json;
	var base = "http://"+document.domain;

	//dummy results
	switch (id) {
		case '0':
			json = {
				"options" : [{
					"id" : "Well",
					"prop" : "",
					"icon" : base+"/etc/data1/icons/gear.png",
					"name" : "Wells",
					"desc" : "I am looking for Wells which...",
					"cnt" : "100"
				}, {
					"id" : "Wellbore",
					"prop" : "",
					"icon" : base+"/etc/data1/icons/gear.png",
					"name" : "Wellbores",
					"desc" : "I am looking for Wellbores which...",
					"cnt" : "300"
				}, {
					"id" : "Core",
					"prop" : "",
					"icon" : base+"/etc/data1/icons/gear.png",
					"name" : "Cores",
					"desc" : "I am looking for Cores which...",
					"cnt" : "900"
				}, {
					"id" : "DepthInterval",
					"prop" : "",
					"icon" : base+"/etc/data1/icons/gear.png",
					"name" : "Depth Intervals",
					"desc" : "I am looking for Depth Intervals which...",
					"cnt" : "800"
				}, {
					"id" : "StratigraphicUnit",
					"prop" : "",
					"icon" : base+"/etc/data1/icons/gear.png",
					"name" : "Stratigraphic Units",
					"desc" : "I am looking for Stratigraphic Units which...",
					"cnt" : "200"
				}]
			};
			break;
		case 'Well':
			json = {
				"options" : [{
					"id" : "Wellbore",
					"prop" : "hasWellbore",
					"icon" : base+"/etc/data1/icons/gear.png",
					"name" : "Wellbores",
					"desc" : "has Wellbores that...",
					"cnt" : "100"
				}]
			};
			break;
		case 'Wellbore':
			json = {
				"options" : [{
					"id" : "Well",
					"prop" : "isPartOf",
					"icon" : base+"/etc/data1/icons/gear.png",
					"name" : "Wells",
					"desc" : "is part of Wells that...",
					"cnt" : "100"
				}, {
					"id" : "Core",
					"prop" : "hasCore",
					"icon" : base+"/etc/data1/icons/gear.png",
					"name" : "Cores",
					"desc" : "has Cores that...",
					"cnt" : "900"
				}, {
					"id" : "DepthInterval",
					"prop" : "hasDepthInterval",
					"icon" : base+"/etc/data1/icons/gear.png",
					"name" : "Depth Intervals",
					"desc" : "has Depth Intervals that...",
					"cnt" : "800"
				}]
			};
			break;
		case 'Core':
			json = {
				"options" : [{
					"id" : "Wellbore",
					"prop" : "isPartOf",
					"icon" : base+"/etc/data1/icons/gear.png",
					"name" : "Wellbores",
					"desc" : "is part of Wellbores that...",
					"cnt" : "300"
				}, {
					"id" : "DepthInterval",
					"prop" : "intersects",
					"icon" : base+"/etc/data1/icons/gear.png",
					"name" : "Depth Intervals",
					"desc" : "intersects Depth Intervals that...",
					"cnt" : "800"
				}]
			};
			break;
		case 'DepthInterval':
			json = {
				"options" : [{
					"id" : "Wellbore",
					"prop" : "isPartOf",
					"icon" : base+"/etc/data1/icons/gear.png",
					"name" : "Wellbores",
					"desc" : "is part of Wellbores that..",
					"cnt" : "300"
				}, {
					"id" : "Core",
					"prop" : "intersects",
					"icon" : base+"/etc/data1/icons/gear.png",
					"name" : "Cores",
					"desc" : "intersects Cores that...",
					"cnt" : "900"
				}, {
					"id" : "StratigraphicUnit",
					"prop" : "hasStratUnit",
					"icon" : base+"/etc/data1/icons/gear.png",
					"name" : "Stratigraphic Units",
					"desc" : "has Stratigraphic Units that...",
					"cnt" : "200"
				}]
			};
			break;
		case 'StratigraphicUnit':
			json = {
				"options" : [{
					"id" : "DepthInterval",
					"prop" : "isPartOf",
					"icon" : base+"/etc/data1/icons/gear.png",
					"name" : "Depth Intervals",
					"desc" : "is part of Depth Intervals that...",
					"cnt" : "200"
				}]
			};
			break;
	}
	return json;
}