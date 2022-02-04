namespace WaitforSwipe {



    window.addEventListener("load", handleLoad);

    let startButton: HTMLButtonElement;
    let prologue1Q: HTMLAudioElement = new Audio("prologue+question_placeh.ogg");
    let prologueAnswerYes: HTMLAudioElement = new Audio("prologue_answerYes_placeh.ogg");
    let prologueAnswerNo: HTMLAudioElement = new Audio("prologue_answerNo_placeh.ogg");
    let prologue2: HTMLAudioElement = new Audio("rest_of_prologue_placeh.ogg");
    let answer: boolean;

    let allAudios: HTMLAudioElement[] = [prologue1Q, prologueAnswerYes, prologueAnswerNo,
        prologue2];
    //start-coordinates of touch
    let initialX: any = null;
    let initialY: any = null;

    let playIcon: HTMLImageElement;
    let pauseIcon: HTMLImageElement;


    function handleLoad(): void {

        // let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        startButton = <HTMLButtonElement>document.querySelector("#startButton");
        startButton.addEventListener("click", playS1Prologue);
        playIcon = <HTMLImageElement>document.querySelector("#playIcon");
        pauseIcon = <HTMLImageElement>document.querySelector("#pauseIcon");

        pauseIcon.addEventListener("click", handlePlayPause);

        document.addEventListener("touchstart", startTouch, false);
        document.addEventListener("touchmove", handleTouchmove, false);
    
    }



    async function playS1Prologue(): Promise<void> {

        prologue1Q.play();
        prologue1Q.addEventListener("ended", vibrate);


        console.log("Hello there");
        let answer: boolean = await myPromiseGenerator();

        while (answer == undefined) {
            console.log("answer is undefined: ", answer);
            answer = await myPromiseGenerator();
        }

        console.log("answer: ", answer);

        if (answer == true) {
            prologueAnswerYes.play();
            console.log("audio answer yes");
            prologueAnswerYes.addEventListener("ended", function (): void {
                prologue2.play();
            });
        } else {
            prologueAnswerNo.play();
            console.log("audio answer no");
            prologueAnswerNo.addEventListener("ended", function (): void {
                prologue2.play();
            });
        }

        console.log("rest of prologue");
        prologue2.addEventListener("ended", playS2Hunting);
        console.log("End of prologue");

    }

    function playS2Hunting(): void {
        console.log("play S2Hunting");
    }

    async function myPromiseGenerator(): Promise<boolean> {

        return new Promise((resolve) => {
            document.addEventListener("touchend", function (e): void {
                resolve(answer);

            }, { once: true });
        });
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

    //gibt Koordinaten der ersten touchpoints wieder
    function startTouch(e: any): void {
        initialX = e.touches[0].clientX;
        initialY = e.touches[0].clientY;
        console.log(initialX, initialY, e.touches[0]);
    }

    function handleTouchmove(e: any): void {
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

    /*function endTouch(): boolean {
        // console.log(answer);
        return answer;
    }*/

    async function handlePlayPause(): Promise<void> {
        pauseIcon.style.display = "none";
        playIcon.style.display = "block";
        let clickPlay: boolean = false;

        for (let currentAudio of allAudios) {
            if (!currentAudio.paused) {
                console.log("currentAudio playing:", currentAudio);
                currentAudio.pause();
                clickPlay = await clickPlayPromise();
                console.log(clickPlay);
                if (clickPlay == true) {
                    console.log("continue ", currentAudio);
                    currentAudio.play();
                    pauseIcon.style.display = "block";
                    playIcon.style.display = "none";

                }
                console.log("continue ", currentAudio);
                currentAudio.play();
                pauseIcon.style.display = "block";
                playIcon.style.display = "none";


            } else {
                console.log("no audio playing right now");
            }
        }


    }

    async function clickPlayPromise(): Promise<boolean> {

        return new Promise((resolve) => {
            playIcon.addEventListener("click", function (e): void {
                resolve(true);

            }, { once: true });
        });
    }


}