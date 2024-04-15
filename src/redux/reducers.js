// src/redux/reducers.js

// import localStorage from '../localStorage'; // Import localStorage from the browser API

// Define your initial state
const initialState = {
  tasks: []
};

// Define your rootReducer function
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newStateAdd = {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
      localStorage.setItem('todoState', JSON.stringify(newStateAdd)); // Save tasks to local storage
      return newStateAdd;

    case 'DELETE_TASK':
      const newStateDelete = {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
      localStorage.setItem('todoState', JSON.stringify(newStateDelete)); // Save tasks to local storage
      return newStateDelete;

    case 'TOGGLE_TASK_COMPLETION':
      const newStateToggle = {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload) {
            return { ...task, isCompleted: !task.isCompleted };
          }
          return task;
        })
      };
      localStorage.setItem('todoState', JSON.stringify(newStateToggle)); // Save tasks to local storage
      return newStateToggle;

    default:
      return state;
  }
};

export default rootReducer;
