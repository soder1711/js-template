'use strict';
let a = parseInt(prompt("Enter the length of this side of a triangle"));
let b = parseInt(prompt("Enter the length of this side of a triangle"));
let c = parseInt(prompt("Enter the length of this side of a triangle"));
let text;
if (a === b && b === c) {
  text = "This triangle is equilateral";
}
else if (a !== b && b !== c && a !== c) {
  text = "This triangle is scalene";
}
else {
  text = "This triangle is isosceles";
}
document.querySelector('#target').innerHTML = text;
