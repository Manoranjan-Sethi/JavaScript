

//array splice

var array = [1,2,3,4,5,6,7,8,9,10];


//remove array from specific position
array.splice(3,4,11,23,45,76);
console.log(array);

// var a = array.concat([29,22,54,31]);
// console.log(a);



//array reduce
//find sum
let cost = [1,-2,-3,8];
//normal method
// let sum = 0;
// for (let i = 0; i < cost.length; i++){
//   sum = sum + cost[i];
// }
// console.log(sum);
//or
let sum = cost.reduce((a,b)=>a+b);
console.log(sum);

//find max element
let max = cost.reduce((a,b)=> a>b ? a:b);    // or b>a ? b:a
console.log(max);