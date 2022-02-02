"use strict";
var NatureReloaded;
(function (NatureReloaded) {
    window.addEventListener("load", handleLoad);
    //to count atmo-points
    let a = 0;
    //set last answer 
    let lastA = true;
    //swipe left = no/false, swipe right = yes/true
    let answer;
    //start-coordinates of touch
    let initialX = null;
    let initialY = null;
    //atmos
    let atmoGreen = new Audio("./audios/mixkit-natural-ambience-with-flowing-water-and-birds-61.wav");
    let atmoRed = new Audio("./audios/mixkit-thunderstorm-in-the-forest-2396.wav");
    //all audio clips 
    let prologue1Q = new Audio("./audios/prologue+question_placeh.ogg");
    let prologueAnswerYes = new Audio("./audios/prologue_answerYes_placeh.ogg");
    let prologueAnswerNo = new Audio("./audios/prologue_answerNo_placeh.ogg");
    let prologue2 = new Audio("./audios/rest_of_prologue_placeh.ogg");
    let scene2Q = new Audio("./audios/scene2+question_placeh.ogg");
    let scene2AnswerYes = new Audio("./audios/scene2_answerYes_placeh.ogg");
    let scene2AnswerNo = new Audio("./audios/scene2_answerNo_placeh.ogg");
    let scene3Q1 = new Audio("./audios/scene3+question1_placeh.ogg");
    let scene3PositiveVQ2 = new Audio("./audios/scene3_positiveArguments_placeh.ogg");
    let scene3NegativeVQ2 = new Audio("./audios/scene3_negativeArguments_placeh.ogg");
    let scene3BothVQ2 = new Audio("./audios/scene3_neutralArguments_placeh.ogg");
    let scene3AnswerYes = new Audio("./audios/scene3_answerYes_placeh.ogg");
    let scene3AnswerNo = new Audio("./audios/scene3_answerNo_placeh.ogg");
    let scene4PositiveV = new Audio("./audios/scene4_positiveSide_placeh.ogg");
    let scene4NegativeV = new Audio("./audios/scene4_negativeSide_placeh.ogg");
    //  let allAudio: HTMLCollectionOf<HTMLAudioElement>;
    //Start-Buttons
    let startButton;
    let buttonTipp1;
    let buttonTipp2;
    let buttonWarning;
    //Pause/Play-Imgs
    let playIcon;
    let pauseIcon;
    function handleLoad() {
        startButton = document.querySelector("#startButton");
        buttonTipp1 = document.querySelector("#tipp1");
        buttonTipp2 = document.querySelector("#tipp2");
        buttonWarning = document.querySelector("#warning");
        playIcon = document.querySelector("#playIcon");
        pauseIcon = document.querySelector("#pauseIcon");
        document.body.appendChild(prologue1Q);
        startButton.addEventListener("click", handleStart);
        //  playIcon.addEventListener("click", handlePlayPause);
        // pauseIcon.addEventListener("click", handlePlayPause);
        document.addEventListener("touchstart", startTouch, false);
        document.addEventListener("touchmove", handleTouchmove, false);
        document.addEventListener("touchend", endTouch);
        answer = endTouch();
    }
    function handleStart() {
        startButton.style.display = "none";
        buttonTipp1.style.display = "block";
        buttonTipp1.addEventListener("click", hideTipp1);
        console.log("Ende Funktion handleStart");
    }
    function hideTipp1() {
        buttonTipp1.style.display = "none";
        buttonTipp2.style.display = "block";
        buttonTipp2.addEventListener("click", hideTipp2);
    }
    function hideTipp2() {
        buttonTipp2.style.display = "none";
        buttonWarning.style.display = "block";
        buttonWarning.addEventListener("click", hideWarning);
    }
    function hideWarning() {
        buttonWarning.style.display = "none";
        pauseIcon.style.display = "block";
        playS1Prologue();
    }
    function playS1Prologue() {
        console.log("start Prologue");
        prologue1Q.addEventListener("canplaythrough", event => {
            /* the audio is now playable; play it if permissions allow */
            prologue1Q.play();
        });
        // prologue1Q.play();
        prologue1Q.addEventListener("ended", vibrate);
        //somehow wait for swipe of user
        answer = endTouch(); //?
        if (answer == true) {
            prologueAnswerYes.play();
            console.log("audio answer yes");
        }
        else {
            prologueAnswerNo.play();
            console.log("audio answer no");
        }
        prologue2.play();
        console.log("rest of prologue");
        prologue2.addEventListener("ended", playS2Hunting);
        console.log("End of prologue");
    }
    function playS2Hunting() {
        atmoGreen.play();
        atmoGreen.volume = 0.5;
        atmoRed.play();
        atmoRed.volume = 0.5;
        scene2Q.play();
        //somehow wait for swipe of user
        answer = endTouch(); //?
        if (answer == true) {
            scene2AnswerYes.play();
            a += 1;
            lastA = true;
            console.log("audio answer yes", a, lastA);
            changeAtmo();
            scene2AnswerYes.addEventListener("ended", playS3SafeEnergy);
        }
        else {
            scene2AnswerNo.play();
            a -= 1;
            lastA = false;
            console.log("audio answer no", a, lastA);
            changeAtmo();
            scene2AnswerNo.addEventListener("ended", playS3SafeEnergy);
        }
    }
    function playS3SafeEnergy() {
        scene3Q1.play();
        //somehow wait for swipe of user
        answer = endTouch(); //?
        if (answer == true) {
            a += 1;
            lastA = true;
            changeAtmo();
        }
        else {
            a -= 1;
            lastA = false;
            changeAtmo();
        }
        if (a < 0) {
            scene3NegativeVQ2.play();
        }
        else if (a > 0) {
            scene3PositiveVQ2.play();
        }
        else {
            scene3BothVQ2.play();
        }
        //somehow wait for swipe of user
        answer = endTouch(); //?
        if (answer == true) {
            scene3AnswerYes.play();
            a -= 1;
            lastA = false;
            console.log("audio answer yes", a, lastA);
            changeAtmo();
            scene3AnswerYes.addEventListener("ended", playS4Cutscene);
        }
        else {
            scene3AnswerNo.play();
            a += 1;
            lastA = true;
            console.log("audio answer no", a, lastA);
            changeAtmo();
            scene3AnswerNo.addEventListener("ended", playS4Cutscene);
        }
    }
    function playS4Cutscene() {
        if (a > 0) {
            scene4PositiveV.play();
        }
        else if (a < 0) {
            scene4NegativeV.play();
        }
        else {
            if (lastA == true) {
                scene4PositiveV.play();
            }
            else {
                scene4NegativeV.play();
            }
        }
    }
    //gibt Koordinaten der ersten touchpoints wieder
    function startTouch(e) {
        initialX = e.touches[0].clientX;
        initialY = e.touches[0].clientY;
        console.log(initialX, initialY, e.touches[0]);
    }
    function handleTouchmove(e) {
        let currentX = e.touches[0].clientX;
        let currentY = e.touches[0].clientY;
        let diffX = initialX - currentX;
        let diffY = initialY - currentY;
        if (Math.abs(diffX) > Math.abs(diffY)) {
            // sliding horizontally
            if (diffX > 0) {
                // swiped left
                console.log("swiped left");
                answer = false;
                //  console.log(answer);
            }
            else {
                // swiped right
                console.log("swiped right");
                answer = true;
                //console.log(answer);
            }
        }
    }
    function endTouch() {
        console.log(answer);
        return answer;
    }
    function changeAtmo() {
        if (lastA == true) {
            atmoGreen.volume += 0.1;
            atmoRed.volume -= 0.1;
        }
        else {
            atmoGreen.volume += 0.1;
            atmoRed.volume -= 0.1;
        }
    }
    function vibrate() {
        if ("vibrate" in navigator) {
            console.log("Vibration supported");
        }
        else {
            // Vibration not supported
            console.log("Vibration not supported");
        }
        navigator.vibrate(1000);
    }
    /*   function handlePlayPause(): void {
           allAudio = document.getElementsByTagName("audio");
           console.log(allAudio);
           pauseIcon.style.display = "none";
           playIcon.style.display = "block";
   
       }*/
})(NatureReloaded || (NatureReloaded = {}));
//# sourceMappingURL=natureReloaded.js.map