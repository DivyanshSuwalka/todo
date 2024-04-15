# todo
# React Redux To-Do App

This is a simple To-Do application built using ReactJS, Redux for state management, and Bootstrap for styling. It allows users to add, view, and delete tasks.

## Features

- Add Task: Users can input a task into a text field and add it to the list by pressing the "Add Task" button or pressing Enter.
- View Tasks: All added tasks are displayed in a list format.
- Delete Task: Each task has a delete button that, when clicked, removes the task from the list.

## Requirements

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/todo.git
cd todo
npm install
npm start

Folder Structure:

todo-app/
  |-- public/
  |-- src/
      |-- components/
          |-- TaskInput.js
          |-- TaskList.js
      |-- redux/
          |-- actions.js
          |-- reducers.js
      |-- App.js
      |-- index.js
  |-- .gitignore
  |-- package.json
  |-- README.md
