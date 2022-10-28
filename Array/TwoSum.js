// Two Sum

// Brute Force

let arr = [1, 5, 9, 2, 7, 8];
k = 17;

function brute(arr, k) {
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == k) {
        return true;
      }
    }
  }
  return false;
}

console.log(brute(arr, k));

function opt(arr, k) {
  arr = arr.sort((a, b) => a - b);

  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] + arr[j] == k) {
      return [i, j]; // after sort the postion is this
    } else if (arr[i] + arr[j] < k) {
      i++;
    } else {
      j--;
    }
  }
  return false;
}

console.log(opt(arr, k));
