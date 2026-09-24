// console.log("5" + 3);//concatenates both as a string (53)
// console.log("5" - 3); // my guess: Error , actual = treated the string as a number and subtracted
// console.log("5" * "2");//my guess: multiplies like a number, actual: it actually does and converts to number
// console.log(5 + true);// my guess: 6(true means 1 in boolean) , actual = correct
// console.log(5 + null);// my guess: 5 , actual = 5
// console.log(5 + undefined);// my guess: 5 , actual = NaN
// console.log("" + 0);// my guess: 0 , actual = 0 but string
// console.log([] + []);// my guess: no idea , actual = blank
// console.log([] + {});// my guess: no idea , actual = array of both "object"s

// console.log(null == undefined);// my guess: true , actual = true
// console.log(null === undefined);// my guess: false , actual = false
// console.log(0 == "");// my guess: true , actual = true
// console.log(0 === "");// my guess: false , actual = false
// console.log(0 == false);// my guess: true , actual = true
// console.log("0" == false);// my guess: true , actual = true
// console.log(NaN == NaN);// my guess: true , actual = false

// console.log(typeof 42);// my guess: number , actual = number
// console.log(typeof "hello");// my guess: string , actual = string
// console.log(typeof true);// my guess: boolean , actual = boolean
// console.log(typeof undefined);// my guess: undefined , actual = undefined
// console.log(typeof null);// my guess: null , actual = object
// console.log(typeof []);// my guess: object , actual = object

// console.log(0.1 + 0.2);// my guess: 0.3 , actual = 0.30000000000000004
// console.log(0.1 + 0.2 === 0.3);// my guess: false , actual = false

// const x = 5;
// x = 10 //const variables are unchangeable, this will spring up a typeerror

// console.log(x)

// const person = { name: "Ada" };
// person.name = "Grace"; //const locks the binding but not the contents, so object declared by const can have their parameters altered
// console.log(person);

const userName = "Ada";
const age = 24;
console.log(`Name: ${userName}, age: ${age}`);

/*Some areas of genuine surprise for me 
console.log("5" - 3); // my guess: Error , actual = treated the string as a number and subtracted
console.log(5 + undefined);// my guess: 5 , actual = NaN
console.log(0.1 + 0.2);// my guess: 0.3 , actual = 0.30000000000000004
console.log(NaN == NaN);// my guess: true , actual = false
console.log(typeof null);// my guess: null , actual = object
*/
