//array destructuring

let array = ["12","45"]

// make 2 variable store value1 in first variable and store value2 in second variable
//long process

let myvar1 = array[0];
let myvar2 = array[1];
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);

//short process  for array destructuring
let [myvar3,myvar4] = array;
console.log("value of myvar1", myvar3);
console.log("value of myvar2", myvar4);