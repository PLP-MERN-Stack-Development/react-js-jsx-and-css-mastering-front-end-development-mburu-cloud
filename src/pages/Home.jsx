import React from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950 transition-all p-2">
      <Card className="max-w-xl mx-auto text-center">
        <h1 className="text-4xl font-black mb-2 tracking-tight text-blue-600 dark:text-blue-300 flex flex-col items-center">👋 Welcome to <span>PLP Task Manager</span></h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">Manage your tasks and explore public API data in a modern, responsive app.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link to="/tasks" className="flex-1">
            <Button variant="primary" size="lg" className="w-full">Task Manager</Button>
          </Link>
          <Link to="/api" className="flex-1">
            <Button variant="success" size="lg" className="w-full">API Explorer</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
