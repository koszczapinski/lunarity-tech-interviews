function lengthOfLongestSubstring(s) {
  // Create a Map to store character positions
  const charMap = new Map();
  let maxLength = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    // If we find a repeating character, update the start pointer
    if (charMap.has(char) && charMap.get(char) >= start) {
      start = charMap.get(char) + 1;
    } else {
      // Update maxLength if current window is larger
      maxLength = Math.max(maxLength, end - start + 1);
    }

    // Update character position
    charMap.set(char, end);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Should output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Should output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Should output: 3

// Time Complexity: O(n) - we only traverse the string once
// Space Complexity: O(min(m, n)) - where m is the size of the character set
