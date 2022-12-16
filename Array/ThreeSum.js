let arr = [-4, 1, 3, -2, -1];
sum = 0;

function opt(arr, sum) {
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    let j = i + 1;
    let k = arr.length - 1;

    while (j < k) {
      if (arr[i] + arr[j] + arr[k] == sum) {
        console.log(arr[i], arr[j], arr[k]);
        return;
      } else if (arr[i] + arr[j] + arr[k] < sum) {
        i++;
      } else {
        j--;
      }
    }
    console.log(false);
    return;
  }
}

opt(arr, sum);
