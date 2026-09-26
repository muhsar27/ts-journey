const rate = 1326.38;
function nairaToUsd(amount) {
  return amount / rate;
}

function usdToNaira(amount) {
  return amount * rate;
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function kgToPounds(kg) {
  return kg * 2.20462;
}

console.log(celsiusToFahrenheit(0));

console.log(celsiusToFahrenheit(100));
console.log(usdToNaira(nairaToUsd(5000)));
