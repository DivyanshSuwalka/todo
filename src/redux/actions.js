export const addTask = (taskName) => ({
    type: 'ADD_TASK',
    payload: {
      name: taskName,
      id: Math.floor(Math.random() * 1000)
    }
  });
  
  export const deleteTask = (taskId) => ({
    type: 'DELETE_TASK',
    payload: taskId
  });

  export const toggleTaskCompletion = (taskId) => ({
    type: 'TOGGLE_TASK_COMPLETION',
    payload: taskId,
  });
  