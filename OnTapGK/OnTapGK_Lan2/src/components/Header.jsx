import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file

function Header() {
  return (
    <div className="navbar">
      <div className="navbar-brand">ABC Restaurant</div>
      <div className="navbar-toggle" aria-controls="basic-navbar-nav"></div>
      <div className="navbar-collapse" id="basic-navbar-nav">
        <ul className="nav">
          <li><Link to="/" className="nav-link">Trang chủ</Link></li>
          <li><Link to="/menu" className="nav-link">Thực đơn</Link></li>
          <li><Link to="/contact" className="nav-link">Liên hệ</Link></li>
        </ul>
        <button className="button">Book Table</button>
      </div>
    </div>
  );
}

export default Header;