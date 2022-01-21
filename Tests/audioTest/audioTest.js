"use strict";
var audioTest;
(function (audioTest) {
    let audioTest1;
    let audioTest2;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        // audioTest = <HTMLAudioElement>document.querySelector("#audioTest");
        audioTest1 = new Audio("/audios/mixkit-arcade-retro-game-over-213.wav");
        audioTest2 = new Audio("/audios/mixkit-game-show-suspense-waiting-667.wav");
        let startbutton = document.createElement("button");
        let body = document.querySelector("body");
        body.append(startbutton);
        startbutton.innerText = "press";
        startbutton.addEventListener("click", playAudio);
    }
    function playAudio() {
        audioTest1.volume = 0.2;
        audioTest1.play();
        changeVolume();
    }
    function changeVolume() {
        audioTest2.play();
        audioTest1.volume += 0.7;
    }
})(audioTest || (audioTest = {}));
//# sourceMappingURL=audioTest.js.map