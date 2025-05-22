function checkNumberSign(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}
console.log(checkNumberSign(10));  // Output: "Positive"
console.log(checkNumberSign(-5));  // Output: "Negative"
console.log(checkNumberSign(0));   // Output: "Zero"
