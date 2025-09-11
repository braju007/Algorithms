function invertObjKeysValues(obj) {
  const result = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[obj[key]] = key;
    }
  }
  return result;
}

console.log(invertObjKeysValues({ a: 1, b: 2 }));
// { '1': 'a', '2': 'b' }
