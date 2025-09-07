function arrayToObj(arr) {
  return arr.reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}

console.log(
  arrayToObj([
    ["a", 1],
    ["b", 2],
  ]),
);
// { a: 1, b: 2 }
