// Binary Heaps

// Objectives

// • Define what a binary heap is.
// • Compare and contrast min and max heaps.
// • Implement basic methods on heaps.
// • Understand where heaps are used in the real
//   world and what other data structures can be
//   constructed from heaps.

// What is a Binary Heap?

// Very similar to a binary search tree, but
// with some different rules!

// In a MaxBinaryHeap, parent nodes are
// always larger than child nodes. In a
// MinBinaryHeap, parent nodes are
// always smaller than child nodes.

// Max Binary Heap

// • Each parent has at most two child nodes.
// • The value of each parent node is always greater than
//   its child nodes.
// • In a Max Binary Heap the parent is greater than the
//   children, but there are no guarantees between sibling
//   nodes.
// • A binary heap is as compact as possible. All the
//   children of each node are as full as they can be and
//   left children are filled out first.

// Why do we need to know this?

// Binary Heaps are used to implement Priority Queues,
// which are very commonly used data structures.

// They are also used quite a bit, with graph
// traversal algorithms.

// We'll come back to this!

// Insert Pseudocode

// • Push the value into the values property on the heap.
// • Bubble Up:
//   • Create a variable called index which is the length of the
//     values property - 1.
//   • Create a variable called parentIndex which is the floor
//     of (index - 1) / 2.
//   • Keep looping as long as the values element at the
//     parentIndex is less than the values element at the child
//     index.
//     • Swap the value of the values element at the
//       parentIndex with the value of the element property
//       at the child index.
//     • Set the index to be the parentIndex, and start over!

// Removing From a Heap

// • Remove the root.
// • Replace with the
//   most recently added.
// • Adjust (sink down).

// Sink Down?

// The procedure for deleting the root
// from the heap (effectively extracting
// the maximum element in a max-heap
// or the minimum element in a min-
// heap) and restoring the properties is
// called down-heap (also known as
// bubble-down, percolate-down, sift-
// down, trickle down, heapify-down,
// cascade-down, and extract-min/max).

// Removing

// (also called extractMax)

// • Swap the first value in the values property with the last one.
// • Pop from the values property, so you can return the value at the end.
// • Have thee new root "sink down" to the correct spot ...
//   • Your parent index starts at 0 (the root).
//   • Find the index of the left child: 2 * index + 1 (make sure its not out of
//     bounds).
//   • Find the index of the right child: 2 * index + 2 (make sure its not out of
//     bounds).
//   • Find the index of the left child: 2 * index + 1 (make sure its not out of
//     bounds) .
//   • If the left or right child is greater than the element ... swap. If both left and
//     right children are larger, swap with the largest child.
//   • The child index you swapped to now becomes the new parent index.
//   • Keep looping and swapping until neither child is larger than the element.
//   • Return the old root!

// Building a Priority Queue

// What is a
// Priority Queue?

// A data structure where each
// element has a priority.
// Elements with higher priorities
// are served before elements
// with lower priorities.

// Our Priority Queue

// • Write a Min Binary Heap - lower number means
//   higher priority.
// • Each Node has a val and a priority. Use the
//   priority to build the heap.
// • Enqueue method accepts a value and priority,
//   makes a new node, and puts it in the right spot
//   based off of its priority.
// • Dequeue method removes root element,
//   returns it, and rearranges heap using priority.

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

let ER = new PriorityQueue();
ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high fever', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('glass in foot', 3);

// Big O of Binary Heaps

// Insertion - O(log n)
// Removal - O(log n)
// Search - O(n)

// Recap

// • Binary Heaps are very useful data structures for
//   sorting, and implementing other data structures like
//   priority queues.
// • Binary Heaps are either MaxBinaryHeaps or
//   MinBinaryHeaps with parents either being smaller or
//   larger than their children.
// • With just a little bit of math, we can represent heaps
//   using arrays!
