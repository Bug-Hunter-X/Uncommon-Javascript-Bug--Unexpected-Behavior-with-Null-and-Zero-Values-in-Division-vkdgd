function foo(a, b) {
  // Input validation
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Both arguments must be numbers.');
  }

  if (b === 0) {
    return Infinity; // Handle division by zero
  } else if (a === null || b === null) {
    return null; // Handle null values
  } else if (a === 0 || b === 0) {
    return 0; // Handle zero values
  } else {
    return a / b; // Perform division
  }
}

console.log(foo(10, 2)); // Output: 5
console.log(foo(10, 0)); // Output: Infinity
console.log(foo(null, 2)); // Output: null
console.log(foo(10, null)); // Output: null
console.log(foo("hello",2)); // throws an error
console.log(foo(10,"world")); // throws an error