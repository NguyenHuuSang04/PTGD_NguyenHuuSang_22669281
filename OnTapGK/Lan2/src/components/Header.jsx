import React from "react"
import {Nav, Navbar, Button} from "react-bootstrap"
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useOrder } from "../Context/OrderContext";
import '../styles/Header.css'


//Header: logo, trang chủ, menu, liên hệ, [giỏ hàng]
function Header(){
    const {order} = useOrder();
    return (
        <Navbar bg="info" expand = "lg">
            <Navbar.Brand href="/"> ABC Restaurant</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to = "/" className = "nav-link">Trang chủ</Nav.Link>
                    <Nav.Link as={Link} to = "/menu" className = "nav-link">Thực đơn</Nav.Link>
                    <Nav.Link as={Link} to = "/contact" className = "nav-link">Liên hệ</Nav.Link>
                </Nav>
                <Button as = {Link} to ="/book-table" variant="outline-danger">Book Table</Button>
            
                 <Nav className="ml-auto"> {/* ml-auto: đẩy phần này sang bên phải navbar */}
                    <Nav.Link as = {Link} to="/cart" className = "nav-link">
                        <FaShoppingCart size = {24}/>
                        {order.length > 0 && (<span className="cart-count">{order.length}</span>)}
                    </Nav.Link>
                </Nav>
            
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;