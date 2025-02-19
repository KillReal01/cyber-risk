import React, { useState } from 'react';

function Strategy() {
  const [strategies, setStrategies] = useState([
    {
      id: 1,
      name: 'Защита периметра',
      status: 'active',
      progress: 75,
      lastUpdate: '2024-03-15'
    },
    {
      id: 2,
      name: 'Обновление систем',
      status: 'pending',
      progress: 30,
      lastUpdate: '2024-03-14'
    }
  ]);

  const [metrics, setMetrics] = useState({
    securityScore: 85,
    vulnerabilities: 12,
    resolvedIssues: 45,
    pendingTasks: 8
  });

  return (
    <div>
      <div className="page-header">
        <h1>Стратегия безопасности</h1>
        <div className="header-actions">
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <h2>Ключевые метрики</h2>
          <div className="metrics-grid">
            <div className="metric-item">
              <span className="metric-value">{metrics.securityScore}</span>
              <span className="metric-label">Рейтинг безопасности</span>
            </div>
            <div className="metric-item">
              <span className="metric-value warning">{metrics.vulnerabilities}</span>
              <span className="metric-label">Уязвимости</span>
            </div>
            <div className="metric-item">
              <span className="metric-value success">{metrics.resolvedIssues}</span>
              <span className="metric-label">Решенные проблемы</span>
            </div>
            <div className="metric-item">
              <span className="metric-value">{metrics.pendingTasks}</span>
              <span className="metric-label">Ожидающие задачи</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>Активные стратегии</h2>
          <div className="strategies-list">
            {strategies.map(strategy => (
              <div key={strategy.id} className="strategy-item">
                <div className="strategy-header">
                  <h3>{strategy.name}</h3>
                  <span className={`status-badge status-${strategy.status}`}>
                    {strategy.status}
                  </span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress" 
                    style={{ width: `${strategy.progress}%` }}
                  ></div>
                </div>
                <div className="strategy-footer">
                  <span>Прогресс: {strategy.progress}%</span>
                  <span>Обновлено: {strategy.lastUpdate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2>График выполнения</h2>
          <div className="timeline">
            {/* Здесь можно добавить компонент временной шкалы */}
            <div className="timeline-placeholder">
              График реализации стратегий
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Strategy; 