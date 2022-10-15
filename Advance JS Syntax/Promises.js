// Promises - One of the way to handle asynchronous operations in javascript. This is more effective than callbacks. Has 3 methods
// - resolve
// - reject
// - settled

let promise = new Promise((resolve, reject) => {
  let a = 7 + 12;
  if (a < 5) {
    resolve("success");
  } else {
    reject("error");
  }
});

promise
  .then((success) => {
    console.log(success);
  })
  .catch((error) => {
    console.log(error);
  });
