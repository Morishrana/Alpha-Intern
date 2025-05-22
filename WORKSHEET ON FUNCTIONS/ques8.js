function containsHello(str) {
  return /hello/i.test(str);
}
console.log(containsHello("Hello there!")); // Output: true
console.log(containsHello("hi there"));     // Output: false
