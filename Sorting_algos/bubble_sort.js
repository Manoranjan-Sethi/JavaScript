function swap(arr,a,b){
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
}

function bubbleSort(arr){
  for(let i=0; i<arr.length-1; i++){
    for(let j=0; j<arr.length-i-1; j++){
      if(arr[j]>arr[j+1]){
        swap(arr,j,j+1)
      }
    }
  }
  return arr;
}

console.log(bubbleSort([8,5,3,2,1,0,4]))

var $a = 4;
console.log("4"/"2");

let a ;
let b=4;
let x= a??b
console.log(x)


let i=0;
do{
  console.log(i);
  i++
}while(i>3)
