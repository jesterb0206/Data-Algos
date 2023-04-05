// Elementary Sorting Algorithms

// What is sorting?

// Sorting is the process of rearranging the
// items in a collection (e.g. an array) so that
// the items are in some kind of order.

// Examples

// • Sorting numbers from smallest to largest
// • Sorting names alphabetically
// • Sorting movies based on release year
// • Sorting movies based on revenue

// Why do we need to learn this?

// • Sorting is an incredibly common task, so it's
// good to know how it works
// • There are many different ways to sort
// things, and different techniques have their
// own advantages and disadvantages

// Objectives

// • Implement bubble sort
// • Implement selection sort
// • Implement insertion sort
// • Understand why it is important to learn these simpler sorting algorithms

// JavaScript has a sort method ...

// Yes, it does!
// ... but it doesn't always work the way you expect.

// Telling JavaScript how to sort

// • The built-in sort method accepts an optional
// comparator function
// • You can use this comparator function to tell JavaScript
// how you want it to sort
// The comparator looks at pairs of elements (a and b),
// determines their sort order based on the return value
//     • If it returns a negative number, a should come before b
//     • If it returns a positive number, a should come after b,
//     • If it returns 0, a and b are the same as far as the sort is
//       concerned

// BubbleSort

// A sorting algorithm where the largest
// values bubble up to the top!

// Before we sort, we must swap!

// Many sorting algorithms involve some type of
// swapping functionality (e.g. swapping two
// numbers to put them in order)

// BubbleSort Pseudocode

// • Start looping from the end of the array towards the
// beginning with a variable called i
// • Start an inner loop with a variable called j from the
// beginning until i -1
// • If arr[j] is greater than arr[j + 1], swap those two
// values!
// Return the sorted array

// function bubbleSort(arr) {
//   for (var i = arr.length; i > 0; i--) {
//     for (var j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// function bubbleSort(arr) {
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };

//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//       }
//     }
//   }
//   return arr;
// }

function bubbleSort(arr) {
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
