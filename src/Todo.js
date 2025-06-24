export default class Todo {
  constructor(title, content) {
    this.id = Date.now();
    this.title = title;
    this.content = content;
    this.isCompleted = false;
  }

  toggleComplete() {
    this.isCompleted = !this.isCompleted;
  }
}