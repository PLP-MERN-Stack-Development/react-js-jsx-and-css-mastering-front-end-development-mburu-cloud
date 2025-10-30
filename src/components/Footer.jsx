import React from 'react';

const Footer = () => (
  <footer className="bg-white dark:bg-gray-900 shadow px-4 py-6 mt-10">
    <div className="max-w-7xl mx-auto text-center text-gray-500 dark:text-gray-400">
      <div className="mb-2">
        <a href="#" className="underline hover:text-blue-600 mx-2">Docs</a>
        <a href="#" className="underline hover:text-blue-600 mx-2">About</a>
        <a href="#" className="underline hover:text-blue-600 mx-2">Contact</a>
      </div>
      <p>© {new Date().getFullYear()} PLP Task Manager. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
