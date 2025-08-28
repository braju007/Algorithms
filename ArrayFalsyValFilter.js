function removeFalsyValues(array) {
  return array.filter(Boolean);
}

console.log(
  removeFalsyValues([1, 0, undefined, null, false, true, {}, [], ![]]),
);
// Array [1, true, Object {  }, Array []]
