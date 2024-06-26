// object
// ? primary data types are
// ? string, number, boolean, null,undefined

// ? non-primary/ complex data type
// ? object

// ? in js => object means key value pair

// ? key is also called property or field

// const countryDetail = {
//   name: "Nepal",
//   population: "3 crore",
//   isDeveloping: true,
// };

// console.log(countryDetail, typeof countryDetail);

//  `` ; : "" '' / \  ||

// ? student 1
// let studentName = "Anish";
// let studentAddress = "Ktm";
// let age2 = 21;

// let student1 = {
//   name: "Anish",
//   address: "Ktm",
//   age: 21,
// };

// ? student 2
// let studentName2 = "Sahil";
// let studentAddress2 = "Bkt";
// let age = 22;

// let student2 = {
//   name: "Sahil",
//   address: "Bkt",
//   age: 22,
// };

// ? CRUD
// ? Create/ Add
// ? Read/ Retrieve
// ? Update/Edit
// ? Delete/ Remove

// let studentDetail = {
//   firstName: "Stuti",
//   lastName: "Upreti",
// };

// * to access values
// ? 1.dot operator
// ? 2.square operator

// ? delete operation
// delete studentDetail.lastName;
// console.log(studentDetail);

// ? update operation
// ? upsert => update or  insert
// studentDetail["firstName"] = "Raj";
// console.log(studentDetail);

// ? add operation
// studentDetail.isGraduated = false;
// studentDetail["address"] = "Pkr";

// console.log(studentDetail);

// ? read operation
// console.log(studentDetail.firstName);
// console.log(studentDetail["lastName"]);

// 2.Create an object named myHouseDetails and add following properties
// numberOfRooms
// numberOfMembers
// colorOfHouse
// builtYear
// numberOfStorey

// A.Delete numberOfMembers property
// B.Update numberOfRooms by new value
// C.Add a  new property called estimatedPriceOfHouse
// D.Print out all properties on the console like “I have a green coloured house        with 9 rooms where 10 people are  living. The house is 3 storey and was built in 2011 with an estimated budget of 2 crores.”

const myHouseDetails = {
  numberOfRooms: 7,
  numberOfMembers: 4,
  color: "green",
  builtYear: 2000,
  numberOfStorey: 3,
};

// delete numberOfMembers
// delete myHouseDetails.numberOfMembers;

// myHouseDetails.numberOfRooms = myHouseDetails.numberOfRooms + 2;
// myHouseDetails.numberOfRooms += 2;

// myHouseDetails.estimatedPrice = "3 crore";

// console.log(myHouseDetails);

// console.log(`I have a ${myHouseDetails.color} colored house.`);
