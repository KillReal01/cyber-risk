import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>CyberRisk</h2>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/admin" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <i className="fas fa-user-shield"></i>
          <span>Админ-панель</span>
        </NavLink>
        <NavLink to="/infrastructure" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <i className="fas fa-network-wired"></i>
          <span>Инфраструктура</span>
        </NavLink>
        <NavLink to="/risks" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <i className="fas fa-exclamation-triangle"></i>
          <span>Риски</span>
        </NavLink>
        <NavLink to="/strategy" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <i className="fas fa-chess"></i>
          <span>Стратегия</span>
        </NavLink>
        <NavLink to="/vendor" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <i className="fas fa-building"></i>
          <span>Поставщики</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar; 