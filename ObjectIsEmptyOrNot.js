function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
  // return Object.hasOwnProperty(obj);
}

console.log(isObjectEmpty({})); // true
console.log(isObjectEmpty({ name: "Raju" })); // false
console.log(isObjectEmpty(Object.create(null))); // true
