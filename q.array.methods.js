// ? push,pop,shift,unshift,includes

const print = (values) => {
  console.log(values);
};

// const nations = ["Nepal", "India", "China", "Canada", "USA"];

// console.log(nations, typeof nations);

// ? push => adds values to end of array
// ? syntax :
// ? push(item)
// ? push(item1, item2,...)

// nations.push("Brasil", "Argentina");
// nations.push("Chile");
// console.log(nations);

// ? pop => removes last item from array
// syntax
// pop()

// nations.pop();
// nations.pop();

// console.log(nations);

// ? unshift => adds item to starting of array
// nations.unshift("Italy");
// nations.unshift("France", "UK");
// console.log(nations);

// ? shift => removes first item from array

// nations.shift();

// print(nations);

// ? reverse

// const numList = [1, 2, 3, 4, 5];

// numList.reverse();

// console.log(numList);

// ? slice  => to get a slice of array
// ? returns new array
// ? start index is included
// ? end index is excluded

// const animalList = ["camel", "dog", "cat", "bison", "yak"];

// const newAnimalList = animalList.slice(1);
// const newAnimalList = animalList.slice(1, 4);
// console.log(newAnimalList);

// ? splice => changes original array

const dayList = ["Sunday", "Saturday", "Wednesday", "Friday"];
// dayList.splice(1, 0, "Monday");
dayList.splice(1, 1, "Monday", "Tuesday");
console.log(dayList);
