// Stacks

// Objectives

// • Define what a stack is
// • Understand use cases for a stack
// • Implement operations on a stack
//   data structure

// What is a stack?

// A LIFO data structure
// The last element added to the stack will be
// the first element removed from the stack

// How is it used?

// Think about a stack of plates, or a stack of
// markers, or a stack of ... anything.
// As you pile it up the last thing (or the topmost
// thing) is what gets removed first.

// We've Seen
// This Before

// The Call Stack!

// Where Stacks Are Used

// • Managing function
//   invocations
// • Undo / Redo
// • Routing (this history object)
//   is treated like a stack!

// A Stack Class

// Pushing

// Add a value to the
// top of the stack!

// Pushing Pseudocode

// • The function should accept a value
// • Create a new node with that value
// • If there are no nodes in the stack, set the first and last
//   property to be the newly created node
// • If there is at least one node, create a variable that stores
//   the current first property on the stack
// • Reset the first property to be the newly created node
// • Set the next property on the node to be the previously
//   created variable
// • Increment the size of the stack by 1

// Pop Pseudocode

// • If there are no nodes in the stack, return null
// • Create a temporary variable to store the first property on
//   the stack
// • If there is only 1 node, set the first and last property to be
//   null
// • If there is more than one node, set the first property to be
//   the next property on the current first
// • Decrement the size by 1
// • Return the value of the node removed

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

// Big O of Stacks

// Insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(N)

// Recap

// • Stacks are a LIFO data structure where the last value
//   in is always the first one out.
// • Stacks are used to handle function invocations(the
//   call stack), for operations like undo/redo, and for
//   routing (remember pages you have visited and go
//   back/forward) and much more!
// • They are not a built in data structure in JavaScript,
//   but are relatively simple to implement

// Queues

// Objectives

// • Define what a queue is
// • Understand use cases for a queue
// • Implement operations on a queue
//   data structure

// What is a Queue?

// A FIFO data structure!
// First In First Out

// We've Seen This Before

// Queues exist everywhere! Think about the last time you
// waited in line ...

// How do we use them in programming?

// • Background tasks
// • Uploading resources
// • Printing / Task processing

// Enqueue Pseudocode

// • This function accepts some value
// • Create a new node using that value passed to the
//   function
// • If there are no nodes in the queue, set this node to be
//   the first and last property of the queue
// • Otherwise, set the next property on the current last
//   to be that node, and then set the last property of the
//   queue to be that node
// • Increment the size of the queue by 1

// Dequeue Pseudocode

// • If there is no first property, just return null
// • Store the first property in a variable
// • See if the first is the same as the last (check if there is
// only 1 node). If so, set the first and last to be null
// • If there is more than 1 node, set the first property to
//   be the next property of first
// • Decrement the size by 1
// • Return the value of the node dequeued

// A Queue Class

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

// Big O of Queues

// Insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(N)

// Recap

// • Queues are a FIFO data structure, all elements
//   are first in first out.
// • Queues are useful for processing tasks and are
//   foundational for more complex data structures
// • Insertion and Removal can be done in O(1)
