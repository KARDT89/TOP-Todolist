import app from "../app.js";
import { fetchAllTodos, fetchTodosByProjectId } from "./todoUI.js";

const projectList = document.querySelector(".project-list");

document.querySelector("#project").addEventListener("submit", (e) => {
  e.preventDefault();
  const pName = e.target["pName"].value;
  app.addProject(pName);
  app.saveToLocalStorage();
  fetchProjects();
});

export function fetchProjects() {
  projectList.innerHTML = "";
  const editProjectTitle = document.getElementById("newProjectName")

  //const projectEditConfirmBtn = dialog.querySelector("#project-edit-confirm");
  app.allProjects.forEach((project) => {
    let li = document.createElement("li");
    let projectName = document.createElement("button");
    projectName.classList.add("projectNameBtn")
    projectName.innerText = project.projectName;
    let editBtn = document.createElement("button");
    editBtn.dataset.id = project.projectId;
    editBtn.innerText = "Edit";
    let deleteBtn = document.createElement("button");
    deleteBtn.dataset.id = project.projectId;
    deleteBtn.innerText = "Delete";
    li.appendChild(projectName);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    projectList.appendChild(li);
    projectName.addEventListener("click", () =>
      fetchTodosByProjectId(project.projectId)
    );
    deleteBtn.addEventListener("click", () => deleteProject(project.projectId));
    editBtn.addEventListener("click", function () {
      projectModal(editBtn.dataset.id);
      editProjectTitle.value = project.projectName
    });
  });
}

function deleteProject(id) {
  app.deleteProject(id);
  app.saveToLocalStorage();
  fetchProjects();
  fetchAllTodos();
  
}
function editProject(id, name) {
  app.editProject(id, name);
  app.saveToLocalStorage();
  fetchProjects();
  fetchAllTodos();
  
}

const form = document.querySelector("#project-form");
let setGlobalProjectId = null;
const dialog = document.getElementById("project-dialog");
const projectEditCancelBtn = dialog.querySelector("#project-edit-cancel");

function projectModal(projectId) {
  setGlobalProjectId = projectId;
  dialog.show();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newProjectName = e.target["pName"].value;
  console.log("Submitting form for ID:", setGlobalProjectId);
  console.log("New name:", newProjectName);
  editProject(setGlobalProjectId, newProjectName);
  dialog.close();
});
projectEditCancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});
