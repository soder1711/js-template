const tasks = [
  { title: "Buy groceries", priority: "High" },
  { title: "Read a book", priority: "Medium" },
  { title: "Go for a run", priority: "Low" }
];
function getFormattedTasks(tasks) {
  const formattedTasks = [];
  tasks.forEach((task) => {
    const formattedTask = `Task: ${task.title}, Priority: ${task.priority}`;
    formattedTasks.push(formattedTask);
  });
  return formattedTasks;
}
const formattedTasks = getFormattedTasks(tasks);
console.log(formattedTasks);

// output:
// [ 'Task: Buy groceries, Priority: High',
//   'Task: Read a book, Priority: Medium',
//   'Task: Go for a run, Priority: Low' ]
