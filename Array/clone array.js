// how to clone array elements

let array1 = ["item1","item2"]; 

//way-1 to clone array elements
let array2 = array1.slice(0);
console.log(array2);

//way-2 to clone array elements
let array3 = [].concat(array1);
console.log(array3);

//way-3 to clone array elements
//using spread operator
let array4 = [...array1];
console.log(array4);

//clone array1 and add 2 more elements to array
let array5 = array1.slice(0).concat(["item3","item4"]);
console.log(array5);

