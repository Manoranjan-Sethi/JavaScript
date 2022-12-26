// 3. Find the average of largest and smallest numbers in an unsorted integer array?
// Eg.
// Input Case 1:
// input: [1, 4, 3, 2]
// output:  2.5
// solution : average = (1+4)/2 =>5/2 => 2.5

// input: [1, 4, 3, 4]
// output:  3
// solution : average = (1+4 +4)/3 =>9/3 => 3

function avgLarAndSmal(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  //   let maxArray = arr.filter((item) => item == max);
  let newArr = [];
  arr.forEach((item) => (item == max || item == min) && newArr.push(item));
  //   console.log(newArr);
  console.log(arr.reduce((a, b) => a + b) / arr.length);
}
avgLarAndSmal([1, 4, 3, 4]); //3
avgLarAndSmal([1, 4, 3, 2]); //2.5
