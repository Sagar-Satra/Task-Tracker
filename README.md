# Task Tracker Application Project

## Description

1. The Task Tracker Application is a simple web application that allows users to manage their tasks.
2.  Each task has a title, description, and creation date. 
3. Users can add new tasks, edit existing tasks, mark tasks as completed, and view task details. 
4. The application fetches initial tasks from a JSON file and displays them in a list view.

## Features

1. View Tasks: See all existing tasks fetched from a JSON file.
2. Task Details: Each task shows a truncated description with a maximum of 10 words followed by "...".
3. Expand Task: Click on a task to expand its description using CSS transitions.
4. Edit Task: Edit the title and description of a task by clicking on it.
5. Toggle Task State: Each task has a checkbox to toggle between open and completed state, with visual distinction.
6. Add New Task: Add new tasks with a title and description. The creation date is automatically added.

## Technologies Used

- HTML: Markup language for creating the structure of web pages.
- SCSS: Styling language for designing the appearance of web pages.
- JavaScript: Programming language for adding interactivity to web pages.
- Node.js: JavaScript runtime environment for running server-side code.
- JSON: Data format used for storing notes.


## Technical Requirements

- JavaScript: No JavaScript libraries used.
- SCSS: Used for styling.
- Git: Includes `.gitignore` and `README.md` files.
- No Persistence: Changes made in the UI are not saved to the server.


## Installation
1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/task-tracker.git
    cd task-tracker
    ```

2. **Open the project**:
    Open the project folder in your preferred code editor.

3. **Start a local server**:
    You can use any local server to serve the HTML file, for example, using `http-server`:
    ```bash
    npm install -g http-server
    http-server
    ```

    Or if you are using VS Code, you can use the Live Server extension.

4. **Open the application**:
    Open your web browser and go to `http://localhost:8080` (or the URL provided by your local server).

## Usage

1. Viewing Tasks: Upon loading, the application fetches tasks from `data/tasks.json` and displays them.

2. Adding a New Task:
    - Click the "Add Task" button.
    - Fill in the title and description.
    - Click "Save Task" to add the new task to the list.

3. Editing a Task:
    - Click on the title or description of a task.
    - Edit the title or description.
    - Click save task button to save the changes.

4. Toggling Task State:
    - Click the checkbox to mark a task as completed or open.
    - Completed tasks are visually distinguished with a different background color and text decoration.


## SCSS Styling

The styles are written in SCSS and compiled to CSS. The key styles include:

- **Task List**: Styles for the task list and individual task items.
- **Truncated Description**: Uses `-webkit-line-clamp` to truncate descriptions.
- **Checkbox State**: Changes the checkbox color when it is checked.

## JavaScript Functionality

The JavaScript code handles the following:

- **Fetching Tasks**: Uses `XMLHttpRequest` to fetch tasks from `data/tasks.json`.
- **DOM Manipulation**: Dynamically creates and updates task elements in the DOM.
- **Event Handling**: Handles click events for expanding, editing, and toggling tasks.
