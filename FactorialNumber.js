const factorialNum = (num) => {
  if (num === 0) return 1;
  return num * factorialNum(num - 1);
};

console.log(factorialNum(6));
// 720
