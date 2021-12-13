// loops


//while loop
var start = 0;
while(start <10){
  console.log("Jump",start);
  start ++;
}

//reverse while loop
var  i = 5;
while(i > 0){
  console.log("Hi",i);
  i--;
}

// break
var start = 0;
while(start <10){

  if(start==5){
    break;
  }

  console.log("Jump",start);
  start ++;
}
console.log("-----------");

//Prime Number
var num = 11;
var count = 0;

for(var i =1;i<=num;i++){
  if(num%i==0){
    count++;
  }
}
if(count==2){
  console.log(num,"Number is prime");
}
else{
  console.log(num,"Not-Prime");
}

//Divisibly by K

var max = 7;
var k = 2;
for(var i = 1;i<=max;i++){
  if(i%k==0){
    console.log(i);
  } 
}

//Divisibly by K II
var max = 7;
var k = 2;
var count = 0;
for(var i = 1;i<=max;i++){
  if(i%k==0){
    count= count+i;
  } 
}
console.log(count);

//Masai Divisors
var l = 1;
var r = 10;
var k = 3;

var count =0;
for(var i = l;i<=r;i++){
  if(i%k==0){
    count++;
  }
}
console.log(count);

//Find Sum of Multiples
var x = 3;
var k=10;
var y = 5;

var j=0;
var sum = 0;
for(var i =x;i<=k;i++){
  j= i*x;
  if(j%y==0){
    sum = sum+j;
  }
}
console.log(sum);

//Identify Prime
var num = 13;
var count = 0;
for(var i =1;i<=num;i++){
  if(num%i==0){
    count++;
  }
}
if(count==2){
  console.log("Prime Number");
}
else{
  console.log("Composite Number");
}


//reverse numbers
var num =1453;
num = num+"";
    var bag = "";
    for(var i=num.length-1 ; i>=0;i--){
        bag+=num[i];
    }
    console.log(bag);



