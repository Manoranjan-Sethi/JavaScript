function swap(arr,a,b){
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
}

function selectionSort(arr){
  for(let i=0;i<arr.length-1;i++){
    var min = i;
    for(let j=i+1; j<arr.length; j++){
      if(arr[min]>arr[j]){
        min=j;
      }
    }
    swap(arr,min,i)
  }
  return arr;
}
console.log(selectionSort([5,2,4,1,2,0,8,3]))
