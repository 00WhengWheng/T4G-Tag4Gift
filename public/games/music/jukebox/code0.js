gdjs.JukeboxCode = {};
gdjs.JukeboxCode.localVariables = [];
gdjs.JukeboxCode.GDDown_9595ArrowObjects2_1final = [];

gdjs.JukeboxCode.GDDown_9595ArrowObjects3_1final = [];

gdjs.JukeboxCode.GDMusic_9595ButtonObjects3_1final = [];

gdjs.JukeboxCode.GDMusic_9595SelectObjects2_1final = [];

gdjs.JukeboxCode.GDSFX_9595ButtonObjects3_1final = [];

gdjs.JukeboxCode.GDSocial_9595ButtonsObjects3_1final = [];

gdjs.JukeboxCode.GDUp_9595ArrowObjects2_1final = [];

gdjs.JukeboxCode.GDUp_9595ArrowObjects3_1final = [];

gdjs.JukeboxCode.GDMusic_9595SelectObjects1= [];
gdjs.JukeboxCode.GDMusic_9595SelectObjects2= [];
gdjs.JukeboxCode.GDMusic_9595SelectObjects3= [];
gdjs.JukeboxCode.GDMusic_9595SelectObjects4= [];
gdjs.JukeboxCode.GDMusic_9595SelectObjects5= [];
gdjs.JukeboxCode.GDSpineDiskObjects1= [];
gdjs.JukeboxCode.GDSpineDiskObjects2= [];
gdjs.JukeboxCode.GDSpineDiskObjects3= [];
gdjs.JukeboxCode.GDSpineDiskObjects4= [];
gdjs.JukeboxCode.GDSpineDiskObjects5= [];
gdjs.JukeboxCode.GDUp_9595ArrowObjects1= [];
gdjs.JukeboxCode.GDUp_9595ArrowObjects2= [];
gdjs.JukeboxCode.GDUp_9595ArrowObjects3= [];
gdjs.JukeboxCode.GDUp_9595ArrowObjects4= [];
gdjs.JukeboxCode.GDUp_9595ArrowObjects5= [];
gdjs.JukeboxCode.GDDown_9595ArrowObjects1= [];
gdjs.JukeboxCode.GDDown_9595ArrowObjects2= [];
gdjs.JukeboxCode.GDDown_9595ArrowObjects3= [];
gdjs.JukeboxCode.GDDown_9595ArrowObjects4= [];
gdjs.JukeboxCode.GDDown_9595ArrowObjects5= [];
gdjs.JukeboxCode.GDBackgroundObjects1= [];
gdjs.JukeboxCode.GDBackgroundObjects2= [];
gdjs.JukeboxCode.GDBackgroundObjects3= [];
gdjs.JukeboxCode.GDBackgroundObjects4= [];
gdjs.JukeboxCode.GDBackgroundObjects5= [];
gdjs.JukeboxCode.GDSFX_9595ButtonObjects1= [];
gdjs.JukeboxCode.GDSFX_9595ButtonObjects2= [];
gdjs.JukeboxCode.GDSFX_9595ButtonObjects3= [];
gdjs.JukeboxCode.GDSFX_9595ButtonObjects4= [];
gdjs.JukeboxCode.GDSFX_9595ButtonObjects5= [];
gdjs.JukeboxCode.GDMusic_9595ButtonObjects1= [];
gdjs.JukeboxCode.GDMusic_9595ButtonObjects2= [];
gdjs.JukeboxCode.GDMusic_9595ButtonObjects3= [];
gdjs.JukeboxCode.GDMusic_9595ButtonObjects4= [];
gdjs.JukeboxCode.GDMusic_9595ButtonObjects5= [];
gdjs.JukeboxCode.GDSocial_9595ButtonsObjects1= [];
gdjs.JukeboxCode.GDSocial_9595ButtonsObjects2= [];
gdjs.JukeboxCode.GDSocial_9595ButtonsObjects3= [];
gdjs.JukeboxCode.GDSocial_9595ButtonsObjects4= [];
gdjs.JukeboxCode.GDSocial_9595ButtonsObjects5= [];


gdjs.JukeboxCode.asyncCallback11841148 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.JukeboxCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("SpineDisk"), gdjs.JukeboxCode.GDSpineDiskObjects2);

{for(var i = 0, len = gdjs.JukeboxCode.GDSpineDiskObjects2.length ;i < len;++i) {
    gdjs.JukeboxCode.GDSpineDiskObjects2[i].getBehavior("Tween").addObjectPositionXTween2("Diskstart", 296, "easeOutQuad", 2.3, false);
}
}gdjs.JukeboxCode.localVariables.length = 0;
}
gdjs.JukeboxCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.JukeboxCode.localVariables);
for (const obj of gdjs.JukeboxCode.GDSpineDiskObjects1) asyncObjectsList.addObject("SpineDisk", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.7), (runtimeScene) => (gdjs.JukeboxCode.asyncCallback11841148(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.JukeboxCode.asyncCallback11847884 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.JukeboxCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("SpineDisk"), gdjs.JukeboxCode.GDSpineDiskObjects5);

{for(var i = 0, len = gdjs.JukeboxCode.GDSpineDiskObjects5.length ;i < len;++i) {
    gdjs.JukeboxCode.GDSpineDiskObjects5[i].getBehavior("Tween").addObjectWidthTween2("DiskFlip", runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), "easeOutQuad", 0.19, false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(false);
}gdjs.JukeboxCode.localVariables.length = 0;
}
gdjs.JukeboxCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.JukeboxCode.localVariables);
for (const obj of gdjs.JukeboxCode.GDSpineDiskObjects4) asyncObjectsList.addObject("SpineDisk", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.19), (runtimeScene) => (gdjs.JukeboxCode.asyncCallback11847884(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.JukeboxCode.asyncCallback11847500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.JukeboxCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("SpineDisk"), gdjs.JukeboxCode.GDSpineDiskObjects4);

{for(var i = 0, len = gdjs.JukeboxCode.GDSpineDiskObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDSpineDiskObjects4[i].getBehavior("Tween").addObjectWidthTween2("DiskFlip", 0, "easeInQuad", 0.19, false);
}
}
{ //Subevents
gdjs.JukeboxCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.JukeboxCode.localVariables.length = 0;
}
gdjs.JukeboxCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.JukeboxCode.localVariables);
for (const obj of gdjs.JukeboxCode.GDSpineDiskObjects3) asyncObjectsList.addObject("SpineDisk", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.19), (runtimeScene) => (gdjs.JukeboxCode.asyncCallback11847500(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.JukeboxCode.asyncCallback11846580 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.JukeboxCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("SpineDisk"), gdjs.JukeboxCode.GDSpineDiskObjects3);

{for(var i = 0, len = gdjs.JukeboxCode.GDSpineDiskObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDSpineDiskObjects3[i].getBehavior("Tween").addObjectWidthTween2("DiskFlip", runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), "easeOutQuad", 0.19, false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(true);
}
{ //Subevents
gdjs.JukeboxCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.JukeboxCode.localVariables.length = 0;
}
gdjs.JukeboxCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.JukeboxCode.localVariables);
for (const obj of gdjs.JukeboxCode.GDSpineDiskObjects2) asyncObjectsList.addObject("SpineDisk", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.19), (runtimeScene) => (gdjs.JukeboxCode.asyncCallback11846580(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.JukeboxCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11845076);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TrackSelect");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "SFX\\scratch_004.ogg", 1, false, runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), 0.7);
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 1, 0, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("SpineDisk"), gdjs.JukeboxCode.GDSpineDiskObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDSpineDiskObjects2.length;i<l;++i) {
    if ( !(gdjs.JukeboxCode.GDSpineDiskObjects2[i].getBehavior("Tween").isPlaying("DiskFlip")) ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDSpineDiskObjects2[k] = gdjs.JukeboxCode.GDSpineDiskObjects2[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDSpineDiskObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDSpineDiskObjects2 */
{for(var i = 0, len = gdjs.JukeboxCode.GDSpineDiskObjects2.length ;i < len;++i) {
    gdjs.JukeboxCode.GDSpineDiskObjects2[i].getBehavior("Tween").addObjectWidthTween2("DiskFlip", 0, "easeInQuad", 0.19, false);
}
}
{ //Subevents
gdjs.JukeboxCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.JukeboxCode.eventsList5 = function(runtimeScene) {

{

gdjs.JukeboxCode.GDDown_9595ArrowObjects2.length = 0;

gdjs.JukeboxCode.GDMusic_9595SelectObjects2.length = 0;

gdjs.JukeboxCode.GDUp_9595ArrowObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.JukeboxCode.GDDown_9595ArrowObjects2_1final.length = 0;
gdjs.JukeboxCode.GDMusic_9595SelectObjects2_1final.length = 0;
gdjs.JukeboxCode.GDUp_9595ArrowObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects3);
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects3[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects2_1final.indexOf(gdjs.JukeboxCode.GDMusic_9595SelectObjects3[j]) === -1 )
            gdjs.JukeboxCode.GDMusic_9595SelectObjects2_1final.push(gdjs.JukeboxCode.GDMusic_9595SelectObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Down_Arrow"), gdjs.JukeboxCode.GDDown_9595ArrowObjects3);
gdjs.copyArray(runtimeScene.getObjects("Up_Arrow"), gdjs.JukeboxCode.GDUp_9595ArrowObjects3);
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDUp_9595ArrowObjects3.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDUp_9595ArrowObjects3[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.JukeboxCode.GDUp_9595ArrowObjects3[k] = gdjs.JukeboxCode.GDUp_9595ArrowObjects3[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDUp_9595ArrowObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDDown_9595ArrowObjects3.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDDown_9595ArrowObjects3[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.JukeboxCode.GDDown_9595ArrowObjects3[k] = gdjs.JukeboxCode.GDDown_9595ArrowObjects3[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDDown_9595ArrowObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.JukeboxCode.GDDown_9595ArrowObjects3.length; j < jLen ; ++j) {
        if ( gdjs.JukeboxCode.GDDown_9595ArrowObjects2_1final.indexOf(gdjs.JukeboxCode.GDDown_9595ArrowObjects3[j]) === -1 )
            gdjs.JukeboxCode.GDDown_9595ArrowObjects2_1final.push(gdjs.JukeboxCode.GDDown_9595ArrowObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.JukeboxCode.GDUp_9595ArrowObjects3.length; j < jLen ; ++j) {
        if ( gdjs.JukeboxCode.GDUp_9595ArrowObjects2_1final.indexOf(gdjs.JukeboxCode.GDUp_9595ArrowObjects3[j]) === -1 )
            gdjs.JukeboxCode.GDUp_9595ArrowObjects2_1final.push(gdjs.JukeboxCode.GDUp_9595ArrowObjects3[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.JukeboxCode.GDDown_9595ArrowObjects2_1final, gdjs.JukeboxCode.GDDown_9595ArrowObjects2);
gdjs.copyArray(gdjs.JukeboxCode.GDMusic_9595SelectObjects2_1final, gdjs.JukeboxCode.GDMusic_9595SelectObjects2);
gdjs.copyArray(gdjs.JukeboxCode.GDUp_9595ArrowObjects2_1final, gdjs.JukeboxCode.GDUp_9595ArrowObjects2);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.JukeboxCode.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SpineDisk"), gdjs.JukeboxCode.GDSpineDiskObjects2);
{for(var i = 0, len = gdjs.JukeboxCode.GDSpineDiskObjects2.length ;i < len;++i) {
    gdjs.JukeboxCode.GDSpineDiskObjects2[i].getBehavior("Animation").setAnimationName("Disk Front");
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDSpineDiskObjects2.length ;i < len;++i) {
    gdjs.JukeboxCode.GDSpineDiskObjects2[i].getBehavior("Effect").enableEffect("DiskColour", false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SpineDisk"), gdjs.JukeboxCode.GDSpineDiskObjects1);
{for(var i = 0, len = gdjs.JukeboxCode.GDSpineDiskObjects1.length ;i < len;++i) {
    gdjs.JukeboxCode.GDSpineDiskObjects1[i].getBehavior("Animation").setAnimationName("Disk Back");
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDSpineDiskObjects1.length ;i < len;++i) {
    gdjs.JukeboxCode.GDSpineDiskObjects1[i].getBehavior("Effect").enableEffect("DiskColour", true);
}
}}

}


};gdjs.JukeboxCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SFX_Button"), gdjs.JukeboxCode.GDSFX_9595ButtonObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDSFX_9595ButtonObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDSFX_9595ButtonObjects4[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDSFX_9595ButtonObjects4[k] = gdjs.JukeboxCode.GDSFX_9595ButtonObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDSFX_9595ButtonObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11853868);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(50);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SFX_Button"), gdjs.JukeboxCode.GDSFX_9595ButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDSFX_9595ButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.JukeboxCode.GDSFX_9595ButtonObjects3[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDSFX_9595ButtonObjects3[k] = gdjs.JukeboxCode.GDSFX_9595ButtonObjects3[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDSFX_9595ButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11854756);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


};gdjs.JukeboxCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Music_Button"), gdjs.JukeboxCode.GDMusic_9595ButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595ButtonObjects3.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595ButtonObjects3[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595ButtonObjects3[k] = gdjs.JukeboxCode.GDMusic_9595ButtonObjects3[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595ButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11855580);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(50);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TrackSelect");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Button"), gdjs.JukeboxCode.GDMusic_9595ButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595ButtonObjects2.length;i<l;++i) {
    if ( !(gdjs.JukeboxCode.GDMusic_9595ButtonObjects2[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595ButtonObjects2[k] = gdjs.JukeboxCode.GDMusic_9595ButtonObjects2[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595ButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11856572);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}}

}


};gdjs.JukeboxCode.eventsList8 = function(runtimeScene) {

{

gdjs.JukeboxCode.GDDown_9595ArrowObjects3.length = 0;

gdjs.JukeboxCode.GDMusic_9595ButtonObjects3.length = 0;

gdjs.JukeboxCode.GDSFX_9595ButtonObjects3.length = 0;

gdjs.JukeboxCode.GDSocial_9595ButtonsObjects3.length = 0;

gdjs.JukeboxCode.GDUp_9595ArrowObjects3.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.JukeboxCode.GDDown_9595ArrowObjects3_1final.length = 0;
gdjs.JukeboxCode.GDMusic_9595ButtonObjects3_1final.length = 0;
gdjs.JukeboxCode.GDSFX_9595ButtonObjects3_1final.length = 0;
gdjs.JukeboxCode.GDSocial_9595ButtonsObjects3_1final.length = 0;
gdjs.JukeboxCode.GDUp_9595ArrowObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Down_Arrow"), gdjs.JukeboxCode.GDDown_9595ArrowObjects4);
gdjs.copyArray(runtimeScene.getObjects("Music_Button"), gdjs.JukeboxCode.GDMusic_9595ButtonObjects4);
gdjs.copyArray(runtimeScene.getObjects("SFX_Button"), gdjs.JukeboxCode.GDSFX_9595ButtonObjects4);
gdjs.copyArray(runtimeScene.getObjects("Social_Buttons"), gdjs.JukeboxCode.GDSocial_9595ButtonsObjects4);
gdjs.copyArray(runtimeScene.getObjects("Up_Arrow"), gdjs.JukeboxCode.GDUp_9595ArrowObjects4);
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDSFX_9595ButtonObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDSFX_9595ButtonObjects4[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.JukeboxCode.GDSFX_9595ButtonObjects4[k] = gdjs.JukeboxCode.GDSFX_9595ButtonObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDSFX_9595ButtonObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595ButtonObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595ButtonObjects4[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.JukeboxCode.GDMusic_9595ButtonObjects4[k] = gdjs.JukeboxCode.GDMusic_9595ButtonObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595ButtonObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDUp_9595ArrowObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDUp_9595ArrowObjects4[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.JukeboxCode.GDUp_9595ArrowObjects4[k] = gdjs.JukeboxCode.GDUp_9595ArrowObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDUp_9595ArrowObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDDown_9595ArrowObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDDown_9595ArrowObjects4[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.JukeboxCode.GDDown_9595ArrowObjects4[k] = gdjs.JukeboxCode.GDDown_9595ArrowObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDDown_9595ArrowObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDSocial_9595ButtonsObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDSocial_9595ButtonsObjects4[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.JukeboxCode.GDSocial_9595ButtonsObjects4[k] = gdjs.JukeboxCode.GDSocial_9595ButtonsObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDSocial_9595ButtonsObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.JukeboxCode.GDDown_9595ArrowObjects4.length; j < jLen ; ++j) {
        if ( gdjs.JukeboxCode.GDDown_9595ArrowObjects3_1final.indexOf(gdjs.JukeboxCode.GDDown_9595ArrowObjects4[j]) === -1 )
            gdjs.JukeboxCode.GDDown_9595ArrowObjects3_1final.push(gdjs.JukeboxCode.GDDown_9595ArrowObjects4[j]);
    }
    for (let j = 0, jLen = gdjs.JukeboxCode.GDMusic_9595ButtonObjects4.length; j < jLen ; ++j) {
        if ( gdjs.JukeboxCode.GDMusic_9595ButtonObjects3_1final.indexOf(gdjs.JukeboxCode.GDMusic_9595ButtonObjects4[j]) === -1 )
            gdjs.JukeboxCode.GDMusic_9595ButtonObjects3_1final.push(gdjs.JukeboxCode.GDMusic_9595ButtonObjects4[j]);
    }
    for (let j = 0, jLen = gdjs.JukeboxCode.GDSFX_9595ButtonObjects4.length; j < jLen ; ++j) {
        if ( gdjs.JukeboxCode.GDSFX_9595ButtonObjects3_1final.indexOf(gdjs.JukeboxCode.GDSFX_9595ButtonObjects4[j]) === -1 )
            gdjs.JukeboxCode.GDSFX_9595ButtonObjects3_1final.push(gdjs.JukeboxCode.GDSFX_9595ButtonObjects4[j]);
    }
    for (let j = 0, jLen = gdjs.JukeboxCode.GDSocial_9595ButtonsObjects4.length; j < jLen ; ++j) {
        if ( gdjs.JukeboxCode.GDSocial_9595ButtonsObjects3_1final.indexOf(gdjs.JukeboxCode.GDSocial_9595ButtonsObjects4[j]) === -1 )
            gdjs.JukeboxCode.GDSocial_9595ButtonsObjects3_1final.push(gdjs.JukeboxCode.GDSocial_9595ButtonsObjects4[j]);
    }
    for (let j = 0, jLen = gdjs.JukeboxCode.GDUp_9595ArrowObjects4.length; j < jLen ; ++j) {
        if ( gdjs.JukeboxCode.GDUp_9595ArrowObjects3_1final.indexOf(gdjs.JukeboxCode.GDUp_9595ArrowObjects4[j]) === -1 )
            gdjs.JukeboxCode.GDUp_9595ArrowObjects3_1final.push(gdjs.JukeboxCode.GDUp_9595ArrowObjects4[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Down_Arrow"), gdjs.JukeboxCode.GDDown_9595ArrowObjects4);
gdjs.copyArray(runtimeScene.getObjects("Up_Arrow"), gdjs.JukeboxCode.GDUp_9595ArrowObjects4);
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDUp_9595ArrowObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDUp_9595ArrowObjects4[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.JukeboxCode.GDUp_9595ArrowObjects4[k] = gdjs.JukeboxCode.GDUp_9595ArrowObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDUp_9595ArrowObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDDown_9595ArrowObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDDown_9595ArrowObjects4[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.JukeboxCode.GDDown_9595ArrowObjects4[k] = gdjs.JukeboxCode.GDDown_9595ArrowObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDDown_9595ArrowObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.JukeboxCode.GDDown_9595ArrowObjects4.length; j < jLen ; ++j) {
        if ( gdjs.JukeboxCode.GDDown_9595ArrowObjects3_1final.indexOf(gdjs.JukeboxCode.GDDown_9595ArrowObjects4[j]) === -1 )
            gdjs.JukeboxCode.GDDown_9595ArrowObjects3_1final.push(gdjs.JukeboxCode.GDDown_9595ArrowObjects4[j]);
    }
    for (let j = 0, jLen = gdjs.JukeboxCode.GDUp_9595ArrowObjects4.length; j < jLen ; ++j) {
        if ( gdjs.JukeboxCode.GDUp_9595ArrowObjects3_1final.indexOf(gdjs.JukeboxCode.GDUp_9595ArrowObjects4[j]) === -1 )
            gdjs.JukeboxCode.GDUp_9595ArrowObjects3_1final.push(gdjs.JukeboxCode.GDUp_9595ArrowObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.JukeboxCode.GDDown_9595ArrowObjects3_1final, gdjs.JukeboxCode.GDDown_9595ArrowObjects3);
gdjs.copyArray(gdjs.JukeboxCode.GDMusic_9595ButtonObjects3_1final, gdjs.JukeboxCode.GDMusic_9595ButtonObjects3);
gdjs.copyArray(gdjs.JukeboxCode.GDSFX_9595ButtonObjects3_1final, gdjs.JukeboxCode.GDSFX_9595ButtonObjects3);
gdjs.copyArray(gdjs.JukeboxCode.GDSocial_9595ButtonsObjects3_1final, gdjs.JukeboxCode.GDSocial_9595ButtonsObjects3);
gdjs.copyArray(gdjs.JukeboxCode.GDUp_9595ArrowObjects3_1final, gdjs.JukeboxCode.GDUp_9595ArrowObjects3);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11852388);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "SFX\\Hover1.wav", 2, false, runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), 1.5);
}}

}


{


gdjs.JukeboxCode.eventsList6(runtimeScene);
}


{


gdjs.JukeboxCode.eventsList7(runtimeScene);
}


};gdjs.JukeboxCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.JukeboxCode.GDMusic_9595SelectObjects3, gdjs.JukeboxCode.GDMusic_9595SelectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track1" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.copyArray(gdjs.JukeboxCode.GDMusic_9595SelectObjects3, gdjs.JukeboxCode.GDMusic_9595SelectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track2" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}}

}


{

gdjs.copyArray(gdjs.JukeboxCode.GDMusic_9595SelectObjects3, gdjs.JukeboxCode.GDMusic_9595SelectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track3" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(3);
}}

}


{

gdjs.copyArray(gdjs.JukeboxCode.GDMusic_9595SelectObjects3, gdjs.JukeboxCode.GDMusic_9595SelectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track4" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(4);
}}

}


{

gdjs.copyArray(gdjs.JukeboxCode.GDMusic_9595SelectObjects3, gdjs.JukeboxCode.GDMusic_9595SelectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track5" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(5);
}}

}


{

gdjs.copyArray(gdjs.JukeboxCode.GDMusic_9595SelectObjects3, gdjs.JukeboxCode.GDMusic_9595SelectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 6);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track6" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(6);
}}

}


{

gdjs.copyArray(gdjs.JukeboxCode.GDMusic_9595SelectObjects3, gdjs.JukeboxCode.GDMusic_9595SelectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 7);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track7" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(7);
}}

}


{

gdjs.copyArray(gdjs.JukeboxCode.GDMusic_9595SelectObjects3, gdjs.JukeboxCode.GDMusic_9595SelectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 8);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track8" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(8);
}}

}


{

gdjs.copyArray(gdjs.JukeboxCode.GDMusic_9595SelectObjects3, gdjs.JukeboxCode.GDMusic_9595SelectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 9);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track9" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(9);
}}

}


{

/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Animation").getAnimationName() == "Track10" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects3[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(10);
}}

}


};gdjs.JukeboxCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TrackSelect") >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11873612);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 1, 0, 1);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Music\\Komiku_-_03_-_Mushrooms(chosic.com).mp3", 1, true, runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track1" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 736, 301, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(3);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track2" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 800, 435, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track3" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 864, 570, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track4" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 544, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track5" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 544, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track6" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 544, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track7" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track8" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track9" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 864, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Animation").getAnimationName() == "Track10" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects3[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects3 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 800, 166, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


};gdjs.JukeboxCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TrackSelect") >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11890476);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 1, 0, 1);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Music\\US_Army_Blues_-_04_-_Not_On_The_Bus(chosic.com).mp3", 1, true, runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track1" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 800, 166, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track2" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 736, 301, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(3);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track3" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 800, 435, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track4" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 864, 570, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track5" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 544, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track6" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 544, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track7" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 544, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track8" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track9" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Animation").getAnimationName() == "Track10" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects3[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects3 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 864, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


};gdjs.JukeboxCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TrackSelect") >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11906956);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 1, 0, 1);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Music\\Soft_and_Furious_-_06_-_Shake_me_Baby(chosic.com).mp3", 1, true, runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track1" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 864, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track2" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 800, 166, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track3" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 736, 301, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(3);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track4" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 800, 435, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track5" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 864, 570, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track6" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 544, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track7" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 544, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track8" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 544, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track9" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Animation").getAnimationName() == "Track10" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects3[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects3 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


};gdjs.JukeboxCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TrackSelect") >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11923500);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 1, 0, 1);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Music\\Komiku_-_01_-_Soundtrack(chosic.com).mp3", 1, true, runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track1" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11924380);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track2" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11925724);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 864, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track3" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11927612);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 800, 166, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track4" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11929276);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 736, 301, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(3);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track5" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11930420);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 800, 435, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track6" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11931876);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 864, 570, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track7" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11933948);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 544, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track8" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11935180);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 544, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track9" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11937428);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 544, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Animation").getAnimationName() == "Track10" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects3[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11938708);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects3 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


};gdjs.JukeboxCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TrackSelect") >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11941004);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 1, 0, 1);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Music\\US_Army_Blues_-_05_-_Stardustchosic.com_(chosic.com).mp3", 1, true, runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track1" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11942268);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track2" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11943652);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track3" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11945540);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 864, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track4" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11947204);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 800, 166, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track5" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11948348);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 736, 301, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(3);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track6" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11949804);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 800, 435, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track7" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11951876);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 864, 570, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track8" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11953108);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 544, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track9" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11955356);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 544, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Animation").getAnimationName() == "Track10" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects3[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11956636);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects3 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 544, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


};gdjs.JukeboxCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TrackSelect") >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11959332);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 1, 0, 1);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Music\\Loyalty_Freak_Music_-_05_-_Traveling_in_your_mind(chosic.com).mp3", 1, true, runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track1" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11959932);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 544, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track2" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11961924);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track3" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11963796);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track4" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11965004);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 864, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track5" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11966956);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 800, 166, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track6" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11967732);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 736, 301, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(3);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track7" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11969780);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 800, 435, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track8" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11971012);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 864, 570, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track9" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11973260);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 544, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Animation").getAnimationName() == "Track10" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects3[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11974540);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects3 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 544, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


};gdjs.JukeboxCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TrackSelect") >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11976844);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 1, 0, 1);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Music\\US_Army_Blues_-_02_-_Main_Stem(chosic.com).mp3", 1, true, runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track1" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11978108);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 544, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track2" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11979492);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 544, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track3" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11981380);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track4" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11983044);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track5" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11984188);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 864, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track6" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11985644);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 800, 166, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track7" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11987716);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 736, 301, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(3);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track8" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11988948);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 800, 435, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track9" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11991196);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 864, 570, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Animation").getAnimationName() == "Track10" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects3[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11992476);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects3 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 544, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


};gdjs.JukeboxCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TrackSelect") >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11995244);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 1, 0, 1);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Music\\Frederic_Lardon_-_11_-_Love_Deep_Sea(chosic.com).mp3", 1, true, runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track1" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11996116);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 544, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track2" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11997500);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 570, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track3" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11999388);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 570, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track4" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12001052);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track5" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12002196);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track6" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12003652);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 864, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track7" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12005724);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 800, 166, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track8" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12006956);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 736, 301, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(3);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track9" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12009204);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 800, 435, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Animation").getAnimationName() == "Track10" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects3[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12010484);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects3 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 864, 570, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


};gdjs.JukeboxCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TrackSelect") >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12012780);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 1, 0, 1);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Music\\Malaventura_-_08_-_Sambaal(chosic.com).mp3", 1, true, runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track1" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12014044);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 864, 570, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track2" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12015428);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 570, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track3" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12017316);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 570, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track4" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12018980);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 570, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track5" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12020124);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track6" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12021580);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track6" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12023652);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track7" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12024884);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 864, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track8" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12027132);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 800, 166, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Animation").getAnimationName() == "Track9" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects4[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12028412);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects4 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 736, 301, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].setZOrder(3);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects4[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Animation").getAnimationName() == "Track10" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects3[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12030076);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects3 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 800, 435, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


};gdjs.JukeboxCode.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TrackSelect") >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12032260);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 1, 0, 1);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Music\\US_Army_Blues_-_09_-_Barbara(chosic.com).mp3", 1, true, runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Animation").getAnimationName() == "Track1" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects3[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12033524);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects3 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 800, 435, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Animation").getAnimationName() == "Track2" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects3[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12034908);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects3 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 864, 570, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Animation").getAnimationName() == "Track3" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects3[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12036796);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects3 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 544, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Animation").getAnimationName() == "Track4" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects3[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12038460);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects3 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 544, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Animation").getAnimationName() == "Track5" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects3[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12039604);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects3 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 544, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Animation").getAnimationName() == "Track6" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects3[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12041060);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects3 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Animation").getAnimationName() == "Track7" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects3[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12043132);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects3 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 1696, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Animation").getAnimationName() == "Track8" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects3[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12044364);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects3 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 864, 32, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Animation").getAnimationName() == "Track9" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects3[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12046612);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects3 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 800, 166, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects2.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects2[i].getBehavior("Animation").getAnimationName() == "Track10" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects2[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects2[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12047892);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JukeboxCode.GDMusic_9595SelectObjects2 */
{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects2.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects2[i].getBehavior("Tween").addObjectPositionTween2("TrackUI", 736, 301, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects2.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects2[i].setZOrder(3);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects2.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects2[i].getBehavior("Effect").setEffectDoubleParameter("Darken", "brightness", 1);
}
}}

}


};gdjs.JukeboxCode.eventsList20 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(10);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 11);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "1) Mushrooms - Komiku");
}
{ //Subevents
gdjs.JukeboxCode.eventsList10(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "2) Not On The Bus - U.S. Army Blues");
}
{ //Subevents
gdjs.JukeboxCode.eventsList11(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "3) Shake Me, Baby - Soft and Furious");
}
{ //Subevents
gdjs.JukeboxCode.eventsList12(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "4) Soundtrack - Komiku");
}
{ //Subevents
gdjs.JukeboxCode.eventsList13(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 5);
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "5) Stardust - U.S. Army Blues");
}
{ //Subevents
gdjs.JukeboxCode.eventsList14(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 6);
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "6) Travelling In Your Mind - Loyalty Freak Music");
}
{ //Subevents
gdjs.JukeboxCode.eventsList15(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 7);
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "7) Main Stem - U.S. Army Blues");
}
{ //Subevents
gdjs.JukeboxCode.eventsList16(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 8);
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "8) Love Deep Sea - Frederic Lardon");
}
{ //Subevents
gdjs.JukeboxCode.eventsList17(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 9);
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "9) Sambaal - Malaventura");
}
{ //Subevents
gdjs.JukeboxCode.eventsList18(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 10);
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "10) Barbara - U.S. Army Blues");
}
{ //Subevents
gdjs.JukeboxCode.eventsList19(runtimeScene);} //End of subevents
}

}


};gdjs.JukeboxCode.eventsList21 = function(runtimeScene) {

{

gdjs.JukeboxCode.GDDown_9595ArrowObjects3.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.JukeboxCode.GDDown_9595ArrowObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Down_Arrow"), gdjs.JukeboxCode.GDDown_9595ArrowObjects4);
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDDown_9595ArrowObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDDown_9595ArrowObjects4[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.JukeboxCode.GDDown_9595ArrowObjects4[k] = gdjs.JukeboxCode.GDDown_9595ArrowObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDDown_9595ArrowObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.JukeboxCode.GDDown_9595ArrowObjects4.length; j < jLen ; ++j) {
        if ( gdjs.JukeboxCode.GDDown_9595ArrowObjects3_1final.indexOf(gdjs.JukeboxCode.GDDown_9595ArrowObjects4[j]) === -1 )
            gdjs.JukeboxCode.GDDown_9595ArrowObjects3_1final.push(gdjs.JukeboxCode.GDDown_9595ArrowObjects4[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.JukeboxCode.GDDown_9595ArrowObjects3_1final, gdjs.JukeboxCode.GDDown_9595ArrowObjects3);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11857700);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}

}


{

gdjs.JukeboxCode.GDUp_9595ArrowObjects3.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.JukeboxCode.GDUp_9595ArrowObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Up_Arrow"), gdjs.JukeboxCode.GDUp_9595ArrowObjects4);
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDUp_9595ArrowObjects4.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDUp_9595ArrowObjects4[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.JukeboxCode.GDUp_9595ArrowObjects4[k] = gdjs.JukeboxCode.GDUp_9595ArrowObjects4[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDUp_9595ArrowObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.JukeboxCode.GDUp_9595ArrowObjects4.length; j < jLen ; ++j) {
        if ( gdjs.JukeboxCode.GDUp_9595ArrowObjects3_1final.indexOf(gdjs.JukeboxCode.GDUp_9595ArrowObjects4[j]) === -1 )
            gdjs.JukeboxCode.GDUp_9595ArrowObjects3_1final.push(gdjs.JukeboxCode.GDUp_9595ArrowObjects4[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.JukeboxCode.GDUp_9595ArrowObjects3_1final, gdjs.JukeboxCode.GDUp_9595ArrowObjects3);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11859676);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDMusic_9595SelectObjects3[k] = gdjs.JukeboxCode.GDMusic_9595SelectObjects3[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11860572);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TrackSelect");
}
{ //Subevents
gdjs.JukeboxCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


gdjs.JukeboxCode.eventsList20(runtimeScene);
}


};gdjs.JukeboxCode.eventsList22 = function(runtimeScene, asyncObjectsList) {

{

gdjs.copyArray(asyncObjectsList.getObjects("Social_Buttons"), gdjs.JukeboxCode.GDSocial_9595ButtonsObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDSocial_9595ButtonsObjects3.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDSocial_9595ButtonsObjects3[i].getBehavior("Animation").getAnimationName() == "Web" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDSocial_9595ButtonsObjects3[k] = gdjs.JukeboxCode.GDSocial_9595ButtonsObjects3[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDSocial_9595ButtonsObjects3.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.tkgk-interactive.com", runtimeScene);
}}

}


{

gdjs.copyArray(asyncObjectsList.getObjects("Social_Buttons"), gdjs.JukeboxCode.GDSocial_9595ButtonsObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDSocial_9595ButtonsObjects3.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDSocial_9595ButtonsObjects3[i].getBehavior("Animation").getAnimationName() == "Itchio" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDSocial_9595ButtonsObjects3[k] = gdjs.JukeboxCode.GDSocial_9595ButtonsObjects3[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDSocial_9595ButtonsObjects3.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://teckgeck.itch.io", runtimeScene);
}}

}


{

gdjs.copyArray(asyncObjectsList.getObjects("Social_Buttons"), gdjs.JukeboxCode.GDSocial_9595ButtonsObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDSocial_9595ButtonsObjects2.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDSocial_9595ButtonsObjects2[i].getBehavior("Animation").getAnimationName() == "GDgames" ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDSocial_9595ButtonsObjects2[k] = gdjs.JukeboxCode.GDSocial_9595ButtonsObjects2[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDSocial_9595ButtonsObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://gd.games/TeckGeck", runtimeScene);
}}

}


};gdjs.JukeboxCode.asyncCallback12049884 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.JukeboxCode.localVariables);

{ //Subevents
gdjs.JukeboxCode.eventsList22(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.JukeboxCode.localVariables.length = 0;
}
gdjs.JukeboxCode.eventsList23 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.JukeboxCode.localVariables);
for (const obj of gdjs.JukeboxCode.GDSocial_9595ButtonsObjects1) asyncObjectsList.addObject("Social_Buttons", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.JukeboxCode.asyncCallback12049884(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.JukeboxCode.eventsList24 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Social_Buttons"), gdjs.JukeboxCode.GDSocial_9595ButtonsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JukeboxCode.GDSocial_9595ButtonsObjects1.length;i<l;++i) {
    if ( gdjs.JukeboxCode.GDSocial_9595ButtonsObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.JukeboxCode.GDSocial_9595ButtonsObjects1[k] = gdjs.JukeboxCode.GDSocial_9595ButtonsObjects1[i];
        ++k;
    }
}
gdjs.JukeboxCode.GDSocial_9595ButtonsObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "SFX\\scratch_004.ogg", 1, false, runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), 0.7);
}
{ //Subevents
gdjs.JukeboxCode.eventsList23(runtimeScene);} //End of subevents
}

}


};gdjs.JukeboxCode.eventsList25 = function(runtimeScene) {

{


gdjs.JukeboxCode.eventsList8(runtimeScene);
}


{


gdjs.JukeboxCode.eventsList21(runtimeScene);
}


{


gdjs.JukeboxCode.eventsList24(runtimeScene);
}


};gdjs.JukeboxCode.eventsList26 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(695);
variables._declare("DefaultTrackUISizeW", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(135);
variables._declare("DefaultTrackUISizeH", variable);
}
gdjs.JukeboxCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Music_Select"), gdjs.JukeboxCode.GDMusic_9595SelectObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpineDisk"), gdjs.JukeboxCode.GDSpineDiskObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TrackSelect");
}{for(var i = 0, len = gdjs.JukeboxCode.GDSpineDiskObjects1.length ;i < len;++i) {
    gdjs.JukeboxCode.GDSpineDiskObjects1[i].getBehavior("Animation").setAnimationSpeedScale(0.13);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDSpineDiskObjects1.length ;i < len;++i) {
    gdjs.JukeboxCode.GDSpineDiskObjects1[i].setAnimationMixingDuration(0);
}
}{for(var i = 0, len = gdjs.JukeboxCode.GDMusic_9595SelectObjects1.length ;i < len;++i) {
    gdjs.JukeboxCode.GDMusic_9595SelectObjects1[i].getBehavior("Resizable").setSize(gdjs.JukeboxCode.localVariables[0].getFromIndex(0).getAsNumber(), gdjs.JukeboxCode.localVariables[0].getFromIndex(1).getAsNumber());
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber((( gdjs.JukeboxCode.GDSpineDiskObjects1.length === 0 ) ? 0 :gdjs.JukeboxCode.GDSpineDiskObjects1[0].getWidth()));
}
{ //Subevents
gdjs.JukeboxCode.eventsList0(runtimeScene);} //End of subevents
}
gdjs.JukeboxCode.localVariables.pop();

}


{


gdjs.JukeboxCode.eventsList5(runtimeScene);
}


{


gdjs.JukeboxCode.eventsList25(runtimeScene);
}


};

gdjs.JukeboxCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.JukeboxCode.GDMusic_9595SelectObjects1.length = 0;
gdjs.JukeboxCode.GDMusic_9595SelectObjects2.length = 0;
gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length = 0;
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = 0;
gdjs.JukeboxCode.GDMusic_9595SelectObjects5.length = 0;
gdjs.JukeboxCode.GDSpineDiskObjects1.length = 0;
gdjs.JukeboxCode.GDSpineDiskObjects2.length = 0;
gdjs.JukeboxCode.GDSpineDiskObjects3.length = 0;
gdjs.JukeboxCode.GDSpineDiskObjects4.length = 0;
gdjs.JukeboxCode.GDSpineDiskObjects5.length = 0;
gdjs.JukeboxCode.GDUp_9595ArrowObjects1.length = 0;
gdjs.JukeboxCode.GDUp_9595ArrowObjects2.length = 0;
gdjs.JukeboxCode.GDUp_9595ArrowObjects3.length = 0;
gdjs.JukeboxCode.GDUp_9595ArrowObjects4.length = 0;
gdjs.JukeboxCode.GDUp_9595ArrowObjects5.length = 0;
gdjs.JukeboxCode.GDDown_9595ArrowObjects1.length = 0;
gdjs.JukeboxCode.GDDown_9595ArrowObjects2.length = 0;
gdjs.JukeboxCode.GDDown_9595ArrowObjects3.length = 0;
gdjs.JukeboxCode.GDDown_9595ArrowObjects4.length = 0;
gdjs.JukeboxCode.GDDown_9595ArrowObjects5.length = 0;
gdjs.JukeboxCode.GDBackgroundObjects1.length = 0;
gdjs.JukeboxCode.GDBackgroundObjects2.length = 0;
gdjs.JukeboxCode.GDBackgroundObjects3.length = 0;
gdjs.JukeboxCode.GDBackgroundObjects4.length = 0;
gdjs.JukeboxCode.GDBackgroundObjects5.length = 0;
gdjs.JukeboxCode.GDSFX_9595ButtonObjects1.length = 0;
gdjs.JukeboxCode.GDSFX_9595ButtonObjects2.length = 0;
gdjs.JukeboxCode.GDSFX_9595ButtonObjects3.length = 0;
gdjs.JukeboxCode.GDSFX_9595ButtonObjects4.length = 0;
gdjs.JukeboxCode.GDSFX_9595ButtonObjects5.length = 0;
gdjs.JukeboxCode.GDMusic_9595ButtonObjects1.length = 0;
gdjs.JukeboxCode.GDMusic_9595ButtonObjects2.length = 0;
gdjs.JukeboxCode.GDMusic_9595ButtonObjects3.length = 0;
gdjs.JukeboxCode.GDMusic_9595ButtonObjects4.length = 0;
gdjs.JukeboxCode.GDMusic_9595ButtonObjects5.length = 0;
gdjs.JukeboxCode.GDSocial_9595ButtonsObjects1.length = 0;
gdjs.JukeboxCode.GDSocial_9595ButtonsObjects2.length = 0;
gdjs.JukeboxCode.GDSocial_9595ButtonsObjects3.length = 0;
gdjs.JukeboxCode.GDSocial_9595ButtonsObjects4.length = 0;
gdjs.JukeboxCode.GDSocial_9595ButtonsObjects5.length = 0;

gdjs.JukeboxCode.eventsList26(runtimeScene);
gdjs.JukeboxCode.GDMusic_9595SelectObjects1.length = 0;
gdjs.JukeboxCode.GDMusic_9595SelectObjects2.length = 0;
gdjs.JukeboxCode.GDMusic_9595SelectObjects3.length = 0;
gdjs.JukeboxCode.GDMusic_9595SelectObjects4.length = 0;
gdjs.JukeboxCode.GDMusic_9595SelectObjects5.length = 0;
gdjs.JukeboxCode.GDSpineDiskObjects1.length = 0;
gdjs.JukeboxCode.GDSpineDiskObjects2.length = 0;
gdjs.JukeboxCode.GDSpineDiskObjects3.length = 0;
gdjs.JukeboxCode.GDSpineDiskObjects4.length = 0;
gdjs.JukeboxCode.GDSpineDiskObjects5.length = 0;
gdjs.JukeboxCode.GDUp_9595ArrowObjects1.length = 0;
gdjs.JukeboxCode.GDUp_9595ArrowObjects2.length = 0;
gdjs.JukeboxCode.GDUp_9595ArrowObjects3.length = 0;
gdjs.JukeboxCode.GDUp_9595ArrowObjects4.length = 0;
gdjs.JukeboxCode.GDUp_9595ArrowObjects5.length = 0;
gdjs.JukeboxCode.GDDown_9595ArrowObjects1.length = 0;
gdjs.JukeboxCode.GDDown_9595ArrowObjects2.length = 0;
gdjs.JukeboxCode.GDDown_9595ArrowObjects3.length = 0;
gdjs.JukeboxCode.GDDown_9595ArrowObjects4.length = 0;
gdjs.JukeboxCode.GDDown_9595ArrowObjects5.length = 0;
gdjs.JukeboxCode.GDBackgroundObjects1.length = 0;
gdjs.JukeboxCode.GDBackgroundObjects2.length = 0;
gdjs.JukeboxCode.GDBackgroundObjects3.length = 0;
gdjs.JukeboxCode.GDBackgroundObjects4.length = 0;
gdjs.JukeboxCode.GDBackgroundObjects5.length = 0;
gdjs.JukeboxCode.GDSFX_9595ButtonObjects1.length = 0;
gdjs.JukeboxCode.GDSFX_9595ButtonObjects2.length = 0;
gdjs.JukeboxCode.GDSFX_9595ButtonObjects3.length = 0;
gdjs.JukeboxCode.GDSFX_9595ButtonObjects4.length = 0;
gdjs.JukeboxCode.GDSFX_9595ButtonObjects5.length = 0;
gdjs.JukeboxCode.GDMusic_9595ButtonObjects1.length = 0;
gdjs.JukeboxCode.GDMusic_9595ButtonObjects2.length = 0;
gdjs.JukeboxCode.GDMusic_9595ButtonObjects3.length = 0;
gdjs.JukeboxCode.GDMusic_9595ButtonObjects4.length = 0;
gdjs.JukeboxCode.GDMusic_9595ButtonObjects5.length = 0;
gdjs.JukeboxCode.GDSocial_9595ButtonsObjects1.length = 0;
gdjs.JukeboxCode.GDSocial_9595ButtonsObjects2.length = 0;
gdjs.JukeboxCode.GDSocial_9595ButtonsObjects3.length = 0;
gdjs.JukeboxCode.GDSocial_9595ButtonsObjects4.length = 0;
gdjs.JukeboxCode.GDSocial_9595ButtonsObjects5.length = 0;


return;

}

gdjs['JukeboxCode'] = gdjs.JukeboxCode;
