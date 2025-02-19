import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Проверяем, что клик был не по сайдбару и не по кнопке меню
      if (sidebarRef.current && 
          buttonRef.current && 
          !sidebarRef.current.contains(event.target) && 
          !buttonRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    // Добавляем слушатель на весь документ
    document.addEventListener('mousedown', handleClickOutside);
    
    // Очищаем слушатель при размонтировании
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Закрываем сайдбар при изменении маршрута
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <>
      <button 
        ref={buttonRef}
        className={`mobile-menu-button ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Открыть меню"
      >
        <span className="hamburger-icon">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </span>
      </button>
      
      <div 
        ref={sidebarRef}
        className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}
      >
        <div className="sidebar-header">
          <h2>CyberRisk</h2>
        </div>
        <nav className="sidebar-nav">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            <i className="fas fa-chart-line"></i>
            <span>Дашборд</span>
          </NavLink>
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
      
      {isMobileMenuOpen && (
        <div 
          className="sidebar-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Sidebar; 