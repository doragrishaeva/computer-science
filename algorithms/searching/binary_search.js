// IDEA:
// splitting the array in half until the target is found
// reduce the search space by half each time

// COMPLEXITY:
// Time complexity: O(log n)
// Space complexity: O(1)

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (target === arr[middle]) {
      return middle;
    } else if (target < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}
