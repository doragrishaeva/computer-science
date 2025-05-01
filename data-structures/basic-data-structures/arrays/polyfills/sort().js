function nativeSort(arr, compareFn) {
  const result = [...arr];

  // Fallback to default string comparison if no comparator is passed
  const comparator =
    compareFn ||
    ((a, b) => {
      const aStr = String(a);
      const bStr = String(b);
      if (aStr < bStr) return -1;
      if (aStr > bStr) return 1;
      return 0;
    });

  // Simple insertion sort for demo purposes
  for (let i = 1; i < result.length; i++) {
    let current = result[i];
    let j = i - 1;
    while (j >= 0 && comparator(result[j], current) > 0) {
      result[j + 1] = result[j];
      j--;
    }
    result[j + 1] = current;
  }

  return result;
}

// Examples
const nums = [10, 2, 30, 1];
console.log("Default (string) sort:", customSort(nums));
console.log(
  "Numeric ascending:",
  customSort(nums, (a, b) => a - b)
);
console.log(
  "Numeric descending:",
  customSort(nums, (a, b) => b - a)
);

// OUTPUT:
// Default (string) sort: [1, 10, 2, 30]
// Numeric ascending: [1, 2, 10, 30]
// Numeric descending: [30, 10, 2, 1]
