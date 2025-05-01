// in arr find max sum of subarray within the size k

// COMPLEXITY
// Time complexity: O(n)
// Space complexity: O(1)

function maxSumSubarray(arr, k) {
  let windowSum = 0;
  let maxSum = 0;

  // FIRST STEP: sum of first k elements
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  maxSum = windowSum;

  // SECOND STEP: slide window
  for (let i = k; i < arr.length; i++) {
    const outgoing = arr[i - k]; // goes out
    const incoming = arr[i]; // comes in
    windowSum = windowSum - outgoing + incoming;
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}
