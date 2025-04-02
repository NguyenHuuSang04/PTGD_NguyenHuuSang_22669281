import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../styles/Contact.css"

function Contact() {
    return (
        <div className="container mx-auto mt-4">
            <p><strong>Tên nhà Hàng: ABC</strong></p>
            <p><strong>Số điện thoại</strong></p>
            <p><strong>Email</strong></p>

            <Carousel>
                <div>
                    <img src="../img/nhaHang1.jpg" alt="" className="carousel-image mx-auto"/>
                </div>
                <div>
                    <img src="../img/nhaHang2.jpg" alt="" className="carousel-image mx-auto"/>
                </div>
                <div>
                    <img src="../img/nhaHang3.jpg" alt="" className="carousel-image mx-auto"/>
                </div>
            </Carousel>
            
        </div>
    );
}
export default Contact;