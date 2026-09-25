// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const ul = document.querySelector("ul");
for (let todo of todoList) {
  ul.insertAdjacentHTML("beforeend", `<li><input type="checkbox" id="todo-${todo.id}" ${todo.completed ? "checked" : ""}><label for="todo-${todo.id}">${todo.task}</label><button id="delete-${todo.id}">Delete</button></li>`);
  const checkbox = document.querySelector(`#todo-${todo.id}`);
  checkbox.addEventListener('change', function() {
    todo.completed = checkbox.checked;
    console.log(todoList);
  });
  const deleteButton = document.querySelector(`#delete-${todo.id}`);
  deleteButton.addEventListener('click', function() {
    const index = todoList.indexOf(todo);
    todoList.splice(index, 1);
    const li = deleteButton.parentElement;
    li.parentNode.removeChild(li);
    console.log(todoList);
  });
}
const addButton = document.querySelector(`.add-btn`);
const dialog = document.querySelector("dialog");
const form = document.querySelector("form");
const input = document.querySelector("form input");
addButton.addEventListener('click', function() {
  dialog.showModal();
});
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const newTodo = {
    id: todoList.length + 1,
    task: input.value,
    completed: false
  };
  todoList.push(newTodo);
  console.log(todoList);
  dialog.close();
  input.value = "";
});
