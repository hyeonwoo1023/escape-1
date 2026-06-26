/* ======================================================
   Escape Engine v1.0
   효과
====================================================== */


/* ======================================================
    화면 흔들기 (오답)
====================================================== */

function shakeScreen(){

    const container =
    document.querySelector(".game-container");

    container.classList.add("shake");

    setTimeout(()=>{

        container.classList.remove("shake");

    },500);

}


/* ======================================================
    이미지 페이드
====================================================== */

function fadeImage(src){
    console.log("fadeImage:", src);

    gameImage.style.opacity="0";

    setTimeout(()=>{

        gameImage.src=src;

        gameImage.style.opacity="1";

    },250);

}


/* ======================================================
    정답 효과
====================================================== */

function successEffect(){

    gameImage.classList.add("success");

    setTimeout(()=>{

        gameImage.classList.remove("success");

    },500);

}


/* ======================================================
    오답 효과
====================================================== */

function wrongEffect(){

    shakeScreen();

}


/* ======================================================
    버튼 클릭 효과
====================================================== */

function buttonEffect(button){

    button.classList.add("button-click");

    setTimeout(()=>{

        button.classList.remove("button-click");

    },150);

}
