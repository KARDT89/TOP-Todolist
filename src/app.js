import ProjectManager from "./ProjectManager.js"
import "./style.css"

const test = new ProjectManager();
test.addProject();
test.addProject("project-X");
test.addProject("project-Z");
test.addTodo("todo1", "ddes1", "project-X");
test.addTodo("todo69", "ddes1", "project-Z");
test.addTodo("deftodo1", "defddes1", "default");
test.addTodo("todo2", "des2", "project-X");
// test.deleteTodo("todo2", "project-X");
test.deleteProject("project-X")


document.addEventListener("DOMContentLoaded", (event) => {
  fetchProjects()
  fetchAllTodos()
});

const projectList = document.querySelector(".project-list")
const todoList = document.querySelector(".todo-list")


document.querySelector("#project").addEventListener("submit", (e) => {
    e.preventDefault();
    const pName = e.target["pName"].value
    test.addProject(pName)
    fetchProjects()
})

function fetchProjects(){
    projectList.innerHTML = ""
    test.allProjects.forEach((project) => {
        let li = document.createElement("li")
        let projectName = document.createElement("button")
        projectName.innerText = project.projectName
        let editBtn = document.createElement("button")
        editBtn.dataset.id = project.projectId
        editBtn.innerText = "Edit"
        let deleteBtn = document.createElement("button")
        deleteBtn.dataset.id = project.projectId
        deleteBtn.innerText = "Delete"
        li.appendChild(projectName)
        li.appendChild(editBtn)
        li.appendChild(deleteBtn)
        projectList.appendChild(li)
        projectName.addEventListener("click", () => fetchTodosByProjectId(project.projectId))
        deleteBtn.addEventListener("click", () => deleteProject(project.projectId))
        editBtn.addEventListener("click", () => editProject(project.projectId, "nwe name"))
    })
}

function deleteProject(id){
    test.deleteProject(id)
    fetchProjects()
    fetchAllTodos()
}
function editProject(id, name){
    test.editProject(id, name)
    fetchProjects()
    fetchAllTodos()
}

function fetchTodosByProjectId(projectId){
    todoList.innerHTML = ""
    const currentProject = test.searchProjectById(projectId)
    let li = document.createElement("li")
    let h3 = document.createElement("h3");
    h3.innerHTML = currentProject.projectName
    currentProject.todos.forEach((todo) => {
        let p = document.createElement("p")
        p.textContent = todo.title + ": " + todo.description;
        li.appendChild(p)
    })
    todoList.appendChild(h3)
    todoList.appendChild(li)
    
}

function fetchAllTodos() {
    todoList.innerHTML = "";
    const allProjects = test.allProjects;
    
    allProjects.forEach((project) => {
        let li = document.createElement("li");
        let h3 = document.createElement("h3");
        h3.innerHTML = project.projectName

        project.todos.forEach((todo) => {
            let p = document.createElement("p");
            p.innerText = todo.title;
            li.appendChild(p);
        });
       todoList.appendChild(h3);
       todoList.appendChild(li);
    });
}

document.getElementById("show-all-todos").addEventListener("click", () => {
    fetchAllTodos()
})