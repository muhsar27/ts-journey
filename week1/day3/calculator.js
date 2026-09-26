function operation() {
  const add = (a, b) => a + b
  const subtract = (a, b) => a + b
  const multiply = (a, b) => a + b
  const divide = (a, b) => a + b
   
}

function calculate(operation, a, b) {
    return operation(a, b);
  }

  console.log(calculate(add, 5, 3));      // 8
  console.log(calculate(multiply, 5, 3)); // 15
