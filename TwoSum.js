function twoSum(arr, target){
    let map = new Map();
    for(let i=0; i<arr.length; i++){
        let paired = target - arr[i];
        if(map.has(paired)){
            return [map.get(paired), i];
        }
        map.set(arr[i], i);
    }
}
const arr = [2,3,4,5,6,7];
console.log(twoSum(arr, 9)); // [ 2, 3 ]
console.log(twoSum(arr, 15)); // undefined
console.log(twoSum(arr, 13)); // [ 4, 5 ]