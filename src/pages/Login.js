import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username === 'ural' && credentials.password === 'ural') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/');
    } else {
      setError('Неверный логин или пароль');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>CyberRisk</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Логин</label>
            <input
              type="text"
              className="form-control"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              placeholder="Введите логин"
            />
          </div>
          <div className="form-group">
            <label>Пароль</label>
            <input
              type="password"
              className="form-control"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              placeholder="Введите пароль"
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="btn btn-primary btn-block">
            Войти
          </button>
          <div className="demo-credentials">
            <p>Демо-аккаунт:</p>
            <p>Логин: ural</p>
            <p>Пароль: ural</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login; 