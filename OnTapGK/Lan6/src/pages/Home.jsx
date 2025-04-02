import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../styles/Home.css"

function Home() {
    return (
        <div className="mt-4">
            <h1 className="font-bold text-center">Chào mừng quí khách đến nhà hàng ABC</h1>
            <p className="text-center">Mời quí khách đặt món</p>
            <Carousel showThumbs={false}>
                <div>
                    <img src="../img/nhaHang1.jpg" alt="" className="img_Home mx-auto" />
                </div>

                <div>
                    <img src="../img/nhaHang2.jpg" alt="" className="img_Home mx-auto" />
                </div>

                <div>
                    <img src="../img/nhaHang3.jpg" alt="" className="img_Home mx-auto" />
                </div>
            </Carousel>
        </div>
    );
}
export default Home;