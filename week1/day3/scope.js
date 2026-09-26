let a = "global";

function outer() {
  let b = "outer";
  console.log(a); // can you see a here?
  console.log(b); // and b?

  function inner() {
    let c = "inner";
    console.log(a); // a?
    console.log(b); // b?
    console.log(c); // c?
  }
  inner();
}

outer();
console.log(a);
console.log(b);//this doesn't run because b = "outer" is a variable with a scope of thr function body 
