import React, { useState, useEffect } from 'react';
import Button from './Button';

const NoTasks = () => (
  <li className="text-gray-400 dark:text-gray-500 text-center py-10 flex flex-col items-center gap-2 select-none">
    <span className="text-6xl">📄</span>
    <span className="mt-2 font-medium">No tasks found</span>
    <span className="text-sm text-gray-400">Get started by adding your first task!</span>
  </li>
);

/**
 * Custom hook for managing tasks with localStorage persistence
 */
const useLocalStorageTasks = () => {
  // Initialize state from localStorage or with empty array
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Update localStorage when tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (text) => {
    if (text.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text,
          completed: false,
          createdAt: new Date().toISOString(),
        },
      ]);
    }
  };

  // Toggle task completion status
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return { tasks, addTask, toggleTask, deleteTask };
};

/**
 * TaskManager component for managing tasks
 */
const TaskManager = () => {
  const { tasks, addTask, toggleTask, deleteTask } = useLocalStorageTasks();
  const [newTaskText, setNewTaskText] = useState('');
  const [filter, setFilter] = useState('all');

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all' filter
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTaskText);
    setNewTaskText('');
  };

  return (
    <div>
      <h2 className="text-2xl font-extrabold mb-8 text-center text-blue-600 dark:text-blue-300 tracking-tight">Task Manager</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-md shadow-sm"
          />
          <Button type="submit" variant="primary" size="md">
            Add
          </Button>
        </div>
      </form>
      <div className="flex gap-2 mb-5 justify-center">
        <Button
          variant={filter === 'all' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('all')}
        >
          All
        </Button>
        <Button
          variant={filter === 'active' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('active')}
        >
          Active
        </Button>
        <Button
          variant={filter === 'completed' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('completed')}
        >
          Completed
        </Button>
      </div>
      <ul className="space-y-2 transition-all">
        {filteredTasks.length === 0 ? (
          <NoTasks />
        ) : (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              className={`flex items-center justify-between p-3 border rounded-xl bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="h-5 w-5 text-blue-600 rounded-full focus:ring-blue-500 transition accent-blue-600"
                />
                <span
                  className={`text-lg font-medium transition-colors ${task.completed ? 'line-through text-gray-400 dark:text-gray-400' : ''}`}
                >
                  {task.text}
                </span>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => deleteTask(task.id)}
                aria-label="Delete task"
              >
                Delete
              </Button>
            </li>
          ))
        )}
      </ul>
      <div className="mt-8 text-sm text-center text-gray-500 dark:text-gray-400">
        <p>
          {tasks.filter((task) => !task.completed).length} task{tasks.filter((task) => !task.completed).length !== 1 && 's'} remaining
        </p>
      </div>
    </div>
  );
};

export default TaskManager; 