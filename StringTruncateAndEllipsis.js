function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
}
console.log(truncateString("Hello World", 5));
// Hello...
console.log(truncateString("Raju", 5));
// Raju
console.log(truncateString("Hello World", 3));
// Hel...
