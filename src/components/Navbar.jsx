import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onToggleTheme, theme }) => (
  <nav className="bg-white dark:bg-gray-900 shadow px-4 py-3 flex justify-between items-center">
    <div className="flex items-center gap-8">
      <span className="text-lg font-bold">PLP Task Manager</span>
      <div className="flex gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/tasks" className="hover:underline">Tasks</Link>
        <Link to="/api" className="hover:underline">API</Link>
      </div>
    </div>
    <button
      onClick={onToggleTheme}
      className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition ml-4"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  </nav>
);

export default Navbar;
