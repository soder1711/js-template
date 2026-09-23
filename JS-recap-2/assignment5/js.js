'use strict';
function sortArray(array, order) {
  if (order === "asc") {
    return array.slice().sort((a, b) => a - b);
  }
  else if (order === "desc") {
    return array.slice().sort((a, b) => b - a);
  }
}
const numbers = [5, 2, 8, 1, 9];
console.log(sortArray(numbers, "asc"));
console.log(sortArray(numbers, "desc"));
