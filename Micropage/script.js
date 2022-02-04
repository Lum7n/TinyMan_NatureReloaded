"use strict";
var Tag_der_Medien;
(function (Tag_der_Medien) {
    window.addEventListener("load", handleLoad);
    let ideaButton;
    let conceptButton;
    let prototypButton;
    function handleLoad() {
        console.log("script");
        backgroundSize();
        ideaButton = document.getElementById("ideaButton");
        ideaButton.addEventListener("click", handleIdea);
        conceptButton = document.getElementById("conceptButton");
        conceptButton.addEventListener("click", handleConcept);
        prototypButton = document.getElementById("prototypButton");
        prototypButton.addEventListener("click", handlePrototyp);
    }
    function backgroundSize() {
        let mainContent = document.querySelector(".main");
        let heightContent = mainContent.offsetHeight;
        heightContent = heightContent + 150;
        console.log(heightContent);
        let css = ".block_1:after{ height: " + heightContent + "px }";
        console.log(css);
        let style = document.createElement("style");
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
    }
    function handleConcept() {
        console.log("Konzeption");
        let ideaDiv = document.querySelector(".idea");
        ideaDiv.style.display = "none";
        let conceptDiv = document.querySelector(".concept");
        conceptDiv.style.display = "block";
        let prototypDiv = document.querySelector(".prototyp");
        prototypDiv.style.display = "none";
    }
    function handlePrototyp() {
        console.log("Prototyp");
        let ideaDiv = document.querySelector(".idea");
        ideaDiv.style.display = "none";
        let conceptDiv = document.querySelector(".concept");
        conceptDiv.style.display = "none";
        let prototypDiv = document.querySelector(".prototyp");
        prototypDiv.style.display = "block";
    }
})(Tag_der_Medien || (Tag_der_Medien = {}));
//# sourceMappingURL=script.js.map