

//occurence of a character in a string
var a = "He's my king from this day until his last day";
// var a = "qwerta";
var count = 0;
for (var i = a.indexOf("a"); i!==-1; i=a.indexOf("a",i + 1)){
      count++;
}
console.log(count);


//a5  , aaaaa
var str = "a5";
var catchChar = str[0];
var catchInt = str[1];
var bag=" ";


for (var i = 0; i < catchInt; i++){

      bag = bag + catchChar
      
}
console.log(bag)


//palindrome
function isPalindrome(str){
      let i=0;
      let j=str.length-1;
      let flag=true;
      
      while(i<j){
          if(str[i]!=str[j]){
              flag=false;
              break;
          }
          i++;
          j--;
      }
      return flag;
  }
  console.log(isPalindrome("abccba"));



//   You are given a string s of x and y. You need to verify whether the string follows the pattern xnyn. That is the string is valid only if equal number of ys follow equal number of xs.
//   As an example: xxyyxxyy is valid. xy is valid. xxyyx is invalid. xxxyyyxxyyxy is valid.

var a = "xyx";
// var b =a.split("");
// console.log(b);
var countX = 0;
var countY = 0;
for(let i=0;i<a.length;i++){
    if(a[i]=="x"){
        countX++;
    }if(a[i]=="y"){
        countY++;
    }
}
if(countX==countY){
    console.log("1");
}else{
    console.log("0")
}

// Palindrome made easy

var num = 1221;
var str = String(num);

var bag = "";
for(let i=str.length-1;i>=0;i--){
    bag+=str[i];
}
if(bag==str){
    console.log("Palindrome")
}else{
    console.log("Not Palindrome")
}