// IDEA:
// At each pass we find the smallest element and swap it with the first element (using minIndex)

// COMPLEXITY:
// Time complexity: O(n^2) in all cases (worst, average, best).
// Space complexity: O(1) — in-place sorting. О(n) - if we use copy to stay safe

function selectionSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

const input = [64, 25, 12, 22, 11];
console.log("Original array:", input);
const sorted = selectionSort(input);
console.log("Sorted:", sorted);

// OUTPUT:
// Original array: [64, 25, 12, 22, 11]
// Pass 1
//   Comparing 25 and 64
//   New minimum found: 25 at index 1
//   Comparing 12 and 25
//   New minimum found: 12 at index 2
//   Comparing 22 and 12
//   Comparing 11 and 12
//   New minimum found: 11 at index 4
//   Swapped 64 with 11
//   Array now: [11, 25, 12, 22, 64]
// Pass 2
//   Comparing 12 and 25
//   New minimum found: 12 at index 2
//   Comparing 22 and 12
//   Comparing 64 and 12
//   Swapped 25 with 12
//   Array now: [11, 12, 25, 22, 64]
// Pass 3
//   Comparing 22 and 25
//   New minimum found: 22 at index 3
//   Comparing 64 and 22
//   Swapped 25 with 22
//   Array now: [11, 12, 22, 25, 64]
// Pass 4
//   Comparing 64 and 25
//   Array now: [11, 12, 22, 25, 64]
// Sorted: [11, 12, 22, 25, 64]
