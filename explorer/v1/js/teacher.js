/* ======================================================
   Escape Engine v1.0
   Teacher Mode
====================================================== */

const teacherPanel =
document.getElementById("teacherPanel");

const teacherInfo =
document.getElementById("teacherInfo");

const closeTeacher =
document.getElementById("closeTeacher");


/* ======================================================
    Shift + T
====================================================== */

document.addEventListener("keydown",(e)=>{

    if(!(e.shiftKey && (e.key==="T" || e.key==="t"))){

        return;

    }

    const password = prompt("교사 비밀번호");

    if(password !== GAME.teacherPassword){

        alert("비밀번호가 틀렸습니다.");

        return;

    }

    openTeacherPanel();

});


/* ======================================================
    패널 열기
====================================================== */

function openTeacherPanel(){

    teacherPanel.style.display="flex";

    updateTeacherPanel();

}


/* ======================================================
    패널 닫기
====================================================== */

closeTeacher.addEventListener("click",()=>{

    teacherPanel.style.display="none";

});


/* ======================================================
    정보 표시
====================================================== */

function updateTeacherPanel(){

    teacherInfo.innerHTML =

    `

    <p><b>Stage</b> : ${currentStage+1}</p>

    <p><b>Story</b> : ${currentStory}</p>

    <p><b>Puzzle</b> : ${currentPuzzle}</p>

    <p><b>Clear</b> : ${currentClear}</p>

    <p><b>Mode</b> : ${gameMode}</p>

    <p><b>Life</b> : ${life}</p>

    <p><b>Hint</b> : ${hintCount}</p>

    <hr>

    <button onclick="teacherPrevStage()">

    ◀ 이전 Stage

    </button>

    <br><br>

    <button onclick="teacherNextStage()">

    ▶ 다음 Stage

    </button>

    <br><br>

    <button onclick="teacherLifeReset()">

    ❤️ 목숨 회복

    </button>

    <br><br>

    <button onclick="teacherHintReset()">

    💡 힌트 회복

    </button>

    <br><br>

    <button onclick="teacherDeleteSave()">

    💾 저장 삭제

    </button>

    `;

}


/* ======================================================
    이전 Stage
====================================================== */

function teacherPrevStage(){

    if(currentStage===0){

        return;

    }

    currentStage--;

    currentStory=1;

    currentPuzzle=1;

    currentClear=1;

    refreshUI();

    showStory();

    updateTeacherPanel();

}


/* ======================================================
    다음 Stage
====================================================== */

function teacherNextStage(){

    if(currentStage>=STAGES.length-1){

        return;

    }

    currentStage++;

    currentStory=1;

    currentPuzzle=1;

    currentClear=1;

    refreshUI();

    showStory();

    updateTeacherPanel();

}


/* ======================================================
    목숨 회복
====================================================== */

function teacherLifeReset(){

    life = GAME.life;

    updateLife();

    updateTeacherPanel();

}


/* ======================================================
    힌트 회복
====================================================== */

function teacherHintReset(){

    hintCount = GAME.hint;

    updateHintButton();

    updateTeacherPanel();

}


/* ======================================================
    저장 삭제
====================================================== */

function teacherDeleteSave(){

    localStorage.removeItem("escapeSave");

    alert("저장 데이터 삭제 완료");

}
