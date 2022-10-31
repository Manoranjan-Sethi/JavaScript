const arr = [1, 3, 4, 7, 9];

const result1 = arr.map((ele) => ele * 2);
console.log(result1); //map returns

const result2 = arr.forEach((val, i, arr) => (arr[i] = val * 2));
console.log(result2); // doesnt returns
console.log(arr); // changes the whole array
