(function(n) {
  function factorial(x) {
    if (x < 0) return undefined; // Factorial is undefined for negative numbers
    if (x === 0 || x === 1) return 1;
    return x * factorial(x - 1);
  }
  console.log(`Factorial of ${n} is ${factorial(n)}`);
})(5); // Replace 5 with any number you wish to calculate the factorial of
