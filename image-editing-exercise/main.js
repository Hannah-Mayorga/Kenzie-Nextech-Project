const theLaw = document.getElementById("thelaw");
const wah = document.getElementById("wah");
let myLeft = 0;
let myTop = 0;

document.body.addEventListener("keyup", evt => {
    switch (evt.key) {
        case "ArrowUp":
            myTop -= 50;
            theLaw.style.top = myTop + "px";
            wah.style.top = myTop + "px";
            break;
        case "ArrowDown":
            myTop += 50;
            theLaw.style.top = myTop + "px";
            wah.style.top = myTop + "px";


            break;
        case "ArrowLeft":
            myLeft -= 50;
            theLaw.style.left = myLeft + 10 + "px";
            wah.style.left = myLeft + "px";

            break;
        case "ArrowRight":
            myLeft += 50;
            theLaw.style.left = myLeft + 10 +  "px";
            wah.style.left = myLeft + "px";


            break;
    }
})
