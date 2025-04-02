import React from "react";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';
function Home() {
    // return (
    //     <div className="container mt-4">
    //         <h1>Chào mừng bạn đến nhà hàng ABC</h1>
    //         <h3>Mời bạn đặt món</h3>
    //         <img src="../img/img.jpg" alt="" />
    //     </div>
    // );

    return(
            <div className="container mt-4">
                <h1 className="text-center">Chào mừng bạn đến nhà hàng ABC</h1>
                <h3>Mời bạn đặt món</h3>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-70 carousel-image mx-auto"
                            src="../img/nhaHang1.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-70 carousel-image mx-auto"
                            src="../img/nhaHang2.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-70 carousel-image mx-auto"
                            src="../img/nhaHang3.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
    )
}
export default Home;


