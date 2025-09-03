let arr1 = [1, 2, 2, 3];
let arr2 = [2, 3, 4];
let setA = new Set(arr1);
let result = [];
for (let item of arr2) {
  if (setA.has(item)) {
    result.push(item);
  }
}
console.log(result);
// [2,3]

// Another way
let arr3 = [1, 2, 2, 3];
let arr4 = [2, 3, 4];

console.log(
  [...new Set(arr3)].filter((item) => [...new Set(arr4)].includes(item)),
);
// [2,3]
