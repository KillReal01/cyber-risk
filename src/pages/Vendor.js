import React, { useState } from 'react';

function Vendor() {
  const [vendors, setVendors] = useState([
    {
      id: 1,
      name: 'Security Solutions Ltd',
      type: 'Безопасность',
      riskLevel: 'low',
      lastAssessment: '2024-03-10',
      status: 'active'
    },
    {
      id: 2,
      name: 'Network Systems Pro',
      type: 'Сетевое оборудование',
      riskLevel: 'medium',
      lastAssessment: '2024-03-05',
      status: 'review'
    }
  ]);

  const [showAddVendor, setShowAddVendor] = useState(false);

  return (
    <div>
      <div className="page-header">
        <h1>Управление поставщиками</h1>
        <div className="header-actions">
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <h2>Поставщики</h2>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Название</th>
                  <th>Тип</th>
                  <th>Уровень риска</th>
                  <th>Последняя оценка</th>
                  <th>Статус</th>
                  <th>Действия</th>
                </tr>
              </thead>
              <tbody>
                {vendors.map(vendor => (
                  <tr key={vendor.id}>
                    <td>{vendor.name}</td>
                    <td>{vendor.type}</td>
                    <td>
                      <span className={`risk-badge risk-${vendor.riskLevel}`}>
                        {vendor.riskLevel}
                      </span>
                    </td>
                    <td>{vendor.lastAssessment}</td>
                    <td>
                      <span className={`status-badge status-${vendor.status}`}>
                        {vendor.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-icon">
                        <i className="fas fa-file-alt"></i>
                      </button>
                      <button className="btn btn-icon">
                        <i className="fas fa-edit"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h2>Статистика поставщиков</h2>
          <div className="vendor-stats">
            <div className="stat-item">
              <span className="stat-label">Всего поставщиков</span>
              <span className="stat-value">12</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Критические поставщики</span>
              <span className="stat-value warning">3</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Ожидают оценки</span>
              <span className="stat-value">2</span>
            </div>
          </div>
        </div>
      </div>

      {showAddVendor && (
        <div className="modal">
          <div className="modal-content">
            <h2>Добавить поставщика</h2>
            <form className="form">
              <div className="form-group">
                <label>Название компании</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Тип услуг</label>
                <select className="form-control">
                  <option value="security">Безопасность</option>
                  <option value="network">Сетевое оборудование</option>
                  <option value="software">Программное обеспечение</option>
                </select>
              </div>
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">Сохранить</button>
                <button type="button" className="btn btn-secondary" onClick={() => setShowAddVendor(false)}>
                  Отмена
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Vendor; 