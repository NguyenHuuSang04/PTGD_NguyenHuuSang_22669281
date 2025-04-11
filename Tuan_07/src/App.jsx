import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Projects from "./components/Projects/Projects";
import Teams from "./components/Teams/Teams";
import Analytics from "./components/Analytics/Analytics";
import Messages from "./components/Messages/Messages";
import Integrations from "./components/Integrations/Integrations";
import 'primereact/resources/themes/lara-light-blue/theme.css';  // hoặc theme khác
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';



//sử dụng router
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} /> {/* Single Page Application */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/integrations" element={<Integrations />} />
    </Routes>
  );
}

export default App;