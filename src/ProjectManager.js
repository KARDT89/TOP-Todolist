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
  addTodo(title, description, date, priority, projectId, isCompleted) {
    let currentProject = this.searchProjectById(projectId);
    const newTodo = new Todo(
      title,
      description,
      date,
      priority,
      projectId,
      isCompleted
    );
    currentProject.todos.push(newTodo);
    console.log(this.allProjects);
  }

  // delete a todo
  deleteTodo(id, projectId) {
    let currentProject = this.searchProjectById(projectId);
    currentProject.todos = currentProject.todos.filter(
      (todo) => todo.id !== id
    );
    console.log(currentProject);
  }

  editTodo(
    todoId,
    currentProject,
    title,
    description,
    date,
    priority,
    projectId,
    isCompleted
  ) {
    this.deleteTodo(todoId, currentProject);
    this.addTodo(title, description, date, priority, projectId, isCompleted);
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
    // console.log(this.allProjects);
  }

  searchTodoById(id) {
    for (const project of this.allProjects) {
      const found = project.todos.find((todo) => todo.id === id);
      if (found) return found;
    }
    return null; // or undefined, if not found
  }

  toggleTodo(id) {
    const todo = this.searchTodoById(id);
    if (todo) {
      todo.toggleTodo(); // calls the method inside the Todo class
      return todo;
    }
    return null;
  }
}
