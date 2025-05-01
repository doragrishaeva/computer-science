// IDEA:
// starting from the second element, compare it with the elements before it (going left)
// and insert it right after the first smaller element found

// COMPLEXITY:
// Time complexity: O(n^2) in the worst and average case; O(n) in the best case (already sorted).
// Space complexity: O(1) — in-place sorting. О(n) - if we use copy to stay safe

function insertionSort(arr) {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}

const input = [5, 2, 4, 6, 1, 3];
console.log("Original array:", input);
const sorted = insertionSort(input);
console.log("Sorted:", sorted);
