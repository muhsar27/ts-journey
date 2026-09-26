let number = Math.floor(Math.random() * 100) + 1;
let tries = 0;
const limit = 7;
let guesses = [];

while (tries < limit) {
  let guess = prompt("Guess a Number between 1 and 100");
  if (isNaN(Number(guess))) {
    alert("Not a Number");
    tries += 1;
    guesses.push(-1);

    continue;
  }

  if (Number(guess) == number) {
    alert("correct");
    break;
  } else if (Number(guess) < number) {
    guesses.push(guess);
    alert("Too Low");
  } else if (Number(guess) > number) {
    guesses.push(guess);

    alert("Too High");
  } else {
    alert("Edge case: cant handle atm");
  }
}

console.log(guesses);
