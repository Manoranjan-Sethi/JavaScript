//multi dimensional array

var a = [[1,2,3],
         [4,5,6],
         [7,8,9]];

console.log(a);

console.log(a.length);



//pushing items into multi-dimensional array

var items = [];

var fruits = ["mango","banana","apples",["onion1","onion2"]];
var gross = ["rice","dal","sugar"];

items.push(fruits);
items.push(gross);
console.log(items);


//accessing elements from multi-dimensional array

var infos = [
  ["Rajesh",23,"male"],
  ["Roja",32,"female"],
];

console.log(infos[0][0]); //Rajesh
console.log(infos[1][0]);  //Roja

console.log(infos[0][2]); //male
console.log(infos[1][2]); //female


var infos = [
  ["Rajesh",23,"male",["singing","simping"]],
  ["Roja",32,"female",["dancing","reading"]],
];

console.log(infos)
console.log(infos[0][3][0]);   //singing
console.log(infos[1][3][1]);   //reading

console.log(infos[0][3][1][5]); //n of simping



//matrix

var matrix = [[1,2,3,4],      // Basically this is [[00,01,02,03]
              [4,5,6,7],      //                   [10,11,12,13]
              [7,8,9,10]]     //                  [20,21,22,23]]

//number of rows
console.log(matrix.length);
// here columns are 4

//print all the elements

var items = [];

var a = [1,2,3,4];
var b = [4,5,6,7];
var c = [7,8,9,10];

items.push(a);
items.push(b);
items.push(c);
console.log(items);

var rows = items.length; //3
// console.log(rows)
var columns = a.length;  //4    //can be found from any array
// console.log(columns)

for(var i=0; i<rows; i++){

  for(var j=0;j<columns;j++){

    console.log(items[i][j]);
  }

}



//if we want to print only var c i.e. [7,8,9,10]
//here we know that we are row 2 is fixed

var row = 2;  //here its considering var c
for(var column= 0;column<a.length;column++){
  console.log(items[row][column]);
}



//printing 4,7,10 
//if the value of matrix is fixed after getting the pattern consider it as "i"

var row = 3;
for(var column= 0;column<items.length;column++){
  console.log(items[column][row]);
}

//print 1,4,7,2,5,8,3,6,9,4,7,10
//here i is running for columns and j is for rows

for(var i=0;i<items[0].length; i++){

  for(var j=0;j<items.length;j++){

    console.log(items[j][i]);
  }
}

// var a = [1,2,3,4];
// var b = [4,5,6,7];
// var c = [7,8,9,10];
//print 1,2,3,4,7,6,5,4,7,8,9,10   snake pattern
//here i is running for row and j for columns
//here j is running from 0 to 3 for every even value of i and 3 to 0 for odd value


for(var i=0;i<items.length; i++){

  if(i%2==0){
    for(var j=0;j<items[0].length; j++){
      console.log(items[i][j]);
    }
  }else{
    for(var j=items[0].length-1;j>=0; j--){
      console.log(items[i][j]);
    }
  }
}


//1
// Sample Input 
//N=row=5,M=col=5                          
// 4 7 1 1 7
// 8 9 9 6 1
// 6 4 9 5 1
// 7 7 4 7 7
// 8 6 2 5 5

// Sample Output
// 7 1 1 7 4 8 9 9 6 1 1 5 9 4 6 7 7 4 7 7 5 5 2 6 8

var matrix =[[4,7, 1, 1, 7],
            [8 ,9, 9, 6, 1],
            [6, 4, 9, 5, 1],
            [7, 7, 4, 7, 7],
            [8 ,6 ,2 ,5, 5]]
var N=5;
var M=5;
var bag="";
    for(var i=0;i<N;i++){
        
        if(i%2==1){
            for(var j=0;j<M;j++){
                bag=bag+matrix[i][j]+" ";
            }
        }else{
            for(var j=M-1;j>=0;j--){
                bag=bag+matrix[i][j]+" ";
            }
        }
        
    }
    console.log(bag);




    
//2 Specific Diagonals
//R=row=3,C=col=3,k=int
//Sample input 1
// R3 C3
// 1 2 3
// 4 5 6
// 7 8 9
// K6

//Output
// 2 6
// 6 8

//Sample input 2
// 3 3
// 1 2 3
// 4 5 6
// 7 8 9
// 5

//output
// 1 5 9
// 3 5 7


var matrix=[[1,2,3],
            [4,5,6],
            [7,8,9]];
var R=3;
var C = 3;
var K=6;

var diff=0;
var sum=0;
for(var i=0;i<R;i++){
  
  for(var j=0;j<C;j++){
      
      if(matrix[i][j]==K){
          diff=i-j;
          sum=i+j;
      }
  }
 
}
var LR =[];
var RL = [];
for(var i=0;i<R;i++){
  
  for(var j=0;j<C;j++){
      
      if(diff==i-j){
          LR.push(matrix[i][j]);
      } 
      if(sum==i+j){
          RL.push(matrix[i][j]);
      }
  }
 
}
console.log(LR.join(" "));
console.log(RL.join(" "));



//product of column

var arr = [[1,2],
          [3,4],
          [5,6]];


for (var i = 0; i < arr.length; i++) {
  var product=1;
  for(var j = 0; j < arr[0].length; j++) {
    product = arr[i][j]*product;
  }
  console.log(product)
}


//print 142536

var arr = [[1,2,3],
          [4,5,6]];

var bag = "";
for(var i=0;i<arr[0].length;i++){
  for(var j=0;j<arr.length;j++){
    bag+=arr[j][i];
  }
}
console.log(bag);

//tranpose of a matrix
//print the above in [[1,4],
                 // [2,5],
                // [3,6]]
var arr = [[1,2,3],
          [4,5,6]];

let newArr =[];
for(var i=0;i<arr[0].length;i++){
  var bag = [];
  for(var j=0;j<arr.length;j++){
    bag.push(arr[j][i]);
  }
  newArr.push(bag)
}
console.log(newArr);


//diagonal printing
var matrix=[[1,2,3],
            [4,5,6],
            [7,8,9]];
for(var i=0;i<matrix.length;i++){
    for(var j=0;j<matrix.length;j++){
        if(i==j){
          console.log(matrix[i][j])
        }
    }
}

for(var i=0;i<matrix.length;i++){
  for(var j=0;j<matrix.length;j++){
      if(i+j==matrix.length-1){
        console.log(matrix[i][j]);
      }
  }
}