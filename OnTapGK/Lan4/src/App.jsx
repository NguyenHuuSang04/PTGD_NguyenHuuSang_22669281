

import { Route, Routes } from "react-router-dom";
import BookTable from "./components/BookTable";
import Cart from "./components/Cart";
import Header from "./components/Header";
import { OrderProvider } from "./Context/OrderContext";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";
import DishDetail from "./pages/DishDetail";

function App() {
 return (
  <>
    <OrderProvider>
      <Header/>
      <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path = "/menu" element = {<Menu/>}></Route>
        <Route path="/menu/:id" element={<DishDetail/>}></Route>
        <Route path = "/contact" element = {<Contact/>}></Route>
        <Route path = "/book-table" element = {<BookTable/>}></Route>
        <Route path= "/cart" element = {<Cart/>}></Route>
      </Routes>
      <Footer/>
    </OrderProvider>
  </>
 );

}

export default App
