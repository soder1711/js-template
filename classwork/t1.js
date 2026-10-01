// (function() {
//   const message = "Hello from IIFE";
//
//   function greet(name) {
//     console.log(message + ', ' + name);
//   }
//
//   greet('Alice');
// })();
//
// const multiply = (a, b) => a * b;
// console.log(multiply(2,3));
//
// const numbers = [1, 2, 3, 4, 5];
// const squared = numbers.map(num => num ** 2);
// console.log(squared.join(", "))
//
// const createPerson = (name, age) => ({ name, age });
// console.log(createPerson("John", 23))

const fahrenheits = [80, 90, 100, 105];
fahrenheits.forEach(fahrenheit => {
  let C = (fahrenheit - 32) *(5/9);
  console.log(C.toFixed(2))
});
