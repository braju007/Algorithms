function areAnagrams(str1, str2) {
  const word1 = str1.split("").sort().join("");
  const word2 = str2.split("").sort().join("");
  return word1 === word2;
}
console.log(areAnagrams("silent", "listen"));
// true
