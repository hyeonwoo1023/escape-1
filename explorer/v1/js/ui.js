/* ======================================================
   Escape Engine v1.0
   UI 관리
====================================================== */

/* ======================================================
    HTML 요소
====================================================== */

const gameImage =
document.getElementById("gameImage");

const stageTitle =
document.getElementById("stageTitle");

const nextGuide =
document.getElementById("nextGuide");

const answerContainer =
document.getElementById("answerContainer");

const answerInput =
document.getElementById("answerInput");

const answerButton =
document.getElementById("answerButton");

const hintButton =
document.getElementById("hintButton");

const lifeBox =
document.getElementById("lifeBox");

const progressBar =
document.getElementById("progressBar");

const timerBox =
document.getElementById("timer");


/* ======================================================
    목숨
====================================================== */

function updateLife(){

    lifeBox.innerHTML = "";

    for(let i=0;i<life;i++){

        lifeBox.innerHTML += "❤️";

    }

}


/* ======================================================
    진행도
====================================================== */

function updateProgress(){

    progressBar.innerHTML = "";

    STAGES.forEach((stage,index)=>{

        const dot =
        document.createElement("div");

        dot.classList.add("stage-dot");

        if(index<currentStage){

            dot.classList.add("complete");

        }

        if(index===currentStage){

            dot.classList.add("active");

        }

        progressBar.appendChild(dot);

    });

}


/* ======================================================
    스테이지 제목
====================================================== */

function updateStageTitle(){

    stageTitle.innerText =
    STAGES[currentStage].title;

}


/* ======================================================
    Story 화면
====================================================== */

function showStoryUI(){

    nextGuide.style.display="block";

    answerContainer.style.display="none";

    hintButton.style.display="none";

}


/* ======================================================
    Puzzle 화면
====================================================== */

function showPuzzleUI(){

    nextGuide.style.display="none";

    answerContainer.style.display="flex";

    hintButton.style.display="block";

    answerInput.value="";

    answerInput.focus();

}


/* ======================================================
    Clear 화면
====================================================== */

function showClearUI(){

    nextGuide.style.display="block";

    answerContainer.style.display="none";

    hintButton.style.display="none";

}


/* ======================================================
    이미지 출력
====================================================== */

function setImage(src){

    gameImage.src = src;

}


/* ======================================================
    이미지 페이드
====================================================== */

function fadeImage(src){

    gameImage.style.opacity = 0;

    setTimeout(()=>{

        gameImage.src = src;

        gameImage.style.opacity = 1;

    },250);

}


/* ======================================================
    타이머
====================================================== */

function updateTimer(){

    const min =
    String(Math.floor(timer/60)).padStart(2,"0");

    const sec =
    String(timer%60).padStart(2,"0");

    timerBox.innerText =
    `${min}:${sec}`;

}


/* ======================================================
    힌트 버튼
====================================================== */

function updateHintButton(){

    hintButton.innerText =
    `💡 힌트 (${hintCount}회)`;

}


/* ======================================================
    전체 UI 새로고침
====================================================== */

function refreshUI(){

    updateLife();

    updateProgress();

    updateStageTitle();

    updateHintButton();

}
