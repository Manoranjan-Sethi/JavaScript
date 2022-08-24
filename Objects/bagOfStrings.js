let str1 = "aabbcc";
let str2 = "abd";

var obj = {};
for (let i = 0; i < str1.length; i++) {
  if (obj[str1[i]] == undefined) {
    obj[str1[i]] = 1;
  } else {
    obj[str1[i]]++;
  }
}

let str = "";
for (let key in obj) {
  str = str + key;
  console.log(key, obj[key]);
  console.log(str);
}

if (str == str2) {
  console.log("Yes");
} else {
  console.log("No");
}

str1 = new Set(str1);
str = [...str1].join("");
console.log(str);
