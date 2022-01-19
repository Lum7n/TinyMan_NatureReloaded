"use strict";
var audioTest;
(function (audioTest_1) {
    let audioTest;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        audioTest = document.querySelector("#audioTest");
        let startbutton = document.createElement("button");
        let body = document.querySelector("body");
        body.append(startbutton);
        startbutton.innerText = "press";
        startbutton.addEventListener("click", playAudio);
    }
    function playAudio() {
        audioTest.volume = 0.2;
        audioTest.play();
        changeVolume();
    }
    function changeVolume() {
        audioTest.volume += 0.7;
    }
})(audioTest || (audioTest = {}));
//# sourceMappingURL=audioTest.js.map