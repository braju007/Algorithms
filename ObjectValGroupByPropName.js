function groupBy(arr, key) {
  const result = {};
  for (const item of arr) {
    const keyVal = item[key];
    if (!result.hasOwnProperty(keyVal)) {
      result[keyVal] = [];
    }
    result[keyVal].push(item);
  }
  return result;
}
const items = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];
console.log(groupBy(items, "age"));
// {
//   '25': [ { name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 } ],
//   '30': [ { name: 'Bob', age: 30 } ]
// }
