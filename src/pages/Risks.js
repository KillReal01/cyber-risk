import React from 'react';

function Risks() {
  return (
    <div>
      <div className="page-header">
        <h1>Управление рисками</h1>
        <div className="header-actions">
        </div>
      </div>
      
      <div className="dashboard-grid">
        <div className="card">
          <h2>Общий уровень риска</h2>
          <div className="status-badge status-warning">
            <i className="fas fa-exclamation-circle"></i>
            <span>Средний (45%)</span>
          </div>
        </div>

        <div className="card">
          <h2>Активные угрозы</h2>
          {/* Содержимое карточки */}
        </div>
      </div>
    </div>
  );
}

export default Risks; 