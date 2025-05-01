// CONDITIONS:
// Reverse array in-place (without creating new array) and withour reverse()

// WHAT TO DO:
// Use two pointers: one at the start, one at the end of the array
// While left < right, swap the elements at left and right
// Move both pointers inward (left++, right--)
// This continues until all pairs are swapped, effectively reversing the array in-place

// COMPLEXITY:
// Time complexity: O(n)
// Space complexity: O(1)

Input: [1, 2, 3, 4];
Output: [4, 3, 2, 1];

function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}

console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]
