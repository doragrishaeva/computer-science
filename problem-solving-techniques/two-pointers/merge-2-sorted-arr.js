// CONDITIONS:
// Given two sorted arrays arr1 and arr2, merge them into one sorted array and return the result.
// You should not sort the result after merging — use the sorted order of the original arrays.

// WHAT TO DO:
// Initialize two pointers, one for each array
// Compare elements at both pointers and push the smaller one into a result array
// Move the pointer that had the smaller value
// Continue until one array is exhausted
// Append the remaining elements from the other array
// This allows us to merge two sorted arrays without sorting the result

// COMPLEXITY:
// Time complexity: O(n + m)
// Space complexity: O(n + m)
// (where n = arr1.length, m = arr2.length)

function mergeSortedArrays(arr1, arr2) {
  let result = []; // for result
  let i = 0,
    j = 0; // two pointers: i — for arr1, j — for arr2

  // while there are elements in both arrays
  while (i < arr1.length && j < arr2.length) {
    // compare elements
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]); // arr[i] smaller → add it
      i++; // move to the next element in arr1
    } else {
      result.push(arr2[j]); // arr2[j] smaller → add it
      j++; // move to the next element in arr2
    }
  }

  // adding the rest of the elements from arr1 (if there are any)
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  // adding the rest of the elements from arr2 (if there are any)
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
// → [1, 2, 3, 4, 5, 6]
