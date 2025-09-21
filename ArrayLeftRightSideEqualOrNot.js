function findPivot(arr){
    let totalSum = arr.reduce((acc, it)=> acc+it,0);
    let leftSum = 0;
    for(let i=0; i<arr.length; i++){
      let rightSum = totalSum-leftSum-arr[i];
      if(rightSum === leftSum){
        return i;
      }
      leftSum += arr[i];
    }
    return -1;
  }
  const array=[1,7,5,6,8,5]; // 3
  // const array=[1,7,5,6,8,4]; // -1
  console.log(findPivot(array));
  