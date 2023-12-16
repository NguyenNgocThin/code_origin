import React from 'react';
import './Body.css';

const Body = () => {
  return (
    <div className="Body">
      <nav>
        <ul className="nav-list">
          <li><a href="/">Trang chủ</a></li>
          <li><a href="/About">Giới thiệu</a></li>
          <li><a href="/Contact">Liên hệ</a></li>
          <li><a href="/Register">Đăng kí</a></li>
          <li><a href="/Login">Đăng nhập</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Body;
