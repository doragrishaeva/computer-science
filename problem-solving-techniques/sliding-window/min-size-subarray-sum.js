// CONDITIONS:
// Given an array of positive integers nums and a positive integer target,
// return the minimal length of a subarray whose sum is greater than or equal to target.
// If no such subarray exists, return 0 instead.

// WHAT TO DO:
// Use two pointers to create a sliding window
// Expand the window by moving the right pointer (end of window)
// When the current sum ≥ target, try shrinking the window from the left to minimize it
// Keep track of the minimum length found
// Return the minimum length (or 0 if not found)

// COMPLEXITY:
// Time complexity: O(n)
// Space complexity: O(1)

function minSubArrayLen(target, nums) {
  let left = 0;
  let sum = 0;
  let minLength = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // → 2
