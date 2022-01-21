"use strict";
var NatureReloaded;
(function (NatureReloaded) {
    window.addEventListener("load", handleLoad);
    let a = 0;
    let lastA = true;
    let answer;
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
        startButton.addEventListener("click", startAudioBook);
        //  playIcon.addEventListener("click", handlePlayPause);
        pauseIcon.addEventListener("click", handlePlayPause);
    }
    function startAudioBook() {
        handleStart();
        playS1Prologue();
    }
    function handleStart() {
        startButton.style.display = "none";
        buttonTipp1.style.display = "block";
        buttonTipp1.addEventListener("click", hideTipp1);
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
        }
    }
    function playS1Prologue() {
        atmoGreen.play();
        /*   let allaudio: HTMLCollectionOf<HTMLAudioElement> = document.getElementsByTagName("audio");
           console.log(allaudio);*/
    }
    function handlePlayPause() {
        pauseIcon.style.display = "none";
        playIcon.style.display = "block";
    }
})(NatureReloaded || (NatureReloaded = {}));
//# sourceMappingURL=natureReloaded.js.map