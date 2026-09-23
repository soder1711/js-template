let fruits = ["apple", "banana", "orange", "grape", "kiwi"];
console.log("Fruits: [" + fruits.join(", ") + "]");
console.log("Length of fruits:" + fruits.length);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);
let vegetables = [];
for (let i = 0; i < 3; i++) {
  let vegetable = prompt("What do you want to add to the vegetables?");
  vegetables.push(vegetable);
}
console.log("Vegetables: [" + vegetables.join(", ") + "]");
console.log(vegetables.length);
