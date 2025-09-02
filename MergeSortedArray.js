function mergeSortedArrays(arr1, arr2) {
  const merged = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(mergeSortedArrays(arr1, arr2));
// [1, 2, 3, 4, 5, 6]
