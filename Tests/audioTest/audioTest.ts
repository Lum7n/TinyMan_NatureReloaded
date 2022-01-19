namespace audioTest {

    let audioTest: HTMLAudioElement;
    
    
    window.addEventListener("load", handleLoad);


    function handleLoad(): void {

        audioTest = <HTMLAudioElement>document.querySelector("#audioTest");
        let startbutton: HTMLButtonElement = document.createElement("button");
        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        body.append(startbutton);
        startbutton.innerText = "press";
        startbutton.addEventListener("click", playAudio);


    }

    function playAudio(): void {

        audioTest.volume = 0.2;
        audioTest.play();
        changeVolume();
    }

    function changeVolume(): void {

        audioTest.volume += 0.7;
    }



}