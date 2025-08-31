const num1 = parseFloat(prompt("Enter Number 1: "));
const num2 = parseFloat(prompt("Enter Number 2: "));
const operator = prompt("Choose operator +, -, *, / : ");
let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
  default:
    result = "Invalid operator";
}
console.log(`Result: ${result}`);
