function firstNonRepeatedChar(str) {
  const charCount = {};
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  return null;
}
console.log(firstNonRepeatedChar("rajuraj"));

// “u” - Time complexity: O(n)
