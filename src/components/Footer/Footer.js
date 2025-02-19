import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; 2024 CyberRisk. Все права защищены</p>
        </div>
        <div className="footer-right">
          <a href="#" className="footer-link">Поддержка</a>
          <a href="#" className="footer-link">Документация</a>
          <a href="#" className="footer-link">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 