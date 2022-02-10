
//printing array

function printArray(arr,i){
  if(i==arr.length){
    return;
  }
  console.log(arr[i]);
  printArray(arr,i+1);
 }

 arr = [7,8,3,4]
 i=0
 printArray(arr,i)



//factorial

function factorial(n){
  if(n==0 || n==1){
    return 1;
  }
  return n*factorial(n-1)
 }
 console.log(factorial(5))



 //sum of array elements

 function findSum(arr, n)
 {
    if (n <= 0){
     return 0;
    }
        
    return (findSum(arr, n - 1) + arr[n - 1]);
 }
 arr = [7,8,3,4];
 n = 4;
 console.log(findSum(arr, n))

 