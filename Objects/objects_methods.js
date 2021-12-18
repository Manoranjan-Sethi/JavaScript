 
 
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

var name1 = "masai";
var output = {};

for(var i=0; i<name1.length; i++){
    var char = name1[i];

    if(output[char] == undefined){
        output[char] = 1;
    }else{
        var prevValue = output[char];
        output[char] = prevValue+1;
    }
}


for(key in output){
    console.log(key, "->", output[key]);
}
