namespace audioTest {

    let audioTest1: HTMLAudioElement;
    let audioTest2: HTMLAudioElement;


    window.addEventListener("load", handleLoad);


    function handleLoad(): void {

        // audioTest = <HTMLAudioElement>document.querySelector("#audioTest");
        audioTest1 = new Audio("/audios/mixkit-arcade-retro-game-over-213.wav");
        audioTest2 = new Audio("/audios/mixkit-game-show-suspense-waiting-667.wav");
        let startbutton: HTMLButtonElement = document.createElement("button");
        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        body.append(startbutton);
        startbutton.innerText = "press";
        startbutton.addEventListener("click", playAudio);
    }

    function playAudio(): void {
        audioTest1.volume = 0.2;
        audioTest1.play();
        changeVolume();
    }

    function changeVolume(): void {
        audioTest2.play();
        audioTest1.volume += 0.7;
    }



}