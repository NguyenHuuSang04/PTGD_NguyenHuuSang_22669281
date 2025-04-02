import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/Contact.css"

function Contact() {
    return(
        <div className="container mt-4">
                <p><strong>Tên nhà hàng:</strong> nhà hàng ABC</p>
                <p><strong>Số điện thoại:</strong> 1234567889</p>
                <p><strong>Email:</strong> 24huusang6a2@gmail.com</p>
                <Carousel>
                    <Carousel.Item>
                        <img src="../img/nhaHang1.jpg" alt="" className="d-block carousel-image mx-auto" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src="../img/nhaHang2.jpg" alt="" className="d-block carousel-image mx-auto" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src="../img/nhaHang3.jpg" alt=""  className="d-block  carousel-image mx-auto"/>
                    </Carousel.Item>
                </Carousel>
        </div>
    );
}
export default Contact;