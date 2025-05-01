// for string return max length of substring without repeating characters

// Input: "abcabcbb"     → Output: 3   // "abc"
// Input: "bbbbb"        → Output: 1   // "b"
// Input: "pwwkew"       → Output: 3   // "wke"
// Input: ""             → Output: 0

// window increased while without duplicates, and shrinked as duplicates appeared
// for duplicates in a window use Set or Map

// COMPLEXITY
// Time complexity: O(n)
// Space complexity: O(k) k - a substring size without duplicates

function lengthOfLongestSubstring(s) {
  let left = 0;
  let maxLen = 0;
  const seen = new Set();

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }

    seen.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
