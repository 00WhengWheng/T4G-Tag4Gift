gdjs.NewSceneCode = {};
gdjs.NewSceneCode.localVariables = [];
gdjs.NewSceneCode.GDplayObjects1= [];
gdjs.NewSceneCode.GDplayObjects2= [];
gdjs.NewSceneCode.GDplayObjects3= [];
gdjs.NewSceneCode.GDplayObjects4= [];
gdjs.NewSceneCode.GDpauseObjects1= [];
gdjs.NewSceneCode.GDpauseObjects2= [];
gdjs.NewSceneCode.GDpauseObjects3= [];
gdjs.NewSceneCode.GDpauseObjects4= [];
gdjs.NewSceneCode.GDmuteObjects1= [];
gdjs.NewSceneCode.GDmuteObjects2= [];
gdjs.NewSceneCode.GDmuteObjects3= [];
gdjs.NewSceneCode.GDmuteObjects4= [];
gdjs.NewSceneCode.GDmusicObjects1= [];
gdjs.NewSceneCode.GDmusicObjects2= [];
gdjs.NewSceneCode.GDmusicObjects3= [];
gdjs.NewSceneCode.GDmusicObjects4= [];
gdjs.NewSceneCode.GDtrack_9595infoObjects1= [];
gdjs.NewSceneCode.GDtrack_9595infoObjects2= [];
gdjs.NewSceneCode.GDtrack_9595infoObjects3= [];
gdjs.NewSceneCode.GDtrack_9595infoObjects4= [];
gdjs.NewSceneCode.GDvolume_9595backgroundObjects1= [];
gdjs.NewSceneCode.GDvolume_9595backgroundObjects2= [];
gdjs.NewSceneCode.GDvolume_9595backgroundObjects3= [];
gdjs.NewSceneCode.GDvolume_9595backgroundObjects4= [];
gdjs.NewSceneCode.GDvolume_9595sliderObjects1= [];
gdjs.NewSceneCode.GDvolume_9595sliderObjects2= [];
gdjs.NewSceneCode.GDvolume_9595sliderObjects3= [];
gdjs.NewSceneCode.GDvolume_9595sliderObjects4= [];
gdjs.NewSceneCode.GDslider_9595buttonObjects1= [];
gdjs.NewSceneCode.GDslider_9595buttonObjects2= [];
gdjs.NewSceneCode.GDslider_9595buttonObjects3= [];
gdjs.NewSceneCode.GDslider_9595buttonObjects4= [];


gdjs.NewSceneCode.mapOfGDgdjs_9546NewSceneCode_9546GDslider_95959595buttonObjects1Objects = Hashtable.newFrom({"slider_button": gdjs.NewSceneCode.GDslider_9595buttonObjects1});
gdjs.NewSceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("volume_background"), gdjs.NewSceneCode.GDvolume_9595backgroundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) > (( gdjs.NewSceneCode.GDvolume_9595backgroundObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDvolume_9595backgroundObjects1[0].getPointX(""));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) < (( gdjs.NewSceneCode.GDvolume_9595backgroundObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDvolume_9595backgroundObjects1[0].getPointX("")) + 200;
}
if (isConditionTrue_0) {
/* Reuse gdjs.NewSceneCode.GDslider_9595buttonObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDslider_9595buttonObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDslider_9595buttonObjects1[i].setX(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("sound_level")));
}}

}


};gdjs.NewSceneCode.mapOfGDgdjs_9546NewSceneCode_9546GDplayObjects2ObjectsGDgdjs_9546NewSceneCode_9546GDpauseObjects2ObjectsGDgdjs_9546NewSceneCode_9546GDmuteObjects2Objects = Hashtable.newFrom({"play": gdjs.NewSceneCode.GDplayObjects2, "pause": gdjs.NewSceneCode.GDpauseObjects2, "mute": gdjs.NewSceneCode.GDmuteObjects2});
gdjs.NewSceneCode.mapOfGDgdjs_9546NewSceneCode_9546GDmuteObjects2Objects = Hashtable.newFrom({"mute": gdjs.NewSceneCode.GDmuteObjects2});
gdjs.NewSceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.getMusicOnChannelVolume(runtimeScene, 1) > 0;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 0);
}}

}


};gdjs.NewSceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.getMusicOnChannelVolume(runtimeScene, 1) < 100;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 100);
}}

}


};gdjs.NewSceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("switch")) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("mute")) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("play")) == 1;
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("mute").setNumber(1);
}{runtimeScene.getScene().getVariables().get("switch").setNumber(1);
}
{ //Subevents
gdjs.NewSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("switch")) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("mute")) == 1;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("mute").setNumber(0);
}{runtimeScene.getScene().getVariables().get("switch").setNumber(1);
}
{ //Subevents
gdjs.NewSceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.NewSceneCode.mapOfGDgdjs_9546NewSceneCode_9546GDpauseObjects2Objects = Hashtable.newFrom({"pause": gdjs.NewSceneCode.GDpauseObjects2});
gdjs.NewSceneCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}}

}


};gdjs.NewSceneCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("play")) == 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("play").setNumber(0);
}
{ //Subevents
gdjs.NewSceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.NewSceneCode.mapOfGDgdjs_9546NewSceneCode_9546GDplayObjects2Objects = Hashtable.newFrom({"play": gdjs.NewSceneCode.GDplayObjects2});
gdjs.NewSceneCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 1));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isMusicOnChannelPaused(runtimeScene, 1));
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Castle-of-Despair.ogg", 1, true, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.isMusicOnChannelPaused(runtimeScene, 1);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}}

}


};gdjs.NewSceneCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("play")) == 0;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("play").setNumber(1);
}
{ //Subevents
gdjs.NewSceneCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.NewSceneCode.eventsList8 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("mute"), gdjs.NewSceneCode.GDmuteObjects2);
gdjs.copyArray(runtimeScene.getObjects("pause"), gdjs.NewSceneCode.GDpauseObjects2);
gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.NewSceneCode.GDplayObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.NewSceneCode.mapOfGDgdjs_9546NewSceneCode_9546GDplayObjects2ObjectsGDgdjs_9546NewSceneCode_9546GDpauseObjects2ObjectsGDgdjs_9546NewSceneCode_9546GDmuteObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click.ogg", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mute"), gdjs.NewSceneCode.GDmuteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.NewSceneCode.mapOfGDgdjs_9546NewSceneCode_9546GDmuteObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.NewSceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("pause"), gdjs.NewSceneCode.GDpauseObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.NewSceneCode.mapOfGDgdjs_9546NewSceneCode_9546GDpauseObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.NewSceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.NewSceneCode.GDplayObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.NewSceneCode.mapOfGDgdjs_9546NewSceneCode_9546GDplayObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.NewSceneCode.eventsList7(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("play")) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("mute")) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9259500);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("music"), gdjs.NewSceneCode.GDmusicObjects2);
gdjs.copyArray(runtimeScene.getObjects("mute"), gdjs.NewSceneCode.GDmuteObjects2);
gdjs.copyArray(runtimeScene.getObjects("track_info"), gdjs.NewSceneCode.GDtrack_9595infoObjects2);
{for(var i = 0, len = gdjs.NewSceneCode.GDtrack_9595infoObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDtrack_9595infoObjects2[i].setString("Playing: Castle of Despair by Eric Matyas" + gdjs.evtTools.string.newLine() + "www.soundimage.org");
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDmusicObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDmusicObjects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDmuteObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDmuteObjects2[i].setAnimation(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("play")) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("mute")) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9261244);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("music"), gdjs.NewSceneCode.GDmusicObjects2);
gdjs.copyArray(runtimeScene.getObjects("mute"), gdjs.NewSceneCode.GDmuteObjects2);
gdjs.copyArray(runtimeScene.getObjects("track_info"), gdjs.NewSceneCode.GDtrack_9595infoObjects2);
{for(var i = 0, len = gdjs.NewSceneCode.GDtrack_9595infoObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDtrack_9595infoObjects2[i].setString("Muted");
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDmuteObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDmuteObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDmusicObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDmusicObjects2[i].setAnimation(1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("play")) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("mute")) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9262572);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("music"), gdjs.NewSceneCode.GDmusicObjects2);
gdjs.copyArray(runtimeScene.getObjects("track_info"), gdjs.NewSceneCode.GDtrack_9595infoObjects2);
{for(var i = 0, len = gdjs.NewSceneCode.GDtrack_9595infoObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDtrack_9595infoObjects2[i].setString("Paused");
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDmusicObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDmusicObjects2[i].setAnimation(1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("play")) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("mute")) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9263476);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("music"), gdjs.NewSceneCode.GDmusicObjects1);
gdjs.copyArray(runtimeScene.getObjects("track_info"), gdjs.NewSceneCode.GDtrack_9595infoObjects1);
{for(var i = 0, len = gdjs.NewSceneCode.GDtrack_9595infoObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDtrack_9595infoObjects1[i].setString("Paused" + gdjs.evtTools.string.newLine() + "Muted");
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDmusicObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDmusicObjects1[i].setAnimation(1);
}
}}

}


};gdjs.NewSceneCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("slider_button"), gdjs.NewSceneCode.GDslider_9595buttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("volume_background"), gdjs.NewSceneCode.GDvolume_9595backgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("volume_slider"), gdjs.NewSceneCode.GDvolume_9595sliderObjects1);
{runtimeScene.getScene().getVariables().get("mute").setNumber(0);
}{runtimeScene.getScene().getVariables().get("play").setNumber(0);
}{runtimeScene.getScene().getVariables().get("sound_level").setNumber(50);
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("sound_level")));
}{for(var i = 0, len = gdjs.NewSceneCode.GDvolume_9595sliderObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDvolume_9595sliderObjects1[i].setPosition((( gdjs.NewSceneCode.GDvolume_9595backgroundObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDvolume_9595backgroundObjects1[0].getPointX("")),(( gdjs.NewSceneCode.GDvolume_9595backgroundObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDvolume_9595backgroundObjects1[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDvolume_9595sliderObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDvolume_9595sliderObjects1[i].setScaleX(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("sound_level")) / 100);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDslider_9595buttonObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDslider_9595buttonObjects1[i].setPosition((( gdjs.NewSceneCode.GDvolume_9595sliderObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDvolume_9595sliderObjects1[0].getPointX("button")),(( gdjs.NewSceneCode.GDvolume_9595sliderObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDvolume_9595sliderObjects1[0].getPointY("button")));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("slider_button"), gdjs.NewSceneCode.GDslider_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.NewSceneCode.mapOfGDgdjs_9546NewSceneCode_9546GDslider_95959595buttonObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.NewSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("slider_button"), gdjs.NewSceneCode.GDslider_9595buttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("volume_slider"), gdjs.NewSceneCode.GDvolume_9595sliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NewSceneCode.GDslider_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDslider_9595buttonObjects1[i].getX() >= (( gdjs.NewSceneCode.GDvolume_9595sliderObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDvolume_9595sliderObjects1[0].getPointX("button")) ) {
        isConditionTrue_0 = true;
        gdjs.NewSceneCode.GDslider_9595buttonObjects1[k] = gdjs.NewSceneCode.GDslider_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDslider_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.NewSceneCode.GDvolume_9595sliderObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDvolume_9595sliderObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDvolume_9595sliderObjects1[i].setScaleX(gdjs.NewSceneCode.GDvolume_9595sliderObjects1[i].getScaleX() + (0.05));
}
}{runtimeScene.getScene().getVariables().get("sound_level").add(5);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("slider_button"), gdjs.NewSceneCode.GDslider_9595buttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("volume_slider"), gdjs.NewSceneCode.GDvolume_9595sliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NewSceneCode.GDslider_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDslider_9595buttonObjects1[i].getX() < (( gdjs.NewSceneCode.GDvolume_9595sliderObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDvolume_9595sliderObjects1[0].getPointX("button")) ) {
        isConditionTrue_0 = true;
        gdjs.NewSceneCode.GDslider_9595buttonObjects1[k] = gdjs.NewSceneCode.GDslider_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDslider_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.NewSceneCode.GDvolume_9595sliderObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDvolume_9595sliderObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDvolume_9595sliderObjects1[i].setScaleX(gdjs.NewSceneCode.GDvolume_9595sliderObjects1[i].getScaleX() - (0.05));
}
}{runtimeScene.getScene().getVariables().get("sound_level").sub(5);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("switch").setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9249004);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.NewSceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


};

gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewSceneCode.GDplayObjects1.length = 0;
gdjs.NewSceneCode.GDplayObjects2.length = 0;
gdjs.NewSceneCode.GDplayObjects3.length = 0;
gdjs.NewSceneCode.GDplayObjects4.length = 0;
gdjs.NewSceneCode.GDpauseObjects1.length = 0;
gdjs.NewSceneCode.GDpauseObjects2.length = 0;
gdjs.NewSceneCode.GDpauseObjects3.length = 0;
gdjs.NewSceneCode.GDpauseObjects4.length = 0;
gdjs.NewSceneCode.GDmuteObjects1.length = 0;
gdjs.NewSceneCode.GDmuteObjects2.length = 0;
gdjs.NewSceneCode.GDmuteObjects3.length = 0;
gdjs.NewSceneCode.GDmuteObjects4.length = 0;
gdjs.NewSceneCode.GDmusicObjects1.length = 0;
gdjs.NewSceneCode.GDmusicObjects2.length = 0;
gdjs.NewSceneCode.GDmusicObjects3.length = 0;
gdjs.NewSceneCode.GDmusicObjects4.length = 0;
gdjs.NewSceneCode.GDtrack_9595infoObjects1.length = 0;
gdjs.NewSceneCode.GDtrack_9595infoObjects2.length = 0;
gdjs.NewSceneCode.GDtrack_9595infoObjects3.length = 0;
gdjs.NewSceneCode.GDtrack_9595infoObjects4.length = 0;
gdjs.NewSceneCode.GDvolume_9595backgroundObjects1.length = 0;
gdjs.NewSceneCode.GDvolume_9595backgroundObjects2.length = 0;
gdjs.NewSceneCode.GDvolume_9595backgroundObjects3.length = 0;
gdjs.NewSceneCode.GDvolume_9595backgroundObjects4.length = 0;
gdjs.NewSceneCode.GDvolume_9595sliderObjects1.length = 0;
gdjs.NewSceneCode.GDvolume_9595sliderObjects2.length = 0;
gdjs.NewSceneCode.GDvolume_9595sliderObjects3.length = 0;
gdjs.NewSceneCode.GDvolume_9595sliderObjects4.length = 0;
gdjs.NewSceneCode.GDslider_9595buttonObjects1.length = 0;
gdjs.NewSceneCode.GDslider_9595buttonObjects2.length = 0;
gdjs.NewSceneCode.GDslider_9595buttonObjects3.length = 0;
gdjs.NewSceneCode.GDslider_9595buttonObjects4.length = 0;

gdjs.NewSceneCode.eventsList9(runtimeScene);
gdjs.NewSceneCode.GDplayObjects1.length = 0;
gdjs.NewSceneCode.GDplayObjects2.length = 0;
gdjs.NewSceneCode.GDplayObjects3.length = 0;
gdjs.NewSceneCode.GDplayObjects4.length = 0;
gdjs.NewSceneCode.GDpauseObjects1.length = 0;
gdjs.NewSceneCode.GDpauseObjects2.length = 0;
gdjs.NewSceneCode.GDpauseObjects3.length = 0;
gdjs.NewSceneCode.GDpauseObjects4.length = 0;
gdjs.NewSceneCode.GDmuteObjects1.length = 0;
gdjs.NewSceneCode.GDmuteObjects2.length = 0;
gdjs.NewSceneCode.GDmuteObjects3.length = 0;
gdjs.NewSceneCode.GDmuteObjects4.length = 0;
gdjs.NewSceneCode.GDmusicObjects1.length = 0;
gdjs.NewSceneCode.GDmusicObjects2.length = 0;
gdjs.NewSceneCode.GDmusicObjects3.length = 0;
gdjs.NewSceneCode.GDmusicObjects4.length = 0;
gdjs.NewSceneCode.GDtrack_9595infoObjects1.length = 0;
gdjs.NewSceneCode.GDtrack_9595infoObjects2.length = 0;
gdjs.NewSceneCode.GDtrack_9595infoObjects3.length = 0;
gdjs.NewSceneCode.GDtrack_9595infoObjects4.length = 0;
gdjs.NewSceneCode.GDvolume_9595backgroundObjects1.length = 0;
gdjs.NewSceneCode.GDvolume_9595backgroundObjects2.length = 0;
gdjs.NewSceneCode.GDvolume_9595backgroundObjects3.length = 0;
gdjs.NewSceneCode.GDvolume_9595backgroundObjects4.length = 0;
gdjs.NewSceneCode.GDvolume_9595sliderObjects1.length = 0;
gdjs.NewSceneCode.GDvolume_9595sliderObjects2.length = 0;
gdjs.NewSceneCode.GDvolume_9595sliderObjects3.length = 0;
gdjs.NewSceneCode.GDvolume_9595sliderObjects4.length = 0;
gdjs.NewSceneCode.GDslider_9595buttonObjects1.length = 0;
gdjs.NewSceneCode.GDslider_9595buttonObjects2.length = 0;
gdjs.NewSceneCode.GDslider_9595buttonObjects3.length = 0;
gdjs.NewSceneCode.GDslider_9595buttonObjects4.length = 0;


return;

}

gdjs['NewSceneCode'] = gdjs.NewSceneCode;
