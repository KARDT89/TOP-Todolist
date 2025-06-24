import Project from "./Projects.js";
import Todo from "./Todo.js";

export default class ProjectManager {
  constructor() {
    this.allProjects = [];
  }

  // add a project
  addProject(name = "default") {
    const newProject = new Project(name);
    this.allProjects.push(newProject);
    return "Successfully Added Project";
  }

  // delete a project
  deleteProject(id) {
    this.allProjects = this.allProjects.filter(
      (project) => project.projectId !== id
    );
    console.log(this.allProjects);
    return "Successfully Deleted Project";
  }

  // add a todo
  addTodo(title, description, pname = "default") {
    let currentProject = this.searchProjectByName(pname);
    const newTodo = new Todo(title, description);
    currentProject.todos.push(newTodo);
  }

  // delete a todo
  deleteTodo(id, pname = "default") {
    let currentProject = this.searchProjectByName(pname);
    currentProject.todos = currentProject.todos.filter(
      (todo) => todo.title !== id
    );
    console.log(currentProject);
  }

  // search todo by name (later id)
  searchProjectByName(name) {
    return this.allProjects.find((project) => project.projectName === name);
  }

  searchProjectById(id) {
    return this.allProjects.find((project) => project.projectId === id);
  }

  //edit project name
  editProject(id, name) {
    const currentProject = this.searchProjectById(id);
    currentProject.projectName = name;
    console.log(this.allProjects);
  }
}
