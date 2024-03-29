// Learning LikedList
/*
const n1 = {
  data: 100,
};

const n2 = {
  data: 200,
};
*/
//We have introduced 2 object literals n1 and n2. But it's not connected.We will use linked list to connect it like bellow diagram

// 100->200->300 and so on->null
/*
n1.next = n2;
console.log(n1);
*/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    //list is empty as no head
    this.head = null;
    this.size = 0;
  }

  //insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head); //this.head in Node arguments is reffred to current node in linked list
    this.size++;
  }
  //insert last node
  insertLast(data) {
    let node = new Node(data, null);
    let current;

    //if empty then make head
    if (!this.head) {
      this.head = node;
    } else {
      //else traverse and keep the current node in 'current' variable
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++; //as new node entered, we are increasing the size of linked list
  }
  //insert at index
  insertAtIndex(data, index) {
    //if Index is out of range and size is 0
    if (index > 0 && index > this.size) {
      return;
    }
    //if first index
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    let node = new Node(data);
    let current, previous;

    //set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; //node before index
      count++;
      current = current.next; //node after index
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }
  //get at index
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    //if empty
    return null;
  }
  //Remove at index

  //print list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertAtIndex(300, 0);
ll.insertLast(400);
ll.getAt(1);
