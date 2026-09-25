'use strict';
let number = parseInt(prompt("Enter a number"));
let table = document.getElementById("target");
let row;
let column;
for (let i = 1; i <= number; i++) {
  row = document.createElement("tr");
  for (let j = 1; j <= number; j++) {
    column = document.createElement("td");
    let product = i * j;
    column.textContent = i*j;
    row.appendChild(column);
  }
  table.appendChild(row);
}


