// Algorithms
// and Problem
// Solving Patterns

// What Is An
// Algorithm?

// A process or set of steps to
// accomplish a certain task

// Why do I need to know this?

// Almost everything that you do in programming involves
// some kind of algorithm!
// It's the foundation for being a successful problem
// solver and developer

// How Do You Improve?

// 1. Devise a plan for solving
// problems
// 2. Master common problem
// solving patterns

// Problem Solving Strategies

// Understand the Problem
// Explore Concrete Examples
// Break It Down
// Solve/Simplify
// Look Back and Refactor

// STEP 1 - Understand the Problem

// 1. Can I restate the problem in my own words?
// 2. What are the inputs that go into the problem?
// 3. What are the outputs that should come from the
// solution to the problem?
// 4. Can the outputs be determined from the inputs? In
// other words, do I have enough information to solve the
// problem? (You may not be able to answer this question
// until you set about solving the problem. That's okay; it's
// still worth considering the question at this early stage.)
// 5. How should I label the important pieces of data that are
// a part of the problem?

// Step 2 - Exploring Concrete Examples

// Coming up with examples can help you
// understand the problem better

// Examples also provide sanity checks that
// your eventual solution works how it should

// Explore Examples (Steps)

// 1. Start with Simple Examples
// 2. Progress to More Complex Examples
// 3. Explore Examples with Empty Inputs
// 4. Explore Examples with Invalid Inputs

// Write a function which takes in
// a string and returns counts of
// each character in the string.

charCount('aaaa'); // {a:4}
charCount('hello'); // {h:1, e:1, l:2, o:1}

('My phone number is (123) 456-7890');
('Hello, hi');

charCount('');

// Step 3 - Break It Down

// Explicitly write out the
// steps you need to take.

// This forces you to think about the code you'll write
// before you write it, and helps you catch any
// lingering conceptual issues or misunderstandings
// before you dive in and have to worry about details
// (e.g. language syntax) as well.

// Return an object with keys that are lowercase alphanumeric
// characters in the string

function charCount(str) {
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}

// Refactored

function charCount(str) {
  var obj = {};
  for (var char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}

charCodeAt(0);

// Step 4 - Solve/Simplify

// SOLVE THE PROBLEM
// If you can't ...
// SOLVE A SIMPLER PROBLEM!

// Simplify

// Find the core difficulty in what
// you're trying to do
// Temporarily ignore that difficulty
// Write a simplified solution
// Then incorporate that difficulty
// back in

// Step 5 - Look Back & Refactor

// Congrats on solving it, but you're not done!

// Refactoring Questions

// Can you check the result?
// Can you derive the result differently?
// Can you understand it at a glance?
// Can you use the result or method for some
// other problem?
// Can you improve the performance of your
// solution?
// Can you think of other ways to refactor?
// How have other people solved this problem?
