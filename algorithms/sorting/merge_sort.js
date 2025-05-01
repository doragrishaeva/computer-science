// IDEA:
// divide the array into two parts until they are single elements, sort them recursively and merge them

// COMPLEXITY:
// Time complexity: O(n log n) in all cases (worst, average, best).
// Space complexity: O(n) — additional arrays are used during merging.

function mergeSort(arr) {
  // base case
  if (arr.length <= 1) return arr;

  // recursive case
  const mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  let leftSide = mergeSort(left);
  let rightSide = mergeSort(right);

  const merged = merge(leftSide, rightSide);
  return merged;
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  //  both parts still there
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  //   only left part there
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  //   only right part there
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

const input = [38, 27, 43, 3, 9, 82, 10];
console.log("Original array:", input);
const sorted = mergeSort(input);
console.log("Sorted:", sorted);

// mergeSort([38, 27, 43, 3, 9, 82, 10])
// ├── mergeSort([38, 27, 43])
// │   ├── mergeSort([38]) → [38]         ← базовый случай
// │   └── mergeSort([27, 43])
// │       ├── mergeSort([27]) → [27]     ← базовый случай
// │       └── mergeSort([43]) → [43]     ← базовый случай
// │           → merge([27], [43]) → [27, 43]
// │   → merge([38], [27, 43]) → [27, 38, 43]
// │
// └── mergeSort([3, 9, 82, 10])
//     ├── mergeSort([3, 9])
//     │   ├── mergeSort([3]) → [3]       ← базовый случай
//     │   └── mergeSort([9]) → [9]       ← базовый случай
//     │       → merge([3], [9]) → [3, 9]
//     │
//     └── mergeSort([82, 10])
//         ├── mergeSort([82]) → [82]     ← базовый случай
//         └── mergeSort([10]) → [10]     ← базовый случай
//             → merge([82], [10]) → [10, 82]

//     → merge([3, 9], [10, 82]) → [3, 9, 10, 82]

// → merge([27, 38, 43], [3, 9, 10, 82]) → [3, 9, 10, 27, 38, 43, 82]
