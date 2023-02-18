// An Example

// Suppose we want to write a function that
// calculates the sum of all numbers from 1 up to
// (and including) some number n.

// Solution 1

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// Solution 2

function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// Rather than counting seconds,
// which are so variable ...

// Let's count the number of
// simple operations the
// computer has to perform!

// Solution 1

// O(n)

// Depending on what we count, the number
// of operations can be as low as 2n or as
// high as 5n + 2

// But regardless of the exact number, the
// number of operations grows roughly
// proportionally with n

// Solution 2

// O(1)

// Three calculations (1 multiplication, addition and division)

// WINNER Solution 2 🏆

// Performance Tracker Tool

// https://rithmschool.github.io/function-timer-demo/

// Big O Notation is a way to
// formalize fuzzy counting

// It allows us to talk formally about
// how the runtime of an algorithm
// grows as the inputs grow

// Big O Definition

// We say that an algorithm is O(f(n)) if the
// number of simple operations the
// computer has to do is eventually less than
// a constant times f(n), as n increases

// f(n) could be linear (f(n) = n)
// f(n) could be quadratic (f(n) = n²)
// f(n) could be constant (f(n) = 1)
// f(n) could be something entirely different!

// Another Example

// O(n)

function countUpAndDown(n) {
  console.log('Going up!');
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log('At the top!\nGoing down...');
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log('Back down. Bye!');
}

// Yet Another Example

// O(n²)

function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// Simplifying Big O Expressions

// Constants Don't Matter

// O(2n) = O(n)
// O(500) = O(1)
// O(13n²) = O(n²)

// Smaller Terms Don't Matter

// O(n + 10) = O(n)
// O(1000n + 50) = O(n)
// O(n² + 5n + 8) = O(n²)

// Big O Shorthands

// 1. Arithmetic operations are constant
// 2. Variable assignment is constant
// 3. Accessing elements in an array (by
// index) or object (by key) is constant
// 4. In a loop, the complexity is the
// length of the loop times the complexity
// of whatever happens inside of the loop

// A Couple More Examples

// O(n)

function logAtLeast5(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

// O(1)

function logAtMost5(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

// Space Complexity

// Rules of Thumb

// 1. Most primitives (booleans, numbers, undefined,
// null) are constant space
// 2. Strings require O(n) space (where n is the string length)
// 3. Reference types are generally O(n), where n is the
// length (for arrays) or the number of keys (for objects)

// An Example

// O(1) Space

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// Another Example

function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

// Logarithms

// This isn't a math course, so here's a rule of thumb.

// The logarithm of a number roughly measures the
// number of times you can divide that number by 2
// before you get a value that's less than or equal
// to one.

// Logarithmic time complexity is great!

// Who Cares?

// Certain searching algorithms have
// logarithmic time complexity.

// Efficient sorting algorithms
// involve logarithms.

// Recursion sometimes involves
// logarithmic space complexity.
