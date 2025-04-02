// import './App.css'

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { OrderProvider } from "./Context/OrderContext";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import DishDetail from "./pages/DishDetail";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import BookTable from "./components/BookTable";

import "react-responsive-carousel/lib/styles/carousel.min.css"

function App() {
  return (
    <>
        <OrderProvider>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/menu" element={<Menu/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/menu/:id" element={<DishDetail/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path= "/book-table" element= {<BookTable/>}></Route>
            </Routes>
            <Footer></Footer>
        </OrderProvider>
    </>
  );
}

export default App
