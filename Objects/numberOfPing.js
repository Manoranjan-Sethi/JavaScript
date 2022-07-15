let str = "pgigpinn".split("");
let tar = "ping".split("");
let obj1 = {};
let obj2 = {};

// for (let i = 0; i < tar.length; i++) {
//   var count = 0;
//   for (let j = 0; j < str.length; j++) {
//     if (tar[i] == str[j]) {
//       count++;
//     }
//   }
//   obj[tar[i]] = count;
// }
// console.log(count);

let min = -Infinity;
str.map((e) => (!obj1[e] ? (obj1[e] = 1) : obj1[e]++));
tar.map((e) => (!obj2[e] ? (obj2[e] = 1) : obj2[e]++));
for (key in obj1) {
  var count = 0;
  for (key in obj2) {
    if (obj1[key] == obj2[key]) {
      count++;
    }
  }
}
console.log(count);
