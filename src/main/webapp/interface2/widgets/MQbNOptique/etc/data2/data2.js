(function (window, undefined) { // trick: safekeep 'undefined', and minify.
     "use strict";

     /*global window, jQuery */
     /*jslint todo: true */

     var base, options;
     
     if (window.location.protocol == 'http:') {
         base = "http://" + window.location.host + window.location.pathname.replace('index.html', '');
     } else {
	 base = window.location.host + window.location.pathname.replace('index.html', '');         
     }

     options = {
         "0": [
             {
                 "id": "AwardArea",
                 "prop": "",
                 "icon": base + "/etc/data2/icons/PredefinedArea.png",
                 "name": "Award net areas",
                 "desc": "",
                 "cnt": 468
             },
             {
                 "id": "BAA",
                 "prop": "",
                 "icon": base + "/etc/data2/icons/License.png",
                 "name": "Business Arrangement Area",
                 "desc": "Business arrangement areas on the Norwegian continental shelf, with complete history for each business area.",
                 "cnt": 49
             },
             {
                 "id": "BAAArea",
                 "prop": "",
                 "icon": base + "/etc/data2/icons/PredefinedArea.png",
                 "name": "Business Arrangement Area Area",
                 "desc": "Business arrangement areas with complete history for each area.",
                 "cnt": 580
             },
             {
                 "id": "Block",
                 "prop": "",
                 "icon": base + "/etc/data2/icons/PredefinedArea.png",
                 "name": "Block",
                 "desc": "",
                 "cnt": 395
             },
             {
                 "id": "Company",
                 "prop": "",
                 "icon": base + "/etc/data2/icons/Company.png",
                 "name": "Company",
                 "desc": "Companies on the Norwegian continental shelf, with complete history for each company.",
                 "cnt": 532
             },
             {
                 "id": "DevelopmentWellbore",
                 "prop": "",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Development Wellbore",
                 "desc": "",
                 "cnt": 3894
             },
             {
                 "id": "DiscoveryArea",
                 "prop": "",
                 "icon": base + "/etc/data2/icons/Area.png",
                 "name": "Discovery Area",
                 "desc": "Discovery outlines - including field outlines.",
                 "cnt": 392
             },
             {
                 "id": "ExplorationWellbore",
                 "prop": "",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Exploration Wellbore",
                 "desc": "",
                 "cnt": 1566
             },
             {
                 "id": "Field",
                 "prop": "",
                 "icon": base + "/etc/data2/icons/Field.png",
                 "name": "Field",
                 "desc": "Fields on the Norwegian continental shelf.",
                 "cnt": 101
             },
             {
                 "id": "FieldArea",
                 "prop": "",
                 "icon": base + "/etc/data2/icons/Area.png",
                 "name": "Field Area",
                 "desc": "",
                 "cnt": 199
             },
             {
                 "id": "FixedFacility",
                 "prop": "",
                 "icon": base + "/etc/data2/icons/Facility.png",
                 "name": "Fixed Facility",
                 "desc": "'Permanently placed facility' is a generic term for all facilities that are placed on a field permanently. Floating production facilities, which in principle are mobile, come under this definition as they are meant to be permanently placed on the field.",
                 "cnt": 647
             },
             {
                 "id": "LithostratigraphicUnit",
                 "prop": "",
                 "icon": base + "/etc/data2/icons/StratigraphicUnit.png",
                 "name": "Lithostratigrapic Unit",
                 "desc": "",
                 "cnt": 173
             },
             {
                 "id": "MainArea",
                 "prop": "",
                 "icon": base + "/etc/data2/icons/Area.png",
                 "name": "Main Gross Area",
                 "desc": "",
                 "cnt": 3
             },
             {
                 "id": "MoveableFacility",
                 "prop": "",
                 "icon": base + "/etc/data2/icons/Facility.png",
                 "name": "Moveable Facility",
                 "desc": "Mobile facilities are facilities not meant to be permanently placed on the field during the lifetime of the field, for example mobile drilling units.",
                 "cnt": 204
             },
             {
                 "id": "Pipeline",
                 "prop": "",
                 "icon": base + "/etc/data2/icons/Facility.png",
                 "name": "Pipeline",
                 "desc": "",
                 "cnt": 59
             },
             {
                 "id": "ProductionLicence",
                 "prop": "",
                 "icon": base + "/etc/data2/icons/License.png",
                 "name": "Production Licence",
                 "desc": "Production licences on the Norwegian continental shelf, with complete history for each licence.",
                 "cnt": 910
             },
             {
                 "id": "ProductionLicenceAreaSplitByBlock",
                 "prop": "",
                 "icon": base + "/etc/data2/icons/PredefinedArea.png",
                 "name": "Production Licence Area",
                 "desc": "",
                 "cnt": 2899
             },
             {
                 "id": "Quadrant",
                 "prop": "",
                 "icon": base + "/etc/data2/icons/PredefinedArea.png",
                 "name": "Quadrant",
                 "desc": "",
                 "cnt": 133
             },
             {
                 "id": "SeismicSurvey",
                 "prop": "",
                 "icon": base + "/etc/data2/icons/SeismicSurvey.png",
                 "name": "Seismic Surveys",
                 "desc": "",
                 "cnt": 3359
             },
             {
                 "id": "ShallowWellbore",
                 "prop": "",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Shallow Wellbore",
                 "desc": "",
                 "cnt": 841
             },
             {
                 "id": "TUFacility",
                 "prop": "",
                 "icon": base + "/etc/data2/icons/Facility.png",
                 "name": "Transportation and Utilization Facilities",
                 "desc": "",
                 "cnt": 51
             },
             {
                 "id": "Well",
                 "prop": "",
                 "icon": base + "/etc/data2/icons/Well.png",
                 "name": "Well",
                 "desc": "",
                 "cnt": 4306
             },
             {
                 "id": "Wellbore",
                 "prop": "",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Wellbore",
                 "desc": "",
                 "cnt": 6303
             }
         ],
         "AwardArea": [
             {
                 "id": "Block",
                 "prop": "blockLocation",
                 "icon": base + "/etc/data2/icons/PredefinedArea.png",
                 "name": "Block",
                 "desc": "block location",
                 "cnt": 277
             },
             {
                 "id": "Quadrant",
                 "prop": "quadrantLocation",
                 "icon": base + "/etc/data2/icons/PredefinedArea.png",
                 "name": "Quadrant",
                 "desc": "quadrant location",
                 "cnt": 448
             }
         ],
         "BAA": [
             {
                 "id": "Company",
                 "prop": "baaOperatorCompany",
                 "icon": base + "/etc/data2/icons/Company.png",
                 "name": "Company",
                 "desc": "baa operator company",
                 "cnt": 37
             },
             {
                 "id": "BAAArea",
                 "prop": "^hasGeometryFeature",
                 "icon": base + "/etc/data2/icons/PredefinedArea.png",
                 "name": "Business arrangement areas",
                 "desc": "has geometry feature (inv)",
                 "cnt": 580
             },
             {
                 "id": "Field",
                 "prop": "^fieldOwner",
                 "icon": base + "/etc/data2/icons/Field.png",
                 "name": "Field",
                 "desc": "field owner (inv)",
                 "cnt": 40
             }
         ],
         "BAAArea": [
             {
                 "id": "BAA",
                 "prop": "hasGeometryFeature",
                 "icon": base + "/etc/data2/icons/License.png",
                 "name": "Business Arrangement Area: Operators",
                 "desc": "has geometry feature",
                 "cnt": 580
             },
             {
                 "id": "Block",
                 "prop": "blockLocation",
                 "icon": base + "/etc/data2/icons/PredefinedArea.png",
                 "name": "Block",
                 "desc": "block location",
                 "cnt": 228
             }
         ],
         "Block": [
             {
                 "id": "AwardArea",
                 "prop": "^blockLocation",
                 "icon": base + "/etc/data2/icons/PredefinedArea.png",
                 "name": "APA (Awards in predefined areas) net areas.",
                 "desc": "block location (inv)",
                 "cnt": 277
             },
             {
                 "id": "BAAArea",
                 "prop": "^blockLocation",
                 "icon": base + "/etc/data2/icons/PredefinedArea.png",
                 "name": "Business Arrangement Area: Area",
                 "desc": "block location (inv)",
                 "cnt": 228
             },
             {
                 "id": "ProductionLicenceAreaSplitByBlock",
                 "prop": "^blockLocation",
                 "icon": base + "/etc/data2/icons/PredefinedArea.png",
                 "name": "Production Licence Area",
                 "desc": "block location (inv)",
                 "cnt": 2183
             },
             {
                 "id": "DevelopmentWellbore",
                 "prop": "containsWellbore",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Development Wellbore",
                 "desc": "contains wellbore",
                 "cnt": 3894
             },
             {
                 "id": "ExplorationWellbore",
                 "prop": "containsWellbore",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Exploration Wellbore",
                 "desc": "contains wellbore",
                 "cnt": 1566
             },
             {
                 "id": "Quadrant",
                 "prop": "quadrantLocation",
                 "icon": base + "/etc/data2/icons/PredefinedArea.png",
                 "name": "Quadrant",
                 "desc": "quadrant location",
                 "cnt": 395
             },
             {
                 "id": "ShallowWellbore",
                 "prop": "containsWellbore",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Shallow Wellbore",
                 "desc": "contains wellbore",
                 "cnt": 841
             },
             {
                 "id": "Wellbore",
                 "prop": "containsWellbore",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Wellbore",
                 "desc": "contains wellbore",
                 "cnt": 6301
             }
         ],
         "Company": [
             {
                 "id": "BAA",
                 "prop": "^baaOperatorCompany",
                 "icon": base + "/etc/data2/icons/License.png",
                 "name": "Business Arrangement Area",
                 "desc": "baa operator company (inv)",
                 "cnt": 37
             },
             {
                 "id": "DevelopmentWellbore",
                 "prop": "^drillingOperatorCompany",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Development Wellbore",
                 "desc": "drilling operator company (inv)",
                 "cnt": 3894
             },
             {
                 "id": "ExplorationWellbore",
                 "prop": "^drillingOperatorCompany",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Exploration Wellbore",
                 "desc": "drilling operator company (inv)",
                 "cnt": 1574
             },
             {
                 "id": "Field",
                 "prop": "^currentFieldOperator",
                 "icon": base + "/etc/data2/icons/Field.png",
                 "name": "Field",
                 "desc": "current field operator (inv)",
                 "cnt": 99
             },
             {
                 "id": "MoveableFacility",
                 "prop": "^currentResponsibleCompany",
                 "icon": base + "/etc/data2/icons/Facility.png",
                 "name": "Moveable Facility",
                 "desc": "current responsible company (inv)",
                 "cnt": 191
             },
             {
                 "id": "Pipeline",
                 "prop": "^pipelineOperator",
                 "icon": base + "/etc/data2/icons/Facility.png",
                 "name": "Pipeline",
                 "desc": "pipeline operator (inv)",
                 "cnt": 58
             },
             {
                 "id": "ProductionLicenceAreaSplitByBlock",
                 "prop": "^lastOperatorCompany",
                 "icon": base + "/etc/data2/icons/PredefinedArea.png",
                 "name": "Production Licence Area",
                 "desc": "last operator company (inv)",
                 "cnt": 2899
             },
             {
                 "id": "SeismicSurvey",
                 "prop": "^reportingCompany",
                 "icon": base + "/etc/data2/icons/SeismicSurvey.png",
                 "name": "Seismic Surveys",
                 "desc": "reporting company (inv)",
                 "cnt": 3369
             },
             {
                 "id": "Wellbore",
                 "prop": "^drillingOperatorCompany",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Wellbore",
                 "desc": "drilling operator company (inv)",
                 "cnt": 5468
             }
         ],
         "DevelopmentWellbore": [
             {
                 "id": "Block",
                 "prop": "^containsWellbore",
                 "icon": base + "/etc/data2/icons/PredefinedArea.png",
                 "name": "Block",
                 "desc": "contains wellbore (inv)",
                 "cnt": 3894
             },
             {
                 "id": "ExplorationWellbore",
                 "prop": "^reclassedFromWellbore",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Exploration Wellbore",
                 "desc": "reclassed from wellbore (inv)",
                 "cnt": 48
             },
             {
                 "id": "Field",
                 "prop": "^discoveryWellbore",
                 "icon": base + "/etc/data2/icons/Field.png",
                 "name": "Field",
                 "desc": "discovery wellbore (inv)",
                 "cnt": 1
             },
             {
                 "id": "Wellbore",
                 "prop": "^reclassedFromWellbore",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Wellbore",
                 "desc": "reclassed from wellbore (inv)",
                 "cnt": 48
             },
             {
                 "id": "Company",
                 "prop": "drillingOperatorCompany",
                 "icon": base + "/etc/data2/icons/Company.png",
                 "name": "Company",
                 "desc": "drilling operator company",
                 "cnt": 3894
             },
             {
                 "id": "ExplorationWellbore",
                 "prop": "reclassedFromWellbore",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Exploration Wellbore",
                 "desc": "reclassed from wellbore",
                 "cnt": 47
             },
             {
                 "id": "Field",
                 "prop": "developmentWellboreForField",
                 "icon": base + "/etc/data2/icons/Field.png",
                 "name": "Field",
                 "desc": "development wellbore for field",
                 "cnt": 3894
             },
             {
                 "id": "FixedFacility",
                 "prop": "drillingFacility",
                 "icon": base + "/etc/data2/icons/Facility.png",
                 "name": "Fixed Facility",
                 "desc": "drilling facility",
                 "cnt": 2147
             },
             {
                 "id": "FixedFacility",
                 "prop": "productionFacility",
                 "icon": base + "/etc/data2/icons/Facility.png",
                 "name": "Fixed Facility",
                 "desc": "production facility",
                 "cnt": 3844
             },
             {
                 "id": "MoveableFacility",
                 "prop": "productionFacility",
                 "icon": base + "/etc/data2/icons/Facility.png",
                 "name": "Moveable Facility",
                 "desc": "production facility",
                 "cnt": 17
             },
             {
                 "id": "MoveableFacility",
                 "prop": "drillingFacility",
                 "icon": base + "/etc/data2/icons/Facility.png",
                 "name": "Moveable Facility",
                 "desc": "drilling facility",
                 "cnt": 1746
             },
             {
                 "id": "ProductionLicence",
                 "prop": "developmentWellboreForLicence",
                 "icon": base + "/etc/data2/icons/License.png",
                 "name": "Production Licence",
                 "desc": "development wellbore for licence",
                 "cnt": 3894
             },
             {
                 "id": "Well",
                 "prop": "belongsToWell",
                 "icon": base + "/etc/data2/icons/Well.png",
                 "name": "Well",
                 "desc": "belongs to well",
                 "cnt": 3894
             },
             {
                 "id": "Wellbore",
                 "prop": "reclassedFromWellbore",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Wellbore",
                 "desc": "reclassed from wellbore",
                 "cnt": 47
             }
         ],
         "DiscoveryArea": [
             {
                 "id": "Field",
                 "prop": "hasGeometryFeature",
                 "icon": base + "/etc/data2/icons/Field.png",
                 "name": "Field",
                 "desc": "has geometry feature",
                 "cnt": 199
             }
         ],
         "ExplorationWellbore": [
             {
                 "id": "Company",
                 "prop": "drillingOperatorCompany",
                 "icon": base + "/etc/data2/icons/Company.png",
                 "name": "Company",
                 "desc": "drilling operator company",
                 "cnt": 1574
             },
             {
                 "id": "DevelopmentWellbore",
                 "prop": "reclassedFromWellbore",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Development Wellbore",
                 "desc": "reclassed from wellbore",
                 "cnt": 48
             },
             {
                 "id": "ExplorationWellbore",
                 "prop": "reclassedFromWellbore",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Exploration Wellbore",
                 "desc": "reclassed from wellbore",
                 "cnt": 1
             },
             {
                 "id": "Field",
                 "prop": "explorationWellboreForField",
                 "icon": base + "/etc/data2/icons/Field.png",
                 "name": "Field",
                 "desc": "exploration wellbore for field",
                 "cnt": 680
             },
             {
                 "id": "FixedFacility",
                 "prop": "drillingFacility",
                 "icon": base + "/etc/data2/icons/Facility.png",
                 "name": "Fixed Facility",
                 "desc": "drilling facility",
                 "cnt": 30
             },
             {
                 "id": "LithostratigraphicUnit",
                 "prop": "wellboreFormationTD",
                 "icon": base + "/etc/data2/icons/StratigraphicUnit.png",
                 "name": "Lithostratigrapic Unit",
                 "desc": "wellbore formationtd",
                 "cnt": 1303
             },
             {
                 "id": "LithostratigraphicUnit",
                 "prop": "wellboreFormationHcLevel2",
                 "icon": base + "/etc/data2/icons/StratigraphicUnit.png",
                 "name": "Lithostratigrapic Unit",
                 "desc": "wellbore formation hc level2",
                 "cnt": 278
             },
             {
                 "id": "LithostratigraphicUnit",
                 "prop": "wellboreFormationHcLevel3",
                 "icon": base + "/etc/data2/icons/StratigraphicUnit.png",
                 "name": "Lithostratigrapic Unit",
                 "desc": "wellbore formation hc level3",
                 "cnt": 39
             },
             {
                 "id": "LithostratigraphicUnit",
                 "prop": "wellboreFormationHcLevel1",
                 "icon": base + "/etc/data2/icons/StratigraphicUnit.png",
                 "name": "Lithostratigrapic Unit",
                 "desc": "wellbore formation hc level1",
                 "cnt": 741
             },
             {
                 "id": "MoveableFacility",
                 "prop": "drillingFacility",
                 "icon": base + "/etc/data2/icons/Facility.png",
                 "name": "Moveable Facility",
                 "desc": "drilling facility",
                 "cnt": 1536
             },
             {
                 "id": "ProductionLicence",
                 "prop": "explorationWellboreForLicence",
                 "icon": base + "/etc/data2/icons/License.png",
                 "name": "Production Licence",
                 "desc": "exploration wellbore for licence",
                 "cnt": 1566
             },
             {
                 "id": "ProductionLicence",
                 "prop": "wellboreForLicence",
                 "icon": base + "/etc/data2/icons/License.png",
                 "name": "Production Licence",
                 "desc": "wellbore for licence",
                 "cnt": 1566
             },
             {
                 "id": "Well",
                 "prop": "belongsToWell",
                 "icon": base + "/etc/data2/icons/Well.png",
                 "name": "Well",
                 "desc": "belongs to well",
                 "cnt": 1566
             },
             {
                 "id": "Wellbore",
                 "prop": "reclassedFromWellbore",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Wellbore",
                 "desc": "reclassed from wellbore",
                 "cnt": 49
             },
             {
                 "id": "Block",
                 "prop": "^containsWellbore",
                 "icon": base + "/etc/data2/icons/PredefinedArea.png",
                 "name": "Block",
                 "desc": "contains wellbore (inv)",
                 "cnt": 1566
             },
             {
                 "id": "DevelopmentWellbore",
                 "prop": "^reclassedFromWellbore",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Development Wellbore",
                 "desc": "reclassed from wellbore (inv)",
                 "cnt": 47
             },
             {
                 "id": "ExplorationWellbore",
                 "prop": "^reclassedFromWellbore",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Exploration Wellbore",
                 "desc": "reclassed from wellbore (inv)",
                 "cnt": 1
             },
             {
                 "id": "Field",
                 "prop": "^discoveryWellbore",
                 "icon": base + "/etc/data2/icons/Field.png",
                 "name": "Field",
                 "desc": "discovery wellbore (inv)",
                 "cnt": 97
             },
             {
                 "id": "Wellbore",
                 "prop": "^reclassedFromWellbore",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Wellbore",
                 "desc": "reclassed from wellbore (inv)",
                 "cnt": 48
             }
         ],
         "Field": [
             {
                 "id": "BAA",
                 "prop": "fieldOwner",
                 "icon": base + "/etc/data2/icons/License.png",
                 "name": "Business Arrangement Area",
                 "desc": "field owner",
                 "cnt": 40
             },
             {
                 "id": "Company",
                 "prop": "currentFieldOperator",
                 "icon": base + "/etc/data2/icons/Company.png",
                 "name": "Company",
                 "desc": "current field operator",
                 "cnt": 99
             },
             {
                 "id": "DevelopmentWellbore",
                 "prop": "discoveryWellbore",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Development Wellbore",
                 "desc": "discovery wellbore",
                 "cnt": 1
             },
             {
                 "id": "ExplorationWellbore",
                 "prop": "discoveryWellbore",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Exploration Wellbore",
                 "desc": "discovery wellbore",
                 "cnt": 97
             },
             {
                 "id": "ProductionLicence",
                 "prop": "currentFieldOwner",
                 "icon": base + "/etc/data2/icons/License.png",
                 "name": "Production Licence",
                 "desc": "current field owner",
                 "cnt": 59
             },
             {
                 "id": "ProductionLicence",
                 "prop": "fieldOwner",
                 "icon": base + "/etc/data2/icons/License.png",
                 "name": "Production Licence",
                 "desc": "field owner",
                 "cnt": 59
             },
             {
                 "id": "Wellbore",
                 "prop": "discoveryWellbore",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Wellbore",
                 "desc": "discovery wellbore",
                 "cnt": 98
             },
             {
                 "id": "DevelopmentWellbore",
                 "prop": "^developmentWellboreForField",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Development Wellbore",
                 "desc": "development wellbore for field (inv)",
                 "cnt": 3894
             },
             {
                 "id": "DiscoveryArea",
                 "prop": "^hasGeometryFeature",
                 "icon": base + "/etc/data2/icons/Area.png",
                 "name": "Discovery outlines - including field outlines.",
                 "desc": "has geometry feature (inv)",
                 "cnt": 199
             },
             {
                 "id": "ExplorationWellbore",
                 "prop": "^explorationWellboreForField",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Exploration Wellbore",
                 "desc": "exploration wellbore for field (inv)",
                 "cnt": 680
             },
             {
                 "id": "FieldArea",
                 "prop": "^hasGeometryFeature",
                 "icon": base + "/etc/data2/icons/Area.png",
                 "name": "Field Area",
                 "desc": "has geometry feature (inv)",
                 "cnt": 199
             },
             {
                 "id": "FixedFacility",
                 "prop": "^belongsTo",
                 "icon": base + "/etc/data2/icons/Facility.png",
                 "name": "Fixed Facility",
                 "desc": "belongs to (inv)",
                 "cnt": 553
             },
             {
                 "id": "Wellbore",
                 "prop": "^developmentWellboreForField",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Wellbore",
                 "desc": "development wellbore for field (inv)",
                 "cnt": 3894
             },
             {
                 "id": "Wellbore",
                 "prop": "^explorationWellboreForField",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Wellbore",
                 "desc": "exploration wellbore for field (inv)",
                 "cnt": 680
             }
         ],
         "FieldArea": [
             {
                 "id": "Field",
                 "prop": "hasGeometryFeature",
                 "icon": base + "/etc/data2/icons/Field.png",
                 "name": "Field",
                 "desc": "has geometry feature",
                 "cnt": 199
             }
         ],
         "FixedFacility": [
             {
                 "id": "Field",
                 "prop": "belongsTo",
                 "icon": base + "/etc/data2/icons/Field.png",
                 "name": "Field",
                 "desc": "belongs to",
                 "cnt": 553
             },
             {
                 "id": "DevelopmentWellbore",
                 "prop": "^drillingFacility",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Development Wellbore",
                 "desc": "drilling facility (inv)",
                 "cnt": 2147
             },
             {
                 "id": "DevelopmentWellbore",
                 "prop": "^productionFacility",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Development Wellbore",
                 "desc": "production facility (inv)",
                 "cnt": 3844
             },
             {
                 "id": "ExplorationWellbore",
                 "prop": "^drillingFacility",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Exploration Wellbore",
                 "desc": "drilling facility (inv)",
                 "cnt": 30
             },
             {
                 "id": "Pipeline",
                 "prop": "^pipelineFromFacility",
                 "icon": base + "/etc/data2/icons/Facility.png",
                 "name": "Pipeline",
                 "desc": "pipeline from facility (inv)",
                 "cnt": 59
             },
             {
                 "id": "Pipeline",
                 "prop": "^pipelineToFacility",
                 "icon": base + "/etc/data2/icons/Facility.png",
                 "name": "Pipeline",
                 "desc": "pipeline to facility (inv)",
                 "cnt": 59
             },
             {
                 "id": "Wellbore",
                 "prop": "^drillingFacility",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Wellbore",
                 "desc": "drilling facility (inv)",
                 "cnt": 2177
             },
             {
                 "id": "Wellbore",
                 "prop": "^productionFacility",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Wellbore",
                 "desc": "production facility (inv)",
                 "cnt": 3844
             }
         ],
         "LithostratigraphicUnit": [
             {
                 "id": "LithostratigraphicUnit",
                 "prop": "lithoStratParent",
                 "icon": base + "/etc/data2/icons/StratigraphicUnit.png",
                 "name": "Lithostratigrapic Unit",
                 "desc": "litho strat parent",
                 "cnt": 136
             },
             {
                 "id": "ExplorationWellbore",
                 "prop": "^wellboreFormationTD",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Exploration Wellbore",
                 "desc": "wellbore formationtd (inv)",
                 "cnt": 1303
             },
             {
                 "id": "ExplorationWellbore",
                 "prop": "^wellboreFormationHcLevel2",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Exploration Wellbore",
                 "desc": "wellbore formation hc level2 (inv)",
                 "cnt": 278
             },
             {
                 "id": "ExplorationWellbore",
                 "prop": "^wellboreFormationHcLevel3",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Exploration Wellbore",
                 "desc": "wellbore formation hc level3 (inv)",
                 "cnt": 39
             },
             {
                 "id": "ExplorationWellbore",
                 "prop": "^wellboreFormationHcLevel1",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Exploration Wellbore",
                 "desc": "wellbore formation hc level1 (inv)",
                 "cnt": 741
             },
             {
                 "id": "LithostratigraphicUnit",
                 "prop": "^lithoStratParent",
                 "icon": base + "/etc/data2/icons/StratigraphicUnit.png",
                 "name": "Lithostratigrapic Unit",
                 "desc": "litho strat parent (inv)",
                 "cnt": 136
             },
             {
                 "id": "Wellbore",
                 "prop": "^wellboreFormationTD",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Wellbore",
                 "desc": "wellbore formationtd (inv)",
                 "cnt": 1303
             },
             {
                 "id": "Wellbore",
                 "prop": "^wellboreFormationHcLevel2",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Wellbore",
                 "desc": "wellbore formation hc level2 (inv)",
                 "cnt": 278
             },
             {
                 "id": "Wellbore",
                 "prop": "^wellboreFormationHcLevel3",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Wellbore",
                 "desc": "wellbore formation hc level3 (inv)",
                 "cnt": 39
             },
             {
                 "id": "Wellbore",
                 "prop": "^wellboreFormationHcLevel1",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Wellbore",
                 "desc": "wellbore formation hc level1 (inv)",
                 "cnt": 741
             }
         ],
         "MainArea": [],
         "MoveableFacility": [
             {
                 "id": "Company",
                 "prop": "currentResponsibleCompany",
                 "icon": base + "/etc/data2/icons/Company.png",
                 "name": "Company",
                 "desc": "current responsible company",
                 "cnt": 191
             },
             {
                 "id": "DevelopmentWellbore",
                 "prop": "^productionFacility",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Development Wellbore",
                 "desc": "production facility (inv)",
                 "cnt": 17
             },
             {
                 "id": "DevelopmentWellbore",
                 "prop": "^drillingFacility",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Development Wellbore",
                 "desc": "drilling facility (inv)",
                 "cnt": 1746
             },
             {
                 "id": "ExplorationWellbore",
                 "prop": "^drillingFacility",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Exploration Wellbore",
                 "desc": "drilling facility (inv)",
                 "cnt": 1536
             },
             {
                 "id": "Wellbore",
                 "prop": "^productionFacility",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Wellbore",
                 "desc": "production facility (inv)",
                 "cnt": 17
             },
             {
                 "id": "Wellbore",
                 "prop": "^drillingFacility",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Wellbore",
                 "desc": "drilling facility (inv)",
                 "cnt": 3282
             }
         ],
         "Pipeline": [
             {
                 "id": "Company",
                 "prop": "pipelineOperator",
                 "icon": base + "/etc/data2/icons/Company.png",
                 "name": "Company",
                 "desc": "pipeline operator",
                 "cnt": 58
             },
             {
                 "id": "FixedFacility",
                 "prop": "pipelineFromFacility",
                 "icon": base + "/etc/data2/icons/Facility.png",
                 "name": "Fixed Facility",
                 "desc": "pipeline from facility",
                 "cnt": 59
             },
             {
                 "id": "FixedFacility",
                 "prop": "pipelineToFacility",
                 "icon": base + "/etc/data2/icons/Facility.png",
                 "name": "Fixed Facility",
                 "desc": "pipeline to facility",
                 "cnt": 59
             }
         ],
         "ProductionLicence": [
             {
                 "id": "DevelopmentWellbore",
                 "prop": "^developmentWellboreForLicence",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Development Wellbore",
                 "desc": "development wellbore for licence (inv)",
                 "cnt": 3894
             },
             {
                 "id": "DevelopmentWellbore",
                 "prop": "^wellboreForLicence",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Development Wellbore",
                 "desc": "wellbore for licence (inv)",
                 "cnt": 3894
             },
             {
                 "id": "ExplorationWellbore",
                 "prop": "^explorationWellboreForLicence",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Exploration Wellbore",
                 "desc": "exploration wellbore for licence (inv)",
                 "cnt": 1566
             },
             {
                 "id": "ExplorationWellbore",
                 "prop": "^wellboreForLicence",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Exploration Wellbore",
                 "desc": "wellbore for licence (inv)",
                 "cnt": 1566
             },
             {
                 "id": "Field",
                 "prop": "^currentFieldOwner",
                 "icon": base + "/etc/data2/icons/Field.png",
                 "name": "Field",
                 "desc": "current field owner (inv)",
                 "cnt": 59
             },
             {
                 "id": "ProductionLicenceAreaSplitByBlock",
                 "prop": "^hasGeographyFeature",
                 "icon": base + "/etc/data2/icons/PredefinedArea.png",
                 "name": "Production Licence Area",
                 "desc": "has geography feature (inv)",
                 "cnt": 2899
             },
             {
                 "id": "ShallowWellbore",
                 "prop": "^shallowWellboreForLicence",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Shallow Wellbore",
                 "desc": "shallow wellbore for licence (inv)",
                 "cnt": 461
             },
             {
                 "id": "ShallowWellbore",
                 "prop": "^wellboreForLicence",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Shallow Wellbore",
                 "desc": "wellbore for licence (inv)",
                 "cnt": 461
             },
             {
                 "id": "Wellbore",
                 "prop": "^explorationWellboreForLicence",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Wellbore",
                 "desc": "exploration wellbore for licence (inv)",
                 "cnt": 1566
             },
             {
                 "id": "Wellbore",
                 "prop": "^developmentWellboreForLicence",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Wellbore",
                 "desc": "development wellbore for licence (inv)",
                 "cnt": 3894
             },
             {
                 "id": "Wellbore",
                 "prop": "^shallowWellboreForLicence",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Wellbore",
                 "desc": "shallow wellbore for licence (inv)",
                 "cnt": 461
             },
             {
                 "id": "Wellbore",
                 "prop": "^wellboreForLicence",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Wellbore",
                 "desc": "wellbore for licence (inv)",
                 "cnt": 5921
             },
             {
                 "id": "DevelopmentWellbore",
                 "prop": "^developmentWellboreForLicence",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Development Wellbore",
                 "desc": "development wellbore for licence (inv)",
                 "cnt": 3894
             },
             {
                 "id": "DevelopmentWellbore",
                 "prop": "^wellboreForLicence",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Development Wellbore",
                 "desc": "wellbore for licence (inv)",
                 "cnt": 3894
             },
             {
                 "id": "ExplorationWellbore",
                 "prop": "^explorationWellboreForLicence",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Exploration Wellbore",
                 "desc": "exploration wellbore for licence (inv)",
                 "cnt": 1566
             },
             {
                 "id": "ExplorationWellbore",
                 "prop": "^wellboreForLicence",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Exploration Wellbore",
                 "desc": "wellbore for licence (inv)",
                 "cnt": 1566
             },
             {
                 "id": "Field",
                 "prop": "^currentFieldOwner",
                 "icon": base + "/etc/data2/icons/Field.png",
                 "name": "Field",
                 "desc": "current field owner (inv)",
                 "cnt": 59
             },
             {
                 "id": "Field",
                 "prop": "^fieldOwner",
                 "icon": base + "/etc/data2/icons/Field.png",
                 "name": "Field: Reserves",
                 "desc": "field owner (inv)",
                 "cnt": 59
             },
             {
                 "id": "ProductionLicenceAreaSplitByBlock",
                 "prop": "^hasGeographyFeature",
                 "icon": base + "/etc/data2/icons/PredefinedArea.png",
                 "name": "Production Licence Area",
                 "desc": "has geography feature (inv)",
                 "cnt": 2899
             },
             {
                 "id": "ShallowWellbore",
                 "prop": "^shallowWellboreForLicence",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Shallow Wellbore",
                 "desc": "shallow wellbore for licence (inv)",
                 "cnt": 461
             },
             {
                 "id": "ShallowWellbore",
                 "prop": "^wellboreForLicence",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Shallow Wellbore",
                 "desc": "wellbore for licence (inv)",
                 "cnt": 461
             },
             {
                 "id": "Wellbore",
                 "prop": "^explorationWellboreForLicence",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Wellbore",
                 "desc": "exploration wellbore for licence (inv)",
                 "cnt": 1566
             },
             {
                 "id": "Wellbore",
                 "prop": "^developmentWellboreForLicence",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Wellbore",
                 "desc": "development wellbore for licence (inv)",
                 "cnt": 3894
             },
             {
                 "id": "Wellbore",
                 "prop": "^shallowWellboreForLicence",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Wellbore",
                 "desc": "shallow wellbore for licence (inv)",
                 "cnt": 461
             },
             {
                 "id": "Wellbore",
                 "prop": "^wellboreForLicence",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Wellbore",
                 "desc": "wellbore for licence (inv)",
                 "cnt": 5921
             },
             {
                 "id": "DevelopmentWellbore",
                 "prop": "^developmentWellboreForLicence",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Development Wellbore",
                 "desc": "development wellbore for licence (inv)",
                 "cnt": 3894
             },
             {
                 "id": "DevelopmentWellbore",
                 "prop": "^wellboreForLicence",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Development Wellbore",
                 "desc": "wellbore for licence (inv)",
                 "cnt": 3894
             },
             {
                 "id": "ExplorationWellbore",
                 "prop": "^explorationWellboreForLicence",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Exploration Wellbore",
                 "desc": "exploration wellbore for licence (inv)",
                 "cnt": 1566
             },
             {
                 "id": "ExplorationWellbore",
                 "prop": "^wellboreForLicence",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Exploration Wellbore",
                 "desc": "wellbore for licence (inv)",
                 "cnt": 1566
             },
             {
                 "id": "Field",
                 "prop": "^currentFieldOwner",
                 "icon": base + "/etc/data2/icons/Field.png",
                 "name": "Field",
                 "desc": "current field owner (inv)",
                 "cnt": 59
             }
         ],
         "ProductionLicenceAreaSplitByBlock": [
             {
                 "id": "Block",
                 "prop": "blockLocation",
                 "icon": base + "/etc/data2/icons/PredefinedArea.png",
                 "name": "Block",
                 "desc": "block location",
                 "cnt": 2183
             },
             {
                 "id": "Company",
                 "prop": "lastOperatorCompany",
                 "icon": base + "/etc/data2/icons/Company.png",
                 "name": "Company",
                 "desc": "last operator company",
                 "cnt": 2899
             },
             {
                 "id": "ProductionLicence",
                 "prop": "hasGeographyFeature",
                 "icon": base + "/etc/data2/icons/License.png",
                 "name": "Production Licence",
                 "desc": "has geography feature",
                 "cnt": 2899
             }
         ],
         "Quadrant": [
             {
                 "id": "AwardArea",
                 "prop": "^quadrantLocation",
                 "icon": base + "/etc/data2/icons/PredefinedArea.png",
                 "name": "APA (Awards in predefined areas) net areas.",
                 "desc": "quadrant location (inv)",
                 "cnt": 448
             },
             {
                 "id": "Block",
                 "prop": "^quadrantLocation",
                 "icon": base + "/etc/data2/icons/PredefinedArea.png",
                 "name": "Block",
                 "desc": "quadrant location (inv)",
                 "cnt": 395
             }
         ],
         "SeismicSurvey": [
             {
                 "id": "Company",
                 "prop": "reportingCompany",
                 "icon": base + "/etc/data2/icons/Company.png",
                 "name": "Company",
                 "desc": "reporting company",
                 "cnt": 3369
             }
         ],
         "ShallowWellbore": [
             {
                 "id": "ProductionLicence",
                 "prop": "shallowWellboreForLicence",
                 "icon": base + "/etc/data2/icons/License.png",
                 "name": "Production Licence",
                 "desc": "shallow wellbore for licence",
                 "cnt": 461
             },
             {
                 "id": "ProductionLicence",
                 "prop": "wellboreForLicence",
                 "icon": base + "/etc/data2/icons/License.png",
                 "name": "Production Licence",
                 "desc": "wellbore for licence",
                 "cnt": 461
             },
             {
                 "id": "Well",
                 "prop": "belongsToWell",
                 "icon": base + "/etc/data2/icons/Well.png",
                 "name": "Well",
                 "desc": "belongs to well",
                 "cnt": 841
             },
             {
                 "id": "Block",
                 "prop": "^containsWellbore",
                 "icon": base + "/etc/data2/icons/PredefinedArea.png",
                 "name": "Block",
                 "desc": "contains wellbore (inv)",
                 "cnt": 841
             }
         ],
         "TUFacility": [],
         "Well": [
             {
                 "id": "DevelopmentWellbore",
                 "prop": "^belongsToWell",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Development Wellbore",
                 "desc": "belongs to well (inv)",
                 "cnt": 3894
             },
             {
                 "id": "ExplorationWellbore",
                 "prop": "^belongsToWell",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Exploration Wellbore",
                 "desc": "belongs to well (inv)",
                 "cnt": 1566
             },
             {
                 "id": "ShallowWellbore",
                 "prop": "^belongsToWell",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Shallow Wellbore",
                 "desc": "belongs to well (inv)",
                 "cnt": 841
             },
             {
                 "id": "Wellbore",
                 "prop": "^belongsToWell",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Wellbore",
                 "desc": "belongs to well (inv)",
                 "cnt": 6303
             }
         ],
         "Wellbore": [
             {
                 "id": "Block",
                 "prop": "^containsWellbore",
                 "icon": base + "/etc/data2/icons/PredefinedArea.png",
                 "name": "Block",
                 "desc": "contains wellbore (inv)",
                 "cnt": 6301
             },
             {
                 "id": "DevelopmentWellbore",
                 "prop": "^reclassedFromWellbore",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Development Wellbore",
                 "desc": "reclassed from wellbore (inv)",
                 "cnt": 47
             },
             {
                 "id": "ExplorationWellbore",
                 "prop": "^reclassedFromWellbore",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Exploration Wellbore",
                 "desc": "reclassed from wellbore (inv)",
                 "cnt": 49
             },
             {
                 "id": "Field",
                 "prop": "^discoveryWellbore",
                 "icon": base + "/etc/data2/icons/Field.png",
                 "name": "Field",
                 "desc": "discovery wellbore (inv)",
                 "cnt": 98
             },
             {
                 "id": "Wellbore",
                 "prop": "^reclassedFromWellbore",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Wellbore",
                 "desc": "reclassed from wellbore (inv)",
                 "cnt": 96
             },
             {
                 "id": "Company",
                 "prop": "drillingOperatorCompany",
                 "icon": base + "/etc/data2/icons/Company.png",
                 "name": "Company",
                 "desc": "drilling operator company",
                 "cnt": 5468
             },
             {
                 "id": "DevelopmentWellbore",
                 "prop": "reclassedFromWellbore",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Development Wellbore",
                 "desc": "reclassed from wellbore",
                 "cnt": 48
             },
             {
                 "id": "ExplorationWellbore",
                 "prop": "reclassedFromWellbore",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Exploration Wellbore",
                 "desc": "reclassed from wellbore",
                 "cnt": 48
             },
             {
                 "id": "Field",
                 "prop": "developmentWellboreForField",
                 "icon": base + "/etc/data2/icons/Field.png",
                 "name": "Field",
                 "desc": "development wellbore for field",
                 "cnt": 3894
             },
             {
                 "id": "Field",
                 "prop": "explorationWellboreForField",
                 "icon": base + "/etc/data2/icons/Field.png",
                 "name": "Field",
                 "desc": "exploration wellbore for field",
                 "cnt": 680
             },
             {
                 "id": "FixedFacility",
                 "prop": "drillingFacility",
                 "icon": base + "/etc/data2/icons/Facility.png",
                 "name": "Fixed Facility",
                 "desc": "drilling facility",
                 "cnt": 2177
             },
             {
                 "id": "FixedFacility",
                 "prop": "productionFacility",
                 "icon": base + "/etc/data2/icons/Facility.png",
                 "name": "Fixed Facility",
                 "desc": "production facility",
                 "cnt": 3844
             },
             {
                 "id": "LithostratigraphicUnit",
                 "prop": "wellboreFormationTD",
                 "icon": base + "/etc/data2/icons/StratigraphicUnit.png",
                 "name": "Lithostratigrapic Unit",
                 "desc": "wellbore formationtd",
                 "cnt": 1303
             },
             {
                 "id": "LithostratigraphicUnit",
                 "prop": "wellboreFormationHcLevel2",
                 "icon": base + "/etc/data2/icons/StratigraphicUnit.png",
                 "name": "Lithostratigrapic Unit",
                 "desc": "wellbore formation hc level2",
                 "cnt": 278
             },
             {
                 "id": "LithostratigraphicUnit",
                 "prop": "wellboreFormationHcLevel3",
                 "icon": base + "/etc/data2/icons/StratigraphicUnit.png",
                 "name": "Lithostratigrapic Unit",
                 "desc": "wellbore formation hc level3",
                 "cnt": 39
             },
             {
                 "id": "LithostratigraphicUnit",
                 "prop": "wellboreFormationHcLevel1",
                 "icon": base + "/etc/data2/icons/StratigraphicUnit.png",
                 "name": "Lithostratigrapic Unit",
                 "desc": "wellbore formation hc level1",
                 "cnt": 741
             },
             {
                 "id": "MoveableFacility",
                 "prop": "productionFacility",
                 "icon": base + "/etc/data2/icons/Facility.png",
                 "name": "Moveable Facility",
                 "desc": "production facility",
                 "cnt": 17
             },
             {
                 "id": "MoveableFacility",
                 "prop": "drillingFacility",
                 "icon": base + "/etc/data2/icons/Facility.png",
                 "name": "Moveable Facility",
                 "desc": "drilling facility",
                 "cnt": 3282
             },
             {
                 "id": "ProductionLicence",
                 "prop": "explorationWellboreForLicence",
                 "icon": base + "/etc/data2/icons/License.png",
                 "name": "Production Licence",
                 "desc": "exploration wellbore for licence",
                 "cnt": 1566
             },
             {
                 "id": "ProductionLicence",
                 "prop": "developmentWellboreForLicence",
                 "icon": base + "/etc/data2/icons/License.png",
                 "name": "Production Licence",
                 "desc": "development wellbore for licence",
                 "cnt": 3894
             },
             {
                 "id": "ProductionLicence",
                 "prop": "shallowWellboreForLicence",
                 "icon": base + "/etc/data2/icons/License.png",
                 "name": "Production Licence",
                 "desc": "shallow wellbore for licence",
                 "cnt": 461
             },
             {
                 "id": "ProductionLicence",
                 "prop": "wellboreForLicence",
                 "icon": base + "/etc/data2/icons/License.png",
                 "name": "Production Licence",
                 "desc": "wellbore for licence",
                 "cnt": 5921
             },
             {
                 "id": "Well",
                 "prop": "belongsToWell",
                 "icon": base + "/etc/data2/icons/Well.png",
                 "name": "Well",
                 "desc": "belongs to well",
                 "cnt": 6303
             },
             {
                 "id": "Wellbore",
                 "prop": "reclassedFromWellbore",
                 "icon": base + "/etc/data2/icons/Wellbore.png",
                 "name": "Wellbore",
                 "desc": "reclassed from wellbore",
                 "cnt": 96
             }
         ]
     };

     window.getData = function(id) {
         return { options: options[id] };
     };

 }(window));


