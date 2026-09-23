'use strict';
function sortArray(array) {
  return array.slice().sort((a, b) => a - b);
}
const numbers = [5, 2, 8, 1, 9];
console.log(sortArray(numbers));
console.log(numbers);
