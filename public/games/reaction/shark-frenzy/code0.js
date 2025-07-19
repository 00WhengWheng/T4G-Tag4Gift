gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDPlayButtonObjects1= [];
gdjs.MenuCode.GDPlayButtonObjects2= [];
gdjs.MenuCode.GDPlayButtonObjects3= [];
gdjs.MenuCode.GDSharkObjects1= [];
gdjs.MenuCode.GDSharkObjects2= [];
gdjs.MenuCode.GDSharkObjects3= [];
gdjs.MenuCode.GDLeaderboardButtonObjects1= [];
gdjs.MenuCode.GDLeaderboardButtonObjects2= [];
gdjs.MenuCode.GDLeaderboardButtonObjects3= [];
gdjs.MenuCode.GDSettingsButtonObjects1= [];
gdjs.MenuCode.GDSettingsButtonObjects2= [];
gdjs.MenuCode.GDSettingsButtonObjects3= [];
gdjs.MenuCode.GDBlackObjects1= [];
gdjs.MenuCode.GDBlackObjects2= [];
gdjs.MenuCode.GDBlackObjects3= [];
gdjs.MenuCode.GDVolumeSliderObjects1= [];
gdjs.MenuCode.GDVolumeSliderObjects2= [];
gdjs.MenuCode.GDVolumeSliderObjects3= [];
gdjs.MenuCode.GDBackButtonObjects1= [];
gdjs.MenuCode.GDBackButtonObjects2= [];
gdjs.MenuCode.GDBackButtonObjects3= [];
gdjs.MenuCode.GDVolumeTextObjects1= [];
gdjs.MenuCode.GDVolumeTextObjects2= [];
gdjs.MenuCode.GDVolumeTextObjects3= [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDTitleObjects3= [];
gdjs.MenuCode.GDScreenOrientationCheckerObjects1= [];
gdjs.MenuCode.GDScreenOrientationCheckerObjects2= [];
gdjs.MenuCode.GDScreenOrientationCheckerObjects3= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Volume", variable);
}
gdjs.MenuCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Save", "Volume");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Save", "Volume", runtimeScene, gdjs.MenuCode.localVariables[0].getFromIndex(0));
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.MenuCode.localVariables[0].getFromIndex(0).getAsNumber());
}}
gdjs.MenuCode.localVariables.pop();

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MenuCode.GDPlayButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDPlayButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDPlayButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDPlayButtonObjects2[k] = gdjs.MenuCode.GDPlayButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDPlayButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeaderboardButton"), gdjs.MenuCode.GDLeaderboardButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDLeaderboardButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDLeaderboardButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDLeaderboardButtonObjects2[k] = gdjs.MenuCode.GDLeaderboardButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDLeaderboardButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "8a96ea39-7db0-4e4e-8334-ab404ff58785", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SettingsButton"), gdjs.MenuCode.GDSettingsButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDSettingsButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDSettingsButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDSettingsButtonObjects2[k] = gdjs.MenuCode.GDSettingsButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDSettingsButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Settings");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.isLeaderboardViewErrored();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14385788);
}
}
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14387220);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.MenuCode.GDBlackObjects2);
gdjs.copyArray(runtimeScene.getObjects("VolumeSlider"), gdjs.MenuCode.GDVolumeSliderObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDBlackObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDBlackObjects2[i].getBehavior("Opacity").setOpacity(100);
}
}{for(var i = 0, len = gdjs.MenuCode.GDVolumeSliderObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDVolumeSliderObjects2[i].SetValue(gdjs.evtTools.sound.getGlobalVolume(runtimeScene), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.MenuCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBackButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBackButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBackButtonObjects1[k] = gdjs.MenuCode.GDBackButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBackButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("VolumeSlider"), gdjs.MenuCode.GDVolumeSliderObjects1);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, (( gdjs.MenuCode.GDVolumeSliderObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDVolumeSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save", "Volume", (( gdjs.MenuCode.GDVolumeSliderObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDVolumeSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Settings");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}}

}


};gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Settings");
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "");
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Settings");
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MenuCode.GDPlayButtonObjects3.length = 0;
gdjs.MenuCode.GDSharkObjects1.length = 0;
gdjs.MenuCode.GDSharkObjects2.length = 0;
gdjs.MenuCode.GDSharkObjects3.length = 0;
gdjs.MenuCode.GDLeaderboardButtonObjects1.length = 0;
gdjs.MenuCode.GDLeaderboardButtonObjects2.length = 0;
gdjs.MenuCode.GDLeaderboardButtonObjects3.length = 0;
gdjs.MenuCode.GDSettingsButtonObjects1.length = 0;
gdjs.MenuCode.GDSettingsButtonObjects2.length = 0;
gdjs.MenuCode.GDSettingsButtonObjects3.length = 0;
gdjs.MenuCode.GDBlackObjects1.length = 0;
gdjs.MenuCode.GDBlackObjects2.length = 0;
gdjs.MenuCode.GDBlackObjects3.length = 0;
gdjs.MenuCode.GDVolumeSliderObjects1.length = 0;
gdjs.MenuCode.GDVolumeSliderObjects2.length = 0;
gdjs.MenuCode.GDVolumeSliderObjects3.length = 0;
gdjs.MenuCode.GDBackButtonObjects1.length = 0;
gdjs.MenuCode.GDBackButtonObjects2.length = 0;
gdjs.MenuCode.GDBackButtonObjects3.length = 0;
gdjs.MenuCode.GDVolumeTextObjects1.length = 0;
gdjs.MenuCode.GDVolumeTextObjects2.length = 0;
gdjs.MenuCode.GDVolumeTextObjects3.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDScreenOrientationCheckerObjects1.length = 0;
gdjs.MenuCode.GDScreenOrientationCheckerObjects2.length = 0;
gdjs.MenuCode.GDScreenOrientationCheckerObjects3.length = 0;

gdjs.MenuCode.eventsList3(runtimeScene);
gdjs.MenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MenuCode.GDPlayButtonObjects3.length = 0;
gdjs.MenuCode.GDSharkObjects1.length = 0;
gdjs.MenuCode.GDSharkObjects2.length = 0;
gdjs.MenuCode.GDSharkObjects3.length = 0;
gdjs.MenuCode.GDLeaderboardButtonObjects1.length = 0;
gdjs.MenuCode.GDLeaderboardButtonObjects2.length = 0;
gdjs.MenuCode.GDLeaderboardButtonObjects3.length = 0;
gdjs.MenuCode.GDSettingsButtonObjects1.length = 0;
gdjs.MenuCode.GDSettingsButtonObjects2.length = 0;
gdjs.MenuCode.GDSettingsButtonObjects3.length = 0;
gdjs.MenuCode.GDBlackObjects1.length = 0;
gdjs.MenuCode.GDBlackObjects2.length = 0;
gdjs.MenuCode.GDBlackObjects3.length = 0;
gdjs.MenuCode.GDVolumeSliderObjects1.length = 0;
gdjs.MenuCode.GDVolumeSliderObjects2.length = 0;
gdjs.MenuCode.GDVolumeSliderObjects3.length = 0;
gdjs.MenuCode.GDBackButtonObjects1.length = 0;
gdjs.MenuCode.GDBackButtonObjects2.length = 0;
gdjs.MenuCode.GDBackButtonObjects3.length = 0;
gdjs.MenuCode.GDVolumeTextObjects1.length = 0;
gdjs.MenuCode.GDVolumeTextObjects2.length = 0;
gdjs.MenuCode.GDVolumeTextObjects3.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDScreenOrientationCheckerObjects1.length = 0;
gdjs.MenuCode.GDScreenOrientationCheckerObjects2.length = 0;
gdjs.MenuCode.GDScreenOrientationCheckerObjects3.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
