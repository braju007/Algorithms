function flattenArray(array) {
  const result = [];
  if (array.length === 0) {
    return [];
  }
  for (let item of array) {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(flattenArray([1, [2, 3], 4])); // [1, 2, 3, 4]
console.log(flattenArray([1, [2, [3, [4]]]])); // [1, 2, 3, 4]
console.log(flattenArray([[["a"]], [["b"]]])); // ['a', 'b']
console.log(flattenArray([])); // []
