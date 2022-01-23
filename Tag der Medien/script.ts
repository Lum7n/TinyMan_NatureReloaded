namespace Tag_der_Medien {

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
    
        console.log("script");
        backgroundSize();

    }

    function backgroundSize(): void {

        let mainContent: HTMLElement = <HTMLElement>document.querySelector(".main");
        let heightContent: number = mainContent.offsetHeight;

        heightContent = heightContent + 180;
        console.log(heightContent);

        let css: string = ".block_1:after{ height: " + heightContent + "px }";
        console.log(css);

        let style: HTMLStyleElement = <HTMLStyleElement>document.createElement("style");

        style.appendChild(document.createTextNode(css));

        document.getElementsByTagName("head")[0].appendChild(style);
    }
}