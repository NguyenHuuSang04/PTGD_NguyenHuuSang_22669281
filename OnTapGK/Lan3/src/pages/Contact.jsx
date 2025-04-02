import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Contact.css";

function Contact() {
    return (
        <div className="container mx-auto mt-4">
            <p><strong>Tên nhà hàng:</strong> nhà hàng ABC</p>
            <p><strong>Số điện thoại:</strong> 1234567889</p>
            <p><strong>Email:</strong> 24huusang6a2@gmail.com</p>
            <Carousel showThumbs={false} className="mt-4">
                <div>
                    <img src="../img/nhaHang1.jpg" alt="Nhà hàng 1" className="carousel-image mx-auto" />
                </div>
                <div>
                    <img src="../img/nhaHang2.jpg" alt="Nhà hàng 2" className="carousel-image mx-auto" />
                </div>
                <div>
                    <img src="../img/nhaHang3.jpg" alt="Nhà hàng 3" className="carousel-image mx-auto" />
                </div>
            </Carousel>
        </div>
    );
}

export default Contact;