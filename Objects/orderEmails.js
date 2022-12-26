// Given n email addresses of different domains, please send an email to the first address(in alphabetical order) of each domain. Please assume a function sendmail() to send the emails.
// (note: give general solution).
// Input Array = ['ghi@hotmail.com', 'def@yahoo.com', 'ghi@gmail.com', 'abc@channelier.com', 'abc@hotmail.com', 'def@hotmail.com', 'abc@gmail.com', 'abc@yahoo.com', 'def@channelier.com','jkl@hotmail.com', 'ghi@yahoo.com', 'def@gmail.com'].

// Expected Output - Below is the  order of address in which sendmail function is going to send mail.
//                                 abc@channelier.com
//                                 abc@yahoo.com
//                                 abc@gmail.com
//                                 abc@hotmail.com

function sendEmails(addresses) {
  var newArrL = [];
  var newArrR = [];
  for (const address of addresses) {
    const domain = address.split("@");
    if (domain[0] == "abc") {
      newArrL.push(domain[0]);
    }
    if (domain[0] == "abc") {
      newArrR.push(domain[1]);
    }
  }

  var arr = [];
  for (let i = 0; i < newArrL.length; i++) {
    arr.push(newArrL[i] + "@" + newArrR[i]);
  }
  console.log(arr);
}

const addresses = [
  "ghi@hotmail.com",
  "def@yahoo.com",
  "ghi@gmail.com",
  "abc@channelier.com",
  "abc@hotmail.com",
  "def@hotmail.com",
  "abc@gmail.com",
  "abc@yahoo.com",
  "def@channelier.com",
  "jkl@hotmail.com",
  "ghi@yahoo.com",
  "def@gmail.com",
];
sendEmails(addresses);
