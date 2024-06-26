import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
          <Header />
          <Routes>
            <Route path="/create" element={<MainContent />} />
            <Route path="/" element={<Navigate to="/create" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
