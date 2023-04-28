// Hash Tables

// Objectives

// • Explain what a hash table is
// • Define what a hashing algorithm is
// • Discuss what makes a good
//   hashing algorithm
// • Understand how collisions occur in
//   a hash table
// • Handle collisions using separate
//   chaining or linear probing

// What is a Hash Table?

// Hash tables are used to store key-value pairs.
// They are like arrays, but the keys are not ordered.
// Unlike arrays, hash tables are fast for all of
// the following operations: finding values,
// adding new values, and removing values!

// Why Should I Care?

// Nearly every programming
// language has some sort of hash
// table data structure
// Because of their speed, hash
// tables are very commonly used!

// Hash Tables in the Wild

// Python has Dictionaries
// JavaScript has Objects and Maps*
// Java, Go, & Scala have Maps
// Ruby has ... Hashes

// Hash Tables

// Introductory Example

// Imagine we want to store some colors

// We could just use an array/list:
// ["#ff69b4", "#ff4500", "#00ffff"]

// Not super readable! What do
// these colors correspond to?

// It would be nice if instead of using
// indices to access the colors, we could
// use more human-readable keys.

// pink => #ff69b4
// orange red => #ff4500
// cyan => #00ffff

// colors ["cyan"]
// is way better than
// colors[2]

// How can we get human-readability
// and computer readability?

// Computers don't know how to find an
// element at index pink!

// Hash tables to the rescue!

// The Hash Part

// To implement a hash table,
// we'll be using an array.

// In order to look up values by key,
// we need a way to convert keys
// into valid array indices.

// A function that performs this
// task is called a hash function.

// What Makes a Good Hash?

// (not a cryptographically secure one)

// 1. Fast (i.e. constant time)
// 2. Doesn't cluster outputs at specific
//    indices, but distributes uniformly
// 3. Deterministic (same input yields
//    same output)

// What Makes for a Good Hash?

// Simple Hash Example

// Here's a hash that works on strings only:

// function hash(key, arrayLen) {
//   let total = 0;
//   for (let char of key) {
//     let value = char.charCodeAt(0) - 96;
//     total = (total + value) % arrayLen;
//   }
//   return total;
// }

// Refining Our Hash

// Problems with our current hash

// 1. Only hashes strings (we won't
//    worry about this)
// 2. Not constant time - linear in key
//    length
// 3. Could be a little more random

// Hashing Revisited

function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

// Prime numbers? What?

// The prime number in the hash is helpful in
// spreading out the keys more uniformly.

// It's also helpful if the array that you're
// putting values into has a prime length.

// You don't need to know why. (Math is complicated!)

// Dealing with Collisions

// Even with a large array and a great hash
// function, collisions are inevitable.

// There are many strategies for dealing with
// collisions, but we'll focus on two:

// 1. Separate Chaining
// 2. Linear Probing

// Separate Chaining

// With separate chaining, at each index in our array we
// store values using a more sophisticated data
// structure (e.g. an array or a linked list).

// This allows us to store multiple key-value pairs at the
// same index.

// Linear Probing

// With linear probing, when we find a collision, we
// search through the array to find the next empty slot.

// Unlike with separate chaining, this allows us to store
// a single key-value at each index.

// Set / Get

// Set

// 1. Accepts a key and a value
// 2. Hashes the key
// 3. Stores the key-value pair in the hash table
//    array via separate chaining

// Get

// 1. Accepts a key
// 2. Hashes the key
// 3. Retrieves the key-value pair in the hash table
// 4. If the key isn't found, returns undefined

// Keys / Values

// Keys

// 1. Loops through the hash table array and
//    returns an array of keys in the table

// Values

// 1. Loops through the hash table array and returns
//    an array of values in the table

// A HashTable Class

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j]);
          }
        }
      }
    }
    return valuesArr;
  }
}

let ht = new HashTable();
ht.set('Hello World!', 'Goodbye Darkness!');

// Big O of Hash Tables

// (average case)

// • Insert: O(1)
// • Deletion: O(1)
// • Access: O(1)

// Recap

// • Hash tables are collections of key-value pairs
// • Hash tables can find values quickly given a key
// • Hash tables can add new key-values quickly
// • Hash tables store data in a large array, and work by
//   hashing the keys
// • A good hash should be fast, distribute keys uniformly,
//   and be deterministic
// • Separate chaining and linear probing are two strategies
//   used to deal with two keys that hash to the same index
