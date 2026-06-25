/* ======================================================
   Escape Engine v1.0
   게임 엔진
====================================================== */

/* ======================================================
    현재 Stage 가져오기
====================================================== */

function getStage(){

    return STAGES[currentStage];

}


/* ======================================================
    게임 시작
====================================================== */

function startGame(){

    currentStage = 0;

    currentStory = 1;

    currentPuzzle = 1;

    currentClear = 1;

    gameMode = "story";

    life = GAME.life;

    hintCount = GAME.hint;

    timer = 0;

    refreshUI();

    showStory();

}


/* ======================================================
    Story 출력
====================================================== */

function showStory(){

    gameMode = "story";

    const stage = getStage();

    updateStageTitle();

    showStoryUI();

    fadeImage(

        `stages/${stage.folder}/story/${currentStory}.jpg`

    );

}


/* ======================================================
    Puzzle 출력
====================================================== */

function showPuzzle(){

    gameMode = "puzzle";

    const stage = getStage();

    updateStageTitle();

    showPuzzleUI();

    fadeImage(

        `stages/${stage.folder}/puzzle/${currentPuzzle}.jpg`

    );

}


/* ======================================================
    Clear 출력
====================================================== */

function showClear(){

    gameMode = "clear";

    const stage = getStage();

    updateStageTitle();

    showClearUI();

    fadeImage(

        `stages/${stage.folder}/clear/${currentClear}.jpg`

    );

}


/* ======================================================
    Story 다음
====================================================== */

function nextStory(){

    const stage = getStage();

    currentStory++;

    if(currentStory > stage.story){

        currentPuzzle = 1;

        showPuzzle();

        return;

    }

    showStory();

}


/* ======================================================
    Puzzle 다음
====================================================== */

function nextPuzzle(){

    const stage = getStage();

    currentPuzzle++;

    if(currentPuzzle > stage.puzzle){

        currentClear = 1;

        showClear();

        return;

    }

    showPuzzle();

}


/* ======================================================
    Clear 다음
====================================================== */

function nextClear(){

    const stage = getStage();

    currentClear++;

    if(currentClear > stage.clear){

        nextStage();

        return;

    }

    showClear();

}


/* ======================================================
    다음 Stage
====================================================== */

function nextStage(){

    currentStage++;

    if(currentStage >= STAGES.length){

        gameClear();

        return;

    }

    currentStory = 1;

    currentPuzzle = 1;

    currentClear = 1;

    refreshUI();

    showStory();

}


/* ======================================================
    정답 확인
====================================================== */

function checkAnswer(){

    const stage = getStage();

    const answer =

        answerInput.value.trim();

    if(answer === stage.answer){

        answerInput.value = "";

        nextPuzzle();

        return;

    }

    wrongAnswer();

}


/* ======================================================
    오답 처리
====================================================== */

function wrongAnswer(){

    life--;

    updateLife();

    answerInput.value = "";

    answerInput.focus();

    if(life <= 0){

        gameOver();

    }

}


/* ======================================================
    힌트
====================================================== */

function showHint(){

    if(hintCount<=0){

        const pw = prompt("교사 비밀번호");

        if(pw===GAME.teacherPassword){

            teacherHintReset();

        }

        return;

    }

    hintCount--;

    updateHintButton();

    alert(getStage().hint);

}

    hintCount--;

    updateHintButton();

    alert(

        getStage().hint

    );

}


/* ======================================================
    게임 오버
====================================================== */

function gameOver(){

    document

    .getElementById("gameOverScreen")

    .style.display="flex";

}


/* ======================================================
    게임 클리어
====================================================== */

function gameClear(){

    document

    .getElementById("gameClearScreen")

    .style.display="flex";

}
