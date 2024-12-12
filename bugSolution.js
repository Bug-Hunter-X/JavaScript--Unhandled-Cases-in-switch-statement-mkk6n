function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return Infinity; // Handle division by zero
  }
  return a / b;
}

function calculate(a, b, operator) {
  if (typeof a !== 'number' || typeof b !== 'number'){
    return "Invalid input: operands must be numbers";
  }
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return "Invalid operator";
  }
}

console.log(calculate(10, 2, '+')); // 12
console.log(calculate(10, 2, '-')); // 8
console.log(calculate(10, 2, '*')); // 20
console.log(calculate(10, 2, '/')); // 5
console.log(calculate(10, 0, '/')); // Infinity
console.log(calculate(10, 2, '%')); //Invalid operator
console.log(calculate("hello",2,"+")); //Invalid input: operands must be numbers