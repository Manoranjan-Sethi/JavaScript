//string indexing
//spaces are also considered as characters
let firstName = "manoranjan";
console.log(firstName[4]);      //index starts from 0

console.log(firstName.length);  //length starts from 1


//so last index = length - 1

console.log(firstName[firstName.length - 1]); //last element of the string

console.log("----------");

//String Methods
// string is immutable
 let Name = "    AmiT  ";
 console.log(Name.length);
 Name = Name.trim();      //removes adiition spaces
 console.log(Name);
 console.log(Name.length);

 console.log(Name.toUpperCase());    //returns capital letters 
 console.log(Name.toLowerCase());    //returns small letters


//String slicing

let  String = "Manoranjan"; 
let newString = String.slice(0,5);  //start index,end index
console.log(newString);
console.log(String.slice(5));

