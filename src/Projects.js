export default class Project {
  constructor(projectName) {
    this.projectId = crypto.randomUUID()
    this.projectName = projectName;
    this.todos = [];
  }
}