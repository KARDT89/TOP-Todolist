import app from "../app.js";

const todoList = document.querySelector(".todo-list");
let setCurrentTodoId = null;
let setCurrentProjectId = null;

export function fetchTodosByProjectId(projectId) {
  todoList.innerHTML = "";
  const currentProject = app.searchProjectById(projectId);
  let li = document.createElement("li");
  let h3 = document.createElement("h3");
  h3.innerHTML = currentProject.projectName;
  currentProject.todos.forEach((todo) => {
    let div = document.createElement("div");
    div.classList.add("todo-card");
    let title = document.createElement("p");
    let id = document.createElement("p");
    let description = document.createElement("p");
    let priority = document.createElement("p");
    let date = document.createElement("p");
    let isCompleted = document.createElement("input");
    let editBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");
    editBtn.innerText = "Edit Todo";
    editBtn.dataset.id = todo.id;
    deleteBtn.innerText = "Delete Todo";
    deleteBtn.dataset.id = todo.id;
    isCompleted.type = "checkbox";
    isCompleted.checked = todo.isCompleted;
    title.textContent = todo.title;
    id.textContent = todo.id;
    description.textContent = todo.description;
    priority.textContent = todo.priority;
    date.textContent = todo.date;
    li.appendChild(id);
    li.appendChild(title);
    li.appendChild(description);
    li.appendChild(priority);
    li.appendChild(date);
    li.appendChild(isCompleted);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    div.appendChild(li);
    editBtn.addEventListener("click", () => {
      editTodo(todo.id);
      setCurrentProjectId = todo.project;
    });
    isCompleted.addEventListener("click", () => {
      toggleTodo(todo.id)
    });
    deleteBtn.addEventListener("click", () => {
      app.deleteTodo(todo.id, todo.project);
      fetchAllTodos();
    });
  });
  todoList.appendChild(h3);
  todoList.appendChild(li);
}

export function fetchAllTodos() {
  todoList.innerHTML = "";
  const allProjects = app.allProjects;

  allProjects.forEach((project) => {
    let li = document.createElement("li");
    li.classList.add("todo-card-compact");
    let h3 = document.createElement("h3");
    h3.innerHTML = project.projectName;

    project.todos.forEach((todo) => {
      let p = document.createElement("p");
      let check = document.createElement("input");
      check.type = "checkbox";
      check.checked = todo.isCompleted;
      check.classList.add("toggleTodoCheckBox");
      p.classList.add("todoTitle-compact");
      p.innerText = todo.title;
      if(todo.isCompleted) {
        p.style.textDecoration = "line-through"
      } else {
        p.style.textDecoration = "none"
      }
      li.appendChild(check);
      li.appendChild(p);
      check.addEventListener("click", () => toggleTodo(todo.id));
    });
    todoList.appendChild(h3);
    todoList.appendChild(li);
  });
}

document.getElementById("show-all-todos").addEventListener("click", () => {
  fetchAllTodos();
});

const showTodoDialogBtn = document.getElementById("add-todos");
const closeTodoDialogBtn = document.getElementById("js-close");
const closeEditTodoDialogBtn = document.getElementById("js-close2");
const todoDialog = document.getElementById("todo-dialog");
const editTodoDialog = document.getElementById("edit-todo-dialog");
// const toggleTodoBtn = document.querySelector(".toggleTodoCheckBox");
// let todoTitleCompact = document.querySelector(".todoTitle-compact");

function toggleTodo(TodoId){
  app.toggleTodo(TodoId)
  fetchAllTodos()
}

showTodoDialogBtn.addEventListener("click", () => {
  todoDialog.show();
  fetchProjectsTodoForm("select-project");
});

closeTodoDialogBtn.addEventListener("click", (e) => {
  e.preventDefault();
  todoDialog.close();
});
closeEditTodoDialogBtn.addEventListener("click", (e) => {
  e.preventDefault();
  editTodoDialog.close();
});

function fetchProjectsTodoForm(selectId) {
  const allProjects = app.allProjects;
  const selectProject = document.getElementById(selectId);
  selectProject.innerHTML = "";
  allProjects.forEach((project) => {
    const option = document.createElement("option");
    option.value = project.projectId;
    option.innerText = project.projectName;
    selectProject.appendChild(option);
  });
}

const todoForm = document.getElementById("todo-form");
const editTodoForm = document.getElementById("edit-todo-form");
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = e.target["title"].value;
  let description = e.target["description"].value;
  let date = e.target["date"].value;
  let priority = e.target["priority"].value;
  let project = e.target["project"].value;
  let isCompleted = e.target["completed"].checked;
  app.addTodo(title, description, date, priority, project, isCompleted);
  fetchAllTodos();
  todoDialog.close();
});

editTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = e.target["title"].value;
  let description = e.target["description"].value;
  let date = e.target["date"].value;
  let priority = e.target["priority"].value;
  let project = e.target["project"].value;
  let isCompleted = e.target["completed"].checked;
  app.editTodo(
    setCurrentTodoId,
    setCurrentProjectId,
    title,
    description,
    date,
    priority,
    project,
    isCompleted
  );
  fetchAllTodos();
  editTodoDialog.close();
});

function editTodo(todoId) {
  editTodoDialog.show();
  fetchProjectsTodoForm("select-edit-project");
  setCurrentTodoId = todoId;
}
