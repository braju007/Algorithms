function createBase(bN) {
  return function (n) {
    return bN * n;
  };
}
var addSix = createBase(6);
console.log(addSix(10)); // 60
