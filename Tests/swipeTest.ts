namespace SwipeTest {

    // let answer: boolean = handleTouchmove(); zeigt dann an ob swipe up oder swipe down
    // mit der move großen move funktion zurückgeben - return

    window.addEventListener("load", handleLoad);


    function handleLoad(): void {

        document.addEventListener("touchstart", startTouch, false);
        document.addEventListener("touchmove", moveTouch, false);
        document.addEventListener("touchend", endTouch);

        vibrate();
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

    // Swipe Up / Down / Left / Right
    let initialX: any;
    let initialY: any;

    //gibt Koordinaten des touchpoints wieder
    function startTouch(e: any): void {
        initialX = e.touches[0].clientX;
        initialY = e.touches[0].clientY;
        console.log(initialX, initialY, e.touches[0]);
    }

    function moveTouch(e: any) {

        //   let currentX: any = e.touches[0].clientX;
        let currentY: any = e.touches[0].clientY;
        // let diffX: number = initialX - currentX;
        let diffY: number = initialY - currentY;

        // sliding vertically
        if (diffY > 0) {
            // swiped up
            console.log("swiped up");
        } else {
            // swiped down
            console.log("swiped down");
        }

        //  initialX = null;
        //  initialY = null;

        //e.preventDefault();

    }

    function endTouch(e: any){

     

        /* //  let endX: any = e.touches[0].clientX;
        let endY: any = e.touches[0].clientY;
        let answer: boolean = false;
        let diff: number = endY - initialY;

        if (diff > 0) {
            console.log("swipe up", answer);

        } else {
            console.log("swipe down", answer);
        }

        console.log(endY, diff);
        console.log("end of touch");*/

    
    }



}