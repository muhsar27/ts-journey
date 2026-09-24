// const values = [0, 1, -1, "", "hello", "0", null, undefined, NaN, [], {}];

// for (const v of values) {
// if (v) {
// console.log(v, "is truthy");
// } else {
// console.log(v, "is falsy");
// }
// }

/* falsy value: 
0(NUMBER), null, undefined, NaN, "", 
*/

// console.log(true && false);
// console.log(true || false);
// console.log(!true);

// console.log("hello" && "world");
// console.log("" || "fallback");
// console.log(null ?? "default");
// console.log(0 || "default");
// console.log(0 ?? "default");

// "||" falls back on any of the falsy values
// "??" falls back on null or undefined only 

const age = 20;
const status = age >= 18 ? "adult" : "minor";
console.log(status);

//A ternary is an if/else that produces a value.
//  Use it when you are choosing between two values
// . Do not use it when you are doing two different actions.