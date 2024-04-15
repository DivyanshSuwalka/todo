// src/App.js
import React from 'react';
import { useSelector } from 'react-redux';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const tasks = useSelector(state => state.tasks);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <h2 className="text-center mb-4">To-Do List</h2>
          <TaskInput />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
