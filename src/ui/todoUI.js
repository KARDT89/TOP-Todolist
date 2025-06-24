import test from "../app.js"

const todoList = document.querySelector(".todo-list")


export function fetchTodosByProjectId(projectId){
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

export function fetchAllTodos() {
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