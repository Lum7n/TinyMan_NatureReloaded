namespace SwipeTest {

    window.addEventListener("load", handleLoad);

   
    function handleLoad():void{

        var container: Element = <Element>document.querySelector("body");

        container.addEventListener("touchstart", startTouch, false);
        container.addEventListener("touchmove", moveTouch, false);
    

    }

    // Swipe Up / Down / Left / Right
    var initialX: any = null;
    var initialY: any = null;

    function startTouch(e: any) {
        initialX = e.touches[0].clientX;
        initialY = e.touches[0].clientY;
    };

    function moveTouch(e: any) {
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

        if (Math.abs(diffX) > Math.abs(diffY)) {
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
        }

        initialX = null;
        initialY = null;

        e.preventDefault();

    }
};