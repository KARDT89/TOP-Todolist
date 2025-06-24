export default class Todo {
  constructor(title, description) {
    this.id = Date.now();
    this.title = title;
    this.description = description;
    this.isCompleted = false;
  }

  toggleComplete() {
    this.isCompleted = !this.isCompleted;
  }
}