namespace WaitforSwipe {



    window.addEventListener("load", handleLoad);

    let startButton: HTMLButtonElement;
    let prologue1Q: HTMLAudioElement = new Audio("prologue+question_placeh.ogg");
    let prologueAnswerYes: HTMLAudioElement = new Audio("prologue_answerYes_placeh.ogg");
    let prologueAnswerNo: HTMLAudioElement = new Audio("prologue_answerNo_placeh.ogg");
    let prologue2: HTMLAudioElement = new Audio("rest_of_prologue_placeh.ogg");
    let answer: boolean;
    //start-coordinates of touch
    let initialX: any = null;
    let initialY: any = null;

    function handleLoad(): void {

        // let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        startButton = <HTMLButtonElement>document.querySelector("#startButton");
        startButton.addEventListener("click", playS1Prologue);
        //  playIcon.addEventListener("click", handlePlayPause);
        // pauseIcon.addEventListener("click", handlePlayPause);

        document.addEventListener("touchstart", startTouch, false);
        document.addEventListener("touchmove", handleTouchmove, false);
        document.addEventListener("touchend", endTouch);
        //answer = endTouch();
    }



    async function playS1Prologue(): Promise<void> {

        prologue1Q.play();
        prologue1Q.addEventListener("ended", vibrate);

        while (true) {
            console.log("Hello there");
            let answer: boolean = await myPromiseGenerator();
            console.log(answer);

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

    function endTouch(): boolean {
        // console.log(answer);
        return answer;
    }


}