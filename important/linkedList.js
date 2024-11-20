//
class Node {
  constructor(value, tail = null) {
    this.value = value;
    this.tail = tail;
  }
}

class LinkedList {
  constructor(initialValue) {
    this.head = null;
    this.tail = null;
  }
  prepend(value) {
    this.head = new Node(value);
    if (!this.tail) {
      this.tail = this.head;
    }
  }
}

const ll = new LinkedList();
ll.prepend(5);
ll.prepend(6);
console.log(ll);



