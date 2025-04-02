import React from "react";
import { useOrder } from "../Context/OrderContext";
import { Button, ListGroup } from "react-bootstrap";

function Cart() {
    const {order, removeFromOrder} = useOrder(); // order: ds món ăn đã chọn, hàm xóa món ăn
    return (
        <div className="container mt-4">
            <h1>Giỏ hàng</h1> 
            {order.length === 0 ? (<p>Giỏ hàng trống</p>) : (
                <ListGroup>
                    {order.map((item, index) =>(
                        <ListGroup.Item key = {index}>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h5>{item.name}</h5>
                                    <p>{item.description}</p>
                                    <p>{item.price}</p>
                                </div>
                                <Button variant = "danger" onClick={() => removeFromOrder(index)}>Remove</Button>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </div>
    ); 
}
export default Cart;
