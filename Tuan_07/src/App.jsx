import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import 'primereact/resources/themes/lara-light-blue/theme.css';  // hoặc theme khác
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';



//sử dụng router
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;