"use strict";
var WaitforSwipe;
(function (WaitforSwipe) {
    window.addEventListener("load", handleLoad);
    let startButton;
    let prologue1Q = new Audio("prologue+question_placeh.ogg");
    let prologueAnswerYes = new Audio("prologue_answerYes_placeh.ogg");
    let prologueAnswerNo = new Audio("prologue_answerNo_placeh.ogg");
    let prologue2 = new Audio("rest_of_prologue_placeh.ogg");
    let answer;
    //start-coordinates of touch
    let initialX = null;
    let initialY = null;
    function handleLoad() {
        // let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        startButton = document.querySelector("#startButton");
        startButton.addEventListener("click", playS1Prologue);
        //  playIcon.addEventListener("click", handlePlayPause);
        // pauseIcon.addEventListener("click", handlePlayPause);
        document.addEventListener("touchstart", startTouch, false);
        document.addEventListener("touchmove", handleTouchmove, false);
        document.addEventListener("touchend", endTouch);
        //answer = endTouch();
    }
    async function playS1Prologue() {
        prologue1Q.play();
        prologue1Q.addEventListener("ended", vibrate);
        while (true) {
            console.log("Hello there");
            let answer = await myPromiseGenerator();
            console.log(answer);
            if (answer == true) {
                prologueAnswerYes.play();
                console.log("audio answer yes");
                prologueAnswerYes.addEventListener("ended", function () {
                    prologue2.play();
                });
            }
            else {
                prologueAnswerNo.play();
                console.log("audio answer no");
                prologueAnswerNo.addEventListener("ended", function () {
                    prologue2.play();
                });
            }
            console.log("rest of prologue");
            prologue2.addEventListener("ended", playS2Hunting);
            console.log("End of prologue");
        }
    }
    async function myPromiseGenerator() {
        return new Promise((resolve) => {
            document.addEventListener("touchend", function (e) {
                resolve(answer);
            }, { once: true });
        });
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
        // console.log(answer);
        return answer;
    }
})(WaitforSwipe || (WaitforSwipe = {}));
//# sourceMappingURL=waitForSwipe.js.map