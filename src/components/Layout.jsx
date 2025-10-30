import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ onToggleTheme, theme, children }) => (
  <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
    <Navbar onToggleTheme={onToggleTheme} theme={theme} />
    <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">{children}</main>
    <Footer />
  </div>
);

export default Layout;
