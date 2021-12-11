var a = 5;
var b = 4;
var c = 13;

if(a>b && a>c){
  console.log("a is the greatest")
}
else if(b>a && b>c){
  console.log("b is the greatest")
}
else{
  console.log("c is the greatest")
}

//
  var num = 7;
  var k=2;
  var sum = 0;
  for(var i = 1;i<=num;i++){
    if(i % k == 0){
      sum = sum+i;
    }  
  }
  console.log(sum);
//
console.log("----------------------------------------------------------------")
var n = 3;
var k =10;
var y=5;
var p=0;
var s=0;
for(var i = 1;i<=k;i++){
    p= n*i;
    if(p%y==0){
      s=s+p;
    }
}
console.log(s);


//FrizzBuzz 
console.log("0000000");
var num =5;
for(var i =1;i<=num;i++){
  if(i%3==0 && i%5==0){
    
    console.log("FizzBuzz");
  }
  else if(i%3==0){
    console.log("Fizz");
  }
  else if(i%5==0){
    console.log("Buzz");
  }
  else{
    console.log(i);
  }
}

console.log("-----------");
//
var num1 = 4;
var num2 = 8;
var num3 = 5;
if(num1>num2){
  console.log(true);
}
else{
  console.log(false);
}
num1 = num1+num3;
if(num1>num2){
  console.log(true);
}
else{
  console.log(false);
}

console.log("==========")

//
var num1 = 4;
var num2 = 16;
if(num1>num2){
  console.log(true);
}
else{
  console.log(false);
}
if(num1<num2){
  console.log(true);
}
else{
  console.log(false);
}
if(num1==num2){
  console.log(true);
}
else{
  console.log(false);
}

console.log("--------");

// 

