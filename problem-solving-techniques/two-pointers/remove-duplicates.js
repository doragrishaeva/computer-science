// CONDITIONS:
// Given a sorted array nums
// Remove the duplicates in-place such that each unique element appears only once.
// Return the new length.

// WHAT TO DO:
// Use two pointers: fast to scan the array, slow to track the end of the unique portion
// For each element, compare nums[fast] with nums[slow]
// If they are different, move slow forward and copy the current element to nums[slow]
// This way, we overwrite duplicates while preserving the sorted order of unique elements
// Return the length of the unique part (slow + 1)

// COMPLEXITY:
// Time complexity: O(n)
// Space complexity: O(1)

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let slow = 0; // place for unique value

  //   fast pointer should iterate the whole array
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      //means nums[fast] is unique
      slow++; // increase index to place unique value next to prev value
      nums[slow] = nums[fast]; // insert unique value
    }
  }

  return slow + 1; // length of unique part
}

const nums = [1, 1, 2, 2, 3];
const len = removeDuplicates(nums);

// to get the unique part
console.log(nums.slice(0, len)); // [1, 2, 3]

// to get the length of unique part
console.log("Length:", len); // 3

// fast - goes through the array
// slow - goes through the unique part
