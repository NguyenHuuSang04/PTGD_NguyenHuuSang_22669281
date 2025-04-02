// import './App.css'
import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { OrderProvider } from "./Context/OrderContext";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import DishDetail from "./pages/DishDetail";
import BookTable from "./components/BookTable";
import Cart from "./components/Cart";

function App() {
 return (
    <>
        <OrderProvider>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/menu" element={<Menu/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/menu/:id" element={<DishDetail/>} />
                <Route path="/book-table" element={<BookTable/>} />
                <Route path = "/cart" element= {<Cart/>}/>
            </Routes>
            <Footer/>
        </OrderProvider>
    </>
 );
}

export default App
