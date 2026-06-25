/* ======================================================
   Escape Engine v1.0
   이벤트
====================================================== */


/* ======================================================
    이미지 클릭
====================================================== */

gameImage.addEventListener("click",()=>{

    switch(gameMode){

        case "story":

            nextStory();

            break;

        case "clear":

            nextClear();

            break;

    }

});


/* ======================================================
    정답 확인 버튼
====================================================== */

answerButton.addEventListener("click",()=>{

    checkAnswer();

});


/* ======================================================
    엔터 입력
====================================================== */

answerInput.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        checkAnswer();

    }

});


/* ======================================================
    힌트 버튼
====================================================== */

hintButton.addEventListener("click",()=>{

    showHint();

});


/* ======================================================
    Game Over
====================================================== */

const retryButton =

document.getElementById("retryButton");


retryButton.addEventListener("click",()=>{

    document

    .getElementById("gameOverScreen")

    .style.display="none";

    startGame();

});


/* ======================================================
    Game Clear
====================================================== */

const homeButton =

document.getElementById("homeButton");


homeButton.addEventListener("click",()=>{

    location.reload();

});
