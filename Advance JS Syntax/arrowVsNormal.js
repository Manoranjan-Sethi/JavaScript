//1. arguments objects

//normal function
function add(a, b) {
  console.log(arguments); //[Arguments] { '0': 2, '1': 8 }
  return a + b;
}

add(2, 8);

//arrow function

const sum = (a, b) => {
  console.log(arguments); // undefined
  return a + b;
};

sum(2, 8);

//2. this keyword

//normal function
var obj = {
  name: "Ana",
  print: function () {
    console.log(`My name is ${this.name}`); //My name is Ana
  },
};
obj.print();

//arrow function

var obj = {
  name: "Ana",
  print: () => {
    console.log(`My name is ${this.name}`); // undefined
  },
};
obj.print();

//3. implicit retun in arrow functions

//normal function
const amy = function () {
  700;
};
console.log(amy()); // undefined

//arrow function

const get = () => 188;
console.log(get()); //188
