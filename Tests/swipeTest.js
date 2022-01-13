"use strict";
var SwipeTest;
(function (SwipeTest) {
    // let answer: boolean = handleTouchmove(); zeigt dann an ob swipe up oder swipe down
    // mit der move großen move funktion zurückgeben - return
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("touchstart", startTouch, false);
        document.addEventListener("touchmove", moveTouch, false);
        document.addEventListener("touchend", endTouch);
        vibrate();
    }
    let answer = false;
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
    }
    function endTouch(e) {
        console.log(answer);
    }
})(SwipeTest || (SwipeTest = {}));
//# sourceMappingURL=swipeTest.js.map