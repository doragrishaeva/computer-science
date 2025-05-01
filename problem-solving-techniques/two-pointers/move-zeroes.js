// CONDITIONS:
// Given an integer array nums, move all 0's to the end while maintaining the relative order of the non-zero elements.
// Do this in-place without making a copy of the array.

// WHAT TO DO:
// Use two pointers: fast to scan the array, slow to track where the next non-zero should go
// Iterate through the array with fast
// When a non-zero is found, swap it with the value at slow, then move slow forward
// By the end, all non-zero values will be at the front, and all zeroes will be shifted to the end
// All operations are done in-place

// COMPLEXITY:
// Time: O(n)
// Space: O(1)

Input: [0, 1, 0, 3, 12];
Output: [1, 3, 12, 0, 0];

function moveZeroes(nums) {
  let slow = 0; // place for non-zero

  // fast pointer should iterate the whole array
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]]; // swap
      slow++;
    }
  }
}

// Initial: [0, 1, 0, 3, 12]
// Step 0: fast=0, slow=0, nums = [0, 1, 0, 3, 12] (zero skipped)
// Step 1: fast=1, slow=0, nums = [1, 0, 0, 3, 12] (0 and 1 swapped)
// Step 2: fast=2, slow=1, nums = [1, 0, 0, 3, 12] (zero skipped)
// Step 3: fast=3, slow=1, nums = [1, 3, 0, 0, 12] (0 and 3 swapped)
// Step 4: fast=4, slow=2, nums = [1, 3, 12, 0, 0] (0 and 12 swapped)
// Final:   [1, 3, 12, 0, 0]
