namespace NatureReloaded {

    window.addEventListener("load", handleLoad);

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
    let atmoGreen: HTMLAudioElement = new Audio("./audios/mixkit-natural-ambience-with-flowing-water-and-birds-61.wav");
    let atmoRed: HTMLAudioElement = new Audio("./audios/mixkit-thunderstorm-in-the-forest-2396.wav");

    //all audio clips 
    let prologue1Q: HTMLAudioElement = new Audio("./audios/prologue+question_placeh.ogg");
    let prologueAnswerYes: HTMLAudioElement = new Audio("./audios/prologue_answerYes_placeh.ogg");
    let prologueAnswerNo: HTMLAudioElement = new Audio("./audios/prologue_answerNo_placeh.ogg");
    let prologue2: HTMLAudioElement = new Audio("./audios/rest_of_prologue_placeh.ogg");

    let scene2Q: HTMLAudioElement = new Audio("./audios/scene2+question_placeh.ogg");
    let scene2AnswerYes: HTMLAudioElement = new Audio("./audios/scene2_answerYes_placeh.ogg");
    let scene2AnswerNo: HTMLAudioElement = new Audio("./audios/scene2_answerNo_placeh.ogg");

    let scene3Q1: HTMLAudioElement = new Audio("./audios/scene3+question1_placeh.ogg");
    let scene3PositiveVQ2: HTMLAudioElement = new Audio("./audios/scene3_positiveArguments_placeh.ogg");
    let scene3NegativeVQ2: HTMLAudioElement = new Audio("./audios/scene3_negativeArguments_placeh.ogg");
    let scene3BothVQ2: HTMLAudioElement = new Audio("./audios/scene3_neutralArguments_placeh.ogg");
    let scene3AnswerYes: HTMLAudioElement = new Audio("./audios/scene3_answerYes_placeh.ogg");
    let scene3AnswerNo: HTMLAudioElement = new Audio("./audios/scene3_answerNo_placeh.ogg");

    let scene4PositiveV: HTMLAudioElement = new Audio("./audios/scene4_positiveSide_placeh.ogg");
    let scene4NegativeV: HTMLAudioElement = new Audio("./audios/scene4_negativeSide_placeh.ogg");

    //  let allAudio: HTMLCollectionOf<HTMLAudioElement>;
    let userTouched: boolean = false;

    //Start-Buttons
    let startButton: HTMLButtonElement;
    let buttonTipp1: HTMLButtonElement;
    let buttonTipp2: HTMLButtonElement;
    let buttonWarning: HTMLButtonElement;

    //Pause/Play-Imgs
    let playIcon: HTMLImageElement;
    let pauseIcon: HTMLImageElement;



    function handleLoad(): void {

        // let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        startButton = <HTMLButtonElement>document.querySelector("#startButton");
        buttonTipp1 = <HTMLButtonElement>document.querySelector("#tipp1");
        buttonTipp2 = <HTMLButtonElement>document.querySelector("#tipp2");
        buttonWarning = <HTMLButtonElement>document.querySelector("#warning");
        playIcon = <HTMLImageElement>document.querySelector("#playIcon");
        pauseIcon = <HTMLImageElement>document.querySelector("#pauseIcon");

        startButton.addEventListener("click", handleStart);
        //  playIcon.addEventListener("click", handlePlayPause);
        // pauseIcon.addEventListener("click", handlePlayPause);

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

        playS1Prologue();
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

        return new Promise((resolve, request) => {
            document.addEventListener("touchend", function (e): void {
                resolve(answer);

            }, { once: true });
        });
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
        console.log(answer);
        return answer;
    }

    function changeAtmo(): void {
        if (lastA == true) {
            atmoGreen.volume += 0.1;
            atmoRed.volume -= 0.1;
        } else {
            atmoGreen.volume += 0.1;
            atmoRed.volume -= 0.1;
        }
    }

    //make phone vibrate 
    function vibrate(): void {
        if ("vibrate" in navigator) {
            console.log("Vibration supported");
        } else {
            // Vibration not supported
            console.log("Vibration not supported");
        }
        navigator.vibrate(1000);
    }

    /*   function handlePlayPause(): void {
           allAudio = document.getElementsByTagName("audio");
           console.log(allAudio);
           pauseIcon.style.display = "none";
           playIcon.style.display = "block";
   
       }*/

    /*  function playS2Hunting(): void {
      atmoGreen.play();
      atmoGreen.volume = 0.5;
      atmoRed.play();
      atmoRed.volume = 0.5;
 
      scene2Q.play();
 
      //somehow wait for swipe of user
 
      answer = endTouch(); //?
 
      if (answer == true) {
          scene2AnswerYes.play();
          a += 1;
          lastA = true;
          console.log("audio answer yes", a, lastA);
          changeAtmo();
          scene2AnswerYes.addEventListener("ended", playS3SafeEnergy);
 
      } else {
          scene2AnswerNo.play();
          a -= 1;
          lastA = false;
          console.log("audio answer no", a, lastA);
          changeAtmo();
          scene2AnswerNo.addEventListener("ended", playS3SafeEnergy);
      }
  }
 
  function playS3SafeEnergy(): void {
 
      scene3Q1.play();
 
      //somehow wait for swipe of user
 
      answer = endTouch(); //?
 
      if (answer == true) {
          a += 1;
          lastA = true;
          changeAtmo();
      } else {
          a -= 1;
          lastA = false;
          changeAtmo();
      }
 
 
      if (a < 0) {
          scene3NegativeVQ2.play();
      } else if (a > 0) {
          scene3PositiveVQ2.play();
      } else {
          scene3BothVQ2.play();
      }
 
      //somehow wait for swipe of user
 
      answer = endTouch(); //?
 
      if (answer == true) {
          scene3AnswerYes.play();
          a -= 1;
          lastA = false;
          console.log("audio answer yes", a, lastA);
          changeAtmo();
          scene3AnswerYes.addEventListener("ended", playS4Cutscene);
 
      } else {
          scene3AnswerNo.play();
          a += 1;
          lastA = true;
          console.log("audio answer no", a, lastA);
          changeAtmo();
          scene3AnswerNo.addEventListener("ended", playS4Cutscene);
      }
  }
 
  function playS4Cutscene(): void {
      if (a > 0) {
          scene4PositiveV.play();
      }
      else if (a < 0) {
          scene4NegativeV.play();
      } else {
          if (lastA == true) {
              scene4PositiveV.play();
          } else {
              scene4NegativeV.play();
          }
      }
  }*/


}