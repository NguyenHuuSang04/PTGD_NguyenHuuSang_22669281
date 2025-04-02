import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../styles/Home.css"
function Home() {
    return (
        <div className="mt-4">
            <h3 className="font-bold">Chào mừng bạn đến nhà hàng ABC</h3>
            <Carousel showThumbs={false}>
                <div>
                    <img src="../img/nhaHang1.jpg" alt=""  className="mx-auto  img_home"/>
                </div>

                <div>
                    <img src="../img/nhaHang2.jpg" alt=""  className="mx-auto img_home"/>
                </div>

                <div>
                    <img src="../img/nhaHang3.jpg" alt=""  className="mx-auto img_home"/>
                </div>
            </Carousel>
        </div>
    );
}
export default Home;