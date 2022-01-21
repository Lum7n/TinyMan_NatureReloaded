namespace NatureReloaded {

    window.addEventListener("load", handleLoad);



    let a: number = 0;
    let lastA: boolean = true;
    let answer: boolean;
    let atmoGreen: HTMLAudioElement = new Audio("/audios/mixkit-natural-ambience-with-flowing-water-and-birds-61.wav");
    let atmoRed: HTMLAudioElement = new Audio("/audios/mixkit-thunderstorm-in-the-forest-2396.wav");

    let startButton: HTMLButtonElement;
    let buttonTipp1: HTMLButtonElement;
    let buttonTipp2: HTMLButtonElement;
    let buttonWarning: HTMLButtonElement;
    let playIcon: HTMLImageElement;
    let pauseIcon: HTMLImageElement;


    function handleLoad(): void {

        startButton = <HTMLButtonElement>document.querySelector("#startButton");
        buttonTipp1 = <HTMLButtonElement>document.querySelector("#tipp1");
        buttonTipp2 = <HTMLButtonElement>document.querySelector("#tipp2");
        buttonWarning = <HTMLButtonElement>document.querySelector("#warning");
        playIcon = <HTMLImageElement>document.querySelector("#playIcon");
        pauseIcon = <HTMLImageElement>document.querySelector("#pauseIcon");

        startButton.addEventListener("click", startAudioBook);
        //  playIcon.addEventListener("click", handlePlayPause);
        pauseIcon.addEventListener("click", handlePlayPause);


    }

    function startAudioBook(): void {

        handleStart();
        playS1Prologue();


    }

    function handleStart(): void {
        startButton.style.display = "none";
        buttonTipp1.style.display = "block";
        buttonTipp1.addEventListener("click", hideTipp1);

        function hideTipp1(): void {
            buttonTipp1.style.display = "none";
            buttonTipp2.style.display = "block";
            buttonTipp2.addEventListener("click", hideTipp2);
        }

        function hideTipp2(): void {
            buttonTipp2.style.display = "none";
            buttonWarning.style.display = "block";
            buttonWarning.addEventListener("click", hideWarning);
        }

        function hideWarning(): void {
            buttonWarning.style.display = "none";
            pauseIcon.style.display = "block";

        }

    }

    function playS1Prologue(): void {
        atmoGreen.play();

        /*   let allaudio: HTMLCollectionOf<HTMLAudioElement> = document.getElementsByTagName("audio");
           console.log(allaudio);*/



    }


    function handlePlayPause(): void {
        pauseIcon.style.display = "none";
        playIcon.style.display = "block";
    }


}