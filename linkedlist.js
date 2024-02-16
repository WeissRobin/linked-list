class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  listhead() {
    console.log(this.head);
    return this.head;
  }

  listtail() {
    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    console.log(current);
  }

  size() {
    let current = this.head;
    let size = 0;

    while (current) {
      size++;
      current = current.next;
    }
    return size;
  }

  prepend(data) {
    const node = new Node(data);

    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
    }
  }

  append(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;
  }

  display() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  at(index) {
    let current = this.head;

    for (let i = 1; i <= index; i++) {
      if (i == index) {
        console.log("Found node: " + JSON.stringify(current));
      } else {
        current = current.next;
      }
    }
  }

  find(value) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data == value) {
        console.log("Index of node: " + index);
        console.log("Data of node: " + current.data);
        return;
      } else {
        index++;
        current = current.next;
      }
    }
  }

  toString() {
    let current = this.head;
    let result = "";

    while (current) {
      result += `( ${current.data} ) -> `;
      current = current.next;
    }

    result += "null";
    console.log(result);
    return result;
  }

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.data === value) {
        console.log(true);
        return true;
      } else {
        current = current.next;
      }
    }
    console.log(false);
    return false;
  }

  pop() {
    let current = this.head;
    let temp = 1;

    if (!this.head) {
      console.log("List is empty");
    }

    if (!this.head.next) {
      // If there is only one node, remove it
      this.head = null;
      return;
    }

    while (current) {
      if (temp === this.size() - 1) {
        current.next = null;
      }
      temp++;
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.prepend(0);
linkedList.pop();
linkedList.display();


/* 
Extra credit
insertAt(value, index) that inserts a new node with the provided value at the given index.
removeAt(index) that removes the node at the given index.

Extra Credit Tip: When you insert or remove a node, consider how it will affect the existing nodes. 
Some of the nodes will need their nextNode link updated.
*/