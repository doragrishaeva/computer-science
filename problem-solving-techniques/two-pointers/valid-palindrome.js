// CONDITIONS:
// Given a string, return true if it is a palindrome, or false otherwise.
// Only alphanumeric characters are considered, and case is ignored.

// WHAT TO DO:
// Use two pointers: one from the beginning, one from the end of the string
// At each step, compare characters at both pointers
// If they match, move both pointers inward and continue
// If a mismatch is found, return false
// If pointers meet or cross with no mismatches, return true

// Time complexity: O(n)
// Space complexity: O(1)

COMPLEXITY: function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
}

console.log(isSimplePalindrome("abba")); // true
console.log(isSimplePalindrome("abca")); // false
console.log(isSimplePalindrome("racecar")); // true
console.log(isSimplePalindrome("Racecar")); // false
