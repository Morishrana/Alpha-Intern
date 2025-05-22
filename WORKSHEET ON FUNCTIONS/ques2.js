function findGreaterNumber(a, b) {
  if (a > b) {
    return `${a} is greater than ${b}`;
  } else if (b > a) {
    return `${b} is greater than ${a}`;
  } else {
    return "Both numbers are equal.";
  }
}
console.log(findGreaterNumber(10, 20)); // Output: "20 is greater than 10"
console.log(findGreaterNumber(30, 15)); // Output: "30 is greater than 15"
console.log(findGreaterNumber(25, 25)); // Output: "Both numbers are equal."
