console.log(x); //undefined

var x = 5;

getName1(); // Mano

console.log(getName1());

function getName1() {
  console.log("Mano");
}

// getName1(); // getName1 is not a function

var getName1 = function () {
  //behaves just like a variable
  console.log("Name");
};

getName3(); // getName3 is not a function

var getName3 = () => {
  //behaves just like a variable
  console.log("Hello World");
};
