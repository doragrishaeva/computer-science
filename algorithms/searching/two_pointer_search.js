// IDEA
// Use two pointers:
// - One starting from the beginning (left)
// - One starting from the end (right)
// OR: use a fast and a slow pointer (fast moves every step, slow moves conditionally)

// COMMON PROBLEMS
// 1. Find two numbers that sum to a target
// 2. Remove duplicates from a sorted array
// 3. Check if a string is a palindrome
// 4. Merge two sorted arrays
// 5. Move all zeroes to the end
// 6. Find the container with the most water (max area between lines)

function twoSumSorted(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [arr[left], arr[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}
