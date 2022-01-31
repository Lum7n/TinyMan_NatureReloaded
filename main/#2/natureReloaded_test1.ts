namespace NatureReloaded_Test1 {

    window.addEventListener("load", handleLoad);



    interface Audiodata {
        currentAudio: HTMLAudioElement;
        rightAudio: HTMLAudioElement;
        leftAudio: HTMLAudioElement;
    }

    let allAudios: Audiodata[] = [];
    //counter for array allAudios
    let count: number;

    //to count atmo-points
    let a: number = 0;
    //set last answer 
    let lastA: boolean = true;
    //swipe left = no/false, swipe right = yes/true
    let answer: boolean;

    //start-coordinates of touch
    let initialX: any = null;
    let initialY: any = null;

    //atmos
    let atmoGreen: HTMLAudioElement = new Audio("/audios/mixkit-natural-ambience-with-flowing-water-and-birds-61.wav");
    let atmoRed: HTMLAudioElement = new Audio("/audios/mixkit-thunderstorm-in-the-forest-2396.wav");

    //Start-Buttons
    let startButton: HTMLButtonElement;
    let buttonTipp1: HTMLButtonElement;
    let buttonTipp2: HTMLButtonElement;
    let buttonWarning: HTMLButtonElement;

    //Pause/Play-Imgs
    let playIcon: HTMLImageElement;
    let pauseIcon: HTMLImageElement;

    //all audio clips 



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

        count = 0;
        let audio: HTMLAudioElement = new Audio("pipa.mp3");
        let audioBoth: HTMLAudioElement = new Audio("dingsdum.mp3");
        let audiodata: Audiodata = {
            currentAudio: audio,
            rightAudio: audioBoth,
            leftAudio: audioBoth
        };
        allAudios.push(audiodata);

    }

    //Functions handling buttons before Audiobook
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
        startAudioBook(audio);
    }

    function playAudio(audio: HTMLAudioElement) {
        for (count = 0; count < allAudios.; count++) {
            const element = array[count];
            
        }
        audio.play();
        count++;
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
                playAudio(allAudios[count].leftAudio);
                //  console.log(answer);
            } else {
                // swiped right
                console.log("swiped right");
                answer = true;
                playAudio(allAudios[count].rightAudio);
                //console.log(answer);
            }
        }
    }


    /*
    
        interface Audiodata {
            currentAudio: HTMLAudioElement;
            rightAudio: HTMLAudioElement;
            leftAudio: HTMLAudioElement;
        }
    
        window.addEventListener("load", onLoad);
        let allAudios: Audiodata[] = [];
        let count: number;
    
        function onLoad(): void {
            count = 0;
            let audio: HTMLAudioElement = new Audio("pipa.mp3");
            let audioBoth: HTMLAudioElement = new Audio("dingsdum.mp3");
            let audiodata: Audiodata = {
                currentAudio: audio,
                rightAudio: audioBoth,
                leftAudio: audioBoth
            };
            allAudios.push(audiodata);
    
    
        }
    
        function playAudio(audio: HTMLAudioElement) {
            audio.play();
            count++;
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
                    playAudio(allAudios[count].leftAudio);
                    //  console.log(answer);
                } else {
                    // swiped right
                    console.log("swiped right");
                    answer = true;
                    playAudio(allAudios[count].rightAudio);
                    //console.log(answer);
                }
            }
        }*/




}

