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

var a = [1,2,3,4];
var b = [4,5,6,7];
var c = [7,8,9,10];
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