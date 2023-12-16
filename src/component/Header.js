import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li><a href="/">Trang chủ</a></li>
          <li><a href="/About">Giới thiệu</a></li>
          <li><a href="/Contact">Liên hệ</a></li>
          <li><a href="/Register">Đăng kí</a></li>
          <li><a href="/Login">Đăng nhập</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
