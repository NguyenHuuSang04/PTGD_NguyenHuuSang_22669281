import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Header.css'; // Import the CSS file

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">ABC Restaurant</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" className="nav-link">Trang chủ</Nav.Link>
          <Nav.Link as={Link} to="/menu" className="nav-link">Thực đơn</Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav-link">Liên hệ</Nav.Link>
        </Nav>
        <Button variant="outline-success">Book Table</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

