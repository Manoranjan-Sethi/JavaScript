//object

let obj1 = {
  name: "John",
};

let obj2 = obj1;
obj1.name = "Jolly";

console.log(obj2); //{ name: 'Jolly' }   as both objects share the same reference to the momery

//type

let a = 5;
let b = new Number(7); // b is a object

console.log(a == b); // false
console.log(a === b); // false

console.log([1, 2] == [1, 2]); // false
console.log([1, 2] === [1, 2]); // false

//concat

let sum = (a, b) => {
  return a + b;
};
console.log(sum(2, "4"));

//increment decrement

let count = 5;
console.log(count++); // returns 5 then gets incremented
// console.log(count); // so 6
console.log(++count); // 7 as added 1 before increment
console.log(count); // 7
