import React, { useState } from 'react';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

function Dashboard() {
  const [financialMetrics, setFinancialMetrics] = useState({
    potentialLoss: 2500000,
    mitigationCost: 800000,
    annualBudget: 1500000,
    savedMoney: 1200000
  });

  const [percentMetrics, setPercentMetrics] = useState({
    securityScore: 78,
    patchLevel: 92,
    complianceRate: 85,
    incidentResolution: 94,
    employeeTraining: 88,
    systemUptime: 99.9
  });

  const [riskData, setRiskData] = useState([
    { month: 'Янв', риски: 65, потери: 180000, затраты: 45000 },
    { month: 'Фев', риски: 59, потери: 160000, затраты: 48000 },
    { month: 'Мар', риски: 80, потери: 250000, затраты: 52000 },
    { month: 'Апр', риски: 55, потери: 140000, затраты: 43000 },
    { month: 'Май', риски: 45, потери: 120000, затраты: 40000 },
    { month: 'Июн', риски: 70, потери: 190000, затраты: 50000 }
  ]);

  const [incidentsByType, setIncidentsByType] = useState([
    { name: 'Вредоносное ПО', value: 35 },
    { name: 'Фишинг', value: 25 },
    { name: 'DDoS', value: 15 },
    { name: 'Уязвимости', value: 20 },
    { name: 'Другое', value: 5 }
  ]);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div>
      <div className="page-header">
        <h1>Панель мониторинга</h1>
        <div className="header-actions">
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Финансовые метрики */}
        <div className="card financial-metrics">
          <h2>Финансовые показатели</h2>
          <i className="fas fa-money-bill-wave card-icon"></i>
          <div className="metrics-grid">
            <div className="metric-item">
              <span className="metric-value danger">
                {financialMetrics.potentialLoss.toLocaleString()} ₽
              </span>
              <span className="metric-label">Потенциальные потери</span>
              <i className="fas fa-exclamation-triangle metric-icon"></i>
            </div>
            <div className="metric-item">
              <span className="metric-value warning">
                {financialMetrics.mitigationCost.toLocaleString()} ₽
              </span>
              <span className="metric-label">Стоимость устранения</span>
              <i className="fas fa-tools metric-icon"></i>
            </div>
            <div className="metric-item">
              <span className="metric-value">
                {financialMetrics.annualBudget.toLocaleString()} ₽
              </span>
              <span className="metric-label">Годовой бюджет</span>
              <i className="fas fa-calendar-alt metric-icon"></i>
            </div>
            <div className="metric-item">
              <span className="metric-value success">
                {financialMetrics.savedMoney.toLocaleString()} ₽
              </span>
              <span className="metric-label">Сэкономлено</span>
              <i className="fas fa-piggy-bank metric-icon"></i>
            </div>
          </div>
        </div>

        {/* Процентные показатели */}
        <div className="card percentage-metrics">
          <h2>Ключевые показатели</h2>
          <i className="fas fa-chart-pie card-icon"></i>
          <div className="metrics-grid">
            <div className="metric-item">
              <div className="circular-progress">
                <div className="progress-value">{percentMetrics.securityScore}%</div>
              </div>
              <span className="metric-label">Рейтинг безопасности</span>
              <i className="fas fa-shield-alt metric-icon"></i>
            </div>
            <div className="metric-item">
              <div className="circular-progress">
                <div className="progress-value">{percentMetrics.patchLevel}%</div>
              </div>
              <span className="metric-label">Уровень обновлений</span>
              <i className="fas fa-sync metric-icon"></i>
            </div>
            <div className="metric-item">
              <div className="circular-progress">
                <div className="progress-value">{percentMetrics.complianceRate}%</div>
              </div>
              <span className="metric-label">Соответствие требованиям</span>
              <i className="fas fa-check-circle metric-icon"></i>
            </div>
            <div className="metric-item">
              <div className="circular-progress">
                <div className="progress-value">{percentMetrics.employeeTraining}%</div>
              </div>
              <span className="metric-label">Обучение сотрудников</span>
              <i className="fas fa-user-graduate metric-icon"></i>
            </div>
          </div>
        </div>

        {/* Графики в сетке 2x2 */}
        <div className="charts-grid">
          {/* График трендов рисков */}
          <div className="card chart-card">
            <h2>Тренды рисков</h2>
            <i className="fas fa-chart-line card-icon"></i>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={riskData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="риски" stroke="#2563eb" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* График финансовых потерь */}
          <div className="card chart-card">
            <h2>Финансовые показатели</h2>
            <i className="fas fa-dollar-sign card-icon"></i>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={riskData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="потери" stroke="#ef4444" fill="#fee2e2" />
                <Area type="monotone" dataKey="затраты" stroke="#22c55e" fill="#dcfce7" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* График распределения инцидентов */}
          <div className="card chart-card">
            <h2>Распределение инцидентов</h2>
            <i className="fas fa-bug card-icon"></i>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={incidentsByType}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {incidentsByType.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* График трендов безопасности */}
          <div className="card chart-card">
            <h2>Тренды безопасности</h2>
            <i className="fas fa-shield-alt card-icon"></i>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={riskData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="риски" fill="#2563eb" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 