function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  } else if (a === 0 || b === 0) {
    return 0; // Handle zero values
  } else {
    return a / b; // Perform division
  }
}

console.log(foo(10, 2)); // Output: 5
console.log(foo(10, 0)); // Output: 0
console.log(foo(null, 2)); // Output: null
console.log(foo(10, null)); // Output: null