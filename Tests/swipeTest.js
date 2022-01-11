"use strict";
var SwipeTest;
(function (SwipeTest) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        // var container: Element = <Element>document.querySelector("body");
        document.addEventListener("touchstart", startTouch, false);
        document.addEventListener("touchmove", moveTouch, false);
    }
    // Swipe Up / Down / Left / Right
    var initialX = null;
    var initialY = null;
    function startTouch(e) {
        initialX = e.touches[0].clientX;
        initialY = e.touches[0].clientY;
    }
    ;
    function moveTouch(e) {
        console.log("sth touched wow");
        if (initialX === null) {
            return;
        }
        if (initialY === null) {
            return;
        }
        var currentX = e.touches[0].clientX;
        var currentY = e.touches[0].clientY;
        var diffX = initialX - currentX;
        var diffY = initialY - currentY;
        /*  if (Math.abs(diffX) > Math.abs(diffY)) {
              // sliding horizontally
              if (diffX > 0) {
                  // swiped left
                  console.log("swiped left");
              } else {
                  // swiped right
                  console.log("swiped right");
              }
          } else {
              // sliding vertically
              if (diffY > 0) {
                  // swiped up
                  console.log("swiped up");
              } else {
                  // swiped down
                  console.log("swiped down");
              }
          }*/
        // sliding vertically
        if (diffY > 0) {
            // swiped up
            console.log("swiped up");
        }
        else {
            // swiped down
            console.log("swiped down");
        }
        initialX = null;
        initialY = null;
        //  e.preventDefault();
    }
})(SwipeTest || (SwipeTest = {}));
//# sourceMappingURL=swipeTest.js.map