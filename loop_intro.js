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

//continue
var f = 0;
while(f <10){

  if(f == 5){
    continue; 
  }
  console.log("QAZ",f);
  f++;
}


//