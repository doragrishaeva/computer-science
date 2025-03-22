// CONDITIONS:
// Given an integer array nums and an integer val
// Remove all occurrences of val in-place and return the new length.
// The relative order of the elements may be changed.

// WHAT TO DO:
// Use two pointers: fast to iterate over the array, slow to mark the next available position
// For every element that is not equal to val, write it at the slow index and move slow forward
// Skip all elements that are equal to val
// In the end, the first slow elements will contain the result; the rest can be ignored
// The operation is done in-place, without caring about order

// COMPLEXITY:
// Time: O(n)
// Space: O(1)

Input: (nums = [3, 2, 2, 3]), (val = 3);
Output: 2, (nums = [2, 2, _, _]);

function removeElement(nums, val) {
  let slow = 0; // place for non-val

  // fast pointer should iterate the whole array
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== val) {
      // if current element is not val
      nums[slow] = nums[fast]; // overwrite
      slow++;
    }
  }

  return slow;
}
