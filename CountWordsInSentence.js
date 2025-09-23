function countWords(str) {
  const words = str.trim().toLowerCase().split(/\s+/);
  const freq = {};
  for (let word of words) {
    freq[word] = (freq[word] || 0) + 1;
  }
  return freq;
}

console.log(countWords("hello world hello raju"));
// { hello: 2, world: 1, raju: 1 }
console.log(countWords("one two three one four two one"));
// { one: 3, two: 2, three: 1, four: 1 }
