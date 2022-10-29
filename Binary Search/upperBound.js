//first index of the number in the array greater than k

let arr = [0, 2, 4, 4, 5, 5, 7, 7, 9, 10];
k = 7; // op-2

function upperBound(arr, k) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] == k) {
      low = mid + 1;
    } else if (arr[mid] < k) {
      low = mid + 1;
    } else {
      result = mid;
      high = mid - 1;
    }
  }
  return result;
}

console.log(upperBound(arr, k));
