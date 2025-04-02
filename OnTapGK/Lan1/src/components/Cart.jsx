import React from "react";
import { useOrder } from "../context/OrderContext";
import { ListGroup, Button } from "react-bootstrap";

function Cart() {
    const { order, removeFromOrder } = useOrder();

    return (
        <div className="container mt-4">
            <h1>Your Cart</h1>
            {order.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ListGroup>
                    {order.map((item, index) => (
                        <ListGroup.Item key={index}>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h5>{item.name}</h5>
                                    <p>{item.description}</p>
                                    <p>${item.price}</p>
                                </div>
                                <Button variant="danger" onClick={() => removeFromOrder(index)}>Remove</Button>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </div>
    );
}
export default Cart;
