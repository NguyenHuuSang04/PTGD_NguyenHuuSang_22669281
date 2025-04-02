import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import "../styles/Home.css";

function Home() {
    return (
        <div className="container mt-4">
            <h1 className="text-center">Chào mừng bạn đến nhà hàng ABC</h1>
            <h3>Mời bạn đặt món</h3>
            <Carousel>
                <Carousel.Item>
                    <img src="/img/nhaHang1.jpg" alt="Nhà hàng 1" className="d-block carousel-image mx-auto" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/img/nhaHang2.jpg" alt="Nhà hàng 2" className="d-block carousel-image mx-auto" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/img/nhaHang3.jpg" alt="Nhà hàng 3" className="d-block carousel-image mx-auto" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Home;