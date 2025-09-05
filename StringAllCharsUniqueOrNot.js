function isUnique(str) {
  let lowerStr = str.toLowerCase();
  let map = new Map();
  for (let char of lowerStr) {
    if (map.has(char)) {
      return false;
    } else {
      map.set(char);
    }
  }
  return true;
}
console.log(isUnique("Helo")); // true
console.log(isUnique("Hello")); // false
console.log(isUnique("abcdef")); // true
