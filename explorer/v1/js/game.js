/* ======================================================
   Escape Engine v1.0
   Game Engine
====================================================== */


/* ======================================================
   현재 Stage 정보
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
   다음 Story
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
   Puzzle 출력
====================================================== */

function showPuzzle(){

    gameMode = "puzzle";

    const stage = getStage();

    updateStageTitle();

    fadeImage(
        `stages/${stage.folder}/puzzle/${currentPuzzle}.jpg`
    );

    // 마지막 퍼즐이면 정답 입력창 표시
    if(currentPuzzle === stage.puzzle){

        showPuzzleUI();

    }else{

        nextGuide.style.display = "block";

        answerContainer.style.display = "none";

        hintButton.style.display = "none";

    }

}


/* ======================================================
   다음 Puzzle
====================================================== */

function nextPuzzle(){

    const stage = getStage();

    // 마지막 퍼즐에서 정답을 맞춘 경우
    if(currentPuzzle >= stage.puzzle){

        currentClear = 1;

        showClear();

        return;

    }

    currentPuzzle++;

    showPuzzle();

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
   다음 Clear
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
   정답 확인
====================================================== */

function checkAnswer(){

    const stage = getStage();

    const answer = answerInput.value.trim();

    if(answer === stage.answer){

        successEffect();

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

    wrongEffect();

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

    if(hintCount <= 0){

        const pw = prompt("교사 비밀번호");

        if(pw === GAME.teacherPassword){

            teacherHintReset();

        }

        return;

    }

    hintCount--;

    updateHintButton();

    alert(getStage().hint);

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
   게임 오버
====================================================== */

function gameOver(){

    document
        .getElementById("gameOverScreen")
        .style.display = "flex";

}


/* ======================================================
   게임 클리어
====================================================== */

function gameClear(){

    document
        .getElementById("gameClearScreen")
        .style.display = "flex";

}
