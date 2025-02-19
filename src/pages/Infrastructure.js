import React, { useState } from 'react';

function Infrastructure() {
  const [devices, setDevices] = useState([
    { id: 1, name: 'Firewall-Main', status: 'active', lastCheck: '2024-03-15 10:30', risk: 'low' },
    { id: 2, name: 'Core Switch', status: 'warning', lastCheck: '2024-03-15 09:45', risk: 'medium' },
    { id: 3, name: 'Database Server', status: 'active', lastCheck: '2024-03-15 10:00', risk: 'low' }
  ]);

  const [selectedDevice, setSelectedDevice] = useState(null);

  return (
    <div>
      <div className="page-header">
        <h1>Инфраструктура</h1>
        <div className="header-actions">
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="card devices-list">
          <h2>Сетевые устройства</h2>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Устройство</th>
                  <th>Статус</th>
                  <th>Последняя проверка</th>
                  <th>Риск</th>
                  <th>Действия</th>
                </tr>
              </thead>
              <tbody>
                {devices.map(device => (
                  <tr key={device.id}>
                    <td>{device.name}</td>
                    <td>
                      <span className={`status-badge status-${device.status}`}>
                        {device.status}
                      </span>
                    </td>
                    <td>{device.lastCheck}</td>
                    <td>
                      <span className={`risk-badge risk-${device.risk}`}>
                        {device.risk}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-icon" onClick={() => setSelectedDevice(device)}>
                        <i className="fas fa-cog"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h2>Мониторинг</h2>
          <div className="monitoring-stats">
            <div className="stat-item">
              <span className="stat-label">Активные устройства</span>
              <span className="stat-value">15/18</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Средняя нагрузка</span>
              <span className="stat-value">67%</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Инциденты</span>
              <span className="stat-value warning">3</span>
            </div>
          </div>
        </div>
      </div>

      {selectedDevice && (
        <div className="modal">
          <div className="modal-content">
            <h2>Управление устройством: {selectedDevice.name}</h2>
            {/* Добавьте здесь форму управления устройством */}
            <button className="btn btn-secondary" onClick={() => setSelectedDevice(null)}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Infrastructure; 