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

        story: 5,

        puzzle: 1,

        clear: 2,

        answer: "4",

        hint: "9+6이 왜 3이 되는걸까?"

    },

    {

        title: "버섯 마을",

        folder: "stage2",

        story: 3,

        puzzle: 1,

        clear: 2,

        answer: "18",

        hint: "글자를 하나씩 자세히 살펴보자"

    },

       {

        title: "갈림길",

        folder: "stage3",

        story: 3,

        puzzle: 1,

        clear: 2,

        answer: "125",

        hint: "\"점\"을 찍어보자"

    },

       {

        title: "안개 낀 호수",

        folder: "stage4",

        story: 2,

        puzzle: 1,

        clear: 2,

        answer: "1113339252",

        hint: "위와 아래가 다르다고?"

    },

       {

        title: "함정",

        folder: "stage5",

        story: 3,

        puzzle: 1,

        clear: 2,

        answer: "ㅊㅍㄱ",

        hint: "천방지축 어리둥절 빙글빙글 돌아가는~"

    },

       {

        title: "황금 나침반",

        folder: "stage6",

        story: 3,

        puzzle: 1,

        clear: 6,

        answer: "42",

        hint: "차이를 비교해보자!"

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
