 
 
 //objects inside objects

 
 var data ={
     name: "Rahul",
    grade : "A",
    section : "B",
    marks: {
    maths : 30,
    science :50,
    english: 70,
    }
 }

 console.log(data)


 //many users

 var users =[
     {name : "Susil", age: 23},
     {name : "Raman", age: 21},
     {name : "Rajesh" , age: 32}
 ]

 console.log(users[0]);

 //access age 

 console.log(users[0].age);


 //
 var details = {
     name : "Somya",
     age : "23",

     print : function(str){
            console.log(str,"Hello!");
     }
 }

 details.print("Mano"); 

 //this keyword
 var details = {
    name : "Somya",
    age : "23",

    print : function(str){
           console.log(this.name,str,"Hello!");
           console.log("Your age is :", this.age);
    }
}
details.print("Masai");


//Problem1

var rectangle ={
    length : 34,
    breadth : 23,

    perimeter : function(){
                console.log(2*(this.length+this.breadth))
                },

    area : function(){
            console.log(this.length*this.breadth)
            }
}

rectangle.perimeter();
rectangle.area();

rectangle.breadth=281;
rectangle.perimeter();
rectangle.area();


//Problem2
//find total price of products

var e_commerce = {
    products : ["earphone","headphone","earpods"],
    qauntity : [4,5,2],
    price : [700,800,900],

    total_price : function(){
                var sum= 0;
                for(var i=0; i<this.qauntity.length; i++){
                sum= sum + this.qauntity[i] * this.price[i];
                }  
                console.log(sum);
                }
}

e_commerce.total_price();

// if the above problem is solved using only itteration of for loop then
// products : ["earphone","headphone","earpods"],
// qauntity : [4,5,2],
// price : [700,800,900]

// we can write
// var sum= 0;
// for(var i=0; i<qauntity.length; i++){
//     sum= sum+qauntity[i]*price[i];
// }
// console.log(sum);



//Problem3
//array already declared put them into an object
var products = ["imac","iphone","ipad"];
var quantity = [2, 3, 1]
var prices = [500000,100000,40000];

var output = [];

for(var i=0; i<products.length; i++){

    var obj = {     //object created
        name : products[i],
        quantity: quantity[i],
        price : prices[i]
    };

    output.push(obj);
};

console.log(output);


//Problem4
//Masai  count the number of characters
// m -> 1
// a -> 2
// s -> 1
// i -> 1


//in objects we know that we cant have two keys same 
var name1 = "masai";
var output = {}; 

for(var i=0; i<name1.length; i++){
    var char = name1[i];            // at first name1 will be of 0th index which is stored in char i.e. "m"

    if(output[char] == undefined){  //when the object is empty, here output["m"] is undefined so 1 will get stored there
        output[char] = 1;
    }else{                           //for occurence of the element assigned 1 this else will add 1 to it
        var prevValue = output[char];
        output[char] = prevValue+1;
    }
}


for(key in output){
    console.log(key, "->", output[key]);
}


// Sample Input
// 5

// Output
// a-1
// b-2
// c-3
// d-4
// e-5

var N=7;

var alphabets = "abcdefghijklmnopqrstuvwxyz";
    
    var x = 1;
    
    var obj = {};
    
    for (var i=0;i<N; i++){
        obj[alphabets[i]] = x;
        x=x+1;
    }
    
    for(key in obj){
        console.log(key+"-"+obj[key]);
    }
console.log(z)
//

var data = {
    products : ["Rice", "Dal", "Salt"],
    qauntity : [2, 3, 1],
    price : [60, 50, 20],

    total_price : function(){
                var sum= 0;
                for(var i=0; i<this.qauntity.length; i++){
                sum= sum + this.qauntity[i] * this.price[i];
                }  
                console.log(sum);
                }
}

data.total_price();

// 
var data = {

    name: ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"],
    age : [32, 30, 26, 28, 44],
    
  
    q : function(){
                  for(var i=0; i<this.age.length; i++){ 
                    if(this.age[i]>30){
                      console.log(this.name[i]);
                     }
                    } 
                  }
  }
  data.q();


  //
  var alphabets = "abcdefghijklmnopqrstuvwxyz";
    
    var x = 1;
    
    var obj = {};
    
    for (var i=0;i<alphabets.length; i++){
        obj[alphabets[i]] = x;
        x=x+1;
    }
    console.log(alphabets[i-1]);



//Maximum Occurring Element
var arr = [0, 2, 0, 6, 9];  // 0 - 2
// var arr =[1,2,3,4];

let items = {};
let maxValue = 0;
let maxCount = 0;


for(let i of arr){
    if(items[i]== undefined){
    items[i]=1;
    }else{
        items[i]++;
    }

    if(items[i]>maxCount){
        maxValue = i;
        maxCount = items[i];
    }
}
console.log("key :"+maxValue,"count :",maxCount);


//map every item with another

var arr1 = [1,2,3,4];
var arr2 = ["A","B","C","D"];

var bag = {};

for(let i=0; i<arr1.length; i++){
    bag[arr1[i]] = arr2[i];
}
console.log(bag);

//find unique elements
var arr = [1,1,1,2,2,3,3,3,4,4,5]

let i = 0;
let j = 1;
while(i<arr.length && j<arr.length){
    while(arr[j]==arr[i]){
        j++;
    }
    if(j>=arr.length){
        break;
    }
    i++;
    arr[i]=arr[j]
}
//unique elements printing
for(let k=0; k<=i; k++){
    console.log(arr[k])
}
