"use strict";
var Micropage;
(function (Micropage) {
    window.addEventListener("load", handleLoad);
    let ideaButton;
    let conceptButton;
    let prototypButton;
    let style = document.createElement("style");
    let soundOn = false;
    let positiveAtmo = new Audio("./Assets/Idee/Atmo_positiv.wav");
    let negativeAtmo = new Audio("./Assets/Idee/Atmo_negativ.wav");
    function handleLoad() {
        console.log("script");
        backgroundSize();
        ideaButton = document.getElementById("ideaButton");
        ideaButton.addEventListener("click", handleIdea);
        conceptButton = document.getElementById("conceptButton");
        conceptButton.addEventListener("click", handleConcept);
        prototypButton = document.getElementById("prototypButton");
        prototypButton.addEventListener("click", handlePrototyp);
        let speakerLeftI = document.getElementById("speakerLeft_i");
        speakerLeftI.addEventListener("click", playPositiveAtmo);
        let speakerRightI = document.getElementById("speakerRight_i");
        speakerRightI.addEventListener("click", playNegativeAtmo);
        let speakerLeftC = document.getElementById("speakerLeft_c");
        speakerLeftC.addEventListener("click", playPositiveAtmo);
        let speakerRightC = document.getElementById("speakerRight_c");
        speakerRightC.addEventListener("click", playNegativeAtmo);
    }
    function backgroundSize() {
        let mainContent = document.querySelector(".main");
        let heightContent = mainContent.offsetHeight;
        let widthContent = mainContent.offsetWidth;
        let reiterDiv = document.querySelector(".reiter");
        let reiterWidth = reiterDiv.offsetWidth;
        console.log("reiterW= " + reiterWidth);
        console.log("w = " + widthContent);
        let num = widthContent - reiterWidth;
        num = num / 2;
        reiterDiv.style.paddingLeft = num + "px";
        reiterDiv.style.paddingRight = num + "px";
        heightContent = heightContent + 150;
        console.log("h = " + heightContent);
        let css = ".block_1:after{ height: " + heightContent + "px }";
        console.log(css);
        style.appendChild(document.createTextNode(css));
        document.getElementsByTagName("head")[0].appendChild(style);
    }
    function handleIdea() {
        console.log("Idee");
        let ideaDiv = document.querySelector(".idea");
        ideaDiv.style.display = "block";
        let conceptDiv = document.querySelector(".concept");
        conceptDiv.style.display = "none";
        let prototypDiv = document.querySelector(".prototyp");
        prototypDiv.style.display = "none";
        backgroundSize();
    }
    function handleConcept() {
        console.log("Konzeption");
        let ideaDiv = document.querySelector(".idea");
        ideaDiv.style.display = "none";
        let conceptDiv = document.querySelector(".concept");
        conceptDiv.style.display = "block";
        let prototypDiv = document.querySelector(".prototyp");
        prototypDiv.style.display = "none";
        backgroundSize();
    }
    function handlePrototyp() {
        console.log("Prototyp");
        let ideaDiv = document.querySelector(".idea");
        ideaDiv.style.display = "none";
        let conceptDiv = document.querySelector(".concept");
        conceptDiv.style.display = "none";
        let prototypDiv = document.querySelector(".prototyp");
        prototypDiv.style.display = "block";
        backgroundSize();
    }
    function playPositiveAtmo() {
        console.log("Heile Welt!" + soundOn);
        if (!soundOn) {
            console.log("text");
            positiveAtmo.play();
            soundOn = true;
        }
        else {
            positiveAtmo.pause();
            negativeAtmo.pause();
            soundOn = false;
        }
    }
    function playNegativeAtmo() {
        console.log("Zerstörte Natur!");
        if (!soundOn) {
            negativeAtmo.play();
            soundOn = true;
        }
        else {
            positiveAtmo.pause();
            negativeAtmo.pause();
            soundOn = false;
        }
    }
})(Micropage || (Micropage = {}));
//# sourceMappingURL=script.js.map