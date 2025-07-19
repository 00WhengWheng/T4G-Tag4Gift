gdjs.GameSceneCode = {};
gdjs.GameSceneCode.localVariables = [];
gdjs.GameSceneCode.GDPlayer2Objects1= [];
gdjs.GameSceneCode.GDPlayer2Objects2= [];
gdjs.GameSceneCode.GDPlayer2Objects3= [];
gdjs.GameSceneCode.GDPlayer2Objects4= [];
gdjs.GameSceneCode.GDPlayer2Objects5= [];
gdjs.GameSceneCode.GDPlayer1Objects1= [];
gdjs.GameSceneCode.GDPlayer1Objects2= [];
gdjs.GameSceneCode.GDPlayer1Objects3= [];
gdjs.GameSceneCode.GDPlayer1Objects4= [];
gdjs.GameSceneCode.GDPlayer1Objects5= [];
gdjs.GameSceneCode.GDGirlObjects1= [];
gdjs.GameSceneCode.GDGirlObjects2= [];
gdjs.GameSceneCode.GDGirlObjects3= [];
gdjs.GameSceneCode.GDGirlObjects4= [];
gdjs.GameSceneCode.GDGirlObjects5= [];
gdjs.GameSceneCode.GDMatchArrowsObjects1= [];
gdjs.GameSceneCode.GDMatchArrowsObjects2= [];
gdjs.GameSceneCode.GDMatchArrowsObjects3= [];
gdjs.GameSceneCode.GDMatchArrowsObjects4= [];
gdjs.GameSceneCode.GDMatchArrowsObjects5= [];
gdjs.GameSceneCode.GDPlayer1ArrowsObjects1= [];
gdjs.GameSceneCode.GDPlayer1ArrowsObjects2= [];
gdjs.GameSceneCode.GDPlayer1ArrowsObjects3= [];
gdjs.GameSceneCode.GDPlayer1ArrowsObjects4= [];
gdjs.GameSceneCode.GDPlayer1ArrowsObjects5= [];
gdjs.GameSceneCode.GDPlayer2ArrowsObjects1= [];
gdjs.GameSceneCode.GDPlayer2ArrowsObjects2= [];
gdjs.GameSceneCode.GDPlayer2ArrowsObjects3= [];
gdjs.GameSceneCode.GDPlayer2ArrowsObjects4= [];
gdjs.GameSceneCode.GDPlayer2ArrowsObjects5= [];
gdjs.GameSceneCode.GDGoodBadObjects1= [];
gdjs.GameSceneCode.GDGoodBadObjects2= [];
gdjs.GameSceneCode.GDGoodBadObjects3= [];
gdjs.GameSceneCode.GDGoodBadObjects4= [];
gdjs.GameSceneCode.GDGoodBadObjects5= [];
gdjs.GameSceneCode.GDDeleteArrowsObjects1= [];
gdjs.GameSceneCode.GDDeleteArrowsObjects2= [];
gdjs.GameSceneCode.GDDeleteArrowsObjects3= [];
gdjs.GameSceneCode.GDDeleteArrowsObjects4= [];
gdjs.GameSceneCode.GDDeleteArrowsObjects5= [];
gdjs.GameSceneCode.GDWinLoseObjects1= [];
gdjs.GameSceneCode.GDWinLoseObjects2= [];
gdjs.GameSceneCode.GDWinLoseObjects3= [];
gdjs.GameSceneCode.GDWinLoseObjects4= [];
gdjs.GameSceneCode.GDWinLoseObjects5= [];
gdjs.GameSceneCode.GDStartGameObjects1= [];
gdjs.GameSceneCode.GDStartGameObjects2= [];
gdjs.GameSceneCode.GDStartGameObjects3= [];
gdjs.GameSceneCode.GDStartGameObjects4= [];
gdjs.GameSceneCode.GDStartGameObjects5= [];
gdjs.GameSceneCode.GDPlayer1ControlsObjects1= [];
gdjs.GameSceneCode.GDPlayer1ControlsObjects2= [];
gdjs.GameSceneCode.GDPlayer1ControlsObjects3= [];
gdjs.GameSceneCode.GDPlayer1ControlsObjects4= [];
gdjs.GameSceneCode.GDPlayer1ControlsObjects5= [];
gdjs.GameSceneCode.GDPlayer1ScoreObjects1= [];
gdjs.GameSceneCode.GDPlayer1ScoreObjects2= [];
gdjs.GameSceneCode.GDPlayer1ScoreObjects3= [];
gdjs.GameSceneCode.GDPlayer1ScoreObjects4= [];
gdjs.GameSceneCode.GDPlayer1ScoreObjects5= [];
gdjs.GameSceneCode.GDPlayer2ControlsObjects1= [];
gdjs.GameSceneCode.GDPlayer2ControlsObjects2= [];
gdjs.GameSceneCode.GDPlayer2ControlsObjects3= [];
gdjs.GameSceneCode.GDPlayer2ControlsObjects4= [];
gdjs.GameSceneCode.GDPlayer2ControlsObjects5= [];
gdjs.GameSceneCode.GDPlayer2ScoreObjects1= [];
gdjs.GameSceneCode.GDPlayer2ScoreObjects2= [];
gdjs.GameSceneCode.GDPlayer2ScoreObjects3= [];
gdjs.GameSceneCode.GDPlayer2ScoreObjects4= [];
gdjs.GameSceneCode.GDPlayer2ScoreObjects5= [];


gdjs.GameSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player1Controls"), gdjs.GameSceneCode.GDPlayer1ControlsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player1Score"), gdjs.GameSceneCode.GDPlayer1ScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player2Controls"), gdjs.GameSceneCode.GDPlayer2ControlsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player2Score"), gdjs.GameSceneCode.GDPlayer2ScoreObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1ScoreObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1ScoreObjects1[i].setCharacterSize(80);
}
for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2ScoreObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2ScoreObjects1[i].setCharacterSize(80);
}
for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1ControlsObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1ControlsObjects1[i].setCharacterSize(80);
}
for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2ControlsObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2ControlsObjects1[i].setCharacterSize(80);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1ScoreObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1ScoreObjects1[i].setScale(0.2);
}
for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2ScoreObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2ScoreObjects1[i].setScale(0.2);
}
for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1ControlsObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1ControlsObjects1[i].setScale(0.2);
}
for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2ControlsObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2ControlsObjects1[i].setScale(0.2);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1ScoreObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1ScoreObjects1[i].setWrappingWidth(640);
}
for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2ScoreObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2ScoreObjects1[i].setWrappingWidth(640);
}
for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1ControlsObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1ControlsObjects1[i].setWrappingWidth(640);
}
for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2ControlsObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2ControlsObjects1[i].setWrappingWidth(640);
}
}}

}


};gdjs.GameSceneCode.eventsList1 = function(runtimeScene) {

{


gdjs.GameSceneCode.eventsList0(runtimeScene);
}


};gdjs.GameSceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DeleteArrows"), gdjs.GameSceneCode.GDDeleteArrowsObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("TurnOfWho").setString("All");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("SpawnArrows"), true);
}{for(var i = 0, len = gdjs.GameSceneCode.GDDeleteArrowsObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDDeleteArrowsObjects1[i].hide();
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Gameover");
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Assets\\Sounds\\WTF-Wars-Rhythm-Main.mp3", 1, false, 50, 1);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}
{ //Subevents
gdjs.GameSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Gameover"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("GameState"), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9884964);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StartGame"), gdjs.GameSceneCode.GDStartGameObjects1);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("GameState"), true);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Assets\\Sounds\\StartGame.wav", 2, false, 100, 1);
}{for(var i = 0, len = gdjs.GameSceneCode.GDStartGameObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDStartGameObjects1[i].hide();
}
}}

}


};gdjs.GameSceneCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9886964);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Assets\\Sounds\\WTF-Wars-Rhythm.mp3", 1, false, 50, 1);
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("TurnOfWho").setString("Player1");
}}

}


};gdjs.GameSceneCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Player2Score")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Player1Score"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WinLose"), gdjs.GameSceneCode.GDWinLoseObjects3);
{for(var i = 0, len = gdjs.GameSceneCode.GDWinLoseObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDWinLoseObjects3[i].setAnimationName("YouWin");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Player2Score")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Player1Score"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WinLose"), gdjs.GameSceneCode.GDWinLoseObjects3);
{for(var i = 0, len = gdjs.GameSceneCode.GDWinLoseObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDWinLoseObjects3[i].setAnimationName("YouWin");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Player2Score")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Player1Score"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WinLose"), gdjs.GameSceneCode.GDWinLoseObjects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDWinLoseObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDWinLoseObjects2[i].setAnimationName("Draw");
}
}}

}


};gdjs.GameSceneCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "Gameover", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("SpawnArrows"), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Gameover"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9888940);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StartGame"), gdjs.GameSceneCode.GDStartGameObjects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "Gameover");
}{for(var i = 0, len = gdjs.GameSceneCode.GDStartGameObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDStartGameObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.GameSceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.isSoundOnChannelStopped(runtimeScene, 1);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("TurnOfWho").setString("All");
}
{ //Subevents
gdjs.GameSceneCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.eventsList8 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.getSoundOnChannelPlayingOffset(runtimeScene, 1) > 50;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("SpawnArrows"), false);
}}

}


};gdjs.GameSceneCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameSceneCode.GDPlayer2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPlayer2Objects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPlayer2Objects2[i].hasAnimationEndedLegacy() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPlayer2Objects2[k] = gdjs.GameSceneCode.GDPlayer2Objects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPlayer2Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPlayer2Objects2.length;i<l;++i) {
    if ( !(gdjs.GameSceneCode.GDPlayer2Objects2[i].isCurrentAnimationName("Idle")) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPlayer2Objects2[k] = gdjs.GameSceneCode.GDPlayer2Objects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPlayer2Objects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDPlayer2Objects2 */
{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2Objects2[i].setAnimationName("Idle");
}
}}

}


};gdjs.GameSceneCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameSceneCode.GDPlayer1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPlayer1Objects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPlayer1Objects2[i].hasAnimationEndedLegacy() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPlayer1Objects2[k] = gdjs.GameSceneCode.GDPlayer1Objects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPlayer1Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPlayer1Objects2.length;i<l;++i) {
    if ( !(gdjs.GameSceneCode.GDPlayer1Objects2[i].isCurrentAnimationName("Idle")) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPlayer1Objects2[k] = gdjs.GameSceneCode.GDPlayer1Objects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPlayer1Objects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDPlayer1Objects2 */
{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1Objects2[i].setAnimationName("Idle");
}
}}

}


};gdjs.GameSceneCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player1Score"), gdjs.GameSceneCode.GDPlayer1ScoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player2Score"), gdjs.GameSceneCode.GDPlayer2ScoreObjects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1ScoreObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1ScoreObjects2[i].setString("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Player1Score")));
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2ScoreObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2ScoreObjects2[i].setString("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Player2Score")));
}
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer1ArrowsObjects3Objects = Hashtable.newFrom({"Player1Arrows": gdjs.GameSceneCode.GDPlayer1ArrowsObjects3});
gdjs.GameSceneCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameSceneCode.GDPlayer1ArrowsObjects3, gdjs.GameSceneCode.GDPlayer1ArrowsObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPlayer1ArrowsObjects4.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPlayer1ArrowsObjects4[i].isCurrentAnimationName("Left") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPlayer1ArrowsObjects4[k] = gdjs.GameSceneCode.GDPlayer1ArrowsObjects4[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPlayer1ArrowsObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDPlayer1ArrowsObjects4 */
{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1ArrowsObjects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1ArrowsObjects4[i].setPosition(88,184);
}
}}

}


{

gdjs.copyArray(gdjs.GameSceneCode.GDPlayer1ArrowsObjects3, gdjs.GameSceneCode.GDPlayer1ArrowsObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPlayer1ArrowsObjects4.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPlayer1ArrowsObjects4[i].isCurrentAnimationName("Up") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPlayer1ArrowsObjects4[k] = gdjs.GameSceneCode.GDPlayer1ArrowsObjects4[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPlayer1ArrowsObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDPlayer1ArrowsObjects4 */
{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1ArrowsObjects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1ArrowsObjects4[i].setPosition(108,184);
}
}}

}


{

gdjs.copyArray(gdjs.GameSceneCode.GDPlayer1ArrowsObjects3, gdjs.GameSceneCode.GDPlayer1ArrowsObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPlayer1ArrowsObjects4.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPlayer1ArrowsObjects4[i].isCurrentAnimationName("Down") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPlayer1ArrowsObjects4[k] = gdjs.GameSceneCode.GDPlayer1ArrowsObjects4[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPlayer1ArrowsObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDPlayer1ArrowsObjects4 */
{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1ArrowsObjects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1ArrowsObjects4[i].setPosition(128,184);
}
}}

}


{

gdjs.copyArray(gdjs.GameSceneCode.GDPlayer1ArrowsObjects3, gdjs.GameSceneCode.GDPlayer1ArrowsObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPlayer1ArrowsObjects4.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPlayer1ArrowsObjects4[i].isCurrentAnimationName("Right") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPlayer1ArrowsObjects4[k] = gdjs.GameSceneCode.GDPlayer1ArrowsObjects4[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPlayer1ArrowsObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDPlayer1ArrowsObjects4 */
{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1ArrowsObjects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1ArrowsObjects4[i].setPosition(148,184);
}
}}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.GameSceneCode.GDPlayer1ArrowsObjects3 */
{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1ArrowsObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1ArrowsObjects3[i].addPolarForce(270, 80, 1);
}
}}

}


};gdjs.GameSceneCode.eventsList13 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9898460);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Player1ArrowsPerTurn").setNumber(10);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "Player1", 0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Player1ArrowsPerTurn")) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("SpawnArrows"), true);
}
}
if (isConditionTrue_0) {
gdjs.GameSceneCode.GDPlayer1ArrowsObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer1ArrowsObjects3Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1ArrowsObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1ArrowsObjects3[i].setAnimationName(gdjs.evtsExt__Choose__RandomString.func(runtimeScene, "Left,Right,Up,Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Player1ArrowsPerTurn").sub(1);
}
{ //Subevents
gdjs.GameSceneCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer1ArrowsObjects4Objects = Hashtable.newFrom({"Player1Arrows": gdjs.GameSceneCode.GDPlayer1ArrowsObjects4});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDMatchArrowsObjects4Objects = Hashtable.newFrom({"MatchArrows": gdjs.GameSceneCode.GDMatchArrowsObjects4});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGoodBadObjects4Objects = Hashtable.newFrom({"GoodBad": gdjs.GameSceneCode.GDGoodBadObjects4});
gdjs.GameSceneCode.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MatchArrows"), gdjs.GameSceneCode.GDMatchArrowsObjects4);
gdjs.copyArray(runtimeScene.getObjects("Player1Arrows"), gdjs.GameSceneCode.GDPlayer1ArrowsObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer1ArrowsObjects4Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDMatchArrowsObjects4Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDMatchArrowsObjects4.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDMatchArrowsObjects4[i].isCurrentAnimationName("Left") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDMatchArrowsObjects4[k] = gdjs.GameSceneCode.GDMatchArrowsObjects4[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDMatchArrowsObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPlayer1ArrowsObjects4.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPlayer1ArrowsObjects4[i].isCurrentAnimationName("Left") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPlayer1ArrowsObjects4[k] = gdjs.GameSceneCode.GDPlayer1ArrowsObjects4[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPlayer1ArrowsObjects4.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Girl"), gdjs.GameSceneCode.GDGirlObjects4);
/* Reuse gdjs.GameSceneCode.GDMatchArrowsObjects4 */
/* Reuse gdjs.GameSceneCode.GDPlayer1ArrowsObjects4 */
gdjs.GameSceneCode.GDGoodBadObjects4.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Player1Score").add(1);
}{for(var i = 0, len = gdjs.GameSceneCode.GDMatchArrowsObjects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDMatchArrowsObjects4[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1ArrowsObjects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1ArrowsObjects4[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGoodBadObjects4Objects, (( gdjs.GameSceneCode.GDGirlObjects4.length === 0 ) ? 0 :gdjs.GameSceneCode.GDGirlObjects4[0].getPointX("")) - 8, (( gdjs.GameSceneCode.GDGirlObjects4.length === 0 ) ? 0 :gdjs.GameSceneCode.GDGirlObjects4[0].getPointY("")) - 15, "");
}{for(var i = 0, len = gdjs.GameSceneCode.GDGoodBadObjects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGoodBadObjects4[i].setAnimationName("Good");
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDGoodBadObjects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGoodBadObjects4[i].getBehavior("Tween").addObjectOpacityTween("DestroyMe", 0, "linear", 1000, true);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Assets\\Sounds\\Good_125.mp3", 4, false, 100, 1);
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer1ArrowsObjects4Objects = Hashtable.newFrom({"Player1Arrows": gdjs.GameSceneCode.GDPlayer1ArrowsObjects4});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDMatchArrowsObjects4Objects = Hashtable.newFrom({"MatchArrows": gdjs.GameSceneCode.GDMatchArrowsObjects4});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGoodBadObjects4Objects = Hashtable.newFrom({"GoodBad": gdjs.GameSceneCode.GDGoodBadObjects4});
gdjs.GameSceneCode.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MatchArrows"), gdjs.GameSceneCode.GDMatchArrowsObjects4);
gdjs.copyArray(runtimeScene.getObjects("Player1Arrows"), gdjs.GameSceneCode.GDPlayer1ArrowsObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer1ArrowsObjects4Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDMatchArrowsObjects4Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDMatchArrowsObjects4.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDMatchArrowsObjects4[i].isCurrentAnimationName("Up") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDMatchArrowsObjects4[k] = gdjs.GameSceneCode.GDMatchArrowsObjects4[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDMatchArrowsObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPlayer1ArrowsObjects4.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPlayer1ArrowsObjects4[i].isCurrentAnimationName("Up") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPlayer1ArrowsObjects4[k] = gdjs.GameSceneCode.GDPlayer1ArrowsObjects4[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPlayer1ArrowsObjects4.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Girl"), gdjs.GameSceneCode.GDGirlObjects4);
/* Reuse gdjs.GameSceneCode.GDMatchArrowsObjects4 */
/* Reuse gdjs.GameSceneCode.GDPlayer1ArrowsObjects4 */
gdjs.GameSceneCode.GDGoodBadObjects4.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Player1Score").add(1);
}{for(var i = 0, len = gdjs.GameSceneCode.GDMatchArrowsObjects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDMatchArrowsObjects4[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1ArrowsObjects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1ArrowsObjects4[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGoodBadObjects4Objects, (( gdjs.GameSceneCode.GDGirlObjects4.length === 0 ) ? 0 :gdjs.GameSceneCode.GDGirlObjects4[0].getPointX("")) - 8, (( gdjs.GameSceneCode.GDGirlObjects4.length === 0 ) ? 0 :gdjs.GameSceneCode.GDGirlObjects4[0].getPointY("")) - 15, "");
}{for(var i = 0, len = gdjs.GameSceneCode.GDGoodBadObjects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGoodBadObjects4[i].setAnimationName("Good");
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDGoodBadObjects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGoodBadObjects4[i].getBehavior("Tween").addObjectOpacityTween("DestroyMe", 0, "linear", 1000, true);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Assets\\Sounds\\Good_125.mp3", 4, false, 100, 1);
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer1ArrowsObjects4Objects = Hashtable.newFrom({"Player1Arrows": gdjs.GameSceneCode.GDPlayer1ArrowsObjects4});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDMatchArrowsObjects4Objects = Hashtable.newFrom({"MatchArrows": gdjs.GameSceneCode.GDMatchArrowsObjects4});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGoodBadObjects4Objects = Hashtable.newFrom({"GoodBad": gdjs.GameSceneCode.GDGoodBadObjects4});
gdjs.GameSceneCode.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MatchArrows"), gdjs.GameSceneCode.GDMatchArrowsObjects4);
gdjs.copyArray(runtimeScene.getObjects("Player1Arrows"), gdjs.GameSceneCode.GDPlayer1ArrowsObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer1ArrowsObjects4Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDMatchArrowsObjects4Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDMatchArrowsObjects4.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDMatchArrowsObjects4[i].isCurrentAnimationName("Right") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDMatchArrowsObjects4[k] = gdjs.GameSceneCode.GDMatchArrowsObjects4[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDMatchArrowsObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPlayer1ArrowsObjects4.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPlayer1ArrowsObjects4[i].isCurrentAnimationName("Right") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPlayer1ArrowsObjects4[k] = gdjs.GameSceneCode.GDPlayer1ArrowsObjects4[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPlayer1ArrowsObjects4.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Girl"), gdjs.GameSceneCode.GDGirlObjects4);
/* Reuse gdjs.GameSceneCode.GDMatchArrowsObjects4 */
/* Reuse gdjs.GameSceneCode.GDPlayer1ArrowsObjects4 */
gdjs.GameSceneCode.GDGoodBadObjects4.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Player1Score").add(1);
}{for(var i = 0, len = gdjs.GameSceneCode.GDMatchArrowsObjects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDMatchArrowsObjects4[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1ArrowsObjects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1ArrowsObjects4[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGoodBadObjects4Objects, (( gdjs.GameSceneCode.GDGirlObjects4.length === 0 ) ? 0 :gdjs.GameSceneCode.GDGirlObjects4[0].getPointX("")) - 8, (( gdjs.GameSceneCode.GDGirlObjects4.length === 0 ) ? 0 :gdjs.GameSceneCode.GDGirlObjects4[0].getPointY("")) - 15, "");
}{for(var i = 0, len = gdjs.GameSceneCode.GDGoodBadObjects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGoodBadObjects4[i].setAnimationName("Good");
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDGoodBadObjects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGoodBadObjects4[i].getBehavior("Tween").addObjectOpacityTween("DestroyMe", 0, "linear", 1000, true);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Assets\\Sounds\\Good_125.mp3", 4, false, 100, 1);
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer1ArrowsObjects3Objects = Hashtable.newFrom({"Player1Arrows": gdjs.GameSceneCode.GDPlayer1ArrowsObjects3});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDMatchArrowsObjects3Objects = Hashtable.newFrom({"MatchArrows": gdjs.GameSceneCode.GDMatchArrowsObjects3});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGoodBadObjects3Objects = Hashtable.newFrom({"GoodBad": gdjs.GameSceneCode.GDGoodBadObjects3});
gdjs.GameSceneCode.eventsList17 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MatchArrows"), gdjs.GameSceneCode.GDMatchArrowsObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player1Arrows"), gdjs.GameSceneCode.GDPlayer1ArrowsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer1ArrowsObjects3Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDMatchArrowsObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDMatchArrowsObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDMatchArrowsObjects3[i].isCurrentAnimationName("Down") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDMatchArrowsObjects3[k] = gdjs.GameSceneCode.GDMatchArrowsObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDMatchArrowsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPlayer1ArrowsObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPlayer1ArrowsObjects3[i].isCurrentAnimationName("Down") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPlayer1ArrowsObjects3[k] = gdjs.GameSceneCode.GDPlayer1ArrowsObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPlayer1ArrowsObjects3.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Girl"), gdjs.GameSceneCode.GDGirlObjects3);
/* Reuse gdjs.GameSceneCode.GDMatchArrowsObjects3 */
/* Reuse gdjs.GameSceneCode.GDPlayer1ArrowsObjects3 */
gdjs.GameSceneCode.GDGoodBadObjects3.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Player1Score").add(1);
}{for(var i = 0, len = gdjs.GameSceneCode.GDMatchArrowsObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDMatchArrowsObjects3[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1ArrowsObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1ArrowsObjects3[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGoodBadObjects3Objects, (( gdjs.GameSceneCode.GDGirlObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDGirlObjects3[0].getPointX("")) - 8, (( gdjs.GameSceneCode.GDGirlObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDGirlObjects3[0].getPointY("")) - 15, "");
}{for(var i = 0, len = gdjs.GameSceneCode.GDGoodBadObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGoodBadObjects3[i].setAnimationName("Good");
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDGoodBadObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGoodBadObjects3[i].getBehavior("Tween").addObjectOpacityTween("DestroyMe", 0, "linear", 1000, true);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Assets\\Sounds\\Good_125.mp3", 4, false, 100, 1);
}}

}


};gdjs.GameSceneCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9904860);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameSceneCode.GDPlayer1Objects4);
{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1Objects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1Objects4[i].setAnimationName("Left");
}
}
{ //Subevents
gdjs.GameSceneCode.eventsList14(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9908092);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameSceneCode.GDPlayer1Objects4);
{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1Objects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1Objects4[i].setAnimationName("Up");
}
}
{ //Subevents
gdjs.GameSceneCode.eventsList15(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9911356);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameSceneCode.GDPlayer1Objects4);
{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1Objects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1Objects4[i].setAnimationName("Right");
}
}
{ //Subevents
gdjs.GameSceneCode.eventsList16(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9914628);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameSceneCode.GDPlayer1Objects3);
{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1Objects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1Objects3[i].setAnimationName("Down");
}
}
{ //Subevents
gdjs.GameSceneCode.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer1ArrowsObjects2Objects = Hashtable.newFrom({"Player1Arrows": gdjs.GameSceneCode.GDPlayer1ArrowsObjects2});
gdjs.GameSceneCode.eventsList19 = function(runtimeScene) {

{


gdjs.GameSceneCode.eventsList13(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList18(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Player1Arrows"), gdjs.GameSceneCode.GDPlayer1ArrowsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.object.pickedObjectsCount(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer1ArrowsObjects2Objects) <= 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("TurnOfWho").setString("Player2");
}}

}


};gdjs.GameSceneCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("TurnOfWho")) == "Player1";
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList19(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer2ArrowsObjects2Objects = Hashtable.newFrom({"Player2Arrows": gdjs.GameSceneCode.GDPlayer2ArrowsObjects2});
gdjs.GameSceneCode.eventsList21 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameSceneCode.GDPlayer2ArrowsObjects2, gdjs.GameSceneCode.GDPlayer2ArrowsObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPlayer2ArrowsObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPlayer2ArrowsObjects3[i].isCurrentAnimationName("Left") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPlayer2ArrowsObjects3[k] = gdjs.GameSceneCode.GDPlayer2ArrowsObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPlayer2ArrowsObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDPlayer2ArrowsObjects3 */
{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2ArrowsObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2ArrowsObjects3[i].setPosition(172,184);
}
}}

}


{

gdjs.copyArray(gdjs.GameSceneCode.GDPlayer2ArrowsObjects2, gdjs.GameSceneCode.GDPlayer2ArrowsObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPlayer2ArrowsObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPlayer2ArrowsObjects3[i].isCurrentAnimationName("Up") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPlayer2ArrowsObjects3[k] = gdjs.GameSceneCode.GDPlayer2ArrowsObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPlayer2ArrowsObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDPlayer2ArrowsObjects3 */
{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2ArrowsObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2ArrowsObjects3[i].setPosition(192,184);
}
}}

}


{

gdjs.copyArray(gdjs.GameSceneCode.GDPlayer2ArrowsObjects2, gdjs.GameSceneCode.GDPlayer2ArrowsObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPlayer2ArrowsObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPlayer2ArrowsObjects3[i].isCurrentAnimationName("Down") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPlayer2ArrowsObjects3[k] = gdjs.GameSceneCode.GDPlayer2ArrowsObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPlayer2ArrowsObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDPlayer2ArrowsObjects3 */
{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2ArrowsObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2ArrowsObjects3[i].setPosition(212,184);
}
}}

}


{

gdjs.copyArray(gdjs.GameSceneCode.GDPlayer2ArrowsObjects2, gdjs.GameSceneCode.GDPlayer2ArrowsObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPlayer2ArrowsObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPlayer2ArrowsObjects3[i].isCurrentAnimationName("Right") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPlayer2ArrowsObjects3[k] = gdjs.GameSceneCode.GDPlayer2ArrowsObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPlayer2ArrowsObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDPlayer2ArrowsObjects3 */
{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2ArrowsObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2ArrowsObjects3[i].setPosition(232,184);
}
}}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.GameSceneCode.GDPlayer2ArrowsObjects2 */
{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2ArrowsObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2ArrowsObjects2[i].addPolarForce(270, 80, 1);
}
}}

}


};gdjs.GameSceneCode.eventsList22 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9919364);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Player2ArrowsPerTurn").setNumber(10);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "Player", 0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Player2ArrowsPerTurn")) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("SpawnArrows"), true);
}
}
if (isConditionTrue_0) {
gdjs.GameSceneCode.GDPlayer2ArrowsObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer2ArrowsObjects2Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2ArrowsObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2ArrowsObjects2[i].setAnimationName(gdjs.evtsExt__Choose__RandomString.func(runtimeScene, "Left,Right,Up,Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Player2ArrowsPerTurn").sub(1);
}
{ //Subevents
gdjs.GameSceneCode.eventsList21(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer2ArrowsObjects3Objects = Hashtable.newFrom({"Player2Arrows": gdjs.GameSceneCode.GDPlayer2ArrowsObjects3});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDMatchArrowsObjects3Objects = Hashtable.newFrom({"MatchArrows": gdjs.GameSceneCode.GDMatchArrowsObjects3});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGoodBadObjects3Objects = Hashtable.newFrom({"GoodBad": gdjs.GameSceneCode.GDGoodBadObjects3});
gdjs.GameSceneCode.eventsList23 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MatchArrows"), gdjs.GameSceneCode.GDMatchArrowsObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player2Arrows"), gdjs.GameSceneCode.GDPlayer2ArrowsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer2ArrowsObjects3Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDMatchArrowsObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDMatchArrowsObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDMatchArrowsObjects3[i].isCurrentAnimationName("Left") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDMatchArrowsObjects3[k] = gdjs.GameSceneCode.GDMatchArrowsObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDMatchArrowsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPlayer2ArrowsObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPlayer2ArrowsObjects3[i].isCurrentAnimationName("Left") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPlayer2ArrowsObjects3[k] = gdjs.GameSceneCode.GDPlayer2ArrowsObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPlayer2ArrowsObjects3.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Girl"), gdjs.GameSceneCode.GDGirlObjects3);
/* Reuse gdjs.GameSceneCode.GDMatchArrowsObjects3 */
/* Reuse gdjs.GameSceneCode.GDPlayer2ArrowsObjects3 */
gdjs.GameSceneCode.GDGoodBadObjects3.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Player2Score").add(1);
}{for(var i = 0, len = gdjs.GameSceneCode.GDMatchArrowsObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDMatchArrowsObjects3[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2ArrowsObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2ArrowsObjects3[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGoodBadObjects3Objects, (( gdjs.GameSceneCode.GDGirlObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDGirlObjects3[0].getPointX("")) - 8, (( gdjs.GameSceneCode.GDGirlObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDGirlObjects3[0].getPointY("")) - 15, "");
}{for(var i = 0, len = gdjs.GameSceneCode.GDGoodBadObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGoodBadObjects3[i].setAnimationName("Good");
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDGoodBadObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGoodBadObjects3[i].getBehavior("Tween").addObjectOpacityTween("DestroyMe", 0, "linear", 1000, true);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Assets\\Sounds\\Good_125.mp3", 4, false, 100, 1);
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer2ArrowsObjects3Objects = Hashtable.newFrom({"Player2Arrows": gdjs.GameSceneCode.GDPlayer2ArrowsObjects3});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDMatchArrowsObjects3Objects = Hashtable.newFrom({"MatchArrows": gdjs.GameSceneCode.GDMatchArrowsObjects3});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGoodBadObjects3Objects = Hashtable.newFrom({"GoodBad": gdjs.GameSceneCode.GDGoodBadObjects3});
gdjs.GameSceneCode.eventsList24 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MatchArrows"), gdjs.GameSceneCode.GDMatchArrowsObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player2Arrows"), gdjs.GameSceneCode.GDPlayer2ArrowsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer2ArrowsObjects3Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDMatchArrowsObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDMatchArrowsObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDMatchArrowsObjects3[i].isCurrentAnimationName("Right") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDMatchArrowsObjects3[k] = gdjs.GameSceneCode.GDMatchArrowsObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDMatchArrowsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPlayer2ArrowsObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPlayer2ArrowsObjects3[i].isCurrentAnimationName("Right") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPlayer2ArrowsObjects3[k] = gdjs.GameSceneCode.GDPlayer2ArrowsObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPlayer2ArrowsObjects3.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Girl"), gdjs.GameSceneCode.GDGirlObjects3);
/* Reuse gdjs.GameSceneCode.GDMatchArrowsObjects3 */
/* Reuse gdjs.GameSceneCode.GDPlayer2ArrowsObjects3 */
gdjs.GameSceneCode.GDGoodBadObjects3.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Player2Score").add(1);
}{for(var i = 0, len = gdjs.GameSceneCode.GDMatchArrowsObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDMatchArrowsObjects3[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2ArrowsObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2ArrowsObjects3[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGoodBadObjects3Objects, (( gdjs.GameSceneCode.GDGirlObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDGirlObjects3[0].getPointX("")) - 8, (( gdjs.GameSceneCode.GDGirlObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDGirlObjects3[0].getPointY("")) - 15, "");
}{for(var i = 0, len = gdjs.GameSceneCode.GDGoodBadObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGoodBadObjects3[i].setAnimationName("Good");
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDGoodBadObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGoodBadObjects3[i].getBehavior("Tween").addObjectOpacityTween("DestroyMe", 0, "linear", 1000, true);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Assets\\Sounds\\Good_125.mp3", 4, false, 100, 1);
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer2ArrowsObjects3Objects = Hashtable.newFrom({"Player2Arrows": gdjs.GameSceneCode.GDPlayer2ArrowsObjects3});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDMatchArrowsObjects3Objects = Hashtable.newFrom({"MatchArrows": gdjs.GameSceneCode.GDMatchArrowsObjects3});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGoodBadObjects3Objects = Hashtable.newFrom({"GoodBad": gdjs.GameSceneCode.GDGoodBadObjects3});
gdjs.GameSceneCode.eventsList25 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MatchArrows"), gdjs.GameSceneCode.GDMatchArrowsObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player2Arrows"), gdjs.GameSceneCode.GDPlayer2ArrowsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer2ArrowsObjects3Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDMatchArrowsObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDMatchArrowsObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDMatchArrowsObjects3[i].isCurrentAnimationName("Up") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDMatchArrowsObjects3[k] = gdjs.GameSceneCode.GDMatchArrowsObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDMatchArrowsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPlayer2ArrowsObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPlayer2ArrowsObjects3[i].isCurrentAnimationName("Up") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPlayer2ArrowsObjects3[k] = gdjs.GameSceneCode.GDPlayer2ArrowsObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPlayer2ArrowsObjects3.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Girl"), gdjs.GameSceneCode.GDGirlObjects3);
/* Reuse gdjs.GameSceneCode.GDMatchArrowsObjects3 */
/* Reuse gdjs.GameSceneCode.GDPlayer2ArrowsObjects3 */
gdjs.GameSceneCode.GDGoodBadObjects3.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Player2Score").add(1);
}{for(var i = 0, len = gdjs.GameSceneCode.GDMatchArrowsObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDMatchArrowsObjects3[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2ArrowsObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2ArrowsObjects3[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGoodBadObjects3Objects, (( gdjs.GameSceneCode.GDGirlObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDGirlObjects3[0].getPointX("")) - 8, (( gdjs.GameSceneCode.GDGirlObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDGirlObjects3[0].getPointY("")) - 15, "");
}{for(var i = 0, len = gdjs.GameSceneCode.GDGoodBadObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGoodBadObjects3[i].setAnimationName("Good");
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDGoodBadObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGoodBadObjects3[i].getBehavior("Tween").addObjectOpacityTween("DestroyMe", 0, "linear", 1000, true);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Assets\\Sounds\\Good_125.mp3", 4, false, 100, 1);
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer2ArrowsObjects2Objects = Hashtable.newFrom({"Player2Arrows": gdjs.GameSceneCode.GDPlayer2ArrowsObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDMatchArrowsObjects2Objects = Hashtable.newFrom({"MatchArrows": gdjs.GameSceneCode.GDMatchArrowsObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGoodBadObjects2Objects = Hashtable.newFrom({"GoodBad": gdjs.GameSceneCode.GDGoodBadObjects2});
gdjs.GameSceneCode.eventsList26 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MatchArrows"), gdjs.GameSceneCode.GDMatchArrowsObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player2Arrows"), gdjs.GameSceneCode.GDPlayer2ArrowsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer2ArrowsObjects2Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDMatchArrowsObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDMatchArrowsObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDMatchArrowsObjects2[i].isCurrentAnimationName("Down") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDMatchArrowsObjects2[k] = gdjs.GameSceneCode.GDMatchArrowsObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDMatchArrowsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPlayer2ArrowsObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPlayer2ArrowsObjects2[i].isCurrentAnimationName("Down") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPlayer2ArrowsObjects2[k] = gdjs.GameSceneCode.GDPlayer2ArrowsObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPlayer2ArrowsObjects2.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Girl"), gdjs.GameSceneCode.GDGirlObjects2);
/* Reuse gdjs.GameSceneCode.GDMatchArrowsObjects2 */
/* Reuse gdjs.GameSceneCode.GDPlayer2ArrowsObjects2 */
gdjs.GameSceneCode.GDGoodBadObjects2.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Player2Score").add(1);
}{for(var i = 0, len = gdjs.GameSceneCode.GDMatchArrowsObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDMatchArrowsObjects2[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2ArrowsObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2ArrowsObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGoodBadObjects2Objects, (( gdjs.GameSceneCode.GDGirlObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDGirlObjects2[0].getPointX("")) - 8, (( gdjs.GameSceneCode.GDGirlObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDGirlObjects2[0].getPointY("")) - 15, "");
}{for(var i = 0, len = gdjs.GameSceneCode.GDGoodBadObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGoodBadObjects2[i].setAnimationName("Good");
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDGoodBadObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGoodBadObjects2[i].getBehavior("Tween").addObjectOpacityTween("DestroyMe", 0, "linear", 1000, true);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Assets\\Sounds\\Good_125.mp3", 4, false, 100, 1);
}}

}


};gdjs.GameSceneCode.eventsList27 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9925516);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameSceneCode.GDPlayer2Objects3);
{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2Objects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2Objects3[i].setAnimationName("Left");
}
}
{ //Subevents
gdjs.GameSceneCode.eventsList23(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9928748);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameSceneCode.GDPlayer2Objects3);
{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2Objects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2Objects3[i].setAnimationName("Right");
}
}
{ //Subevents
gdjs.GameSceneCode.eventsList24(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9932012);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameSceneCode.GDPlayer2Objects3);
{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2Objects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2Objects3[i].setAnimationName("Up");
}
}
{ //Subevents
gdjs.GameSceneCode.eventsList25(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9935284);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameSceneCode.GDPlayer2Objects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2Objects2[i].setAnimationName("Down");
}
}
{ //Subevents
gdjs.GameSceneCode.eventsList26(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer2ArrowsObjects1Objects = Hashtable.newFrom({"Player2Arrows": gdjs.GameSceneCode.GDPlayer2ArrowsObjects1});
gdjs.GameSceneCode.eventsList28 = function(runtimeScene) {

{


gdjs.GameSceneCode.eventsList22(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList27(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Player2Arrows"), gdjs.GameSceneCode.GDPlayer2ArrowsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.object.pickedObjectsCount(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer2ArrowsObjects1Objects) <= 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("TurnOfWho").setString("Player1");
}}

}


};gdjs.GameSceneCode.eventsList29 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("TurnOfWho")) == "Player2";
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList28(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.eventsList30 = function(runtimeScene) {

{


gdjs.GameSceneCode.eventsList4(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList7(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList8(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList9(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList10(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList11(runtimeScene);
}


{



}


{


gdjs.GameSceneCode.eventsList20(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList29(runtimeScene);
}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer2ArrowsObjects1Objects = Hashtable.newFrom({"Player2Arrows": gdjs.GameSceneCode.GDPlayer2ArrowsObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDDeleteArrowsObjects1Objects = Hashtable.newFrom({"DeleteArrows": gdjs.GameSceneCode.GDDeleteArrowsObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGoodBadObjects1Objects = Hashtable.newFrom({"GoodBad": gdjs.GameSceneCode.GDGoodBadObjects1});
gdjs.GameSceneCode.eventsList31 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("DeleteArrows"), gdjs.GameSceneCode.GDDeleteArrowsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player2Arrows"), gdjs.GameSceneCode.GDPlayer2ArrowsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer2ArrowsObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDDeleteArrowsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Girl"), gdjs.GameSceneCode.GDGirlObjects1);
/* Reuse gdjs.GameSceneCode.GDPlayer2ArrowsObjects1 */
gdjs.GameSceneCode.GDGoodBadObjects1.length = 0;

{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2ArrowsObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2ArrowsObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGoodBadObjects1Objects, (( gdjs.GameSceneCode.GDGirlObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDGirlObjects1[0].getPointX("")) - 8, (( gdjs.GameSceneCode.GDGirlObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDGirlObjects1[0].getPointY("")) - 15, "");
}{for(var i = 0, len = gdjs.GameSceneCode.GDGoodBadObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGoodBadObjects1[i].getBehavior("Tween").addObjectOpacityTween("DestroyMe", 0, "linear", 1000, true);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDGoodBadObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGoodBadObjects1[i].setAnimationName("Bad");
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Assets\\Sounds\\Bad_316.mp3", 2, false, 100, 1);
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer1ArrowsObjects1Objects = Hashtable.newFrom({"Player1Arrows": gdjs.GameSceneCode.GDPlayer1ArrowsObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDDeleteArrowsObjects1Objects = Hashtable.newFrom({"DeleteArrows": gdjs.GameSceneCode.GDDeleteArrowsObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGoodBadObjects1Objects = Hashtable.newFrom({"GoodBad": gdjs.GameSceneCode.GDGoodBadObjects1});
gdjs.GameSceneCode.eventsList32 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("DeleteArrows"), gdjs.GameSceneCode.GDDeleteArrowsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player1Arrows"), gdjs.GameSceneCode.GDPlayer1ArrowsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer1ArrowsObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDDeleteArrowsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Girl"), gdjs.GameSceneCode.GDGirlObjects1);
/* Reuse gdjs.GameSceneCode.GDPlayer1ArrowsObjects1 */
gdjs.GameSceneCode.GDGoodBadObjects1.length = 0;

{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1ArrowsObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1ArrowsObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGoodBadObjects1Objects, (( gdjs.GameSceneCode.GDGirlObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDGirlObjects1[0].getPointX("")) - 8, (( gdjs.GameSceneCode.GDGirlObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDGirlObjects1[0].getPointY("")) - 15, "");
}{for(var i = 0, len = gdjs.GameSceneCode.GDGoodBadObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGoodBadObjects1[i].getBehavior("Tween").addObjectOpacityTween("DestroyMe", 0, "linear", 1000, true);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDGoodBadObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGoodBadObjects1[i].setAnimationName("Bad");
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Assets\\Sounds\\Bad_316.mp3", 2, false, 100, 1);
}}

}


};gdjs.GameSceneCode.eventsList33 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MatchArrows"), gdjs.GameSceneCode.GDMatchArrowsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDMatchArrowsObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDMatchArrowsObjects1[i].getOpacity() < 254 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDMatchArrowsObjects1[k] = gdjs.GameSceneCode.GDMatchArrowsObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDMatchArrowsObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDMatchArrowsObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDMatchArrowsObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDMatchArrowsObjects1[i].setOpacity(gdjs.GameSceneCode.GDMatchArrowsObjects1[i].getOpacity() + (10));
}
}}

}


};gdjs.GameSceneCode.eventsList34 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Gameover");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9944516);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), true);
}}

}


};gdjs.GameSceneCode.eventsList35 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "r");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), true);
}}

}


};gdjs.GameSceneCode.eventsList36 = function(runtimeScene) {

{



}


{


gdjs.GameSceneCode.eventsList2(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList3(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("GameState"), true);
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList30(runtimeScene);} //End of subevents
}

}


{


gdjs.GameSceneCode.eventsList31(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList32(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList33(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList34(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList35(runtimeScene);
}


};

gdjs.GameSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameSceneCode.GDPlayer2Objects1.length = 0;
gdjs.GameSceneCode.GDPlayer2Objects2.length = 0;
gdjs.GameSceneCode.GDPlayer2Objects3.length = 0;
gdjs.GameSceneCode.GDPlayer2Objects4.length = 0;
gdjs.GameSceneCode.GDPlayer2Objects5.length = 0;
gdjs.GameSceneCode.GDPlayer1Objects1.length = 0;
gdjs.GameSceneCode.GDPlayer1Objects2.length = 0;
gdjs.GameSceneCode.GDPlayer1Objects3.length = 0;
gdjs.GameSceneCode.GDPlayer1Objects4.length = 0;
gdjs.GameSceneCode.GDPlayer1Objects5.length = 0;
gdjs.GameSceneCode.GDGirlObjects1.length = 0;
gdjs.GameSceneCode.GDGirlObjects2.length = 0;
gdjs.GameSceneCode.GDGirlObjects3.length = 0;
gdjs.GameSceneCode.GDGirlObjects4.length = 0;
gdjs.GameSceneCode.GDGirlObjects5.length = 0;
gdjs.GameSceneCode.GDMatchArrowsObjects1.length = 0;
gdjs.GameSceneCode.GDMatchArrowsObjects2.length = 0;
gdjs.GameSceneCode.GDMatchArrowsObjects3.length = 0;
gdjs.GameSceneCode.GDMatchArrowsObjects4.length = 0;
gdjs.GameSceneCode.GDMatchArrowsObjects5.length = 0;
gdjs.GameSceneCode.GDPlayer1ArrowsObjects1.length = 0;
gdjs.GameSceneCode.GDPlayer1ArrowsObjects2.length = 0;
gdjs.GameSceneCode.GDPlayer1ArrowsObjects3.length = 0;
gdjs.GameSceneCode.GDPlayer1ArrowsObjects4.length = 0;
gdjs.GameSceneCode.GDPlayer1ArrowsObjects5.length = 0;
gdjs.GameSceneCode.GDPlayer2ArrowsObjects1.length = 0;
gdjs.GameSceneCode.GDPlayer2ArrowsObjects2.length = 0;
gdjs.GameSceneCode.GDPlayer2ArrowsObjects3.length = 0;
gdjs.GameSceneCode.GDPlayer2ArrowsObjects4.length = 0;
gdjs.GameSceneCode.GDPlayer2ArrowsObjects5.length = 0;
gdjs.GameSceneCode.GDGoodBadObjects1.length = 0;
gdjs.GameSceneCode.GDGoodBadObjects2.length = 0;
gdjs.GameSceneCode.GDGoodBadObjects3.length = 0;
gdjs.GameSceneCode.GDGoodBadObjects4.length = 0;
gdjs.GameSceneCode.GDGoodBadObjects5.length = 0;
gdjs.GameSceneCode.GDDeleteArrowsObjects1.length = 0;
gdjs.GameSceneCode.GDDeleteArrowsObjects2.length = 0;
gdjs.GameSceneCode.GDDeleteArrowsObjects3.length = 0;
gdjs.GameSceneCode.GDDeleteArrowsObjects4.length = 0;
gdjs.GameSceneCode.GDDeleteArrowsObjects5.length = 0;
gdjs.GameSceneCode.GDWinLoseObjects1.length = 0;
gdjs.GameSceneCode.GDWinLoseObjects2.length = 0;
gdjs.GameSceneCode.GDWinLoseObjects3.length = 0;
gdjs.GameSceneCode.GDWinLoseObjects4.length = 0;
gdjs.GameSceneCode.GDWinLoseObjects5.length = 0;
gdjs.GameSceneCode.GDStartGameObjects1.length = 0;
gdjs.GameSceneCode.GDStartGameObjects2.length = 0;
gdjs.GameSceneCode.GDStartGameObjects3.length = 0;
gdjs.GameSceneCode.GDStartGameObjects4.length = 0;
gdjs.GameSceneCode.GDStartGameObjects5.length = 0;
gdjs.GameSceneCode.GDPlayer1ControlsObjects1.length = 0;
gdjs.GameSceneCode.GDPlayer1ControlsObjects2.length = 0;
gdjs.GameSceneCode.GDPlayer1ControlsObjects3.length = 0;
gdjs.GameSceneCode.GDPlayer1ControlsObjects4.length = 0;
gdjs.GameSceneCode.GDPlayer1ControlsObjects5.length = 0;
gdjs.GameSceneCode.GDPlayer1ScoreObjects1.length = 0;
gdjs.GameSceneCode.GDPlayer1ScoreObjects2.length = 0;
gdjs.GameSceneCode.GDPlayer1ScoreObjects3.length = 0;
gdjs.GameSceneCode.GDPlayer1ScoreObjects4.length = 0;
gdjs.GameSceneCode.GDPlayer1ScoreObjects5.length = 0;
gdjs.GameSceneCode.GDPlayer2ControlsObjects1.length = 0;
gdjs.GameSceneCode.GDPlayer2ControlsObjects2.length = 0;
gdjs.GameSceneCode.GDPlayer2ControlsObjects3.length = 0;
gdjs.GameSceneCode.GDPlayer2ControlsObjects4.length = 0;
gdjs.GameSceneCode.GDPlayer2ControlsObjects5.length = 0;
gdjs.GameSceneCode.GDPlayer2ScoreObjects1.length = 0;
gdjs.GameSceneCode.GDPlayer2ScoreObjects2.length = 0;
gdjs.GameSceneCode.GDPlayer2ScoreObjects3.length = 0;
gdjs.GameSceneCode.GDPlayer2ScoreObjects4.length = 0;
gdjs.GameSceneCode.GDPlayer2ScoreObjects5.length = 0;

gdjs.GameSceneCode.eventsList36(runtimeScene);
gdjs.GameSceneCode.GDPlayer2Objects1.length = 0;
gdjs.GameSceneCode.GDPlayer2Objects2.length = 0;
gdjs.GameSceneCode.GDPlayer2Objects3.length = 0;
gdjs.GameSceneCode.GDPlayer2Objects4.length = 0;
gdjs.GameSceneCode.GDPlayer2Objects5.length = 0;
gdjs.GameSceneCode.GDPlayer1Objects1.length = 0;
gdjs.GameSceneCode.GDPlayer1Objects2.length = 0;
gdjs.GameSceneCode.GDPlayer1Objects3.length = 0;
gdjs.GameSceneCode.GDPlayer1Objects4.length = 0;
gdjs.GameSceneCode.GDPlayer1Objects5.length = 0;
gdjs.GameSceneCode.GDGirlObjects1.length = 0;
gdjs.GameSceneCode.GDGirlObjects2.length = 0;
gdjs.GameSceneCode.GDGirlObjects3.length = 0;
gdjs.GameSceneCode.GDGirlObjects4.length = 0;
gdjs.GameSceneCode.GDGirlObjects5.length = 0;
gdjs.GameSceneCode.GDMatchArrowsObjects1.length = 0;
gdjs.GameSceneCode.GDMatchArrowsObjects2.length = 0;
gdjs.GameSceneCode.GDMatchArrowsObjects3.length = 0;
gdjs.GameSceneCode.GDMatchArrowsObjects4.length = 0;
gdjs.GameSceneCode.GDMatchArrowsObjects5.length = 0;
gdjs.GameSceneCode.GDPlayer1ArrowsObjects1.length = 0;
gdjs.GameSceneCode.GDPlayer1ArrowsObjects2.length = 0;
gdjs.GameSceneCode.GDPlayer1ArrowsObjects3.length = 0;
gdjs.GameSceneCode.GDPlayer1ArrowsObjects4.length = 0;
gdjs.GameSceneCode.GDPlayer1ArrowsObjects5.length = 0;
gdjs.GameSceneCode.GDPlayer2ArrowsObjects1.length = 0;
gdjs.GameSceneCode.GDPlayer2ArrowsObjects2.length = 0;
gdjs.GameSceneCode.GDPlayer2ArrowsObjects3.length = 0;
gdjs.GameSceneCode.GDPlayer2ArrowsObjects4.length = 0;
gdjs.GameSceneCode.GDPlayer2ArrowsObjects5.length = 0;
gdjs.GameSceneCode.GDGoodBadObjects1.length = 0;
gdjs.GameSceneCode.GDGoodBadObjects2.length = 0;
gdjs.GameSceneCode.GDGoodBadObjects3.length = 0;
gdjs.GameSceneCode.GDGoodBadObjects4.length = 0;
gdjs.GameSceneCode.GDGoodBadObjects5.length = 0;
gdjs.GameSceneCode.GDDeleteArrowsObjects1.length = 0;
gdjs.GameSceneCode.GDDeleteArrowsObjects2.length = 0;
gdjs.GameSceneCode.GDDeleteArrowsObjects3.length = 0;
gdjs.GameSceneCode.GDDeleteArrowsObjects4.length = 0;
gdjs.GameSceneCode.GDDeleteArrowsObjects5.length = 0;
gdjs.GameSceneCode.GDWinLoseObjects1.length = 0;
gdjs.GameSceneCode.GDWinLoseObjects2.length = 0;
gdjs.GameSceneCode.GDWinLoseObjects3.length = 0;
gdjs.GameSceneCode.GDWinLoseObjects4.length = 0;
gdjs.GameSceneCode.GDWinLoseObjects5.length = 0;
gdjs.GameSceneCode.GDStartGameObjects1.length = 0;
gdjs.GameSceneCode.GDStartGameObjects2.length = 0;
gdjs.GameSceneCode.GDStartGameObjects3.length = 0;
gdjs.GameSceneCode.GDStartGameObjects4.length = 0;
gdjs.GameSceneCode.GDStartGameObjects5.length = 0;
gdjs.GameSceneCode.GDPlayer1ControlsObjects1.length = 0;
gdjs.GameSceneCode.GDPlayer1ControlsObjects2.length = 0;
gdjs.GameSceneCode.GDPlayer1ControlsObjects3.length = 0;
gdjs.GameSceneCode.GDPlayer1ControlsObjects4.length = 0;
gdjs.GameSceneCode.GDPlayer1ControlsObjects5.length = 0;
gdjs.GameSceneCode.GDPlayer1ScoreObjects1.length = 0;
gdjs.GameSceneCode.GDPlayer1ScoreObjects2.length = 0;
gdjs.GameSceneCode.GDPlayer1ScoreObjects3.length = 0;
gdjs.GameSceneCode.GDPlayer1ScoreObjects4.length = 0;
gdjs.GameSceneCode.GDPlayer1ScoreObjects5.length = 0;
gdjs.GameSceneCode.GDPlayer2ControlsObjects1.length = 0;
gdjs.GameSceneCode.GDPlayer2ControlsObjects2.length = 0;
gdjs.GameSceneCode.GDPlayer2ControlsObjects3.length = 0;
gdjs.GameSceneCode.GDPlayer2ControlsObjects4.length = 0;
gdjs.GameSceneCode.GDPlayer2ControlsObjects5.length = 0;
gdjs.GameSceneCode.GDPlayer2ScoreObjects1.length = 0;
gdjs.GameSceneCode.GDPlayer2ScoreObjects2.length = 0;
gdjs.GameSceneCode.GDPlayer2ScoreObjects3.length = 0;
gdjs.GameSceneCode.GDPlayer2ScoreObjects4.length = 0;
gdjs.GameSceneCode.GDPlayer2ScoreObjects5.length = 0;


return;

}

gdjs['GameSceneCode'] = gdjs.GameSceneCode;
