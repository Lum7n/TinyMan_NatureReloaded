"use strict";
var Tag_der_Medien;
(function (Tag_der_Medien) {
    window.addEventListener("load", handleLoad);
    let ideaButton;
    let conceptButton;
    let prototypButton;
    let style = document.createElement("style");
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
        heightContent = heightContent + 150;
        console.log(heightContent);
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
        console.log("Heile Welt!");
        // let positiveAtmo: HTMLAudioElement = new Audio("./audios/prologue+question_placeh.ogg");
        // positiveAtmo.play();
    }
    function playNegativeAtmo() {
        console.log("Zerstörte Natur!");
        // let negativeAtmo: HTMLAudioElement = new Audio("./audios/prologue+question_placeh.ogg");
        // negativeAtmo.play();
    }
})(Tag_der_Medien || (Tag_der_Medien = {}));
//# sourceMappingURL=script.js.map