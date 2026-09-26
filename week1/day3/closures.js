function makeCounter() {
  let count = 1;
  return function adder() {
    return count++;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

const counter2 = makeCounter();
console.log(counter2()); // 1, not 4
console.log(counter()); // 4, the first counter kept going

// A closure is a function that can access variables declared outside 
// in this case, count exists in the "makecounter" lexical environment 
// and all functions remember the lexical environment where they were created 
//(inner to outer)
