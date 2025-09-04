function removeSpecifiedVal(arr, value) {
  return arr.filter((item) => item !== value);
}
console.log(removeSpecifiedVal([1, 2, 3, 4, 5], 4));
// [ 1, 2, 3, 5 ]
console.log(removeSpecifiedVal(["a", "b", "c"], "a"));
// [ 'b', 'c' ]
