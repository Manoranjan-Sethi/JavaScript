

let items =["mango","banana","apples","orange"]

for(let item of items) {
  console.log(item);
}
items.push("kiwi");
console.log(items);

for(let index in items) {
  console.log(index);
}

for(let index in items) {
  console.log(items[index]);
}