// CONDITIONS:
// Given a sorted array arr and a target value (arr, target)
// Return the indices of two numbers such that their sum is equal to target.
// Assume there is exactly one solution, and do not use the same element twice.

// WHAT TO DO:
// Use two pointers: left starting from the beginning, right from the end
// Calculate the sum of the values at both pointers
// If the sum equals the target → return indices
// If the sum is less than the target → move 'left' forward
// If the sum is greater → move 'right' backward
// This efficiently finds a pair with the desired sum in one pass

// COMPLEXITY:
// Time complexity: O(n)
// Space complexity: O(1)

Input: (arr = [1, 2, 3, 4, 6]), (target = 6);
Output: [1, 3]; // as 2 + 4 = 6 and their indexes are 1 and 3

function twoSumSorted(arr, target) {
  let left = 0; // first element
  let right = arr.length - 1; // last element

  //while they're not the same
  while (left < right) {
    const sum = arr[left] + arr[right]; // check the sum
    if (sum === target) return [left, right];
    if (sum < target)
      left++; // means that left is too small and should be increased (as array sorted)
    else right--; //means that right is too big and should be decreased
  }

  return [-1, -1]; // no match
}

console.log(twoSumSorted([1, 2, 3, 4, 6], 6)); // [1, 3]
