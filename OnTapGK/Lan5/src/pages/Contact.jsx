import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../styles/Contact.css"

function Contact(){
    return (
        <div className="mt-4 ">
            <p><strong>Nhà hàng: </strong>Nguyễn Hữu Sang</p>
            <p><strong>Số điện thoại: </strong>0942594875</p>
            <p><strong>Email: </strong>24huusang6a2@gmail.com</p>

            <Carousel showThumbs={false} className="mt-4">
                <div><img src="../img/nhaHang1.jpg" alt="" className="carousel_img_contact mx-auto" /></div>
                <div><img src="../img/nhaHang2.jpg" alt="" className="carousel_img_contact mx-auto"/></div>
                <div><img src="../img/nhaHang3.jpg" alt="" className="carousel_img_contact mx-auto"/></div>
            </Carousel>
        
        </div>

      
    );
}
export default Contact;