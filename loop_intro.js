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
var num = 1;
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