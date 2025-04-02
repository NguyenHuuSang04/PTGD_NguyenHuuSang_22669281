import React from "react";
import "../styles/contact.css"
import { Carousel } from "react-responsive-carousel";

function Contact() {
    return (
        <div>
            <p><strong>Tên</strong></p>
            <p><strong>SDT</strong></p>
            <p><strong>Email</strong></p>

            <Carousel showThumbs={false}>
                            <div>
                                <img src="../img/nhaHang1.jpg" alt="" className="img_Contact mx-auto" />
                            </div>
            
                            <div>
                                <img src="../img/nhaHang2.jpg" alt="" className="img_Contact mx-auto" />
                            </div>
            
                            <div>
                                <img src="../img/nhaHang3.jpg" alt="" className="img_Contact mx-auto" />
                            </div>
                        </Carousel>
        </div>
    );
}
export default Contact;