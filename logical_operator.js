var a = true;
console.log(!a);

var b = false;
console.log(!b);

// AND(&&) operator prints true if both input is true
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log("--------------");

// OR(||) operator prints true if one of the input from the 2 inputs is true
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);


// if an alpabet is vowel or consonant
var char = "u";

if(char =="a" || char =="e" || char =="i" || char =="o" || char =="u" || char =="A" || char =="E" || char =="I" || char =="O" || char =="U"){
  console.log("Vowel");
}
else{
  console.log("Consonant");
}