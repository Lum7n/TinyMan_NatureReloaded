namespace Micropage {

    window.addEventListener("load", handleLoad);

    let ideaButton: HTMLButtonElement;
    let conceptButton: HTMLButtonElement;
    let prototypButton: HTMLButtonElement;

    let style: HTMLStyleElement = <HTMLStyleElement>document.createElement("style");

    let soundOn: boolean = false;
    let positiveAtmo: HTMLAudioElement = new Audio("./Assets/Idee/Atmo_positiv.wav");
    let negativeAtmo: HTMLAudioElement = new Audio("./Assets/Idee/Atmo_negativ.wav");

    function handleLoad(): void {
    
        console.log("script");
        backgroundSize();

        ideaButton = <HTMLButtonElement>document.getElementById("ideaButton");
        ideaButton.addEventListener("click", handleIdea);

        conceptButton = <HTMLButtonElement>document.getElementById("conceptButton");
        conceptButton.addEventListener("click", handleConcept);

        prototypButton = <HTMLButtonElement>document.getElementById("prototypButton");
        prototypButton.addEventListener("click", handlePrototyp);

        let speakerLeftI: HTMLImageElement = <HTMLImageElement>document.getElementById("speakerLeft_i");
        speakerLeftI.addEventListener("click", playPositiveAtmo);

        let speakerRightI: HTMLImageElement = <HTMLImageElement>document.getElementById("speakerRight_i");
        speakerRightI.addEventListener("click", playNegativeAtmo);
        
        let speakerLeftC: HTMLImageElement = <HTMLImageElement>document.getElementById("speakerLeft_c");
        speakerLeftC.addEventListener("click", playPositiveAtmo);

        let speakerRightC: HTMLImageElement = <HTMLImageElement>document.getElementById("speakerRight_c");
        speakerRightC.addEventListener("click", playNegativeAtmo);
    }

    function backgroundSize(): void {

        let mainContent: HTMLElement = <HTMLElement>document.querySelector(".main");
        let heightContent: number = mainContent.offsetHeight;

        let widthContent: number = mainContent.offsetWidth;

        let reiterDiv: HTMLDivElement = <HTMLDivElement>document.querySelector(".reiter")
        let reiterWidth: number = reiterDiv.offsetWidth;

        console.log("reiterW= " + reiterWidth);
        console.log("w = " + widthContent);

        let num: number = widthContent - reiterWidth;
        num = num / 2;

        reiterDiv.style.paddingLeft = num + "px";
        reiterDiv.style.paddingRight = num + "px";

        heightContent = heightContent + 150;
        console.log("h = " + heightContent);

        let css: string = ".block_1:after{ height: " + heightContent + "px }";
        console.log(css);

        style.appendChild(document.createTextNode(css));

        document.getElementsByTagName("head")[0].appendChild(style);
    }

    function handleIdea(): void {
        console.log("Idee");

        let ideaDiv: HTMLDivElement = <HTMLDivElement>document.querySelector(".idea");
        ideaDiv.style.display = "block";

        let conceptDiv: HTMLDivElement = <HTMLDivElement>document.querySelector(".concept");
        conceptDiv.style.display = "none";

        let prototypDiv: HTMLDivElement = <HTMLDivElement>document.querySelector(".prototyp");
        prototypDiv.style.display = "none";

        backgroundSize();
    }

    function handleConcept(): void {
        console.log("Konzeption");

        let ideaDiv: HTMLDivElement = <HTMLDivElement>document.querySelector(".idea");
        ideaDiv.style.display = "none";

        let conceptDiv: HTMLDivElement = <HTMLDivElement>document.querySelector(".concept");
        conceptDiv.style.display = "block";

        let prototypDiv: HTMLDivElement = <HTMLDivElement>document.querySelector(".prototyp");
        prototypDiv.style.display = "none";

        backgroundSize();
    }

    function handlePrototyp(): void {
        console.log("Prototyp");

        let ideaDiv: HTMLDivElement = <HTMLDivElement>document.querySelector(".idea");
        ideaDiv.style.display = "none";

        let conceptDiv: HTMLDivElement = <HTMLDivElement>document.querySelector(".concept");
        conceptDiv.style.display = "none";

        let prototypDiv: HTMLDivElement = <HTMLDivElement>document.querySelector(".prototyp");
        prototypDiv.style.display = "block";

        backgroundSize();
    }

    function playPositiveAtmo(): void {
        console.log("Heile Welt!" + soundOn);

        if (!soundOn) {

            console.log("text")
            positiveAtmo.play();
            soundOn = true; 

        } else {

            positiveAtmo.pause();
            negativeAtmo.pause();
            soundOn = false;
        }
    }

    function playNegativeAtmo(): void {
        console.log("Zerstörte Natur!");

        if (!soundOn) {

            negativeAtmo.play();
            soundOn = true; 

        } else {

            positiveAtmo.pause();
            negativeAtmo.pause();
            soundOn = false;
        }
    }
}