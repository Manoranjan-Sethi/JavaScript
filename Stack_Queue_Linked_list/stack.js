//Writing the stack function

let arr = [];
top = -1;

function push(data){
  top++;
  arr[top] = data;
}

function pop(data){

  if(top == -1){
    return empty;
  }else{
    ans = arr[top];
    top--;
    return ans;
  }
}

function peek(){
  return arr[top];
}


// Inbuilt functions of stack

arr = [1,2,3,4,5];
arr.push(6);
console.log(arr);
arr.pop();
arr.pop();
console.log(arr);
