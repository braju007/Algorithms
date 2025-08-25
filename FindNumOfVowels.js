function countVowels(vow, str) {
  let count = 0;
  for (let letter of str) {
    vow.includes(letter) && count++;
  }
  return count;
}
const vow = ["a", "e", "i", "o", "u"];
const string = "i am aeiou juganavar";
console.log(countVowels(vow, string)); // 11
