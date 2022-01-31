namespace NatureReloaded {

    window.addEventListener("load", handleLoad);



    let a: number = 0;
    let lastA: boolean = true;
    let answer: boolean;
    let initialX: any = null;
    let initialY: any = null;

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

        startButton.addEventListener("click", handleStart);
        //  playIcon.addEventListener("click", handlePlayPause);
        //  pauseIcon.addEventListener("click", handlePlayPause);


        document.addEventListener("touchstart", startTouch, false);
        document.addEventListener("touchmove", handleTouchmove, false);
        document.addEventListener("touchend", endTouch);
        answer = endTouch();


    }

    function handleStart(): void {
        startButton.style.display = "none";
        buttonTipp1.style.display = "block";
        buttonTipp1.addEventListener("click", hideTipp1);
        console.log("Ende Funktion handleStart");
    }

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
        startAudioBook();
    }




    function startAudioBook(): void {
        playS1Prologue();
        //  playS2Hunting();
        // console.log("Ende Start audiobook");
    }

    function playS1Prologue(): void {
        console.log("start Prologue");
        // play prologue and ask question
        //vibrate();
        // handleTouch();
        atmoGreen.play();
        atmoGreen.addEventListener("ended",handleTouch);

       /* console.log("play prologue ans ask question");
        // vibrate();
        answer = endTouch();
        if (answer == true) {
            //play audio clip for answer yes 
            console.log("audio answer yes");
        } else {
            //play audio clip for answer no
            console.log("audio answer no");
        }
        //play rest of prologue
        console.log("rest of prologue");
        //atmoGreen.addEventListener("ended", playS2Hunting);
        console.log("Ende S1");*/

    }

    function handleTouch(){

    }



    //gibt Koordinaten des touchpoints wieder
    function startTouch(e: any): void {
        initialX = e.touches[0].clientX;
        initialY = e.touches[0].clientY;
        console.log(initialX, initialY, e.touches[0]);
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
                //  console.log(answer);
            } else {
                // swiped right
                console.log("swiped right");
                answer = true;
                //console.log(answer);
            }
        }
    }

    function endTouch(): boolean {
        console.log(answer);
        return answer;
    }




    function vibrate(): void {
        if ("vibrate" in navigator) {
            console.log("Vibration supported");
        } else {
            // Vibration not supported
            console.log("Vibration not supported");
        }
        navigator.vibrate(1000);
    }





    /*function playS2Hunting(): void {

       atmoRed.play();

       console.log("Ende S2");

   }


   function handlePlayPause(): void {
       pauseIcon.style.display = "none";
       playIcon.style.display = "block";
   }*/


}