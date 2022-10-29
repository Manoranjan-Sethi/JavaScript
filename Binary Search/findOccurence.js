// find Occurence = (last occurence - first occurence) + 1

let arr = [0, 2, 2, 3, 5, 5, 5, 7, 8, 9];
k = 5; //op - 3

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

function firstOccurence(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  let result = -1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] == k) {
      result = mid;
      high = mid - 1;
    } else if (arr[mid] < k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return result;
}

function findOccurrence(arr, k) {
  let first = firstOccurence(arr, k);
  let last = lastOccurence(arr, k);

  if (first == -1 || last == -1) {
    return 0;
  } else {
    return last - first + 1;
  }
}

console.log(findOccurrence(arr, k));
