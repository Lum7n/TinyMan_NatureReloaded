"use strict";
var NatureReloaded_Test1;
(function (NatureReloaded_Test1) {
    window.addEventListener("load", handleLoad);
    let allAudios = [];
    //counter for array allAudios
    let count;
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
    let atmoGreen = new Audio("/audios/mixkit-natural-ambience-with-flowing-water-and-birds-61.wav");
    let atmoRed = new Audio("/audios/mixkit-thunderstorm-in-the-forest-2396.wav");
    //Start-Buttons
    let startButton;
    let buttonTipp1;
    let buttonTipp2;
    let buttonWarning;
    //Pause/Play-Imgs
    let playIcon;
    let pauseIcon;
    //all audio clips 
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
        count = 0;
        let audio = new Audio("pipa.mp3");
        let audioBoth = new Audio("dingsdum.mp3");
        let audiodata = {
            currentAudio: audio,
            rightAudio: audioBoth,
            leftAudio: audioBoth
        };
        allAudios.push(audiodata);
    }
    //Functions handling buttons before Audiobook
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
        startAudioBook(audio);
    }
    function playAudio(audio) {
        for (count = 0; count < allAudios.; count++) {
            const element = array[count];
        }
        audio.play();
        count++;
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
                playAudio(allAudios[count].leftAudio);
                //  console.log(answer);
            }
            else {
                // swiped right
                console.log("swiped right");
                answer = true;
                playAudio(allAudios[count].rightAudio);
                //console.log(answer);
            }
        }
    }
    /*
    
        interface Audiodata {
            currentAudio: HTMLAudioElement;
            rightAudio: HTMLAudioElement;
            leftAudio: HTMLAudioElement;
        }
    
        window.addEventListener("load", onLoad);
        let allAudios: Audiodata[] = [];
        let count: number;
    
        function onLoad(): void {
            count = 0;
            let audio: HTMLAudioElement = new Audio("pipa.mp3");
            let audioBoth: HTMLAudioElement = new Audio("dingsdum.mp3");
            let audiodata: Audiodata = {
                currentAudio: audio,
                rightAudio: audioBoth,
                leftAudio: audioBoth
            };
            allAudios.push(audiodata);
    
    
        }
    
        function playAudio(audio: HTMLAudioElement) {
            audio.play();
            count++;
        }
    
        function handleTouchmove(e: any): void {
    
            vibrate();
    
            let currentX: any = e.touches[0].clientX;
            let currentY: any = e.touches[0].clientY;
            let diffX: number = initialX - currentX;
            let diffY: number = initialY - currentY;
    
            if (Math.abs(diffX) > Math.abs(diffY)) {
                // sliding horizontally
                if (diffX > 0) {
                    // swiped left
                    console.log("swiped left");
                    answer = false;
                    playAudio(allAudios[count].leftAudio);
                    //  console.log(answer);
                } else {
                    // swiped right
                    console.log("swiped right");
                    answer = true;
                    playAudio(allAudios[count].rightAudio);
                    //console.log(answer);
                }
            }
        }*/
})(NatureReloaded_Test1 || (NatureReloaded_Test1 = {}));
//# sourceMappingURL=natureReloaded_test1.js.map