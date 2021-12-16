
//print first 3 elements

var items =["mango","banana","apples","orange"];

for(var i=0; i<items.length; i++){
  if(i==3){
    break;
  }
  console.log(items[i]);
}

console.log("-----------")

//remove 3rd element from array
var items1 =["rice","dal","oil","biscuit","fruits","vegetables"];
for(var i=0; i<items.length; i++){
  if(i==3){
    continue;
  }
  console.log(items1[i]);
}

console.log("-----------")

//print last 3 elements(optimised)
var items1 =["rice","dal","oil","biscuit","fruits","vegetables"];
var start = 0;

if(items1.length>=3){ 
  start = items1.length-3;
}
for(var i=start; i<items1.length; i++){              // if there are less than 3 elements, only this line will execute
   console.log(items1[i]);
}

//find the greatest element in an array
var num = [21,32,65,12,98,45];

var greatest_num = num[0];  // first we considered that my greatesrt number is at 0 index i.e. 21
for(var i=0; i<num.length; i++){

  if(greatest_num<num[i]){

    greatest_num = num[i];
  }
}
console.log(greatest_num);