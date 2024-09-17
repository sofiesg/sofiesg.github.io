// const myButton = document.querySelector("#my-button");
// console.log(myButton);

// myButton.addEventListener("click", myFunction);
// let clickCount = 0;
// const count = document.querySelector("#count");

// function myFunction() {
//   console.log("Hey did you just click me?");
//   //   clickCount = clickCount +1;
//   clickCount++;
//   count.textContent = clickCount;
// }

const boxContainer = document.querySelector(".box-container");
console.log(boxContainer);

const toggleButton = document.querySelector("#toggle-button");
console.log(toggleButton);
toggleButton.addEventListener("click", toggleMe);

function toggleMe() {
  console.log("toggle button is clicked");
  boxContainer.classList.toggle("row-reverse");
}

const addButton = document.querySelector("#add-button");
console.log(addButton);
addButton.addEventListener("click", addMe);

function addMe() {
  console.log("add button is clicked");
  boxContainer.innerHTML += `<div class="box purple-box"></div>
        <div class="box coral-box"></div>`;
}

// let toggleButton = document.querySelector("#toggle-button");
// toggleButton.addEventListener("click", toggleMe);
// let boxContainer = document.querySelector(".box-container");
// let outer = document.querySelector(".outer");
// let count = 0;
// function toggleMe() {
//   boxContainer.classList.toggle("row-reverse");
// }

// let addButton = document.querySelector("#add-button");
// addButton.addEventListener("click", addMe);

// let removeButton = document.querySelector("#remove-button");
// removeButton.addEventListener("click", removeMe);
// function addMe() {
//   // boxContainer.innerHTML += `<div class="box purple-box"></div>
//   //       <div class="box coral-box"></div>`;

//   if (count % 2 === 0) {
//     boxContainer.innerHTML += `<div class="box purple-box"></div>`;
//   } else {
//     boxContainer.innerHTML += `<div class="box coral-box"></div>`;
//   }
//   count++;
// }

// function removeMe() {
//   let lastBox = boxContainer.lastElementChild;
//   console.log(lastBox);
//   if (lastBox) {
//     lastBox.remove();
//   }
//   count--;
// }

// boxContainer.addEventListener("mouseenter", dropMe);
// boxContainer.addEventListener("mouseleave", pickMe);

// function dropMe() {
//   boxContainer.classList.add("drop");
//   boxContainer.classList.add("row-reverse");
// }

// function pickMe() {
//   boxContainer.classList.remove("drop");
//   boxContainer.classList.remove("row-reverse");
// }
