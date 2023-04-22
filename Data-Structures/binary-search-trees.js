// Trees

// Objectives

// • Define what a tree is
// • Compare and contrast trees and lists
// • Explain the differences between trees,
//   binary trees, and binary search trees
// • Implement operations on binary
//   search trees

// What is a Tree?

// A data structure that
// consists of nodes in a
// parent / child relationship

// Lists - linear
// Trees - nonlinear

// Tree Terminology

// • Root - The top node in a tree.
// • Child - A node directly connected to another node
//   when moving away from the Root.
// • Parent - The converse notion of a child.
// • Siblings - A group of nodes with the same parent.
// • Leaf - A node with no children.
// • Edge - The connection between one node and
//   another.

// Trees

// Lots of different applications!

// • HTML DOM
// • Network Routing
// • Abstract Syntax Tree
// • Artificial Intelligence
// • Folders in Operating Systems
// • Computer File Systems

// Kinds of Trees

// • Trees
// • Binary Trees
// • Binary Search Trees

// How BSTS Work

// • Every parent node has at most
//   two children
// • Every node to the left of a parent node is
//   always less than the parent
// • Every node to the right of a parent node
//   is always greater than the parent

// Inserting a Node

// Steps - Iteratively or Recursively

// • Create a new node
// • Starting at the root
//   • Check if there is a root, if not - the root now becomes that new node!
//   • If there is a root, check if the value of the new node is greater than or
//     less than the value of the root
//   • If it is greater
//     • Check to see if there is a node to the right
//       • If there is, move to that node and repeat these steps
//       • If there is not, add that node as the right property
//   • If it is less
//     • Check to see if there is a node to the left
//       • If there is, move to that node and repeat these steps
//       • If there is not, add that node as the left property

// Finding a Node

// Steps - Iteratively or Recursively

// • Starting at the root
//   • Check if there is a root, if not - we're done searching!
//   • If there is a root, check if the value of the new node is the value we are looking for.
//     If we found it, we're done!
//   • If not, check to see if the value is greater than or less than the value of the root
//   • If it is greater
//     • Check to see if there is a node to the right
//       • If there is, move to that node and repeat these steps
//       • If there is not, we're done searching!
//   • If it is less
//     • Check to see if there is a node to the left
//       • If there is, move to that node and repeat these steps
//       • If there is not, we're done searching!

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return current;
  }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

// Big O of BST

// Insertion - O(log n)
// Searching - O(log n)
