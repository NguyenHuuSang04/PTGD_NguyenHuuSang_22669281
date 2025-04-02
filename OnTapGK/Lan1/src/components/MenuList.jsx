import React from "react";
import { Link } from "react-router-dom"; // giúp điều hướng đến trang chi tiết món ăn.
import {Button, Card} from "react-bootstrap"; //component từ React Bootstrap, giúp tạo giao diện đẹp mà không cần CSS tùy chỉnh.
import { useOrder } from "../context/OrderContext"; //một custom hook giúp quản lý trạng thái đơn hàng (giỏ hàng).
import dishes from "../data/menu.json"

function MenuList() {
    const {addToOrder} = useOrder(); //dùng để thêm món ăn vào giỏ hàng.

    return(
        // bootstrap row: sắp xếp các món ăn theo dạng lưới ( gird)
        //dish.map(dish => ()): lặp qua danh sách món ăn dishes, và tạo 1 thẻ div cho mỗi món
        //className="col-md-4": chia mỗi món ăn thành 1 cột có độ rộng 4 cột
        //Hiển thị thông tin món ăn bàng bootstrap Card component
        <div className="row"> 
            {
                dishes.map(dish => (
                    <div className="col-md-4" key = {dish.id}> 
                        <Card> 
                            <Card.Img variant = "top" src={dish.image}/>
                            <Card.Body>
                                <Card.Title>{dish.name}</Card.Title>
                                <Card.Text>{dish.description}</Card.Text>
                                <Card.Text>${dish.price}</Card.Text>
                                <Button variant="primary" onClick= {() => addToOrder(dish)}>Add to Order</Button>
                                <Link to={`/menu/${dish.id}`} className="btn btn-secondary ml-2">View details</Link>
                            </Card.Body>
                        </Card>
                    </div>
                ))
            }
        </div>
    );

}
export default MenuList;
