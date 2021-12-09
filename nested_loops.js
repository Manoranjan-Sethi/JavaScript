// For every outloop inner loop will itterate that many times

for(var i = 1; i <5;i++){
  console.log("outer loop",i);

  for(var j = 1; j <3;j++){
    console.log("inner loop",j);
  }
}

console.log("---------")

//Proper understanding
for(var i = 1; i <5;i++){
  for(var j = 1; j <3;j++){
    console.log("for outer loop",i,"inner loop",j,"runs");
  }
}
//
console.log("========");

var bag = "";
for(var i = 1; i<10;i++){
  bag = bag +i;
}
console.log(bag);  //print in a line