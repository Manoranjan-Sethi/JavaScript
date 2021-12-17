//objects inside objects

var user={
    name : "Asish",
    age:31,
   
    address: {
        state: "Odisha",
        district: "Cuttack",
        country: "India",
    }
}

console.log(user);

//print only address
console.log(user["address"]);
console.log(user["address"]["country"]);

//object itteration
for(item in user){
    // console.log(item);
    console.log(item,":",user[item]);
}


//print all the keys in an array using inbuilt function
console.log(Object.keys(user));

//print all the values in an array using inbuilt function
console.log(Object.values(user));

for(item in user){
    if(user[item]==31){
        console.log(item);
    }
}