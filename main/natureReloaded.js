"use strict";
var NatureReloaded;
(function (NatureReloaded) {
    window.addEventListener("load", handleLoad);
    let a = 0;
    let lastA = true;
    let answer;
    let initialX = null;
    let initialY = null;
    let atmoGreen = new Audio("/audios/mixkit-natural-ambience-with-flowing-water-and-birds-61.wav");
    let atmoRed = new Audio("/audios/mixkit-thunderstorm-in-the-forest-2396.wav");
    let startButton;
    let buttonTipp1;
    let buttonTipp2;
    let buttonWarning;
    let playIcon;
    let pauseIcon;
    function handleLoad() {
        startButton = document.querySelector("#startButton");
        buttonTipp1 = document.querySelector("#tipp1");
        buttonTipp2 = document.querySelector("#tipp2");
        buttonWarning = document.querySelector("#warning");
        playIcon = document.querySelector("#playIcon");
        pauseIcon = document.querySelector("#pauseIcon");
        startButton.addEventListener("click", handleStart);
        //  playIcon.addEventListener("click", handlePlayPause);
        //  pauseIcon.addEventListener("click", handlePlayPause);
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
        startAudioBook();
    }
    function startAudioBook() {
        playS1Prologue();
        //  playS2Hunting();
        // console.log("Ende Start audiobook");
    }
    function playS1Prologue() {
        console.log("start Prologue");
        // play prologue and ask question
        //vibrate();
        // handleTouch();
        atmoGreen.play();
        atmoGreen.addEventListener("ended", handleTouch);
        /* console.log("play prologue ans ask question");
         // vibrate();
         answer = endTouch();
         if (answer == true) {
             //play audio clip for answer yes
             console.log("audio answer yes");
         } else {
             //play audio clip for answer no
             console.log("audio answer no");
         }
         //play rest of prologue
         console.log("rest of prologue");
         //atmoGreen.addEventListener("ended", playS2Hunting);
         console.log("Ende S1");*/
    }
    function handleTouch() {
    }
    //gibt Koordinaten des touchpoints wieder
    function startTouch(e) {
        initialX = e.touches[0].clientX;
        initialY = e.touches[0].clientY;
        console.log(initialX, initialY, e.touches[0]);
    }
    function handleTouchmove(e) {
        vibrate();
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
    /*function playS2Hunting(): void {

       atmoRed.play();

       console.log("Ende S2");

   }


   function handlePlayPause(): void {
       pauseIcon.style.display = "none";
       playIcon.style.display = "block";
   }*/
})(NatureReloaded || (NatureReloaded = {}));
//# sourceMappingURL=natureReloaded.js.map