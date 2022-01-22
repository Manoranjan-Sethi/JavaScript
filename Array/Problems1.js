
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


for(let i=0; i<arr.length-1; i++){
  for(let j=i+1; j<arr.length; j++){
    if(arr[i]+arr[j]==target){
      console.log(i,j);
    }
  }
}


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
      break;
    }else if(arr[i]+arr[j]>target){
      j--;
    }else{
      i++;
    }
  }
  console.log(i,j);
}
twoSum(arr,target)

//sum of Arrays
// input
// 5
// 1 2 3 4 5

// output
// 1 3 6 10 15 

// index - 0->{1 = 1}
// index - 1->{1 + 2 = 3}
// index - 2->{1 + 2 + 3 = 6}
// index - 3->{1 + 2 + 3 + 4 = 10}
// index - 4->{1 + 2 + 3 + 4 + 5 = 15}

var arr = [1,2,3,4,5]
var sum = 0;

for(let i=1; i<arr.length; i++){
    arr[i]=arr[i]+arr[i-1];
}
console.log(arr.join(" "));


// reverse array
// input
// [1,2,3,4,5]

// output
// [5,4,3,2,1]

let arr = [1,2,3,4,5]
let revArr = [];       //this is taking some extra space

let i = arr.length-1;
while(i>=0){
    revArr.push(arr[i])
    i--;
}
console.log(revArr)


//without taking extra space
//we need to swap the digits by taking 2 pointers

function swap(arr,a,b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    return arr;
}

function reverseArr(arr){
    let i = 0;
    let j = arr.length-1;
    while(i<j){
        swap(arr,i,j);
        i++;
        j--;
    }
    return arr;
}
console.log(reverseArr([1,2,3,4,5]))


//Rotate the array K times

// input
// [1,2,3,4,5]
// k = 2
// output
// [4,5,1,2,3]


//Brute Force
//TC-O(n) SC-O(n)
let arr = [1,2,3,4,5];
k = 2 //rotate
N = 5 //size of arr

let newArr = []
for(let i = N-k; i<N; i++){
  newArr.push(arr[i])
}
for(let i = 0; i<N-k; i++){
  newArr.push(arr[i])
}
console.log(newArr)


//optimisation
//TC-O(n) SC-O(1)
function swap(arr,a,b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    return arr;
}

function reverseArr(arr,start,end){
    left = start;
    right = end;
    while(left < right){
        swap(arr,left,right);              
        left++;
        right--;
    }
    return arr;
}
arr = [1,2,3,4,5];
K = 7;  //times which we have to rotate
N = 5;  //size of array

K = K % N; //2


reverseArr(arr,0,N-1)  //reverse the whole array  //[5 4 3 2 1]
reverseArr(arr,0,K-1)  //[4,5]
reverseArr(arr,K,N-1)  // [1,2,3]
console.log(arr)


//alternative way to rotate
  
arr = [1,2,3,4,5];
K = 7;  //times which we have to rotate
N = 5;  //size of array

K = K % N; //2

for(i=0;i<K;i++){
    arr.unshift(arr.pop())
}
console.log(arr)


//sliding window

//find the sum of all the subarray of a size

//size = 3
//input - [1,2,3,4,2,1,7,5,3]

//brute force TC-O(NxK)
arr = [1,2,3,4,5];
k = 3;
N = 5;

for(let i=0; i<=N-k; i++){
  let sum = 0;
  for(let j=i; j<i+k; j++){
    sum+=arr[j];
  }
  console.log(sum)
}

//optimisation  TC-O(N)
arr = [1,2,3,4,5];
k = 3;
N = 5;

function takeOutMax(arr,k){
  let sum = 0;
  let max = 0;
  for(let i=0; i<k; i++){
    sum = sum+arr[i]
  }
  if(sum>max){
    max = sum;
  }
  for(let i=k; i<N; i++){
    sum = sum + arr[i];
    sum = sum - arr[i-k];
    if(sum>max){
      max = sum;
    }
  }
  return max;
}
console.log(takeOutMax(arr,k))

//all the elements of size k
let arr = [1,3,2,5,1];
N = 5; 
x = 2;   //slide length 
for(let i=0; i<=N-x; i++){
  var bag = "";
  for(let j=i; j<i+x; j++){
    bag += arr[j];
  }
  console.log(bag);
}
