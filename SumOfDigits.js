function sumOfDigits(root) {
  let result = 0;
  if (root === 0) return 0;
  if (root < 10) {
    return root;
  }
  result = root
    .toString()
    .split("")
    .reduce((acc, it) => acc + parseInt(it), 0);
  return sumOfDigits(result);
}
console.log(sumOfDigits(123)); // 6
console.log(sumOfDigits(4567)); // 4567
console.log(sumOfDigits(0)); // 0
// 123 ➞ 1 + 2 + 3 = 6
// 4567 ➞ 4 + 5 + 6 + 7 = 22 ➞ 2 + 2 = 4
// 0 ➞ 0
