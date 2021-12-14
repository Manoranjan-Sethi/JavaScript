//primitive vs reference types


//primitive type   (stored in stack memory)
let num1 = 7;           // creates seperate reference points in memory
let num2 = num1;        // if num1 is changed it wont affect num2
      

console.log("value of num1",num1);
console.log("value of num1",num2);
num1++;  //after increment 

console.log("value of num1",num1);
console.log("value of num1",num2);


//reference types     (stored in heap memory)
//array is a reference type

let array1 = ["item1","item2"];  //array1 is stored in stack having the pointer of the heap address
let array2 = array1;        //new array2 is created in stack having the same heap address as array1
console.log("array1",array1);
console.log("array2",array2);
array1.push("item3");  //after push

console.log("array1",array1);
console.log("array2",array2);