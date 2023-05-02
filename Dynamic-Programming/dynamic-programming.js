// Dynamic Programming

// A Light Introduction

// Objectives

// • Define what dynamic programming is
// • Explain what overlapping subproblems are
// • Understand what optimal substructure is
// • Solve more challenging problems using
//   dynamic programming

// What Is Dynamic Programming

// "A method for solving a complex problem by
// breaking it down into a collection of simpler
// subproblems, solving each of those subproblems
// just once, and storing their solutions."

// It Only Works On
// Problems With ...
// Optimal Substructure &
// Overlapping Subproblems

// Overlapping
// Subproblems

// A problem is said to have
// overlapping subproblems if it can
// be broken down into subproblems
// which are reused several times

// An Example

// Fibonacci Sequence

// "Every number after the first two is
// the sum of the two preceding ones"

// Optimal
// Substructure

// A problem is said to have optimal
// substructure if an optimal solution
// can be constructed from optimal
// solutions of its subproblems

// Let's return to our pal ...
// The Fibonacci Sequence

// Let's Write It!

// • Fib(n) = Fib(n - 1) + Fib(n - 2)
// • Fib(2) is 1
// • Fib(1) is 1

// Recursive Solution

// function fib(n) {
//   if (n <= 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// }

// Let's Chat About
// Big O

// O(2ⁿ)

// The Problem With Our Solution

// Repetition

// What If We Could
// "Remember" Old Values?

// Enter
// Dynamic Programming

// "Using past knowledge to make
// solving a future problem easier"

// Memoization

// Storing the results of expensive
// function calls and returning the
// cached result when the same
// inputs occur again

// A Memo-ized Solution

// function fib(n, memo = []) {
//   if (memo[n] !== undefined) return memo[n];
//   if (n <= 2) return 1;
//   var res = fib(n - 1, memo) + fib(n - 2, memo);
//   memo[n] = res;
//   return res;
// }

// Let's Chat About
// Big O

// O(n)

// We've Been Working
// Top-Down
// But There Is Another Way!
// Bottom-Up

// Tabulation

// Storing the result of a previous
// result in a "table" (usually an array)

// Usually done using iteration

// Better space complexity can be
// achieved using tabulation

// Tabulated Version

function fib(n) {
  if (n <= 2) return 1;
  var fibNums = [0, 1, 1];
  for (var i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
