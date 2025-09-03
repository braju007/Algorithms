function repeatNTimes(str, num) {
  if (str.length === 0) {
    return "";
  }
  return str.repeat(3);
}

console.log(repeatNTimes("abc", 3));
// 'abcabcabc'
