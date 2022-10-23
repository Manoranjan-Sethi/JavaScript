let p1 = {
  firstName: "John",
  lastName: "Smith",
};
let p2 = {
  firstName: "Ann",
  lastName: "Brown",
};

// call - provides new value to this inside a function
function sayWelcome(greeting) {
  console.log(greeting + " " + this.firstName + " " + this.lastName);
}
sayWelcome.call(p1, "Welcome");
sayWelcome.call(p2, "Welcome");

// apply - same as call but takes array as a parameter

sayWelcome.apply(p1, ["Welcome"]);
sayWelcome.apply(p2, ["Welcome"]);

// bind - creates a copy of a function with new value of this
function sayWelcome() {
  console.log("Welcome " + this.firstName + " " + this.lastName);
}
let sayWelcomeJohn = sayWelcome.bind(p1);
let sayWelcomeAnn = sayWelcome.bind(p2);
sayWelcomeJohn();
sayWelcomeAnn();
