//points to consider

// null means no value and used by the developer
// undefined means value not assigned used by javaScript by default

var x;
console.log(x);

var y = null;
console.log(y);

//object can also be called dictionary having (key:value) pair
//simple storying of information in the object
//objects are declared using {} brackets

var user ={
  name: 'Ramesh',
  age: 23,
  gender: 'Male',
  city: 'kolkata',
  hobbies: 'Singing',
  marks: [23,45,54,88,90]   //array
};
console.log(user);

//access values of the object
//2 types to acess data i.e. bracket notation and dot notation

console.log(user["city"]);   //bracket notation

console.log(user.gender);    //dot notation

console.log(user["marks"]);
console.log(user.marks)

var y = "hobbies";      //variables can also be used
console.log(user[y]);   


//want to access a particular mark
console.log(user["marks"][2]);   //54


//update the information in user object
user["city"]= "Cuttack";
console.log(user);

//add additional information in user object
user["DOB"] = "23/05/1893";
console.log(user);


//deletion in the user object
delete user["DOB"];
console.log(user);


//array commands
var arr = user["marks"];
console.log(arr.length);