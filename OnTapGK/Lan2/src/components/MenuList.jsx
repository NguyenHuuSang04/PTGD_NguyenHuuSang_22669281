import React from "react";
import dishes from "../data/menu.json";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useOrder } from "../Context/OrderContext";

function MenuList() {
    const {addToOrder} = useOrder();
    return(
        <div className="row">
           {
            dishes.map(dish => (
                <div className="col-md-4" key = {dish.id}>
                    <Card>
                        <Card.Img variant="top" src= {dish.img} alt = {dish.name}/>  
                        <Card.Body>
                            <Card.Title>{dish.name}</Card.Title>    
                            <Card.Text>{dish.description}</Card.Text>
                            <Card.Text>${dish.price}</Card.Text>
                            <Button variant="primary" onClick={() => addToOrder(dish)}>Chọn món</Button>
                            <Link to={`/menu/${dish.id}`} className="btn btn-secondary ml-2">Thông tin chi tiết món ăn</Link>
                        </Card.Body>                      
                    </Card>
                </div>
            ))
           }
            
        </div>
    );
}

export default MenuList;

//className "row" hiển thị món ăn theo hàng ngang, dạng dưới
// dishes.map(dish => (...)): lặp qua danh sách món ăn để hiển thị từng món
// div className cold-md-4: chia cột, mỗi cột chiếm 4 cột trên gird tổng 12 cột trên 1 hàng
//card: component từ boostrap để hiện thị món ăn dưới dạng thẻ