
//print first 3 elements

var items =["mango","banana","apples","orange"];

for(var i=0; i<items.length; i++){
  if(i==3){
    break;
  }
  console.log(items[i]);
}

console.log("-----------")

//remove 3rd element from array
var items1 =["rice","dal","oil","biscuit","fruits","vegetables"];
for(var i=0; i<items.length; i++){
  if(i==3){
    continue;
  }
  console.log(items1[i]);
}

console.log("-----------")

//print last 3 elements(optimised)
var items1 =["rice","dal","oil","biscuit","fruits","vegetables"];
var start = 0;

if(items1.length>=3){ 
  start = items1.length-3;
}
for(var i=start; i<items1.length; i++){              // if there are less than 3 elements, only this line will execute
   console.log(items1[i]);
}

//find the greatest element in an array
var num = [21,32,65,12,98,45];

var greatest_num = num[0];  // first we considered that my greatesrt number is at 0 index i.e. 21
for(var i=0; i<num.length; i++){

  if(greatest_num<num[i]){

    greatest_num = num[i];
  }
}
console.log(greatest_num);


//input- [1,1,1,2,2,3,3,3]
//output- [1,2,3]

let arr = [1,1,1,2,2,3,3,3];
var arr1 = [];
let flag = arr[0];
arr1.push(arr[0]);
for(var i=0; i<arr.length; i++){
  if(flag==arr[i]){
    continue;
  }
  arr1.push(arr[i]);
  flag = arr[i];
}
console.log(arr1);


//appear once

var arr = [3,5,3,3,8,5,6];
for(let i=0;i<n;i++){
  var count = 0;
  for(let j=1;j<n;j++){
    if(arr[j]==arr[i]){
      count++;
    }
  }
}


//Two Sum Problem
//brute force      TC-O(n^2)

let arr = [2,5,6,9,4];
let target = 10;

let bag ="";

for(let i=0; i<arr.length; i++){
  for(let j=i+1; j<arr.length; j++){
    if(arr[i]+arr[j]==target){
      bag+=i+" "+j;
    }
  }
}
console.log(bag);

//Optimisation in key-value with TC-O(n)

let arr = [2,5,6,9,4];
let target = 10;

let values = {};
for(let index1=0; index1<arr.length; index1++){
  let a = arr[index1];
  let b = target - a;
  let index2 = values[b];
  if(index2 != undefined){
    console.log(index2, index1);
  }else{
    values[a] = index1;
  }
}

// 2 Pointers
//works well with sorted arrays
let arr = [2,5,6,9,11];
let target = 20;

function twoSum(arr,target){
  let i = 0; 
  let j = arr.length-1;
  while(i<j){
    if(arr[i]+arr[j]==target){
      return {i,j}
    }else if(arr[i]+arr[j]>target){
      j--;
    }else{
      i++;
    }
  }
}
console.log(twoSum(arr,target))
