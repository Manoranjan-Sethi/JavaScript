//last occurence of a number

let arr = [0, 2, 2, 3, 5, 5, 5, 7, 8, 9];
k = 5; //op - 6

function lastOccurence(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  let result = -1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] == k) {
      result = mid;
      low = mid + 1;
    } else if (arr[mid] < k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return result;
}

console.log(lastOccurence(arr, k));
