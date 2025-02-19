import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import Infrastructure from './pages/Infrastructure';
import Risks from './pages/Risks';
import Strategy from './pages/Strategy';
import Vendor from './pages/Vendor';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Layout>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/admin" element={<AdminPanel />} />
                  <Route path="/infrastructure" element={<Infrastructure />} />
                  <Route path="/risks" element={<Risks />} />
                  <Route path="/strategy" element={<Strategy />} />
                  <Route path="/vendor" element={<Vendor />} />
                </Routes>
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
