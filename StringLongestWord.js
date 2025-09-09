function findLongestWord(sentence) {
  let words = sentence.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
console.log(findLongestWord("i am basavaraj juganavar from yaragatti"));
// basavaraj
