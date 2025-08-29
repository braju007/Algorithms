function productExceptSelf(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (j === i) continue;
      product *= arr[j];
    }
    result.push(product);
  }
  return result;
}

const array = [1, 2, 3, 4];
console.log(productExceptSelf(array));
// [24, 12, 8, 6]
