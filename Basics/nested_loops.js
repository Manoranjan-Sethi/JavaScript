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

//
console.log("---------")


//square printing
var num=5;
for(var i = 1;i<=num;i++){
  var s="";
  for(var j = 1;j<=num;j++){
      s=s+j+" ";
  }
  console.log(s);
}
console.log("------------")
// //Question
// // Print all the numbers in the range from [1, N*N], as shown in the problem statement, such that there areNnumbers on each line
// //input(N)= 4          
// // output = 1 2 3 4 
//             5 6 7 8 
//             9 10 11 12 
//             13 14 15 16 
// or
// input = 3
// output = 1 2 3
//          4 5 6
//          7 8 9

var N=4;
var c = 1;
    for(var i = 0;i<N;i++){
        let s = "";
        for(var j = 0;j<N;j++){
            s = s+c+" ";
            c++;
        }
        console.log(s);
    }



//pattern1

// *                      in row 1, 1 column is present
// * *                    in row 2, 2 column is present
// * * *
// * * * *
// * * * * *

var num =4;
for(var row = 1 ; row <= num ; row++){      //for every row run the column 
  for(var column = 1 ; column <= row ; column++){ //  number of cloumns for every row = the row number
    process.stdout.write("* ");
  }
console.log(); // for next line
}

//pattern2

// *****
// *****
// *****
// *****
// *****

var num =5;
for(var row = 1 ; row <= num ; row++){      //for every row run the column 
  for(var column = 1 ; column <= num ; column++){ 
    process.stdout.write("* ");
  }
console.log(); // for next line
}

//pattern3

// * * * * *
// * * * *
// * * *
// * *  
// * 

var num =5;
for(var row = 1 ; row <= num ; row++){      //for every row run the column 
  for(var column = 1 ; column <= num+1-row ; column++){
    process.stdout.write("* ");
  }
console.log(); // for next line
}

//pattern4

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

var num =5;
for(var row = 1 ; row <= num ; row++){      //for every row run the column 
  for(var column = 1 ; column <= row ; column++){ // 
    process.stdout.write(column+" ");
  }
console.log(); // for next line
}

