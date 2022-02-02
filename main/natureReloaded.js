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
    let userTouched = false;
    //Start-Buttons
    let startButton;
    let buttonTipp1;
    let buttonTipp2;
    let buttonWarning;
    //Pause/Play-Imgs
    let playIcon;
    let pauseIcon;
    function handleLoad() {
        // let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        startButton = document.querySelector("#startButton");
        buttonTipp1 = document.querySelector("#tipp1");
        buttonTipp2 = document.querySelector("#tipp2");
        buttonWarning = document.querySelector("#warning");
        playIcon = document.querySelector("#playIcon");
        pauseIcon = document.querySelector("#pauseIcon");
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
    async function playS1Prologue() {
        prologue1Q.play();
        console.log("startPrologue");
        prologue1Q.addEventListener("ended", vibrate);
        console.log("wait for user to swipe");
        answer = await myPromiseGenerator();
        console.log(answer);
        if (answer === true) {
            console.log("answer yes");
            prologueAnswerYes.play();
            prologueAnswerYes.addEventListener("ended", function () {
                console.log("rest of prologue");
                prologue2.play();
                prologue2.addEventListener("ended", playS2Hunting);
            });
        }
        else {
            console.log("answer no");
            prologueAnswerNo.play();
            prologueAnswerNo.addEventListener("ended", function () {
                console.log("rest of prologue");
                prologue2.play();
                prologue2.addEventListener("ended", playS2Hunting);
            });
        }
    }
    async function playS2Hunting() {
        atmoGreen.play();
        atmoGreen.volume = 0.5;
        console.log("start AtmoGreen", atmoGreen.volume);
        atmoRed.play();
        atmoRed.volume = 0.5;
        console.log("start AtmoRed", atmoRed.volume);
        scene2Q.play();
        console.log("start scene2 + Q");
        scene2Q.addEventListener("ended", vibrate);
        console.log("wait for user to swipe");
        answer = await myPromiseGenerator();
        console.log(answer);
        if (answer == true) {
            scene2AnswerYes.play();
            a += 1;
            lastA = true;
            changeAtmo();
            console.log("answer yes", a, lastA, "atmoGrenn:", atmoGreen.volume, "atmoRed:", atmoRed);
            scene2AnswerYes.addEventListener("ended", function () {
                console.log("end of scene2");
                playS3SafeEnergy();
            });
        }
        else {
            scene2AnswerNo.play();
            a -= 1;
            lastA = false;
            changeAtmo();
            console.log("answer no", a, lastA, "atmoGrenn:", atmoGreen.volume, "atmoRed:", atmoRed);
            scene2AnswerNo.addEventListener("ended", function () {
                console.log("end of scene2");
                playS3SafeEnergy();
            });
        }
    }
    async function playS3SafeEnergy() {
        scene3Q1.play();
        console.log("start Scene 3 + Q");
        scene3Q1.addEventListener("ended", vibrate);
        console.log("wait for user to swipe");
        answer = await myPromiseGenerator();
        console.log(answer);
        if (answer == true) {
            a += 1;
            lastA = true;
            console.log("answer yes", a, lastA);
        }
        else {
            a -= 1;
            lastA = false;
            console.log("answer yes", a, lastA);
        }
        if (a < 0) {
            console.log("play scene3 Negative Version + Q");
            scene3NegativeVQ2.play();
            scene3NegativeVQ2.addEventListener("ended", vibrate);
        }
        else if (a > 0) {
            console.log("play scene3 Positive Version + Q");
            scene3PositiveVQ2.play();
            scene3PositiveVQ2.addEventListener("ended", vibrate);
        }
        else {
            console.log("play scene3 Both Versions + Q");
            scene3BothVQ2.play();
            scene3BothVQ2.addEventListener("ended", vibrate);
        }
        console.log("wait for user to swipe");
        answer = await myPromiseGenerator();
        console.log(answer);
        if (answer == true) {
            scene3AnswerYes.play();
            a -= 1;
            lastA = false;
            changeAtmo();
            console.log("answer yes", a, lastA, "atmoGrenn:", atmoGreen.volume, "atmoRed:", atmoRed);
            scene3AnswerYes.addEventListener("ended", function () {
                console.log("end of scene3");
                playS4Cutscene();
            });
        }
        else {
            scene3AnswerNo.play();
            a += 1;
            lastA = true;
            changeAtmo();
            console.log("answer yes", a, lastA, "atmoGrenn:", atmoGreen.volume, "atmoRed:", atmoRed);
            scene3AnswerNo.addEventListener("ended", function () {
                console.log("end of scene3");
                playS4Cutscene();
            });
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
    //make phone vibrate 
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
    async function myPromiseGenerator() {
        return new Promise((resolve) => {
            document.addEventListener("touchend", function () {
                resolve(answer);
            }, { once: true });
        });
    }
    /*   function handlePlayPause(): void {
       allAudio = document.getElementsByTagName("audio");
       console.log(allAudio);
       pauseIcon.style.display = "none";
       playIcon.style.display = "block";
 
   }*/
})(NatureReloaded || (NatureReloaded = {}));
//# sourceMappingURL=natureReloaded.js.map