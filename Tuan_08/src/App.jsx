import './App.css'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App
