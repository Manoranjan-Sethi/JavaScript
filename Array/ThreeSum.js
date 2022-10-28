let arr = [2, 6, 4, 1, 9, 17, 3, 5, 8];
t = 21;

function opt(arr, t) {
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    let j = i + 1;
    let k = arr.length - 1;

    while (j < k) {
      if (arr[i] + arr[j] + arr[k] == t) {
        return { i, j, k }; // after sort the postion is this
      } else if (arr[i] + arr[j] + arr[k] < t) {
        i++;
      } else {
        j--;
      }
    }
    return false;
  }
}

console.log(opt(arr, t));
