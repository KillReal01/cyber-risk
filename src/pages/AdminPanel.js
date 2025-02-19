import React, { useState } from 'react';

function AdminPanel() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Администратор', role: 'admin', status: 'active', lastLogin: '2024-03-15 10:30' },
    { id: 2, name: 'Аналитик', role: 'analyst', status: 'active', lastLogin: '2024-03-15 09:45' },
    { id: 3, name: 'Оператор', role: 'operator', status: 'inactive', lastLogin: '2024-03-14 15:20' }
  ]);

  const [systemStats, setSystemStats] = useState({
    cpuUsage: 45,
    memoryUsage: 60,
    diskSpace: 75,
    activeUsers: 8
  });

  const [showAddUser, setShowAddUser] = useState(false);

  return (
    <div>
      <div className="page-header">
        <h1>Админ-панель</h1>
        <div className="header-actions">
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <h2>Системные ресурсы</h2>
          <div className="resource-stats">
            <div className="resource-item">
              <span className="resource-label">CPU</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${systemStats.cpuUsage}%` }}></div>
              </div>
              <span className="resource-value">{systemStats.cpuUsage}%</span>
            </div>
            <div className="resource-item">
              <span className="resource-label">Память</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${systemStats.memoryUsage}%` }}></div>
              </div>
              <span className="resource-value">{systemStats.memoryUsage}%</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>Пользователи системы</h2>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Имя</th>
                  <th>Роль</th>
                  <th>Статус</th>
                  <th>Последний вход</th>
                  <th>Действия</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.role}</td>
                    <td>
                      <span className={`status-badge status-${user.status}`}>
                        {user.status}
                      </span>
                    </td>
                    <td>{user.lastLogin}</td>
                    <td>
                      <button className="btn btn-icon">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="btn btn-icon btn-danger">
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showAddUser && (
        <div className="modal">
          <div className="modal-content">
            <h2>Добавить пользователя</h2>
            <form className="form">
              <div className="form-group">
                <label>Имя пользователя</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Роль</label>
                <select className="form-control">
                  <option value="admin">Администратор</option>
                  <option value="analyst">Аналитик</option>
                  <option value="operator">Оператор</option>
                </select>
              </div>
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">Сохранить</button>
                <button type="button" className="btn btn-secondary" onClick={() => setShowAddUser(false)}>
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

export default AdminPanel; 