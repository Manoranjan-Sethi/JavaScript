

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
