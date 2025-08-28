function solution(arr) {
  const map = new Map();
  for (const str of arr) {
    const anag = str.split("").sort().join("");
    if (!map.has(anag)) {
      map.set(anag, []);
    }
    map.get(anag).push(str);
  }
  const res = [];
  for (const anag of map.values()) {
    res.push(anag);
  }
  return res;
}
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(solution(strs));
// [["eat", "tea", "ate"],["tan", "nat"],["bat"]]
