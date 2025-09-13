function mergeObjects(obj1, obj2) {
  const result = {};
  for (let key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      result[key] = obj1[key];
    }
  }
  for (let key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      result[key] = obj2[key];
    }
  }
  return result;
}

console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, d: 4 }));
// { a: 1, b: 3, d: 4 }
console.log(mergeObjects({ name: "Rishvika" }, { age: 1.6 }));
// { name: 'Rishvika', age: 1.6 }
