function compressString(str) {
  if (!str) return "";

  let result = "";
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      while (count > 9) {
        result += str[i - 1] + "9";
        count -= 9;
      }
      if (count === 1) {
        let lastNineChunk = result.endsWith(str[i - 1] + "9");
        if (lastNineChunk) {
          result += str[i - 1] + "1";
        } else {
          result += str[i - 1];
        }
      } else {
        result += str[i - 1] + count;
      }
      count = 1;
    }
  }
  return result;
}

console.log(compressString("aaabbbccccccccccc"));
// a3b3c9c2
