'use strict';
let numbers = [];
for (let i = 1; i <= 5; i++) {
  numbers.push(parseInt(prompt("Enter a number")));
}
document.querySelector("#p1").innerHTML = "Numbers: " + numbers.join(", ") + "\n";
let search = parseInt(prompt("Enter a number to search"));
if (numbers.includes(search)) {
  document.querySelector("#p2").innerHTML = "The number " + search + " is in here\n";
}
else {
  document.querySelector("#p2").innerHTML = "The number " + search + " is not in here\n";
}
numbers.pop();
document.querySelector("#p3").innerHTML = "Numbers: " + numbers.join(", ") + "\n";
numbers.sort((a, b) => a - b);
document.querySelector("#p4").innerHTML = "Numbers: " + numbers.join(", ") + "\n";
