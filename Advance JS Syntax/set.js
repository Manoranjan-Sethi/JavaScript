var str = "aaddeerrf";
str = str.split("");
console.log(str);
var set = [...new Set(str)].join("");
console.log(set);
