"use strict";
var SwipeTest;
(function (SwipeTest) {
    // let answer: boolean = handleTouchmove(); zeigt dann an ob swipe up oder swipe down
    // mit der move großen move funktion zurückgeben - return
    let answer;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("touchstart", startTouch, false);
        document.addEventListener("touchmove", moveTouch, false);
        document.addEventListener("touchend", endTouch);
        answer = endTouch();
    }
    let initialX = null;
    let initialY = null;
    function vibrate() {
        if ("vibrate" in navigator) {
            console.log("Vibration supported");
        }
        else {
            // Vibration not supported
            console.log("Vibration not supported");
        }
        navigator.vibrate(1000);
    }
    //gibt Koordinaten des touchpoints wieder
    function startTouch(e) {
        initialX = e.touches[0].clientX;
        initialY = e.touches[0].clientY;
        console.log(initialX, initialY, e.touches[0]);
    }
    function moveTouch(e) {
        vibrate();
        let currentX = e.touches[0].clientX;
        let currentY = e.touches[0].clientY;
        let diffX = initialX - currentX;
        let diffY = initialY - currentY;
        if (Math.abs(diffX) > Math.abs(diffY)) {
            // sliding horizontally
            if (diffX > 0) {
                // swiped left
                console.log("swiped left");
                answer = false;
                //  console.log(answer);
            }
            else {
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
        console.log("endTOUCH", answer);
        return answer;
    }
    /*function myDisplayer(some: number): void {
        console.log(some);
    }

    function myCalculator(num1: number, num2: number, myCallback: CallableFunction): void {
        let sum: number = num1 + num2;
        myCallback(sum);
    }

    myCalculator(5, 5, myDisplayer);*/
})(SwipeTest || (SwipeTest = {}));
//# sourceMappingURL=swipeTest.js.map