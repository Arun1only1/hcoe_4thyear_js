// ? map , filter, find, forEach

// ? loop

// const numList = [5, 10, 15, 20];

// ? map
// ? works as loop
// ? returns new array
// ? to change content of array
// ? original array size is always equals to returned array size

// const newNumList = numList.map((item, index, array) => {
//   let newNumber = item + 2;

//   return newNumber;
// });

// console.log(newNumList);

// const userList = ["Abhishek", "Sahil", "Roney", "Sugam"];

// const newUserList = userList.map((item, index, array) => {
//   if (item === "Roney") {
//     return "Prakriti";
//   }

//   return item;
// });

// console.log(newUserList);

// const productList = [
//   {
//     name: "Orange",
//     price: 200,
//   },
//   {
//     name: "Mango",
//     price: 120,
//   },
//   {
//     name: "Avocado",
//     price: 400,
//   },
//   {
//     name: "Apple",
//     price: 300,
//   },
// ];

// ? 1. Increase price of each product by 20
// const newProductList = productList.map((item, index, array) => {
//   const newPrice = item.price + 20;

//   item.price = newPrice;

//   return item;
// });

// console.log(newProductList);
// ? 2. Increase price of products by 10% for which original price is less than 250
// const newProductList = productList.map((item, index, array) => {
//   if (item.price < 250) {
//     let newPrice = item.price + (1 / 10) * item.price;

//     item.price = newPrice;
//   }

//   return item;
// });

// console.log(newProductList);

// ? 3. Decrease price of Mango by 25 due to high production

// const newProductList = productList.map((item, index, array) => {
//   if (item.name === "Mango") {
//     let newPrice = item.price - 25;

//     item.price = newPrice;
//   }

//   return item;
// });

// console.log(newProductList);

// ? filter
// ? removes item from array
// ? returns new array
// ? high chance that original array size not equal to returned array size

// const numList = [10, 0, -10, 11, -25, 55, -75];
// ? remove all negative values

// const newNumList = numList.filter((item, index, array) => {
//   if (item > 0) {
//     return item;
//   }
// });

// const newNumList = numList.filter((item, index, array) => {
//   return item > 0;
// });

// const newNumList = numList.filter((item) => item > 0);

// console.log(newNumList);

// const productList = [
//   {
//     name: "Orange",
//     price: 200,
//   },
//   {
//     name: "Mango",
//     price: 120,
//   },
//   {
//     name: "Avocado",
//     price: 400,
//   },
//   {
//     name: "Apple",
//     price: 300,
//   },
// ];

// ? get all fruits whose price is below 250

// const newProductList = productList.filter((item, index, array) => {
//   return item.price < 250;
// });

// const newProductList = productList.filter((item) => item.price < 250);

// const newProductList = productList.filter((item, index, array) => {
//   if (item.price < 250) {
//     return item;
//   }
// });

// console.log(newProductList);

// ? find
// ? returns first item which matches condition

// const numList = [55, 45, 80, 75, 95, 100];

// const matchedItem = numList.find((item, index, array) => {
//   console.log(item);
//   if (item > 70) {
//     return item;
//   }
// });

// console.log(matchedItem);

// ? forEach
// const numList = [55, 45, 80, 75, 95, 100];

// numList.forEach((item, index, array) => {
//   console.log(item);
// });
