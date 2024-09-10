// console.log("Welcome to interactive media");
// // this is a comment
// // this is a nother comment
// let count = 10;
// console.log(count);
// // const name = prompt("what is your name");
// // console.log("Hello", name);
// const myName = "Sofie";
// const myCity = "Melbourne";
// console.log(myName, "lives in", myCity);

// count = 40;
// console.log(count);

// count = 20;
// console.log(count);

// // {
// //   let b = 30;
// //   console.log(b);
// // }

// // // console.log(b);

// // let countStudent = 30;¢

// let isItRaining = true;
// console.log(isItRaining);
// if (isItRaining === true) {
//   console.log("Please bring umbrella");
// } else {
//   console.log("no need for umbrella");
// }

// let isitOARTClass = true;
// console.log(isitOARTClass);

// let's do an object

// const studentRecord = {
//   name: "Sofie",
//   id: 1999,
//   class: "OART1013",
//   amIScienceStudent: false,
//   amIDesignStudent: true,
// };

// if (studentRecord.amIDesignStudent === true) {
//   console.log("welcome to class");
// } else {
//   console.log("sorry you are in the wrong class");
// }

// let myGrade = 90;
// if (myGrade >= 90) {
//   console.log("you got HD");
// } else if (myGrade < 90 && myGrade >= 70) {
//   console.log("you got D");
// } else if (myGrade < 70 && myGrade >= 50) {
//   console.log("you got C");
// } else if (myGrade < 50 && myGrade >= 30) {
//   console.log("you got P");
// } else {
//   console.log("you got F");
// }

// console.log(studentRecord.name);
// console.log(studentRecord.name, "is a", studentRecord.class, "student");
// console.log(`${studentRecord.name} is a ${studentRecord.class} student);

// let studentNames = ["Sofie", "Alice", "Balkis", "Ines"];

// console.log(studentNames);
// console.log(studentNames[4]);

// let numArray = [2, 5, 6, 8, 10];
// console.log(numArray);

console.log("Hello Sofie");
console.log("Hello Alice");
console.log("Hello Frank");
console.log("Hello Peter");
console.log("Hello Rob");

let names = ["Sofie", "Alice", "Frank", "Peter", "Rob", "Jenny", "Mike"];
console.log(names.length);
for (let i = 0; i < names.length; i++) {
  console.log("hello", names[i]);
}

/*
i = 0 , names.length = 7
i < 7 TRUE
hello names [0] => Sarah
i = 1

1 < 7 TRUE
hellos names[1] => Alice
i = 2

2 < 7 TRUE
hellos names[1] => Frank
i = 3

3 < 7 TRUE
hellos names[1] => Peter
i = 4

4 < 7 TRUE
hellos names[1] => Rob
i = 5


*/

let shoppingCart = [
  { name: "T-shirt", price: 20 },
  { name: "Jeans", price: 50 },
  { name: "Sneakers", price: 80 },
  { name: "Backpack", price: 30 },
  { name: "Sunglasses", price: 90 },
];

let total =
  shoppingCart[0].price +
  shoppingCart[1].price +
  shoppingCart[2].price +
  shoppingCart[3].price;

console.log("My shopping total", total);

let sum = 0;
for (let i = 0; i < shoppingCart.length; i++) {
  sum = sum + shoppingCart[i].price;
  console.log("Intermediate sum", sum);
}

console.log("My shopping sum", sum);

shoppingCart.forEach(calculateTotal);
sum = 0;
function calculateTotal(item) {
  sum = sum + item.price;
  console.log(item.price);
}

console.log("My shopping sum", sum);

function add() {
  let total = 4 + 5;
  return total;
}

let sum = add;
