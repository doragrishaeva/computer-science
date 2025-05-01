// CONDITIONS:
// Given an array of non-negative integers where each element represents the height of a vertical line on the x-axis,
// find two lines that together with the x-axis (width between them) form a container (area = height * width), such that the container holds the maximum amount of water.

// WHAT TO DO:
// Initialize two pointers: one at the beginning and one at the end of the array
// At each step, calculate the area using:
//   area = min(height[left], height[right]) × (right - left)
// Keep track of the maximum area found
// Move the pointer of 'the shorter line' inward, because only moving the shorter line might lead to a taller boundary and potentially more area
// Repeat until both pointers meet

// COMPLEXITY:
// Time complexity: O(n) — single pass from both ends
// Space complexity: O(1) — no additional memory used

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0; // max area

  while (left < right) {
    const h = Math.min(height[left], height[right]); // min height
    const w = right - left; // width
    const area = h * w; // area
    max = Math.max(max, area); // update max if area is greater than current max

    // Move the pointer at the shorter wall inward
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// → 49
// min height = min(8, 7) = 7
// width = 8 - 1 = 7 (8th index of 7 - 1st index of 8)
// area = 7 * 7 = 49
