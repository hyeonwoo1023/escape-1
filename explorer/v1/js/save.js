/* ======================================================
   Escape Engine v1.0
   자동 저장
====================================================== */


/* ======================================================
    저장
====================================================== */

function saveGame(){

    const saveData = {

        stage: currentStage,

        story: currentStory,

        puzzle: currentPuzzle,

        clear: currentClear,

        mode: gameMode,

        life: life,

        hint: hintCount,

        timer: timer

    };

    localStorage.setItem(

        "escapeSave",

        JSON.stringify(saveData)

    );

}


/* ======================================================
    불러오기
====================================================== */

function loadGame(){

    const data =

    localStorage.getItem("escapeSave");

    if(data===null){

        return false;

    }

    const saveData =

    JSON.parse(data);

    currentStage = saveData.stage;

    currentStory = saveData.story;

    currentPuzzle = saveData.puzzle;

    currentClear = saveData.clear;

    gameMode = saveData.mode;

    life = saveData.life;

    hintCount = saveData.hint;

    timer = saveData.timer;

    refreshUI();

    switch(gameMode){

        case "story":

            showStory();

            break;

        case "puzzle":

            showPuzzle();

            break;

        case "clear":

            showClear();

            break;

    }

    return true;

}


/* ======================================================
    저장 삭제
====================================================== */

function clearSave(){

    localStorage.removeItem("escapeSave");

}


/* ======================================================
    자동 저장
====================================================== */

setInterval(()=>{

    saveGame();

},3000);
