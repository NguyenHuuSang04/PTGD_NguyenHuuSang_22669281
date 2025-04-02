// import react from 'react'
import { Link } from 'react-router-dom'
import {Navbar, Nav, Button, Badge} from 'react-bootstrap'
import { useOrder } from '../context/OrderContext';
import { FaShoppingCart } from 'react-icons/fa';

import '../styles/Header.css';

function Header(){
    const {order} = useOrder(); // phục vụ cart

    return(
        <Navbar bg="info" expand="lg"> 
            <Navbar.Brand href="/">ABC Restaurant</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/> 
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='mr-auto'>
                    <Nav.Link as={Link} to ="/" className="nav-link" >Trang chủ</Nav.Link> 
                    <Nav.Link as={Link} to ="/menu" className="nav-link">Thực đơn</Nav.Link> 
                    <Nav.Link as={Link} to ="/contact" className="nav-link">Liên hệ</Nav.Link> 
                </Nav>
                <Button as = {Link} to="/book-table" variant="outline-danger">Book Table</Button>


                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/cart" className="nav-link">
                        <FaShoppingCart size={24} />
                        {order.length > 0 && (
                            <span className="cart-count">{order.length}</span>
                        )}
                    </Nav.Link>
                </Nav>
                

            </Navbar.Collapse>
        </Navbar>
    );
}
export default Header;

//Navbar: tạo ra 1 thanh điều hướng đáp ứng
//Navbar.Brand: 1 thành phần cho thương hiêu/logo
//Navbar.Toggle: thêm nút thu gọn thanh điều hướng trên các
//Navbar.Collapse: bao bọc nội dung có thể thu gọn của thanh điều hướng
//Nav: nhóm các liên kết điều hướng


