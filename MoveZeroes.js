function moveZeroesToEnd(arr) {
  const nonBooleanValues = arr.filter(Boolean);
  for (let i = nonBooleanValues.length; i < arr.length; i++) {
    nonBooleanValues.push(0);
  }
  return nonBooleanValues;
}
const arr = [1, 0, 3, 0, 5, 0];
console.log(moveZeroesToEnd(arr));
// [1, 3, 5, 0, 0, 0]
