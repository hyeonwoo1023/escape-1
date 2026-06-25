/* ======================================================
   Escape Engine v1.0
   제작자가 수정하는 곳
====================================================== */

/*
    게임 기본 설정
*/

const GAME = {

    // 게임 제목
    title: "탐험가 V1",

    // 시작 목숨
    life: 10,

    // 시작 힌트 개수
    hint: 3,

    // 교사모드 비밀번호
    teacherPassword: "1234"

};


/* ======================================================
    Stage 설정

    folder
        stages 안의 폴더 이름

    story
        story 폴더 이미지 개수

    puzzle
        puzzle 폴더 이미지 개수

    clear
        clear 폴더 이미지 개수
====================================================== */

const STAGES = [

    {

        title: "신비한 숲",

        folder: "stage1",

        story: 4,

        puzzle: 1,

        clear: 2,

        answer: "2400",

        hint: "가격의 규칙을 찾아보세요."

    },

    {

        title: "빛나는 동굴",

        folder: "stage2",

        story: 3,

        puzzle: 1,

        clear: 2,

        answer: "538",

        hint: "세 자리 수입니다."

    }

];


/* ======================================================
    수정 금지

    아래부터는 엔진에서 사용하는 변수
====================================================== */

let currentStage = 0;

let currentStory = 1;

let currentPuzzle = 1;

let currentClear = 1;

let gameMode = "story";

let life = GAME.life;

let hintCount = GAME.hint;

let timer = 0;
