"use strict";
var NatureReloaded;
(function (NatureReloaded) {
    window.addEventListener("load", handleLoad);
    //to count atmo-points
    let a = 0;
    //sets impact of last answer the user gave 
    //a-=1 -> lastA = false/ a+=1 -> lastA = true
    let lastA;
    //answer can't be a boolean because true/false can't be overwritten with something else
    //--> if the user touches the screen by mistake (and doesn't swipe) it will give back the value that was assigned before 
    //--> with a string answer can be "reset" before every new question
    let answer = "undefined";
    //variables needed for detecting touch
    let initialX;
    let initialY;
    let currentX;
    let currentY;
    let diffX;
    let diffY;
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
    //all Audios
    let allAudios = [atmoGreen, atmoRed, prologue1Q, prologueAnswerYes, prologueAnswerNo,
        prologue2, scene2Q, scene2AnswerYes, scene2AnswerNo, scene3Q1, scene3PositiveVQ2, scene3NegativeVQ2,
        scene3BothVQ2, scene3AnswerYes, scene3AnswerNo, scene4PositiveV, scene4NegativeV];
    let audiosPaused;
    //Start-Buttons
    let startButton;
    let buttonTipp1;
    let buttonTipp2;
    let buttonWarning;
    //Imgs
    let logo;
    let playIcon;
    let pauseIcon;
    let loadPage;
    function handleLoad() {
        logo = document.querySelector("#logo");
        startButton = document.querySelector("#startButton");
        buttonTipp1 = document.querySelector("#tipp1");
        buttonTipp2 = document.querySelector("#tipp2");
        buttonWarning = document.querySelector("#warning");
        playIcon = document.querySelector("#playIcon");
        pauseIcon = document.querySelector("#pauseIcon");
        loadPage = document.querySelector("#loadButton");
        startButton.addEventListener("click", handleStart);
        pauseIcon.addEventListener("click", handlePlayPause);
        document.addEventListener("touchstart", handleTouchstart, false);
        document.addEventListener("touchmove", handleTouchmove, false);
        hideLogo();
    }
    function hideLogo() {
        console.log("hideLogo");
        logo.style.opacity = "0";
        logo.addEventListener("transitionend", function () {
            logo.remove();
            startButton.style.display = "block";
        });
    }
    function handleStart() {
        console.log("Start! -> click though buttons");
        startButton.style.display = "none";
        buttonTipp1.style.display = "block";
        buttonTipp1.addEventListener("click", hideTipp1);
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
        pauseIcon.style.display = "inline";
        //  loadPage.style.display = "inline";
        playS1Prologue();
    }
    async function playS1Prologue() {
        console.log("startPrologue");
        prologue1Q.addEventListener("ended", vibrate);
        prologue1Q.play();
        console.log("wait for user to swipe");
        answer = await waitForTouchend();
        while (answer !== "Yes" && answer !== "No") {
            console.log("answer is undefined: ", answer);
            answer = await waitForTouchend();
        }
        console.log("answer: ", answer);
        if (answer === "Yes") {
            //need to solve problem for overlapping audios if user swipes too early
            //if (prologue1Q.paused) {}  --> doesn't work, code jumps to vibrate() when swiping too early
            //.addEventlistener("ended") --> does work, but if the user actually waits long enough the next audio won't play
            console.log("play audio to answer yes");
            prologueAnswerYes.play();
            prologueAnswerYes.addEventListener("ended", function () {
                console.log("rest of prologue");
                prologue2.play();
            });
        }
        else if (answer === "No") {
            //  if (prologue1Q.paused) {}
            console.log("play audio to answer no");
            prologueAnswerNo.play();
            prologueAnswerNo.addEventListener("ended", function () {
                console.log("rest of prologue");
                prologue2.play();
                console.log("end of prologue");
            });
        }
        prologue2.addEventListener("ended", playS2Hunting);
    }
    async function playS2Hunting() {
        answer = "undefined";
        console.log("start scene2");
        atmoGreen.volume = 0.5;
        atmoGreen.play();
        console.log("start AtmoGreen at: ", atmoGreen.volume);
        atmoRed.volume = 0.5;
        atmoRed.play();
        console.log("start AtmoRed at: ", atmoRed.volume);
        scene2Q.addEventListener("ended", vibrate);
        scene2Q.play();
        console.log("play scene2 + Q ");
        console.log("wait for user to swipe");
        answer = await waitForTouchend();
        while (answer !== "No" && answer !== "Yes") {
            console.log("answer is undefined: ", answer);
            answer = await waitForTouchend();
        }
        console.log("answer: ", answer);
        if (answer === "Yes") {
            scene2AnswerYes.play();
            a += 1;
            lastA = true;
            changeAtmo();
            console.log("play audio to answer yes", "a: ", a, "lastA: ", lastA, "atmoGrenn: ", atmoGreen.volume, "atmoRed: ", atmoRed);
            scene2AnswerYes.addEventListener("ended", function () {
                console.log("end of scene2");
                playS3SafeEnergy1();
            });
        }
        else if (answer === "No") {
            scene2AnswerNo.play();
            a -= 1;
            lastA = false;
            changeAtmo();
            console.log("play audio to answer no", "a: ", a, "lastA: ", lastA, "atmoGrenn: ", atmoGreen.volume, "atmoRed: ", atmoRed);
            scene2AnswerNo.addEventListener("ended", function () {
                console.log("end of scene2");
                playS3SafeEnergy1();
            });
        }
    }
    //Scene 3 Part1
    async function playS3SafeEnergy1() {
        answer = "undefined";
        console.log("play S3SafeEnergy Part1");
        scene3Q1.addEventListener("ended", vibrate);
        scene3Q1.play();
        console.log("play scene3 + Q1");
        console.log("wait for user to swipe");
        answer = await waitForTouchend();
        while (answer !== "No" && answer !== "Yes") {
            console.log("answer is undefined: ", answer);
            answer = await waitForTouchend();
        }
        console.log("answer: ", answer);
        if (answer === "Yes") {
            a += 1;
            lastA = true;
            changeAtmo();
            console.log("a: ", a, "lastA: ", lastA, "atmoGreen: ", atmoGreen.volume, "atmoRed: ", atmoRed.volume);
        }
        else if (answer === "No") {
            a -= 1;
            lastA = false;
            changeAtmo();
            console.log("a: ", a, "lastA: ", lastA, "atmoGreen: ", atmoGreen.volume, "atmoRed: ", atmoRed.volume);
        }
        if (a < 0) {
            console.log("play scene3 Negative Version + Q");
            scene3NegativeVQ2.addEventListener("ended", function () {
                vibrate();
                console.log("end of scene3 part 1");
                playS3SafeEnergy2();
            });
            scene3NegativeVQ2.play();
        }
        else if (a > 0) {
            console.log("play scene3 Positive Version + Q");
            scene3PositiveVQ2.addEventListener("ended", function () {
                vibrate();
                console.log("end of scene3 part 1");
                playS3SafeEnergy2();
            });
            scene3PositiveVQ2.play();
        }
        else {
            console.log("play scene3 Both Versions + Q");
            scene3BothVQ2.addEventListener("ended", function () {
                vibrate();
                console.log("end of scene3 part 1");
                playS3SafeEnergy2();
            });
            scene3BothVQ2.play();
        }
    }
    //it's easier to define a new function playS3SafeEnergy2 and call it when hte audio before has ended...
    //then to write six ended-triggers for the following audio
    //Scene 3 Part 2
    async function playS3SafeEnergy2() {
        answer = "undefined";
        console.log("play S3SafeEnergy Part2");
        console.log("wait for user to swipe");
        answer = await waitForTouchend();
        while (answer !== "Yes" && answer != "No") {
            console.log("answer is undefined: ", answer);
            answer = await waitForTouchend();
        }
        console.log("answer: ", answer);
        if (answer === "Yes") {
            scene3AnswerYes.play();
            a -= 1;
            lastA = false;
            changeAtmo();
            console.log("play audio to answer yes", "a: ", a, "lastA: ", lastA, "atmoGrenn: ", atmoGreen.volume, "atmoRed: ", atmoRed);
            scene3AnswerYes.addEventListener("ended", function () {
                console.log("end of scene3 Part 2");
                playS4Cutscene();
            });
        }
        else if (answer === "No") {
            scene3AnswerNo.play();
            a += 1;
            lastA = true;
            changeAtmo();
            console.log("play audio to answer no", "a: ", a, "lastA: ", lastA, "atmoGrenn: ", atmoGreen.volume, "atmoRed: ", atmoRed);
            scene3AnswerNo.addEventListener("ended", function () {
                console.log("end of scene3 Part 2");
                playS4Cutscene();
            });
        }
    }
    // Scene 4
    function playS4Cutscene() {
        console.log("play scene 4");
        if (a > 0) {
            console.log("play scene 4 positiveV");
            scene4PositiveV.play();
        }
        else if (a < 0) {
            console.log("play scene 4 negativeV");
            scene4NegativeV.play();
        }
        else {
            if (lastA == true) {
                console.log("play scene 4 positiveV");
                scene4PositiveV.play();
            }
            else {
                console.log("play scene 4 negativeV");
                scene4NegativeV.play();
            }
        }
        scene4PositiveV.addEventListener("ended", function () {
            console.log("end of scene4");
        });
        scene4NegativeV.addEventListener("ended", function () {
            console.log("end of scene4");
        });
    }
    //gibt Koordinaten der ersten touchpoints wieder
    function handleTouchstart(e) {
        initialX = e.touches[0].clientX;
        initialY = e.touches[0].clientY;
        console.log(initialX, initialY, e.touches[0]);
    }
    //get swipe left/right -> set answer
    function handleTouchmove(e) {
        currentX = e.touches[0].clientX;
        currentY = e.touches[0].clientY;
        diffX = initialX - currentX;
        diffY = initialY - currentY;
        if (Math.abs(diffX) > Math.abs(diffY)) {
            // sliding horizontally
            if (diffX > 0) {
                // swiped left
                console.log("swiped left");
                answer = "No";
                //  console.log(answer);
            }
            else if (diffX < 0) {
                // swiped right
                console.log("swiped right");
                answer = "Yes";
                //console.log(answer);
            }
        }
    }
    function changeAtmo() {
        console.log("change Atmo");
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
    //wait for user to end touch
    async function waitForTouchend() {
        return new Promise((resolve) => {
            document.addEventListener("touchend", function () {
                resolve(answer);
            }, { once: true });
        });
    }
    //play/pause audio currently playing
    async function handlePlayPause() {
        console.log("pause!");
        pauseIcon.style.display = "none";
        playIcon.style.display = "block";
        let clickPlay = false;
        audiosPaused = [];
        let pausedAudio;
        let currentAudio;
        //iterate through array of all audios and pause current audio playing
        for (currentAudio of allAudios) {
            if (!currentAudio.paused) {
                console.log("currentAudio playing:", currentAudio);
                currentAudio.pause();
                //push currentAudio in audiosPaused
                audiosPaused.push(currentAudio);
            }
        }
        //wait for user to click play again
        clickPlay = await waitForClickPlay();
        console.log("did user click play again?: ", clickPlay);
        pauseIcon.style.display = "inline";
        playIcon.style.display = "none";
        //iterate through pausedAudios to play them again
        for (pausedAudio of audiosPaused) {
            //if user clicked play, play audio that was paused before
            if (clickPlay == true) {
                console.log("continue ", pausedAudio);
                pausedAudio.play();
            }
        }
    }
    //wait for user to click play again
    async function waitForClickPlay() {
        return new Promise((resolve) => {
            playIcon.addEventListener("click", function () {
                resolve(true);
            }, { once: true });
        });
    }
})(NatureReloaded || (NatureReloaded = {}));
//# sourceMappingURL=natureReloaded.js.map