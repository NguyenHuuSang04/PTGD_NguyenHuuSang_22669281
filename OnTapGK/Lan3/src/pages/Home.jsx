import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "../styles/Home.css";

function Home() {
    return (
        <div className="container mx-auto mt-4">
            <h1 className="text-center text-3xl font-bold">Chào mừng bạn đến nhà hàng ABC</h1>
            <h3 className="text-center text-xl mt-2">Mời bạn đặt món</h3>
            <Carousel showThumbs={false} className="mt-4">
                <div>
                    <img src="/img/nhaHang1.jpg" alt="Nhà hàng 1" className="carousel-image mx-auto" />
                </div>
                <div>
                    <img src="/img/nhaHang2.jpg" alt="Nhà hàng 2" className="carousel-image mx-auto" />
                </div>
                <div>
                    <img src="/img/nhaHang3.jpg" alt="Nhà hàng 3" className="carousel-image mx-auto" />
                </div>
            </Carousel>
        </div>
    );
}

export default Home;