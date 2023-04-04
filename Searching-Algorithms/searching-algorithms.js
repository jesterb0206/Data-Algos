// How do we search?

// Given an array, the simplest way to
// search for a value is to look at
// every element in the array and
// check if it's the value we want.

// JavaScript has search!

// There  are many different search methods on
// arrays in JavaScript:

// · indexOf
// · includes
// · find
// · findIndex

// But how do these functions work?

// Linear Search Pseudocode

// · This function accepts an array and a value
// · Loop through the array and check if the
// current array element is equal to the value
// · If it is, return the index at which the element
// is found
// · If the value is never found, return -1

// Don't use indexOf to
// implement this function!

// Examples:

linearSearch([10, 15, 20, 25, 30], 15); // 1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4); // 5
linearSearch([100], 100); // 0
linearSearch([1, 2, 3, 4, 5], 6); // -1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10); // -1
linearSearch([100], 200); // -1

function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

linearSearch([34, 56, 1, 2], 1);

// Linear Search
// Big O

// O(1) Best
// O(n) Average
// O(n) Worst

// Binary Search

// · Binary search is a much faster form of search
// · Rather than eliminating one element at a time,
// you can eliminate half of the remaining
// elements at a time
// · Binary search only works on sorted arrays!

// Binary Search Pseudocode

// · This function accepts a sorted array and a value
// · Create a left pointer at the start of the array, and a
// right pointer at the end of the array
// · While the left pointer comes before the right pointer:
// · Create a pointer in the middle
// · If you find the value you want, return the index
// · If the value is too small, move the left pointer up
// · If the value is too large, move the right pointer down
// If you never find the value, return -1

// Binary Search Exercise

// Write a function called
// binarySearch which
// accepts a sorted array
// and a value and returns
// the index at which the
// value exists. Otherwise,
// return -1.

// Examples

binarySearch([1, 2, 3, 4, 5], 2); // 1
binarySearch([1, 2, 3, 4, 5], 3); // 2
binarySearch([1, 2, 3, 4, 5], 5); // 4
binarySearch([1, 2, 3, 4, 5], 6); // -1
binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  10
); // 2
binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  95
); // 16
binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  100
); // -1

function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15);

// Binary Search Big O

// O(log n) Worst and Average Case
// O(1) Best Case

// Naive String Search

// · Suppose you want to count the number of times a
// smaller string appears in a longer string
// · A straightforward approach involves checking
// pairs of characters individually

// Pseudocode
// · Loop over the longer string
// · Loop over the shorter string
// · If the characters don't match, break out of the inner loop
// · If the characters do match, keep going
// · If you complete the inner loop and find a match,
// increment the count of matches
// · Return the count

function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

naiveSearch('lorie loled', 'lol');
