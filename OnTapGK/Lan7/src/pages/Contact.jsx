import React from "react";
import "../styles/Contact.css"
import { Carousel } from "react-responsive-carousel";
function Contact() {
    return (
        <div className="mt-4">
            <p><strong>TeenL nhà hàng ABC</strong></p>
            <p><strong>SDT: </strong></p>
            <p><strong>Gmail</strong></p>         

             <Carousel showThumbs={false}>
                            <div>
                                <img src="../img/nhaHang1.jpg" alt=""  className="mx-auto  img_Contact"/>
                            </div>
            
                            <div>
                                <img src="../img/nhaHang2.jpg" alt=""  className="mx-auto img_Contact"/>
                            </div>
            
                            <div>
                                <img src="../img/nhaHang3.jpg" alt=""  className="mx-auto img_Contact"/>
                            </div>
                        </Carousel>   
        </div>
    );
}
export default Contact;