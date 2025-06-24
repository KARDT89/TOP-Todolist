export default class Project {
  constructor(projectName) {
    this.projectId = Date.now()
    this.projectName = projectName;
    this.todos = [];
  }
}