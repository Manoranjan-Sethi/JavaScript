class LinkedList{

  constructor (data) {
    this.head = {
      value: data,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }
}

let mylist = new LinkedList(2);
console.log(mylist)