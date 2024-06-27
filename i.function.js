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
// const checkOddOrEven = (num) => (num % 2 === 0 ? "Even" : "Odd");

// const res = checkOddOrEven(11);
// console.log(res);

// ? WAF which accepts n as argument and
// ? prints whether the number is divisible by 5

const divideBy5 = (n) => {
  let remainder = n % 5;

  if (remainder === 0) {
    console.log("divisible by 5");
  } else {
    console.log("non-divisible by 5");
  }
};

divideBy5(25);

// ? add numbers upto n

// const getSum = (num) => {
//   let sum = 0;

//   for (let i = 1; i <= num; i++) {
//     sum = sum + i;
//   }

//   return sum;
// };

// const res = getSum(10);
// console.log(res);
