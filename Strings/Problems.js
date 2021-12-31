

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
  console.log(isPalindrome("racecar"));