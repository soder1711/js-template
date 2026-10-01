// Sample students array
const students = [
  { name: "Alice", age: 20, grade: "A" },
  { name: "Bob", age: 21, grade: "B" },
  { name: "Eve", age: 19, grade: "A" }
];

// TODO: Implement the getStudentNames function
function getStudentNames(students) {
  return students.map(student => student.name);
  // TODO: Use the map function to extract student names
}

// Test the getStudentNames function
const studentNames = getStudentNames(students);
console.log(studentNames);

// Output should be:
// [ 'Alice', 'Bob', 'Eve' ]
