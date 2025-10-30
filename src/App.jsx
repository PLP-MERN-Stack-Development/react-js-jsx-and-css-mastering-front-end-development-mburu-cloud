import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import API from './pages/API';

function MainContent() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Layout onToggleTheme={toggleTheme} theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/api" element={<API />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <MainContent />
      </Router>
    </ThemeProvider>
  );
} 