// Frequency Counter /
// Multiple Pointers -
// areThereDuplicates

// Implement a function
// called,
// areThereDuplicates
// which accepts a variable
// number of arguments,
// and checks whether there
// are any duplicates among
// the arguments passed in.
// You can solve this using
// the frequency counter
// pattern OR the multiple
// pointers pattern.

// Examples:

areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates('a', 'b', 'c', 'a'); // true

// Restrictions:

// Time - O(n)
// Space - O(n)

// Bonus:

// Time - O(n log n)
// Space - O(1)

// Solutions

// areThereDuplicates Solution (Frequency Counter)

function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

// areThereDuplicates Solution (Multiple Pointers)

function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

// areThereDuplicates One Liner Solution

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
