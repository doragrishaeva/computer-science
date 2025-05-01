//IDEA:
// comparing neighboring elements and swapping them if they are in the wrong order
// on each pass, the largest element "bubbles" to the end

// COMPLEXITY:
// Time complexity: O(n^2) in the worst and average case; O(n) in the best case (already sorted).
// Space complexity: O(1) — in-place sorting. О(n) - if we use copy to stay safe

// POSSIBLE OPTIMIZATIONS: flag swapped

function bubbleSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    let swapped = false;
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return arr;
}

const input = [5, 3, 8, 4, 2];
console.log("Original array:", input);
const sorted = bubbleSort(input);
console.log("Sorted:", sorted);

// OUTPUT:
// Original array: [5, 3, 8, 4, 2]
// Pass 1
//   Comparing 5 and 3
//   Swapping 5 and 3
//   Array now: [3, 5, 8, 4, 2]
//   Comparing 5 and 8
//   Array now: [3, 5, 8, 4, 2]
//   Comparing 8 and 4
//   Swapping 8 and 4
//   Array now: [3, 5, 4, 8, 2]
//   Comparing 8 and 2
//   Swapping 8 and 2
//   Array now: [3, 5, 4, 2, 8]
// Pass 2
//   Comparing 3 and 5
//   Array now: [3, 5, 4, 2, 8]
//   Comparing 5 and 4
//   Swapping 5 and 4
//   Array now: [3, 4, 5, 2, 8]
//   Comparing 5 and 2
//   Swapping 5 and 2
//   Array now: [3, 4, 2, 5, 8]
// Pass 3
//   Comparing 3 and 4
//   Array now: [3, 4, 2, 5, 8]
//   Comparing 4 and 2
//   Swapping 4 and 2
//   Array now: [3, 2, 4, 5, 8]
// Pass 4
//   Comparing 3 and 2
//   Swapping 3 and 2
//   Array now: [2, 3, 4, 5, 8]
// Sorted: [2, 3, 4, 5, 8]
