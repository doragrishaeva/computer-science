// IDEA:
// choose a pivot element from the array
// partition the array around the pivot
// recursively sort the subarrays

// COMPLEXITY:
// Time complexity: O(n log n) average and best case, O(n^2) worst case (if pivot is poorly chosen).
// Space complexity: O(log n) on average due to recursion stack.

function quickSort(arr) {
  // base case
  if (arr.length <= 1) {
    return arr;
  }

  // recursive case
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const input = [10, 7, 8, 9, 1, 5];
console.log("Original array:", input);
const sorted = quickSort(input);
console.log("Sorted:", sorted);

// CLASSIC: last element of array is pivot
// quickSort([10, 7, 8, 9, 1, 5])   // pivot = 5
// ├── quickSort([1])              // элементы < 5
// │   → [1]                       // базовый случай
// └── quickSort([10, 7, 8, 9])    // элементы > 5
//     └── pivot = 9
//         ├── quickSort([7, 8])   // < 9
//         │   └── pivot = 8
//         │       ├── quickSort([7])     // < 8
//         │       │   → [7]
//         │       └── quickSort([])      // > 8
//         │           → []
//         │       → [7, 8]
//         └── quickSort([10])    // > 9
//             → [10]
//         → [7, 8, 9, 10]

// → Финальный результат:
// [1, 5, 7, 8, 9, 10]
