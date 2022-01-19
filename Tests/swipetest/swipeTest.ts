namespace SwipeTest {

    // let answer: boolean = handleTouchmove(); zeigt dann an ob swipe up oder swipe down
    // mit der move großen move funktion zurückgeben - return
    let answer: boolean;
    window.addEventListener("load", handleLoad);


    function handleLoad(): void {

        document.addEventListener("touchstart", startTouch, false);
        document.addEventListener("touchmove", moveTouch, false);
        document.addEventListener("touchend", endTouch);
        answer = endTouch();



    }


    let initialX: any = null;
    let initialY: any = null;

    function vibrate(): void {
        if ("vibrate" in navigator) {
            console.log("Vibration supported");
        } else {
            // Vibration not supported
            console.log("Vibration not supported");
        }
        navigator.vibrate(1000);
    }



    //gibt Koordinaten des touchpoints wieder
    function startTouch(e: any): void {
        initialX = e.touches[0].clientX;
        initialY = e.touches[0].clientY;
        console.log(initialX, initialY, e.touches[0]);
    }

    function moveTouch(e: any): void {

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
            /*  } else {
                  // sliding vertically
                  if (diffY > 0) {
                      // swiped up
                      console.log("swiped up");
                  } else {
                      // swiped down
                      console.log("swiped down");
                  }
              }*/
        }



    }


    function endTouch(): boolean {

        console.log(answer);
        return answer;

    }

}