//IDEA:
// Compare each element of the array with the target
// If a match is found, return its index

// COMPLEXITY:
// Time complexity: O(n)
// Space complexity: O(1) — in-place sorting.

/**
 * @param {number[]} arr - array of numbers
 * @param {number} target - target number
 * @returns {number} - index or -1
 */
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// OUTPUT:
console.log(linearSearch([5, 3, 8, 1], 8)); // 2
console.log(linearSearch([5, 3, 8, 1], 7)); // -1
