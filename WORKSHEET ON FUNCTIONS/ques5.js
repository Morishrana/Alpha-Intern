function containsA(str) {
  return /a/i.test(str);
}
console.log(containsA("Apple"));   // Output: true
console.log(containsA("banana"));  // Output: true
console.log(containsA("Cherry"));  // Output: false
