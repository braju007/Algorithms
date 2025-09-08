function flattenArray(array) {
  return array.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val),
    [],
  );
}

console.log(flattenArray([1, [2, 3], 4])); // [1, 2, 3, 4]
console.log(flattenArray([1, [2, [3, [4]]]])); // [1, 2, 3, 4]
console.log(flattenArray([[["a"]], [["b"]]])); // ['a', 'b']
console.log(flattenArray([])); // []
