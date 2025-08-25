function countVowels(vow, sent) {
  const obj = {};
  for (let letter of sent) {
    if (vow.includes(letter)) {
      obj[letter] = (obj[letter] || 0) + 1;
    }
  }
  return Object.keys(obj)
    .sort()
    .map((a) => `${a} : ${obj[a]}`);
}
const vow = ["a", "e", "i", "o", "u"];
const sent = "i am aeiou juganavar";
console.log(countVowels(vow, sent));
// ["a : 5", "e : 1", "i : 2", "o : 1", "u : 2"]
