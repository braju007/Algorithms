function flattenObject(obj, parentKey = "", result = {}) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const fullKey = parentKey ? `${parentKey}.${key}` : key;
      const value = obj[key];

      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        flattenObject(value, fullKey, result);
      } else {
        result[fullKey] = value;
      }
    }
  }
  return result;
}

//For the purpose of user debugging.
console.log(flattenObject({ a: { b: 1 } }));
// { 'a.b': 1 }
console.log(flattenObject({ x: 1, y: { z: { k: 2 } } }));
// { x: 1, 'y.z.k': 2 }
