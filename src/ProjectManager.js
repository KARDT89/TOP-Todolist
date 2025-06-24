import Project from "./Projects.js";
import Todo from "./Todo.js";

class ProjectManager {
  constructor() {
    this.allProjects = [];
  }

  // add a project
  addProject(name = "default") {
    const newProject = new Project(name);
    this.allProjects.push(newProject);
    return "Successfully Added Project"
  }

  // delete a project
  deleteProject(id){
    this.allProjects = this.allProjects.filter((project) => project.projectId !== id)
    console.log(this.allProjects);
    return "Successfully Deleted Project"
  }

  // add a todo
  addTodo(title, content, pname = "default") {
    let currentProject = this.searchProjectByName(pname);
    const newTodo = new Todo(title, content);
    currentProject.todos.push(newTodo);
    
  }

  // delete a todo
  deleteTodo(id, pname = "default"){
    let currentProject = this.searchProjectByName(pname);
    currentProject.todos = currentProject.todos.filter((todo) => todo.title !== id)
    console.log(currentProject);
  }

  // search todo by name (later id)
  searchProjectByName(name) {
    return this.allProjects.find((project) => project.projectName === name);
  }
  
}

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