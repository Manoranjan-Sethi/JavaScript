//add an element at last index

//push will add the element at the end of the array

let fruits =["apple","orange","mango"];

//push
fruits.push("banana");
console.log(fruits);

//pop is used to remove the last element from the array
// pop
fruits.pop();
console.log(fruits.pop());  //pop can also be used as a return type
console.log(fruits);


// if we need to add elements at the starting of the array
//unshift
fruits.unshift("grapes");
console.log(fruits);

//shift removes the first element from the array
fruits.shift();  //also returns the element
console.log(fruits);


//push and pop are fast as compared shift and unshift
// why
// as shift and unshift need the elements to be shifted forward or backward as per 
// the requirements then perform the operation

