function averageOfAnArray(arr) {
  if (arr.length === 0) return null;
  let sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
}

console.log(averageOfAnArray([1, 2, 3, 4, 5])); // 3
console.log(averageOfAnArray([10, 20, 30, 40, 50])); // 30
console.log(averageOfAnArray([])); // null
