// ? function
// ? block of code which performs specific action
// ? code reuse
// ? single point of failure

// function add(x, y) {
//   let sum = x + y;

//   return sum;
// }

// const result = add(5, 7);
// console.log(result);

// ? arrow function

// const addNumbers = (num1, num2) => {
//   let sum = num1 + num2;

//   return sum;
// };

// const res = addNumbers(10, 20);
// console.log(res);

// ? WAF that calculates whether a number is odd or even

// const checkOddOrEven = (num) => {
//   let remainder = num % 2;

//   let result;

//   if (remainder === 0) {
//     result = "Even";
//   } else {
//     result = "Odd";
//   }

//   return result;
// };

// const res = checkOddOrEven(50);
// console.log(res);

// ? aesthetic
const checkOddOrEven = (num) => (num % 2 === 0 ? "Even" : "Odd");

const res = checkOddOrEven(11);
console.log(res);
