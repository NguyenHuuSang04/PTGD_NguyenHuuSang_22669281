import React from "react";
import { Carousel } from "react-responsive-carousel";

import "../styles/Home.css"

function Home() {
    return (
        <div>
            <h5 className="text-center font-bold">Chào mừng bạn đến nhà hàng ABC</h5>
            <h3 className="text-center">Mời bạn chọn món</h3>
            <Carousel showThumbs= {false} className="mt-4">
                <div>
                    <img src="../img/nhaHang1.jpg" alt="" className="carousel_img_Home mx-auto"/>
                </div>

                <div>
                    <img src="../img/nhaHang2.jpg" alt="" className="carousel_img_Home mx-auto"/>
                </div>

                <div>
                    <img src="../img/nhaHang3.jpg" alt="" className="carousel_img_Home mx-auto"/>
                </div>

            </Carousel>
        </div>
    );

}
export default Home;