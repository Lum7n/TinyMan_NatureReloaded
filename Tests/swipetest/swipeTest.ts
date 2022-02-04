namespace SwipeTest {

    // let answer: boolean = handleTouchmove(); zeigt dann an ob swipe up oder swipe down
    // mit der move großen move funktion zurückgeben - return
    let answer: boolean;
    let initialX: any = null;
    let initialY: any = null;
    let p: HTMLParagraphElement;

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {

        p = <HTMLParagraphElement>document.querySelector("#p");
        document.addEventListener("touchstart", startTouch, false);
        document.addEventListener("touchmove", moveTouch, false);
        document.addEventListener("touchend", endTouch);
    }


    //gibt Koordinaten des touchpoints wieder
    function startTouch(e: any): void {
        initialX = e.touches[0].clientX;
        initialY = e.touches[0].clientY;
        console.log(initialX, initialY, e.touches[0]);
    }

    function moveTouch(e: any): void {
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
        console.log("touchmove", answer);
    }


    function endTouch() {

        if (answer == true) {
            p.innerHTML = "swipe to the right; answer = " + answer.toString();
        } else if (answer == false) {
            p.innerHTML = "swipe to the left; answer = " + answer.toString();
        }


    }

}