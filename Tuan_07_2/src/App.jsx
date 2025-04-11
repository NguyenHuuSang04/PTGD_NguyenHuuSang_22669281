import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Projects from "./Components/Projects/Projects";
import Teams from "./Components/Teams/Teams";
import Analytics from "./Components/Analytics/Analytics";
import Messages from "./Components/Messages/Messages";
import Integrations from "./Components/Integrations/Integrations";
import 'primereact/resources/themes/lara-light-blue/theme.css';  // hoặc theme khác
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

//5. React Router ()
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} /> {/* Single Page Application */}
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

export default App
