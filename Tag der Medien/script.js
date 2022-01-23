"use strict";
var Tag_der_Medien;
(function (Tag_der_Medien) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        console.log("script");
        backgroundSize();
    }
    function backgroundSize() {
        let mainContent = document.querySelector(".main");
        let heightContent = mainContent.offsetHeight;
        heightContent = heightContent + 180;
        console.log(heightContent);
        let css = ".block_1:after{ height: " + heightContent + "px }";
        console.log(css);
        let style = document.createElement("style");
        style.appendChild(document.createTextNode(css));
        document.getElementsByTagName("head")[0].appendChild(style);
    }
})(Tag_der_Medien || (Tag_der_Medien = {}));
//# sourceMappingURL=script.js.map