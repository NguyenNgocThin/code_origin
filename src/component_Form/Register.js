import React from 'react';
import './Register.css';

function RegistrationForm() {
  return (
    <div className="registration-form-container">
      <form className="registration-form">
        <h2>Đăng ký</h2>
        <div className="form-group">
          <label htmlFor="name">Họ và tên:</label>
          <input type="text" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mật khẩu:</label>
          <input type="password" id="password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Xác nhận mật khẩu:</label>
          <input type="password" id="confirmPassword" />
        </div>
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
}

export default RegistrationForm;