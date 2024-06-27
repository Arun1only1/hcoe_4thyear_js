// object destructure

// const studentDetail = {
//   name: "Sampada",
//   address: "Lalitpur",
//   isGraduated: true,
// };

// // destructure
// const { name, address, isGraduated } = studentDetail;

// console.log(
//   `My name is ${name} and I am from ${address}.
//   I am ${isGraduated ? "graduated" : "ungraduated"}.`
// );

// console.log(
//   `My name is ${studentDetail.name} and I am from ${studentDetail.address}.
//   I am ${studentDetail.isGraduated ? "graduated" : "ungraduated"}.`
// );

// const bottleDetail = {
//   name: "Water bottle",
//   brand: "Servewell",
//   price: 700,
//   color: "blue",
// };

// const name = "Ashish";

// renaming while destructure
// const { name: bottleName } = bottleDetail;

// console.log(bottleDetail.name);
// console.log(bottleName);

// ? nested object
// object inside object

// const studentDetail = {
//   firstName: "Abhishek",
//   lastName: "Panthi",
//   address: {
//     permanent: "Morang",
//     temporary: "Lalitpur",
//   },
// };

// const permanent = "A";

// ? destructure
// const {
//   firstName,
//   lastName,
//   address: { permanent: sthahiThegana, temporary },
// } = studentDetail;

// console.log(sthahiThegana);

// console.log(studentDetail.address.permanent);
// console.log(studentDetail["address"]["temporary"]);
// console.log(studentDetail.address["permanent"]);
// console.log(studentDetail["address"].temporary);
// studentDetail.address.permanent = "Arghakhachi";
// console.log(studentDetail);
