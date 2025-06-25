import app from "../app.js";

const todoList = document.querySelector(".todo-list");
let setCurrentTodoId = null;
let setCurrentProjectId = null;

export function fetchTodosByProjectId(projectId) {
  todoList.innerHTML = "";
  const currentProject = app.searchProjectById(projectId);
  let li = document.createElement("li");
  // li.classList.add("todo-card", "todo-card-default")
  let h3 = document.createElement("h3");
  h3.innerHTML = currentProject.projectName;
  currentProject.todos.forEach((todo) => {
    let div = document.createElement("div");
    div.classList.add("todo-card", "todo-card-default");
    let title = document.createElement("h1");
    let id = document.createElement("p");
    let description = document.createElement("h2");
    let priority = document.createElement("p");
    let date = document.createElement("p");
    let isCompleted = document.createElement("input");
    let editBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");
    let span1 = document.createElement("span");
    let span2 = document.createElement("span");
    let span3 = document.createElement("span");
    let span4 = document.createElement("span");
  
    let markAsCompleted = document.createElement("p");
    markAsCompleted.innerText = "Mark as Completed"
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
    span1.appendChild(title)
    span1.appendChild(isCompleted)
    div.appendChild(span1);
    div.appendChild(description);
    span2.append(priority)
    span2.append(date)
    span3.appendChild(editBtn)
    span3.appendChild(deleteBtn)
    div.appendChild(span2);
    div.appendChild(span3);
    li.appendChild(div);
    if(todo.priority === "high"){
        div.style.backgroundColor = "hsla(0 59.7% 54.3% / 0.7)"
      } else if (todo.priority === "medium"){
        div.style.backgroundColor = "hsl(57 100% 76.8%)"
        div.style.color = "black"
      } else {
         div.style.backgroundColor = "hsla(205 90.5% 54.3% / 0.71)"
      }

      if(todo.isCompleted) {
        div.style.backgroundColor = "hsl(120, 50%, 75%)"
        div.style.color = "black"
      } 
    editBtn.addEventListener("click", () => {
      editTodo(todo.id);
      setCurrentProjectId = todo.project;
      document.getElementById("edit-todo-title").value = todo.title
      document.getElementById("edit-todo-description").value = todo.description
      document.getElementById("edit-todo-date").value = todo.date
      document.getElementById("edit-todo-priority").value = todo.priority
      document.getElementById("select-edit-project").value = todo.project
      document.getElementById("edit-todo-isCompleted").value = todo.isCompleted
    });
    isCompleted.addEventListener("click", () => {
      toggleTodo2(todo.id)
    });
    deleteBtn.addEventListener("click", () => {
      app.deleteTodo(todo.id, todo.project);
      app.saveToLocalStorage();
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
    // li.classList.add("todo-card-compact");
    let h3 = document.createElement("h3");
    h3.innerHTML = project.projectName;

    project.todos.forEach((todo) => {
      let div = document.createElement("div");
      div.classList.add("todo-card", "todo-card-compact");
      let p = document.createElement("p");
      let check = document.createElement("input");
      check.type = "checkbox";
      check.checked = todo.isCompleted;
      check.classList.add("toggleTodoCheckBox");
      p.classList.add("todoTitle-compact");
      p.innerText = todo.title;
      if(todo.priority === "high"){
        div.style.backgroundColor = "hsla(0 59.7% 54.3% / 0.7)"
        // div.style.color = "black"
      } else if (todo.priority === "medium"){
        div.style.backgroundColor = "hsl(57 100% 76.8%)"
        div.style.color = "black"
      } else {
         div.style.backgroundColor = "hsla(205 90.5% 54.3% / 0.71)"
        //  div.style.color = "black"
      }

      if(todo.isCompleted) {
        p.style.textDecoration = "line-through"
        div.style.backgroundColor = "hsl(120, 50%, 75%)"
        div.style.color = "black"
      } else {
        p.style.textDecoration = "none"
      }
      div.appendChild(check);
      div.appendChild(p);
      li.appendChild(div)
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
  app.saveToLocalStorage();
  fetchAllTodos()
}

function toggleTodo2(TodoId){
  app.toggleTodo(TodoId)
  app.saveToLocalStorage();
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
  app.saveToLocalStorage();
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
  app.saveToLocalStorage();
  fetchAllTodos();
  editTodoDialog.close();
});

function editTodo(todoId) {
  editTodoDialog.show();
  fetchProjectsTodoForm("select-edit-project");
  setCurrentTodoId = todoId;
}
