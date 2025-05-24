// const operate = function(a, b, func) {
//   return func(a, b);
// };

// using arrow 
// const operate = (a, b, func) => func(a, b);

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(operate(5, 3, add));      // Output: 8
console.log(operate(5, 3, multiply)); // Output: 15
