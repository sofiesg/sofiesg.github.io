// since we are trying to control the ball first we need an access to it

const ball = document.querySelector(".ball")
console.log(ball)

// -------------------------------------------

// let us work on the move or translate logic
const moveButton = document.querySelector("#move-button")
console.log(moveButton)
moveButton.addEventListener("click", moveBall);

function moveBall()
{
    ball.style.transform = `translateX(50px)`;
}