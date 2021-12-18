
//print all the elements of the array

let item1 =["mango","banana","apples","orange"]
console.log(item1.length);

//make every item to uppercase
let item2 =[];
for (let i = 0; i < item1.length; i++){
  item2.push(item1[i].toUpperCase());
}
console.log(item2)