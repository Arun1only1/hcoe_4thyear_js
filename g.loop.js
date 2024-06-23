// ? loop => repetition
// ? to run same code for multiple times

// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");

// ? syntax
// for (initial_value;condition;increment/decrement){
// some code here
// }

// for (let i = 1; i <= 5; i = i + 1) {
//   console.log(i);
// }

// ? infinite loop
// for (let i = 1; i <= 5; i = i - 1) {
//   console.log(i);
// }

// ? check if a number is prime or not

// let num = 20;
// let isPrime = true;

// for (let i = 2; i < num; i++) {
//   let remainder = num % i;

//   if (remainder === 0) {
//     isPrime = false;
//     break;
//   }
// }

// console.log(isPrime ? "Prime" : "Composite");

//? while

// ? syntax

// initial value
// while (condition) {
// some code here
// increment/decrement
// }

// ? WAP to print values from 100 to 50
// let i = 100;

// while (i >= 50) {
//   console.log(i);

//   i--;
// }

// ? WAP to print values from 20 to 30 using do ..while

// ? syntax

// initial_value

// do{
// some code here

// increment/decrement
// }while(condition)

let i = 20;

do {
  console.log(i);

  i++;
} while (i <= 30);
