import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ContentInfo from './pages/ContentInfo';

/**
 * PUBLIC_INTERFACE
 * App
 * Main application shell setting up React Router routes and a minimal overlay navigation.
 * Routes:
 * - "/" -> Home
 * - "/content/:id?" -> ContentInfo
 */
 // PUBLIC_INTERFACE
function App() {
  return (
    <BrowserRouter>
      {/* Overlay navigation shell - small and unobtrusive */}
      <nav
        aria-label="App Navigation"
        style={{
          position: 'fixed',
          top: 8,
          left: 8,
          zIndex: 1000,
          background: 'rgba(0,0,0,0.5)',
          borderRadius: 8,
          padding: '6px 10px',
        }}
      >
        <Link to="/" style={{ color: '#fff', marginRight: 8, textDecoration: 'none' }}>Home</Link>
        <Link to="/content/1" style={{ color: '#fff', textDecoration: 'none' }}>Content Info</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content/:id?" element={<ContentInfo />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
