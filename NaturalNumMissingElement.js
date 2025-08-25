function findMissingArrayElement(arr) {
  const n = arr.length + 1;
  const sum = (n * (n + 1)) / 2;
  const arrSum = arr.reduce((a, b) => a + b);
  return sum - arrSum;
}
const arr = [1, 2, 3, 4, 5, 6, 8];
console.log(findMissingArrayElement(arr));
// 7
