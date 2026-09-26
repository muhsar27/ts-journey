function add(a, b) {
  return a + b;
} // declaration
const add2 = function (a, b) {
  return a + b;
}; // expression
const add3 = (a, b) => a + b; // arrow, implicit return

function greet(name = "friend") {
  return `Hello, ${name}`;
}

const greet2 = function(name = "friend"){
    return `Hello, ${name}`
}

const greet3 = (name = "friend") => `Hello, ${name}`;

console.log(greet()); // Hello, friend
console.log(greet("Ada")); // Hello, Ada

console.log(greet2()); // Hello, friend
console.log(greet2("Ada")); // Hello, Ada

console.log(greet3()); // Hello, friend
console.log(greet3("Ada")); // Hello, Ada