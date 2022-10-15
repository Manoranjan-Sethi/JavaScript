// closures - Gives access to an outer function from an inner function

var sum = function (a, b, c) {
  return {
    getSumTwo: function () {
      return a + b;
    },
    getSumThree: function () {
      return a + b + c;
    },
  };
};
var keep = sum(1, 2, 3);
console.log(keep.getSumTwo());
console.log(keep.getSumThree());

// function init() {
//   var name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   displayName();
// }
// init();
