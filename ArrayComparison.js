function checkArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

console.log(checkArrays([1, 2, 3], [1, 2, 3])); // true
console.log(checkArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])); // true
console.log(checkArrays([1, 2], [1, 2, 3])); // false
