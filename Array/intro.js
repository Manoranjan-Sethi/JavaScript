//arrays are reference types that
//reference types are also called objects
//so array is also an object java_script
//urdered collections of items 
//starts from index 0
//arrays are mutable
let items = ["a", "b", "c", "d", "e"];
console.log(items);
console.log(items[2]);
items[2] ="f";
console.log(items);

console.log(typeof items);  //objects
console.log(Array.isArray(items));




let mix = [1,2,4.3,"ram",null];
console.log(mix);

//prime number

function checkPrime(num)
{
  var count=0;
  for(var i = 1; i<=num; i++)
  {
    if(num%i==0)
    {
      count++;
    }
  }

  if(count==2)
  {
    return true;
  }else{
    return false;
  }
}
console.log(checkPrime(11));


