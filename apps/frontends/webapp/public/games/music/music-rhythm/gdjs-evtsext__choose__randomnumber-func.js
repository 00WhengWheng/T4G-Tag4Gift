
if (typeof gdjs.evtsExt__Choose__RandomNumber !== "undefined") {
  gdjs.evtsExt__Choose__RandomNumber.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Choose__RandomNumber = {};


gdjs.evtsExt__Choose__RandomNumber.userFunc0x955e20 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
//Set a new variable to store the choosed list and convert from string to an structure
var __ChoosedNumberString = runtimeScene.getVariables().get("__ChoosedNumberString")
__ChoosedNumberString.setString(eventsFunctionContext.getArgument("ChoosedNumbersString"))

let strList =runtimeScene.getVariables().get("__ChoosedNumberString").getAsString().split(",")
for(let i in strList){
    runtimeScene.getVariables().get("__ChoosedNumberString").getChild(i+1).setString(strList[i])
}

//Remove the variable until is needed again
runtimeScene._variables._variables.remove("__ChoosedNumberString")

var __ChooseRandomNumberString = runtimeScene.getVariables().get("__ChooseRandomNumberString")
__ChooseRandomNumberString.setNumber(strList[Math.floor(Math.random()*strList.length)])
//Return the random value
eventsFunctionContext.returnValue = __ChooseRandomNumberString.getAsNumber()

//Remove the variable until is needed again
runtimeScene._variables._variables.remove("__ChooseRandomNumberString")

};
gdjs.evtsExt__Choose__RandomNumber.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Choose__RandomNumber.userFunc0x955e20(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Choose__RandomNumber.func = function(runtimeScene, ChoosedNumbersString, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Choose"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Choose"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "ChoosedNumbersString") return ChoosedNumbersString;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Choose__RandomNumber.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__Choose__RandomNumber.registeredGdjsCallbacks = [];