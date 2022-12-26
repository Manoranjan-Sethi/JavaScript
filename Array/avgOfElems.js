// Find the counts of elements of an unsorted integer array which are equal to the average of all elements of that array.
// Ex:
// Input Case 1:
// input: [2,2,2,2,2]
// output:  5
// solution : 2+ 2+ 2+ 2+ 2 = 10/5 ==> 2
// it contain five 2 element

// Input Case 2:
// input: [ 1,3,2,4,5]
// output:  1
// solution : 1+ 3+ 2+ 4+ 5 = 15/5 ==> 3
// it contain one 3 element

function countElem(arr) {
  let sum = arr.reduce((a, b) => a + b);
  let avg = sum / arr.length;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === avg) {
      count++;
    }
  }

  return count;
}

console.log(countElem([2, 2, 2, 2, 2]));
console.log(countElem([1, 3, 2, 4, 5]));
