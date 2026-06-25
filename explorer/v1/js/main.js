gameImage.addEventListener("click",()=>{

    switch(gameMode){

        case "story":

            nextStory();

            break;

        case "puzzle":

            if(answerContainer.style.display==="none"){

                nextPuzzle();

            }

            break;

        case "clear":

            nextClear();

            break;

    }

});
