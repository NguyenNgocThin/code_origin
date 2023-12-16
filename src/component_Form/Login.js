import React, { useState } from 'react';
import './LoginForm.css';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Đăng nhập với tên đăng nhập:', username, 'và mật khẩu:', password);
  };

  return (
    <>
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Đăng nhập</h2>
        <div className="form-group">
          <label htmlFor="username">Tên đăng nhập:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mật khẩu:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
    </>
  );
};


export default LoginForm;