//segretate 0s and 1s

let arr = [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0];

function segretate(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    while (arr[i] == 0 && i < j) {
      i++;
    }
    while (arr[j] == 1 && i < j) {
      j--;
    }
    if (i < j) {
      arr[i] = 0;
      arr[j] = 1;
      i++;
      j--;
    }
  }
  return arr;
}
console.log(segretate(arr));
