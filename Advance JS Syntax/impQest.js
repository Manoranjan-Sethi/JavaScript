//object

let obj1 = {
  name: "John",
};

let obj2 = obj1;
obj1.name = "Jolly";

console.log(obj2); //{ name: 'Jolly' }   as both objects share the same reference to the momery

//type

let a = 5;
let b = new Number(5); // b is a object

console.log(a == b); // true
console.log(a === b); // false

console.log([1, 2] == [1, 2]); // false
console.log([1, 2] === [1, 2]); // false

//concat

let sum = (a, b) => {
  return a + b;
};
console.log(sum(2, "4")); //24

//increment decrement

let count = 5;
console.log(count++); // returns 5 then gets incremented
// console.log(count); // so 6
console.log(++count); // 7 as added 1 before increment
console.log(count); // 7

//call and bind

const name = {
  name: "Himansu",
};
function greet(welcome) {
  return `${welcome} ${this.name}`;
}

console.log(greet.call(name, "Hello"));
console.log(greet.bind(name, "Hello")()); //as it takes a whole function so we need to use the ()to call the function again

//type

function call() {
  return (() => 1)();
}

console.error(typeof call()); //number

console.error(typeof typeof 1); // as the typeof 1 is number and type of number is string

//array

let arr = [1, 4, 7];
arr[9] = 5;
console.error(arr); //[ 1, 4, 7, <6 empty items>, 5 ]

// Hoisting

console.log(a); //undefined
var am = 5;

console.log(b); //Cannot access 'a' before initialization
let be = 5;

//array reverse

let str = "aldfe";
let atr = str.split("").reverse().join("");
console.log(atr);

//rest opertator
//rest with array
function add(a, b, c, ...args) {
  console.log(args);
  return a + b + c + args[0] + args[1];
}

var ans = add(1, 4, 7, 2, 8);
console.log(ans);

//rest with object
var students = {
  name: "akash",
  age: "23",
  hobbies: ["singing", "dancing"],
};
const { age, ...ans } = students;
console.log(ans);
console.log(students);
//spread operator

let aq = [1, 2, 3];
let bq = [4, 5, 6];
let c = [...aq, ...bq];
console.log(c);

var at = 9;
function test() {
  console.log(a);
  var at = 6;
}
test(); //undefined

x(); // due to hoisting x is undefined and gives  x is not a function
var x = function () {
  console.log("Hello world");
};

const obj1 = {
  a: "Mano",
  b: {
    a: "Arpit",
    getName: function () {
      return this.a;
    },
  },
};
console.log(obj1.b.getName()); // Arpit
console.log(obj1.b.getName.call(obj1)); //Mano

function foo() {
  function bar() {
    return 3;
  }
  return bar();
  function bar() {
    //as both the function bar name is common so bar gets overwritten
    return 8;
  }
}
// alert(foo());
console.log(foo()); //8

var y = false - true;
console.log(y); // -1
var z = "1" - 1; // var z = 1 - "1"
console.log(z); // 0
var qw = true && "abc";
console.log(qw); // abc
