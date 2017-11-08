function ProcessSparql() {
    // Clean Sparql string by removing html tags
    var strSparql = $("#queryarea").text();
    var startPrefixIndex = strSparql.indexOf("PREFIX");
    // Comments part in query
    var strComments = strSparql.substr(0, startPrefixIndex);
    // Query part in query
    var strQuery = strSparql.substr(startPrefixIndex, strSparql.length);
    // Processing
    var validationMessages = new Array();
    var statusAndJson = ParseSparqlToJson(strQuery);
    if (statusAndJson.status == "OK") {
        var jsonForSparql = statusAndJson.jsonForSparql;
        ProcessUndefinedTypes(jsonForSparql)
            .done(
                function() {
                    jsonForSparql = ProcessCycles(jsonForSparql);
                    jsonForSparql = ProcessSimilarTypes(jsonForSparql);
                    // console.log(" --- OJSON --- ");
                    // console.log(JSON.stringify(jsonForSparql,undefined,
                    // 2));
                    ValidateOntology(jsonForSparql, validationMessages)
                        .done(
                            function() {
                                if (validationMessages.length == 0) {
                                    var oJson = RJsonToOJson(jsonForSparql);
                                    ProcessComments(oJson,strComments);
                                    // console.log(" --- RJSON
                                    // --- ");
                                    // console.log(JSON.stringify(oJson,undefined,
                                    // 2));
                                    tree.loadQuery(oJson);
                                    $("#qsm").html("");
                                    //$('#sparql').removeClass(
                                    //    'ui-btn-active');
                                    //$('#sparqlquery').hide();
                                    //$('#infovis').show();
                                    //showTinies();
                                    $("#errorList").empty();
                                } else {
                                    // Show all messages
                                    var validationMessagesList = "<ul data-role='listview'>";
                                    for (var i = 0; i < validationMessages.length; i++) {
                                        validationMessagesList += "<li>" + validationMessages[i] + "</li>";
                                    }
                                    validationMessagesList += "</ul>";
                                    $('#errMsg').show();
                                    $("#errorList")
                                        .html(
                                            validationMessagesList);
                                }
                                // console.log("Done -
                                // ValidateOntology");
                            });
                    // console.log("Done - ProcessUndefinedTypes");
                });
    } else {
        var parseError = "<ul data-role='listview'> <li> " + statusAndJson.status + " </li> </ul>";
        $('#errMsg').show();
        $("#errorList").html(parseError);
    }
}

/*
 * Can be called to convert a correct sparql Json to OJson. function
 * ProcessSparqlSimple(){ var cleanSparql = $("#queryarea").text(); var
 * jsonForSparql = ParseSparqlToJson(cleanSparql); var oJson =
 * RJsonToOJson(jsonForSparql); tree.loadQuery(oJson); $("#qsm").html("");
 * $('#sparql').removeClass('ui-btn-active'); $('#sparqlquery').hide();
 * $('#infovis').show(); }
 */

function ParseSparqlToJson(strSparql) {
    var parseStatusAndJson = new Object();
    var parser1 = require('sparqljs').Parser();
    var message = "OK";
    try {
        parseStatusAndJson["jsonForSparql"] = parser1.parse(strSparql);
    } catch (err) {
        console.log(err.message);
        message = err.message;
    }
    parseStatusAndJson["status"] = message;
    return parseStatusAndJson;
}

function RJsonToOJson(jsonObj) {
    var mainObject = new Object();
    var objArray = new Array();

    var prefixes = jsonObj["prefixes"];
    var variables = jsonObj["variables"];
    var where = jsonObj["where"];
    var groups = jsonObj["groups"];
    var order = jsonObj["order"];

    var conceptVarMappingArray = new Array();
    var attributeVarMappingArray = new Array();
	var variablesAreUserDefined = false;

    var attributeCounter = 1;
    var conceptCounter = 1;

    var typeTriples = GetTriples(where, 'TT');
    var outputTriples = GetTriples(where, 'OT');
    var allConstraints = GetConstraints(where);
    // First Node Processing
    var firstObject = GetFirstObject();
    firstObject.sameNodes = jsonObj.sameNodes;
    firtObject = ProcessAggregates(prefixes, outputTriples, variables, groups,
        order, firstObject);
    // Start Node will be connected to first concept in SPARQL.
    // var firstTripleSubject = typeTriples[0].subject;
    // var firstNodeId = firstTripleSubject.substr(1,
    // firstTripleSubject.length);
    // firstObject.adjacencies[0].nodeTo = firstNodeId;
    firstObject.adjacencies[0].nodeTo = "c1";
    objArray.push(firstObject);

    // Concept by Concept Processing
    for (var i = 0; i < typeTriples.length; i++) {
        var currentObj = new Object();
        var tripleSubject = typeTriples[i].subject;
        var nodeId = tripleSubject.substr(1, tripleSubject.length);
        var nodeIdAuto = "c" + conceptCounter;
        currentObj["id"] = nodeIdAuto;
        // currentObj["id"] = nodeId;
        // Data Object
        var dataObject = new Object();
        var tripleObject = typeTriples[i].object
        dataObject["id"] = tripleObject;
        var nameAndNS = GetNameAndNS(tripleObject, prefixes);
        dataObject["name"] = nameAndNS.name;
        dataObject["label"] = nameAndNS.name;
        dataObject["ns"] = nameAndNS.nspace;
        dataObject["icon"] = '../../icons/' + nameAndNS.name + ".png";
        // dataObject["icon"] =
        // "http://sws.ifi.uio.no/project/optique/qf/interface/widgets/MQbNOptique/etc/data2/icons/"
        // + nameAndNS.name + ".png";
        if (IsConceptVariableAutoGenerated(nodeId)) {
            dataObject["hId"] = nameAndNS.name + "_" + nodeId;
        } else {
            dataObject["hId"] = nodeId;
            var mapObject = new Object();
            mapObject["Orignal"] = nodeId;
            mapObject["Auto"] = nodeIdAuto;
            conceptVarMappingArray.push(mapObject);
			variablesAreUserDefined = true;
        }
        dataObject["$color"] = "#FFFFFF"; // Hard Koded;
        // Output Array
        var outputArray = new Array();
        var attributeTriplesForCurrentSubject = GetAttributeTriplesForCurrentSubject(
            tripleSubject, outputTriples, typeTriples);
        for (var j = 0; j < attributeTriplesForCurrentSubject.length; j++) {
            var objOutput = new Object();
            var tPredicate = attributeTriplesForCurrentSubject[j].predicate;
            objOutput["id"] = tPredicate;
            nameAndNS = GetNameAndNS(tPredicate, prefixes);
            objOutput["name"] = nameAndNS.name;
            objOutput["ns"] = nameAndNS.nspace;
            objOutput["label"] = nameAndNS.name;
            objOutput["type"] = "string"; // Hardcoded -to be fixed
            var tObject = attributeTriplesForCurrentSubject[j].object;
            var attributeId = tObject.substr(1, tObject.length);
            var attributeIdAuto = "a" + attributeCounter;
            objOutput["aId"] = attributeIdAuto;
            if (IsAttributeVariableAutoGenerated(attributeId)) {
                objOutput["hId"] = nameAndNS.name + "_" + attributeId;
            } else {
                objOutput["hId"] = attributeId;
                var mapObject = new Object();
                mapObject["Orignal"] = attributeId;
                mapObject["Auto"] = attributeIdAuto;
                attributeVarMappingArray.push(mapObject);
				variablesAreUserDefined = true;
            }
            outputArray.push(objOutput);
            attributeCounter++;
        }
        dataObject["output"] = outputArray;
        currentObj["data"] = dataObject;
        // Constraints
        var constraintArray = GetConstraintsForCurrentConcept(allConstraints,
            attributeTriplesForCurrentSubject, prefixes);
        UpdateIdsForConstraints(constraintArray, attributeVarMappingArray);
        dataObject["constraint"] = constraintArray;
        // Adjacencies
        var adjacenciesArray = new Array();
        var adjacencyTriples = GetAdjacenciesForCurrentTypeTriple(
            tripleSubject, outputTriples, typeTriples);
        var adjCounter = conceptCounter + 1;
		for (var k = 0; k < adjacencyTriples.length; k++) {            
            var objAdjacency = new Object();
            var atObject = adjacencyTriples[k].object;
            var nodeTo = atObject.substr(1, atObject.length);
            var nodeToAuto = "c" + adjCounter;
            objAdjacency["nodeTo"] = nodeToAuto;
            var objAdjData = new Object();
            var atPredicate = adjacencyTriples[k].predicate;
            if (typeof atPredicate === 'string') {
                objAdjData["id"] = atPredicate;
                nameAndNS = GetNameAndNS(atPredicate, prefixes);
                objAdjData["name"] = nameAndNS.name;
                objAdjData["label"] = nameAndNS.name
                objAdjData["ns"] = nameAndNS.nspace;
                objAdjacency["data"] = objAdjData;
            } else if (typeof atPredicate === 'object') {
                if (atPredicate.type == "path" && atPredicate.pathType == "^") {
                    var inversePropUrl = atPredicate.items[0];
                    objAdjData["id"] = inversePropUrl + "_inverseProp";
                    nameAndNS = GetNameAndNS(inversePropUrl, prefixes);
                    objAdjData["name"] = "^" + nameAndNS.name;
                    objAdjData["label"] = "(inv) " + nameAndNS.name
                    objAdjData["ns"] = nameAndNS.nspace;
                    objAdjacency["data"] = objAdjData;
                }
            }
            adjacenciesArray.push(objAdjacency);
			adjCounter++;
        }
        currentObj["adjacencies"] = adjacenciesArray;
        conceptCounter++;
        objArray.push(currentObj);
    }
    UpdateMappingAggregates(objArray, conceptVarMappingArray,attributeVarMappingArray);
	mainObject = objArray;
	if(variablesAreUserDefined) {
		Qconfig.longidsv = 'yes';
	} else {
		Qconfig.longidsv = 'no';
	}		
    return mainObject;
}

function IsConceptVariableAutoGenerated(conceptVar) {
    var reConcept = /^c\d+$/;
    return reConcept.test(conceptVar);
}

function IsAttributeVariableAutoGenerated(attributeVar) {
    var reAttribute = /^a\d+$/;
    return reAttribute.test(attributeVar);
}

function UpdateIdsForConstraints(constraintArray, attributeVarMappingArray) {
    for (var c = 0; c < constraintArray.length; c++) {
        for (var a = 0; a < attributeVarMappingArray.length; a++) {
            attributeId = constraintArray[0].aId;
            if (attributeId == attributeVarMappingArray[a].Orignal) {
                constraintArray[0].aId = attributeVarMappingArray[a].Auto;
                if (IsAttributeVariableAutoGenerated(attributeId)) {
                    constraintArray[0].hId = constraintArray[0].name + "_" + attributeId;
                } else {
                    constraintArray[0].hId = attributeVarMappingArray[a].Orignal;
                }
            }
        }
    }
}

function UpdateMappingAggregates(objArray, conceptVarMappingArray,
    attributeVarMappingArray) {
    var firstObject = objArray[0];
    var aggregate = firstObject.data.aggregate;
    if (Object.keys(aggregate).length > 0) {
        var countVar = aggregate.vr;
        for (var a = 0; a < attributeVarMappingArray.length; a++) {
            if (countVar == attributeVarMappingArray[a].Orignal) {
                aggregate.vr = attributeVarMappingArray[a].Auto;
                // Do some stuff for vra and vrha
            }
        }
        for (var c = 0; c < conceptVarMappingArray.length; c++) {
            if (countVar == conceptVarMappingArray[c].Orignal) {
                aggregate.vr = conceptVarMappingArray[c].Auto;
                // Do some stuff for vra and vrha
            }
        }
    }
}

function ProcessComments(oJson, strComments) {
    if (strComments.length < 3) {
        UpdateActiveNode(oJson, "0")
        return;
    }
    arrComments = strComments.split("#");
    var activeNodeId = "0";
    for (var i = 0; i < arrComments.length; i++) {
        var arrComment = arrComments[i].split(" ");
        // Active node
        if (arrComment[0] == "@ext_activeNode") {
            activeNodeId = arrComment[1];
            // Remove line breaks if any
            activeNodeId = activeNodeId.replace(/(\r\n|\n|\r)/gm, "");
        }
    }
    UpdateActiveNode(oJson, activeNodeId);
}

function UpdateActiveNode(objArray, activeNodeId) {
    if (activeNodeId == "0") {
        objArray[0].data.$color = "#FF9900";
        objArray[0].data.isActive = "true";
    } else {
        for (var a = 0; a < objArray.length; a++) {
            if (objArray[a].id == activeNodeId) {
                objArray[a].data.$color = "#FF9900";
                objArray[a].data.isActive = "true";
                // make background color of start node white
                objArray[0].data.$color = "#FFFFFF";
            }
        }
    }
}

function ProcessAggregates(prefixes, outputTriples, variables, groups, order,
    firstObject) {
    var aggregate = new Object();
    var sequence = new Object();
    for (var i = 0; i < variables.length; i++) {
        if (typeof variables[i] !== 'undefined') {
            if (typeof(order) != "undefined") {
                var sortDirection = "sortup";
                if (order[0].descending != null && order[0].descending == true) {
                    sortDirection = "sortdown";
                }
                var firstOrderExpression = order[0].expression;
                var variableWithoutQuestionMark = firstOrderExpression.substr(1, firstOrderExpression.length);
                sequence.op = sortDirection;
                sequence.vr = variableWithoutQuestionMark;
            }
            var varExpression = variables[i].expression;
            if (typeof varExpression === 'object' && varExpression.type == "aggregate") {
                aggregate.op = varExpression.aggregation;
                var variableName = varExpression.expression;
                var variableWithoutQuestionMark = variableName.substr(1,
                    variableName.length);
                aggregate.vr = variableWithoutQuestionMark;
                var countVariable = variables[i].variable;
                aggregate.vra = countVariable.substr(1, countVariable.length); // Without
                // question
                // mark
                var varType = GetTypeForVariable(variableName, prefixes,
                    outputTriples);
                aggregate.vrha = varExpression.aggregation.toUpperCase() + "_" + varType + "_" + variableWithoutQuestionMark;
            }
        }
    }
    firstObject.data.sequence = sequence;
    firstObject.data.aggregate = aggregate;
    //console.log(JSON.stringify(firstObject, undefined, 2));
    return firstObject;
}

function GetTypeForVariable(vr, prefixes, outputTriples) {
    var variableTypeName = "";
    for (var i = 0; i < outputTriples.length; i++) {
        if (outputTriples[i].object == vr) {
            var nameAndNS = GetNameAndNS(outputTriples[i].predicate, prefixes);
            variableTypeName = nameAndNS.name;
            break;
        }
    }
    return variableTypeName;
}

function GetTriples(where, option) {
    var myTriples = new Array();
    if (typeof where == 'object') {
        $.each(where, function(i, item) {
            if (item.type == 'bgp') {
                var triples = item.triples;
                for (var i = 0; i < triples.length; i++) {
                    var sPredicate = triples[i].predicate;
                    if (option == 'TT') {
                        if (typeof sPredicate === 'string') {
                            if (sPredicate.indexOf("type") > -1) {
                                myTriples.push(triples[i]);
                            }
                        }
                    } else if (option == 'OT') {
                        if (typeof sPredicate === 'string') {
                            if (sPredicate.indexOf("type") == -1) {
                                myTriples.push(triples[i]);
                            }
                        } else if (typeof sPredicate === 'object') {
                            myTriples.push(triples[i]);
                        }
                    }
                }
            }
        });
    }
    return myTriples;
}

function GetConstraints(where) {
    var myConstraints = new Array();
    if (typeof where == 'object') {
        $.each(where, function(i, item) {
            if (item.type == 'filter') {
                myConstraints.push(item.expression);
            }
        });
    }
    return myConstraints;
}

function GetFirstObject() {
    // var defaultObjStr = '{"id":"0","data":{"id":"0","label":"Untitled
    // query","desc":"Please provide a description
    // here...","icon":"","$color":"#FF9900","sequence":{},"aggregate":{},"isActive":
    // "true"},"adjacencies":[{"nodeTo":"","data":{"id":"","name":"","label":"","ns":""}}]}';
    var defaultObjStr = '{"id":"0","data":{"id":"0","label":"Untitled query","desc":"Please provide a description here...","icon":"","$color":"","sequence":{},"aggregate":{},"isActive": ""},"adjacencies":[{"nodeTo":"c1","data":{"id":"","name":"","label":"","ns":""}}]}';
    return jQuery.parseJSON(defaultObjStr);
}

function GetNameAndNS(url, prefixes) {
    var nameAndNS = new Object();
    $.each(prefixes, function(key, value) {
        if (url.indexOf(value) > -1) {
            nameAndNS["nspace"] = value;
            nameAndNS["name"] = url.substr(value.length, url.length);
            return false;
        }
    });
    return nameAndNS;
}

function GetAttributeTriplesForCurrentSubject(tripleSubject, outputTriples,
    typeTriples) {
    var myTriples = new Array();
    for (var i = 0; i < outputTriples.length; i++) {
        if (outputTriples[i].subject == tripleSubject) {
            var objectIsNotType = true;
            for (var j = 0; j < typeTriples.length; j++) {
                if (typeTriples[j].subject == outputTriples[i].object) {
                    objectIsNotType = false;
                    break;
                }
            }
            if (objectIsNotType) {
                myTriples.push(outputTriples[i]);
            }
        }
    }
    return myTriples;
}

/*
 * function GetOutputTriplesForCurrentSubject(attributeTriplesForCurrentSubject,
 * variables) { var myTriples = new Array(); for (var i = 0; i <
 * attributeTriplesForCurrentSubject.length; i++) { for (var j = 0; j <
 * variables.length; j++) { if (variables[j] ==
 * attributeTriplesForCurrentSubject[i].object) {
 * myTriples.push(attributeTriplesForCurrentSubject[i]); } } } return myTriples; }
 */

function GetConstraintsForCurrentConcept(allConstraints,
    attributeTriplesForCurrentSubject, prefixes) {
    var ConstraintsArray = new Array();
    for (var k = 0; k < allConstraints.length; k++) {
        var outerOperator = allConstraints[k].operator;
        for (var l = 0; l < attributeTriplesForCurrentSubject.length; l++) {
            var args = allConstraints[k].args;
            var objConst = new Object();
            if (outerOperator == "&&") {
                // Handel Logical Stuff - Array of two arguments, most likely
                // greater than and less than for one attribute
                var args1 = args[0].args;
                var args2 = args[1].args;
                if (args1[0] == attributeTriplesForCurrentSubject[l].object && args2[0] == attributeTriplesForCurrentSubject[l].object) {
                    var tPredicate = attributeTriplesForCurrentSubject[l].predicate;
                    objConst["id"] = tPredicate;
                    var nameAndNS = GetNameAndNS(tPredicate, prefixes);
                    objConst["name"] = nameAndNS.name;
                    objConst["ns"] = nameAndNS.nspace;
                    objConst["label"] = nameAndNS.name;
                    var arg1ValueDefault = args1[1];
                    var arg2ValueDefault = args2[1];
                    var arg1Value = "";
                    var arg2Value = "";
                    if (arg1ValueDefault.indexOf("XMLSchema") > -1) {
                        arg1Value = arg1ValueDefault.substr(1, arg1ValueDefault
                            .indexOf("^") - 2);
                        arg2Value = arg2ValueDefault.substr(1, arg2ValueDefault
                            .indexOf("^") - 2);
                        if (arg1ValueDefault.indexOf("integer") > -1) {
                            objConst["type"] = "integer";
                        } else if (arg1ValueDefault.indexOf("decimal") > -1) {
                            objConst["type"] = "decimal";
                        }
                    } else {
                        var arg1Value = args1[1].substr(1, args1[1].length - 2);
                        var arg2Value = args2[1].substr(1, args2[1].length - 2);
                    }
                    objConst["constrHigh"] = arg1Value;
                    objConst["constrLow"] = arg2Value;
                    objConst["constrType"] = "range";
                    var tObject = attributeTriplesForCurrentSubject[l].object;
                    var attributeId = tObject.substr(1, tObject.length);
                    objConst["aId"] = attributeId;
                    objConst["hId"] = nameAndNS.name + "_" + attributeId;;
                    ConstraintsArray.push(objConst);
                }
            } else {
                if (args[0] == attributeTriplesForCurrentSubject[l].object) {
                    var tPredicate = attributeTriplesForCurrentSubject[l].predicate;
                    nameAndNS = GetNameAndNS(tPredicate, prefixes);
                    objConst["id"] = tPredicate;
                    objConst["name"] = nameAndNS.name;
                    objConst["ns"] = nameAndNS.nspace;
                    objConst["label"] = nameAndNS.name;

                    var argValueDefault = args[1];
                    var argValue = "";
                    if (argValueDefault.indexOf("XMLSchema") > -1) {
                        argValue = argValueDefault.substr(1, argValueDefault
                            .indexOf("^") - 2);
                        if (argValueDefault.indexOf("integer") > -1) {
                            objConst["type"] = "integer";
                        } else if (argValueDefault.indexOf("decimal") > -1) {
                            objConst["type"] = "decimal";
                        }
                    } else {
                        // Default string
                        objConst["type"] = "string";
                        argValue = argValueDefault.substr(1,
                            argValueDefault.length - 2);
                    }
                    switch (outerOperator) {
                        case "regex":
                            objConst["constr"] = argValue;
                            objConst["constrType"] = "eq";
                            break;
                        case ">=":
                            objConst["constrHigh"] = argValue;
                            objConst["constrType"] = "greater";
                            break;
                        case "<=":
                            objConst["constrLow"] = argValue;
                            objConst["constrType"] = "lower";
                            break;
                    }
                    var tObject = attributeTriplesForCurrentSubject[l].object;
                    var attributeId = tObject.substr(1, tObject.length);
                    objConst["aId"] = attributeId;
                    objConst["hId"] = nameAndNS.name + "_" + attributeId;
                    ConstraintsArray.push(objConst);
                }
            }
        }
    }
    return ConstraintsArray;
}

function GetAdjacenciesForCurrentTypeTriple(tripleSubject, outputTriples,
    typeTriples) {
    var myTriples = new Array();
    for (var i = 0; i < outputTriples.length; i++) {
        if (outputTriples[i].subject == tripleSubject) {
            var objectIsType = false;
            for (var j = 0; j < typeTriples.length; j++) {
                if (typeTriples[j].subject == outputTriples[i].object) {
                    objectIsType = true;
                    break;
                }
            }
            if (objectIsType) {
                myTriples.push(outputTriples[i]);
            }
        }
    }
    return myTriples;
}

/*
 * ** Process Cycles and Missing types
 */

function ProcessCycles(jsonObj) {
    var prefixes = jsonObj["prefixes"];
    var variables = jsonObj["variables"];
    var where = jsonObj["where"];
    var typeTriples = GetTriples(where, 'TT');
    var outputTriples = GetTriples(where, 'OT');
    var adjacencyTriplesTobeUpdated = new Array();
    for (var i = 0; i < typeTriples.length; i++) {
        var tripleSubject = typeTriples[i].subject;
        var adjacencyTriples = GetAdjacenciesForCurrentTypeTriple(
            tripleSubject, outputTriples, typeTriples);
        if (adjacencyTriples.length > 1) {
            for (var j = 0; j < adjacencyTriples.length - 1; j++) {
                if (adjacencyTriples[j].subject == adjacencyTriples[j + 1].subject && adjacencyTriples[j].predicate != adjacencyTriples[j + 1].predicate && adjacencyTriples[j].object == adjacencyTriples[j + 1].object) {
                    adjacencyTriplesTobeUpdated.push(adjacencyTriples[j + 1]);
                }
            }
        }
    }
    var typeTripleCount = typeTriples.length;
    for (var a = 0; a < adjacencyTriplesTobeUpdated.length; a++) {
        for (var t = 0; t < typeTriples.length; t++) {
            if (adjacencyTriplesTobeUpdated[a].object == typeTriples[t].subject) {
                var newTypeTriple = new Object;
                var newTypeTripleSubject = "?c" + (typeTripleCount + 1);
                newTypeTriple.subject = newTypeTripleSubject;
                newTypeTriple.predicate = typeTriples[t].predicate;
                newTypeTriple.object = typeTriples[t].object;
                jsonObj.where[0].triples.splice(typeTripleCount, 0,
                    newTypeTriple);
                adjacencyTriplesTobeUpdated[a].object = newTypeTripleSubject;
                typeTripleCount++;
            }
        }
    }
    return jsonObj;
}

function ProcessSimilarTypes(jsonObj) {
    var prefixes = jsonObj["prefixes"];
    var variables = jsonObj["variables"];
    var where = jsonObj["where"];
    var typeTriples = GetTriples(where, 'TT');
    var outputTriples = GetTriples(where, 'OT');
    var sameNodes = new Array();
    for (var i = 0; i < typeTriples.length; i++) {
        var sameTypesAsCurrent = new Array();
        sameTypesAsCurrent.push(typeTriples[i].subject);
        for (var j = i + 1; j < typeTriples.length; j++) {
            if (typeTriples[i].object == typeTriples[j].object) {
                sameTypesAsCurrent.push(typeTriples[j].subject);
            }
        }
        if (sameTypesAsCurrent.length > 1) {
            sameNodes.push(sameTypesAsCurrent);
        }
    }
    jsonObj.sameNodes = sameNodes;
    // console.log(JSON.stringify(jsonObj,undefined, 2));
    return jsonObj;
}

function ProcessUndefinedTypes(jsonObj) {
    var dfrd1 = $.Deferred();
    var prefixes = jsonObj["prefixes"];
    var variables = jsonObj["variables"];
    var where = jsonObj["where"];
    var typeTriples = GetTriples(where, 'TT');
    var outputTriples = GetTriples(where, 'OT');
    var undefinedTypeTriples = new Array();
    for (var i = 0; i < outputTriples.length; i++) {
        var tripleObject = outputTriples[i].object;
		//TODO: Write logic to check if missing type is a concept. 
        if (tripleObject.indexOf("?c") > -1) {
            if (!IsTypeDeclared(tripleObject, typeTriples)) {
                undefinedTypeTriples.push(outputTriples[i]);
            }
        }
    }
    if (undefinedTypeTriples.length == 0) {
        dfrd1.resolve();
    } else {
        var typeTripleCount = typeTriples.length;
        for (var j = 0; j < undefinedTypeTriples.length; j++) {
            var tripleSubject = undefinedTypeTriples[j].subject;
			var tripleObject = undefinedTypeTriples[j].object;
            var typeTriple = GetTypeTripleFromVarible(tripleSubject,typeTriples);
            var conceptUri = typeTriple.object;
            var tPredicate = undefinedTypeTriples[j].predicate;
            var nameAndNS = GetNameAndNS(tPredicate, prefixes);
            var propName = nameAndNS.name;
            var newTypeTriple = new Object();
            newTypeTriple.subject = tripleObject;
            newTypeTriple.predicate = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type";
            AddTypeTripleForMissingType(conceptUri, propName, newTypeTriple)
                .done(
                    function() {
                        jsonObj.where[0].triples.splice(
                            typeTripleCount, 0, newTypeTriple);
                        typeTripleCount++;
                        dfrd1.resolve();
                    });
        }
    }
    return $.when(dfrd1).done(function() {
        //console.log('ProcessUndefinedTypes is done');
    }).promise();
}

function GetTypeTripleFromVarible(typeVariable, typeTriples) {
    for (var i = 0; i < typeTriples.length; i++) {
        if (typeTriples[i].subject == typeVariable) {
            return typeTriples[i];
        }
    }
    return null;
}

function AddTypeTripleForMissingType(conceptUri, propName, newTypeTriple) {
    var dfrd1 = $.Deferred();
    var getNeighbourConceptUrl = this.getBaseUrl() + "/REST/JSON/getQFOntologyAccess/?method=getNeighbourConcepts&params=[%22" + dataModel.encodeSpecial(getURLParameter($(parent.location).attr(
        'href'), "ontologyURI")) + "%22, %22" + dataModel.encodeSpecial(conceptUri) + "%22, %22%22]&id=1";
    $.ajax({
        url: getNeighbourConceptUrl,
        dataType: 'json',
        context: document.body
    }).done(function(data) {
        var neighbourConcepts = data.result.options;
        for (var i = 0; i < neighbourConcepts.length; i++) {
            var ncPropName = neighbourConcepts[i].prop.name;
            if (ncPropName == propName) {
                newTypeTriple.object = neighbourConcepts[i].id;
            }
        }
        dfrd1.resolve();
    });
    return dfrd1.promise();
}

function IsTypeDeclared(tripleObject, typeTriples) {
    for (var i = 0; i < typeTriples.length; i++) {
        if (typeTriples[i].subject == tripleObject) {
            return true;
        }
    }
    return false;
}

/*
 * ** End - Process Cycles and Missing types
 */
/*
 * ** Validation of SPARQL against underlyging Ontotoly
 */

function ValidateOntology(jsonObj, validationMessages) {
    var dfrd1 = $.Deferred();
    var dfrd2 = $.Deferred();
    var dfrd3 = $.Deferred();

    var prefixes = jsonObj["prefixes"];
    var where = jsonObj["where"];
    var typeTriples = GetTriples(where, 'TT');
    var types = GetTypes(typeTriples, prefixes);

    ValidateCoreConcepts(types, validationMessages).done(function() {
        dfrd1.resolve();
    });

    ValidateFields(jsonObj, validationMessages).done(function() {
        dfrd2.resolve();
    });

    ValidateAdjacencies(jsonObj, validationMessages).done(function() {
        dfrd3.resolve();
    });

    return $.when(dfrd1, dfrd2, dfrd3)
        .done(
            function() {
                //console.log('ValidateCoreConcepts, ValidateFields and ValidateAdjacencies are done');
            }).promise();
}

function ValidateCoreConcepts(types, validationMessages) {
    var dfrd1 = $.Deferred();
    var getCoreConceptsUrl = this.getBaseUrl() + "/REST/JSON/getQFOntologyAccess/?method=getCoreConcepts&params=[%22" + dataModel.encodeSpecial(getURLParameter($(parent.location).attr(
        'href'), "ontologyURI")) + "%22]&id=1";
    $.ajax({
        url: getCoreConceptsUrl,
        dataType: 'json',
        context: document.body
    }).done(function(data) {
        var allCoreConcepts = data.result.options;
        ValidateTypes(types, allCoreConcepts, validationMessages);
        dfrd1.resolve();
    });
    return dfrd1.promise();
}

function ValidateTypes(types, allCoreConcepts, validationMessages) {
    for (var i = 0; i < types.length; i++) {
        var typeFound = false;
        var typeName = types[i].name;
        for (var j = 0; j < allCoreConcepts.length; j++) {
            if (allCoreConcepts[j].name == typeName) {
                typeFound = true;
                break;
            }
        }
        if (!typeFound) {
            validationMessages.push("Concept " + typeName + " not found in ontology.");
        }
    }
}

function ValidateFields(jsonObj, validationMessages) {
    var dfrd3 = $.Deferred();

    var prefixes = jsonObj["prefixes"];
    var variables = jsonObj["variables"];
    var where = jsonObj["where"];
    var typeTriples = GetTriples(where, 'TT');
    var outputTriples = GetTriples(where, 'OT');
    for (var i = 0; i < typeTriples.length; i++) {
        var tripleObject = typeTriples[i].object
        var tripleSubject = typeTriples[i].subject;
        ValidateFieldsForType(tripleObject, tripleSubject, typeTriples,
            outputTriples, prefixes, validationMessages).done(function() {
            dfrd3.resolve();
        });
    }
    return dfrd3.promise();
}

function ValidateFieldsForType(tripleObject, tripleSubject, typeTriples,
    outputTriples, prefixes, validationMessages) {
    var dfrd4 = $.Deferred();
    var nameAndNS = GetNameAndNS(tripleObject, prefixes);
    var conceptName = nameAndNS.name;
    var getConceptFacetsUrl = this.getBaseUrl() + "/REST/JSON/getQFOntologyAccess/?method=getConceptFacets&params=[%22" + dataModel.encodeSpecial(getURLParameter($(parent.location).attr(
        'href'), "ontologyURI")) + "%22, %22" + dataModel.encodeSpecial(tripleObject) + "%22, %22%22]&id=1";
    $.ajax({
            url: getConceptFacetsUrl,
            dataType: 'json',
            context: document.body
        })
        .done(
            function(data) {
                var fields = data.result.fields;
                var attributeTriplesForCurrentSubject = GetAttributeTriplesForCurrentSubject(
                    tripleSubject, outputTriples, typeTriples);
                // 1 field is default name, should be more than for
                // processing.
                if (fields.length > 1) {
                    for (var i = 0; i < attributeTriplesForCurrentSubject.length; i++) {
                        var tPredicate = attributeTriplesForCurrentSubject[i].predicate;
                        var nameAndNS = GetNameAndNS(tPredicate,
                            prefixes);
                        var predicateName = nameAndNS.name;
                        var fieldFound = false;
                        for (var j = 0; j < fields.length; j++) {
                            var fieldName = fields[j].name;
                            if (predicateName == fieldName) {
                                fieldFound = true;
                                break;
                            }
                        }
                        if (!fieldFound) {
                            validationMessages.push("Field " + predicateName + " not found for Concept " + conceptName + ".");
                        }
                    }
                }
                dfrd4.resolve();
            });

    return dfrd4.promise();
}
// When adjacencies were not implemented
function ValidateAdjacencies2(jsonObj, validationMessages) {
    var dfrdAdj = $.Deferred();
    dfrdAdj.resolve();
    return dfrdAdj.promise();
}
// ValidateAdjancecies2 and related functions below are not tested and verified.
function ValidateAdjacencies(jsonObj, validationMessages) {
    var dfrdAdj = $.Deferred();
	var prefixes = jsonObj["prefixes"];
    var variables = jsonObj["variables"];
    var where = jsonObj["where"];
    var typeTriples = GetTriples(where, 'TT');
	if(typeTriples.length == 1) {
		dfrdAdj.resolve();
		return dfrdAdj.promise();
	}		
    var outputTriples = GetTriples(where, 'OT');
    for (var i = 0; i < typeTriples.length; i++) {
        var tripleObject = typeTriples[i].object
        var tripleSubject = typeTriples[i].subject;
        var adjacencyTriples = GetAdjacenciesForCurrentTypeTriple(tripleSubject, outputTriples, typeTriples);
        for (var a = 0; a < adjacencyTriples.length; a++) {
            var adjacencyObject = adjacencyTriples[a].object;
            var adjacencyPredicate = adjacencyTriples[a].predicate;
			var aPredicateUrl;
			var predicateTypeInverse = false;
			if (typeof adjacencyPredicate === 'string') {			          
				aPredicateUrl = adjacencyPredicate;
			} else if (typeof adjacencyPredicate === 'object') {
				if (adjacencyPredicate.type == "path" && adjacencyPredicate.pathType == "^") {
                   var inversePropUrl = adjacencyPredicate.items[0];
				   aPredicateUrl = inversePropUrl;                
				   predicateTypeInverse = true;
                }
			}			
			var nameAndNS = GetNameAndNS(aPredicateUrl, prefixes);
			var adjacencyPredicateName = nameAndNS.name;
			var adjacencyObjectTypeName = GetTypeForObject(adjacencyObject,prefixes, typeTriples);
			var getNeighbourConceptsUrl = this.getBaseUrl() + "/REST/JSON/getQFOntologyAccess/?method=getNeighbourConcepts&params=[%22" + dataModel.encodeSpecial(getURLParameter(
				$(parent.location).attr('href'), "ontologyURI")) + "%22, %22" + dataModel.encodeSpecial(tripleObject) + "%22, %22%22]&id=1";
			$.ajax({
				url: getNeighbourConceptsUrl,
				dataType: 'json',
				context: document.body
			}).done(
				function(data) {
					var neighbourConcepts = data.result.options;                    					
					ValidateNeighbourConcepts(adjacencyObjectTypeName,adjacencyPredicateName, neighbourConcepts, predicateTypeInverse, validationMessages);					                    
					if(i == typeTriples.length)	{
						dfrdAdj.resolve();
					}
			});            
        }		
    }
	return dfrdAdj.promise();
}

function ValidateNeighbourConcepts(adjacencyObjectTypeName, adjacencyPredicateName, neighbourConcepts, predicateTypeInverse, validationMessages) {
    var neighbourConceptFound = false;
    var relationshipIsValid = false;
    for (var i = 0; i < neighbourConcepts.length; i++) {
        if (neighbourConcepts[i].name == adjacencyObjectTypeName) {
            neighbourConceptFound = true;
            var neighbourConceptsProp = neighbourConcepts[i].prop;
			if(predicateTypeInverse) {
				if (neighbourConceptsProp != null && neighbourConceptsProp.name == "^" + adjacencyPredicateName) {
					relationshipIsValid = true;
				}		
			}
			else
			{
				if (neighbourConceptsProp != null && neighbourConceptsProp.name == adjacencyPredicateName) {
					relationshipIsValid = true;
				}	
			}            
        }
    }
    if (!relationshipIsValid) {
        validationMessages.push("Relationship " + adjacencyPredicateName + " is not valid.");
    }
	/*
	if (!neighbourConceptFound) {
        validationMessages.push("Related concept " + adjacencyObjectTypeName + " not found.");
     }
    if (neighbourConceptFound && !relationshipIsValid) {
        validationMessages.push("Relationship " + adjacencyPredicateName + " is not valid.");
    }*/
}

function GetTypeForObject(adjacencyObject, prefixes, typeTriples) {
    var typeName = "";
    for (var i = 0; i < typeTriples.length; i++) {
        if (typeTriples[i].subject == adjacencyObject) {
            var nameAndNS = GetNameAndNS(typeTriples[i].object, prefixes);
            typeName = nameAndNS.name;
            break;
        }
    }
    return typeName;
}

function GetTypes(typeTriples, prefixes) {
    var myTypes = new Array();
    for (var i = 0; i < typeTriples.length; i++) {
        var objType = new Object();
        var tObject = typeTriples[i].object;
        var nameAndNS = GetNameAndNS(tObject, prefixes);
        objType["name"] = nameAndNS.name;
        myTypes.push(objType);
    }
    return myTypes;

}

/*
 *** End -- Validation of SPARQL against underlyging Ontotoly
 */