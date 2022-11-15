//Writing the stack function

let arr = [];
top = -1;

function push(data) {
  top++;
  arr[top] = data;
}

function pop() {
  if (top == -1) {
    return empty;
  } else {
    ans = arr[top];
    top--;
    return ans;
  }
}

function peek() {
  return arr[top];
}

// Inbuilt functions of stack

arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr);
arr.pop();
arr.pop();
arr.peek();
console.log(arr);

function isValid(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(") {
      stack.push(str[i]);
    } else {
      if (stack.length == 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length == 0;
}
function generate(n, str, arr) {
  if (n == 0) {
    if (isValid(str)) {
      arr.push(str);
    }
    return;
  }

  generate(n - 1, str + "(", arr);
  generate(n - 1, str + ")", arr);
}
