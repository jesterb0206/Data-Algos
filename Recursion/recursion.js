// What is recursion?

// A process (a function in
// our case) that calls itself

// Why do I need
// to know this?

// It's EVERYWHERE!

// JSON.parse/JSON.stringify
// document.getElementByID and DOM traversal
// algorithms
// Object traversal
// We will see it with more complex data structures
// It's sometimes a cleaner alternative to iteration

// But first ... let's talk about
// functions

// In almost all programming languages,
// there is a built in data structure that
// manages what happens when
// functions are invoked
// It's named the call stack!

// The call stack

// It's a stack data structure - we'll talk about that
// later!
// Any time a function is invoked it is placed (pushed)
// on the top of the call stack
// When JavaScript sees the return keyword or when
// the function ends, the compiler will remove (pop)

function takeShower() {
  return 'Showering!';
}

function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ['Oatmeal', 'Eggs', 'Protein Shake'];
  return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log('OK, ready to go to work!');
}

wakeUp();

// Why do I care?

// You're used to functions being
// pushed on the call stack and popped
// off when they are done
// When we write recursive functions,
// we keep pushing new functions onto
// the call stack!

// How recursive functions work

// Invoke the same function with
// a different input until you reach your base case!

// Base Case

// The condition when the
// recursion ends.

// This is the most important
// concept to understand

// Two essential parts of a
// recursive function!

// Base Case
// Different Input

// Our first recursive function

function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// Without Recursion

// function countDown(num) {
//   for (var i = num; i > 0; i--) {
//     console.log(i);
//   }
//   console.log('All done!');
// }

// countDown(5);

// Our second recursive function

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// Can you spot the base case?
// Do you notice the different input?
// What would happen if we didn't return?

sumRange(4);

// Writing Factorial Iteratively

// function factorial(num) {
//   let total = 1;
//   for (let i = num; i > 1; i--) {
//     total *= i;
//   }
//   return total;
// }

// Writing Factorial Recursively

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// Where things go wrong

// No base case
// Forgetting to return or returning the wrong thing!
// Stack overflow!

// function factorial(num) {
//   if (num === 1) return 1;
//   return num * factorial(num);
// }

// function factorial(num) {
//   if (num === 1) console.log(1);
//   return num * factorial(num - 1);
// }

// Helper Method Recursion

function outer(input) {
  var outerScopedVariable = [];

  function helper(helperInput) {
    // modify the outerScopedVariable
    helperInput(helperInput--);
  }

  helper(input);

  return outerScopedVariable;
}

// Another Example

// Let's try to collect all of the odd values in an array!

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

// Pure Recursion

function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

// Pure Recursion Tips

// For arrays, use methods like slice, the spread
// operator, and concat that make copies of arrays so
// you do not mutate them
// Remember that strings are immutable so you will
// need to use methods like slice, substr, or
// substring to make copies of strings
