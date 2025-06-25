export default class Todo {
  constructor(title, description, date = Date.now(), priority = "low", project = "default", isCompleted = false) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority
    this.project = project
    this.isCompleted = isCompleted;
  }

  toggleComplete() {
    this.isCompleted = !this.isCompleted;
  }
}