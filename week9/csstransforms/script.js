// since we are trying to control the ball first we need an access to it

const ball = document.querySelector(".ball")
console.log(ball)

// -------------------------------------------

// Let us access the outer box and check it's width
const outer = document.querySelector(".outer");
console.log(outer);
let outerWidth = outer.clientWidth / 2 -60;
console.log(outerWidth);

// let us work on the move or translate logic
const moveButton = document.querySelector("#move-button")
console.log(moveButton)
moveButton.addEventListener("click", moveBall);

let distance = 0;
function moveBall() {
    if (distance < outerWidth +30) {
        distance += 30;
        console.log(distance);
        transformBall();
        // ball.style.transform = `translateX(${distance}px)`
    }
    // distance += 30;
    // console.log(distance);
    // ball.style.transform = `translateX(${distance}px)`;
    // ball.style.transform = `translateX(${distance}px) translateY(${distance}px)`;
}

// let us work on the rotate logic
const rotateButton = document.querySelector("#rotate-button");
console.log(rotateButton);
rotateButton.addEventListener("click", rotateBall);

let angle = 0;
function rotateBall() {
    angle += 45;
    transformBall();
    // ball.style.transform = `rotate(${angle}deg)`
}

//---------------------------------------------------

// let us work on the scale logic

const scaleButton = document.querySelector("#scale-button");
console.log(scaleButton);
scaleButton.addEventListener("click", scaleBall);

let point = 1;
function scaleBall() {
    if (point > 0.22) {
        point -= 0.1;
        console.log(point);
        transformBall();
        // ball.style.transform = `scale(${point})`
    }
    // point -= 0.1;
    // ball.style.transform = `scale(${point})`
}

// le tus create an universal transform function
function transformBall() {
    ball.style.transform = `scale(${point}) rotate(${angle}deg) translateX(${distance}px)`;
}

// let us work on the reset logic
const resetButton = document.querySelector("#reset-button");
console.log(resetButton);
resetButton.addEventListener("click", resetBall);
function resetBall() {
    distance = 0;
    angle = 0;
    point = 1;
    transformBall();
}