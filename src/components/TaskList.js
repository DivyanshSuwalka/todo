import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions';
import { toggleTaskCompletion } from '../redux/actions';

const TaskList = ({ tasks }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggleCompletion = (taskId) => {
    dispatch(toggleTaskCompletion(taskId));
  };

  return (
    <ul className="list-group">
      {tasks.map(task => (
        <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
          <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={() => handleToggleCompletion(task.id)}
          />
          <span className={task.isCompleted ? 'completed-task' : ''}>{task.name}</span>
          <button
            className="btn btn-danger btn-sm btn-delete`"
            onClick={() => handleDeleteTask(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
