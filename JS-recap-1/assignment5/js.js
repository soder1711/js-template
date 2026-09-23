'use strict';
let number = parseInt(prompt("Enter a number"));
let sum = 0;
for (let i = 1; i <= number; i++) {
  sum += i;
}
document.querySelector("#target").innerHTML = sum;
