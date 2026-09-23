'use strict';
let numbers = [];
let evenNumbers = [];
let answer = prompt("Enter a number (or 'done' to finish): ");
while (answer !== "done" && answer !== null && answer !== "") {
  let number = parseInt(answer);
  numbers.push(number);
  answer = prompt("Enter a number (or 'done' to finish): ");
}
document.querySelector("#p1").innerHTML = numbers.join(", ");
for (let number of numbers) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
}
if (evenNumbers.length > 0) {
  document.querySelector("#p2").innerHTML = "\nEven numbers: " + evenNumbers.join(", ");
}
else {
  document.querySelector("#p2").innerHTML = "Even numbers: None";
}
document.querySelector("#p3").innerHTML = "the end"
