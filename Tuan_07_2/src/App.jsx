import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import 'primereact/resources/themes/lara-light-blue/theme.css';  // hoặc theme khác
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

//5. React Router ()
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} /> {/* Single Page Application */}
    </Routes>
  );
}

export default App
