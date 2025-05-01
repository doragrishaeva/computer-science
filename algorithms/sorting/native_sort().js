// nativeSort.js
// This file demonstrates JavaScript's native Array.prototype.sort() with a custom compare function.
// Principle: By default, .sort() converts elements to strings and compares UTF-16 code units,
// which may lead to incorrect results for numbers. Providing a compare function ensures proper numeric sorting.

// Time complexity: Typically O(n log n), depends on engine implementation (e.g., Timsort in V8).
// Space complexity: O(n) in most implementations.

const input = [10, 2, 5, 1, 9, 20];
console.log("Original array:", input);

// Incorrect sorting (as strings)
const wrongSort = [...input].sort();
console.log("Sorted with default .sort():", wrongSort);

// Correct numeric sorting
const correctSort = [...input].sort((a, b) => a - b);
console.log("Sorted with compare function (a - b):", correctSort);

// OUTPUT:
// Original array: [10, 2, 5, 1, 9, 20]
// Sorted with default .sort(): [1, 10, 2, 20, 5, 9]
// Sorted with compare function (a - b): [1, 2, 5, 9, 10, 20]
