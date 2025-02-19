import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <header className="main-header">
      <div className="header-left">
        <div className="company-info">
          <svg className="company-logo" viewBox="0 0 24 24" width="40" height="40">
            <path
              fill="currentColor"
              d="M12 2L1 8l3.27 2.21L12 4.5l7.73 5.71L23 8L12 2zm0 2.5L4.27 10L12 15l7.73-5L12 4.5z"
            />
            <path
              fill="currentColor"
              d="M1 14l11 8 11-8-3.27-2.21L12 17.5l-7.73-5.71L1 14zm11-3.5l7.73 5L12 21.5 4.27 16 12 10.5z"
            />
          </svg>
          <span className="company-name">CyberRisk</span>
        </div>
      </div>
      <div className="header-right">
        <div className="header-actions">
          <div className="user-profile" onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
            <div className="user-avatar">
              <svg viewBox="0 0 40 40" width="40" height="40">
                <circle cx="20" cy="20" r="20" fill="#e2e8f0"/>
                <circle cx="20" cy="16" r="6" fill="#94a3b8"/>
                <path
                  d="M8 36c0-8 6-12 12-12s12 4 12 12"
                  fill="#94a3b8"
                />
              </svg>
            </div>
            <span className="user-name">Демо пользователь</span>
            <svg className="icon-chevron" viewBox="0 0 24 24" width="16" height="16">
              <path
                fill="currentColor"
                d="M7 10l5 5 5-5H7z"
              />
            </svg>
            {isUserMenuOpen && (
              <div className="user-menu">
                <button className="user-menu-item">
                  <svg className="icon" viewBox="0 0 24 24" width="16" height="16">
                    <path
                      fill="currentColor"
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    />
                  </svg>
                  <span>Профиль</span>
                </button>
                <button className="user-menu-item">
                  <svg className="icon" viewBox="0 0 24 24" width="16" height="16">
                    <path
                      fill="currentColor"
                      d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
                    />
                  </svg>
                  <span>Настройки</span>
                </button>
                <div className="user-menu-divider"></div>
                <button className="user-menu-item logout" onClick={handleLogout}>
                  <svg className="icon" viewBox="0 0 24 24" width="16" height="16">
                    <path
                      fill="currentColor"
                      d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"
                    />
                  </svg>
                  <span>Выйти</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header; 