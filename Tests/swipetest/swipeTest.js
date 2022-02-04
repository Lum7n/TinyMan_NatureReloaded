"use strict";
var SwipeTest;
(function (SwipeTest) {
    // let answer: boolean = handleTouchmove(); zeigt dann an ob swipe up oder swipe down
    // mit der move großen move funktion zurückgeben - return
    let answer;
    let initialX = null;
    let initialY = null;
    let p;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        p = document.querySelector("#p");
        document.addEventListener("touchstart", startTouch, false);
        document.addEventListener("touchmove", moveTouch, false);
        document.addEventListener("touchend", endTouch);
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
        console.log("touchmove", answer);
    }
    function endTouch() {
        if (answer == true) {
            p.innerHTML = "swipe to the right; answer = " + answer.toString();
        }
        else if (answer == false) {
            p.innerHTML = "swipe to the left; answer = " + answer.toString();
        }
    }
})(SwipeTest || (SwipeTest = {}));
//# sourceMappingURL=swipeTest.js.map