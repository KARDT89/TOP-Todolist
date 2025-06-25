import ProjectManager from "./ProjectManager.js";
import { fetchProjects } from "./ui/projectUI.js";
import { fetchAllTodos } from "./ui/todoUI.js";
import "./style.css";

const app = new ProjectManager();
app.addProject();
app.addProject("project-X");
// app.addProject("project-Z");
// app.addTodo("todo1", "ddes1", "project-X");
// app.addTodo("todo112", "ddes1", "project-X");
// app.addTodo("todo69", "ddes1", "project-Z");
// app.addTodo("deftodo1", "defddes1", "default");
// app.addTodo("todo2", "des2", "project-X");
// app.deleteTodo("todo2", "project-X");
// app.deleteProject("project-X");
export default app;


document.addEventListener("DOMContentLoaded", (event) => {
  fetchProjects()
  fetchAllTodos()
});

