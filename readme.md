# DTASK - TodoList Application

A modern, feature-rich todo list application built as part of The Odin Project curriculum. This project demonstrates advanced JavaScript concepts including ES6 modules, object-oriented programming, and DOM manipulation.

![DTASK Logo](public/odin-lined.png)

## 🚀 Features

- **Project Management**: Create, edit, and delete projects to organize your todos
- **Todo Management**: Add, edit, delete, and toggle completion status of todos
- **Priority System**: Assign priority levels (Low, Medium, High) with color-coded visual indicators
- **Persistent Storage**: Automatic saving to localStorage for data persistence
- **Responsive Design**: Clean, modern interface that works across devices
- **Due Dates**: Set and track due dates for your todos
- **Completion Tracking**: Mark todos as complete with visual strikethrough

## 🎨 Visual Features

- **Color-coded Priorities**:
  - High Priority: Red background
  - Medium Priority: Yellow background  
  - Low Priority: Blue background
  - Completed: Green background with strikethrough text

- **Multiple View Modes**:
  - Project-specific view: See all todos within a selected project
  - All todos view: Overview of todos across all projects

## 🛠️ Technologies Used

- **Vanilla JavaScript (ES6+)**
- **HTML5**
- **CSS3**
- **Webpack** (for module bundling)
- **localStorage API** (for data persistence)

## 📁 Project Structure

```
├── src/
│   ├── app.js                 # Main application entry point
│   ├── ProjectManager.js      # Core project management logic
│   ├── Projects.js           # Project class definition
│   ├── Todo.js               # Todo class definition
│   ├── style.css             # Application styles
│   └── ui/
│       ├── projectUI.js      # Project-related UI functions
│       └── todoUI.js         # Todo-related UI functions
├── public/
│   └── odin-lined.png        # Application logo
└── index.html                # Main HTML file
```

## 🚀 Getting Started

### Prerequisites

- Modern web browser
- Node.js and npm (if running with Webpack)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/KARDT89/TOP-Todolist.git
cd TOP-Todolist
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:8080`

### Alternative Setup

You can also run the application by opening `index.html` directly in your browser, though some features may require a local server due to ES6 module restrictions.

## 🎯 How to Use

### Managing Projects

1. **Add Project**: Enter a project name in the input field at the bottom left and click "Add Project"
2. **Edit Project**: Click the "Edit" button next to any project name
3. **Delete Project**: Click the "Delete" button next to any project name
4. **View Project Todos**: Click on the project name to see all todos within that project

### Managing Todos

1. **Add Todo**: 
   - Click "Add Todo" button
   - Fill in the form with title, description, due date, priority, and project
   - Click "Confirm" to save

2. **Edit Todo**: 
   - Click "Edit Todo" button on any todo card
   - Modify the details in the form
   - Click "Confirm" to save changes

3. **Toggle Completion**: Click the checkbox next to any todo to mark it as complete/incomplete

4. **Delete Todo**: Click "Delete Todo" button on any todo card

5. **View All Todos**: Click "Show All Todos" to see todos from all projects

## 🏗️ Architecture

The application follows object-oriented programming principles:

- **ProjectManager**: Central controller managing all projects and todos
- **Project**: Individual project with associated todos
- **Todo**: Individual todo items with properties like title, description, priority, etc.
- **UI Modules**: Separate modules for handling project and todo UI interactions

## 💾 Data Persistence

The application automatically saves all data to the browser's localStorage, ensuring your todos and projects persist between sessions.

## 🎨 Styling

The application features a dark theme with:
- Custom Oswald font family
- Responsive flexbox layout
- Hover effects and transitions
- Color-coded priority system
- Modern dialog modals

## 🤝 Contributing

This project is part of The Odin Project curriculum. Feel free to fork and experiment with additional features!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [The Odin Project](https://www.theodinproject.com/) for the excellent curriculum
- Odin Project community for support and guidance

## 🔗 Links

- [Live Demo](https://kardt89.github.io/TOP-Todolist/) (if available)
- [GitHub Repository](https://github.com/KARDT89/TOP-Todolist)
- [The Odin Project](https://www.theodinproject.com/)

---

**Made with ❤️ by DT89**