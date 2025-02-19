import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import AdminPanel from './pages/AdminPanel';
import Infrastructure from './pages/Infrastructure';
import Risks from './pages/Risks';
import Strategy from './pages/Strategy';
import Vendor from './pages/Vendor';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/admin" replace />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/risks" element={<Risks />} />
            <Route path="/strategy" element={<Strategy />} />
            <Route path="/vendor" element={<Vendor />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
