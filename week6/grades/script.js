function checkGrade() {
  const a1 = document.querySelector("#answer1");
  console.log(a1.value);
  const a2 = document.querySelector("#answer2");
  console.log(a2.value);
  //   let total = parseFloat(a1.value) + parseFloat(a2.value);
  let a1Value = parseFloat(a1.value);
  let a2Value = parseFloat(a2.value);
  let sum = calculateTotal(a1Value, a2Value);
  console.log("sum is", sum);
  sendReport(sum);
}

function calculateTotal(a, b) {
  let total = a + b;
  return total;
}

function sendReport(score) {
  if (score > 20) {
    console.log("you got HD");
  } else if (score > 20 && score <= 30) {
    console.log("you got a D");
  }
}

// const para = document.querySelector("p");
// console.log(para);

// const allPara = document.querySelectorAll("p");
// console.log(allPara);

const h1 = document.querySelector("h1");
console.log(h1);
console.log(h1.textContent);
h1.classList.add("red-style");

// h1.textContent = "This is a new heading";

const question1 = document.querySelector("#question1");
console.log(question1.textContent);
question1.classList.add("red-style");
question1.classList.add("blue-style");
question1.classList.remove("blue-style");

// question1.textContent = "What is as1 score?";

// question2.textContent = "What is as2 score?"

// console.log(question1.textContent);

// const question1 = document.querySelector("#question1")

// const allAbcd = document.querySelectorAll(".abcd");
// console.log(allAbcd);

// function checkGrade() {
//   const a1 = document.querySelector("#answer1");
//   const a1Value = parseFloat(a1.value); // Convert to number
//   console.log(a1Value);

//   const a2 = document.querySelector("#answer2");
//   const a2Value = parseFloat(a2.value); // Convert to number
//   console.log(a2Value);

//   const total = calculateTotal(a1Value, a2Value);
//   console.log(total);
//   reportBackGrade(total);
//   // a1.value = "";
// }

// function calculateTotal(a, b) {
//   return a + b;
// }

// function reportBackGrade(score) {
//   let report = document.querySelector("#report");
//   report.innerHTML = "";
//   if (score > 30) {
//     report.innerHTML = `You scored <span class="grade">High Distinction </span>!!!`;
//   } else if (score > 20 && score <= 30) {
//     report.innerHTML = `You scored <span class="grade">Distinction </span>!!!`;
//   } else if (score > 10 && score <= 20) {
//     report.innerHTML = `You scored <span class="grade">Passing marks </span>!!!`;
//   } else {
//     report.innerHTML = `Sorry, you <span class="fgrade">failed </span>!!!`;
//   }
// }
