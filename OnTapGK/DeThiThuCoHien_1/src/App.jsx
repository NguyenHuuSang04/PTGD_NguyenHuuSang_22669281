// import './App.css'

import { Route, Routes } from "react-router-dom"
import { OrderProvider } from "./Context/OrderContext"
import Home from "./pages/Home"
import Menu_Pricing from "./pages/Menu_Pricing"
import Cart from "./pages/Cart"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import ProducDetail from "./Components/ProductDetail"
import ShoppingCart from "./pages/ShoppingCart"

function App() {
  return (
    <>
      <OrderProvider>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/menu" element={<Menu_Pricing/>}></Route>
          <Route path="/cart" element={<ShoppingCart/>}></Route>
          <Route path="/menu/:id" element={<ProducDetail/>}></Route>
        </Routes>
        <Footer></Footer>
      </OrderProvider>
    </>
  )
}

export default App
