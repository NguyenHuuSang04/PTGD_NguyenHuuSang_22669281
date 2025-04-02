// import React from "react";
// import "./Dashboard.css";
// import Sidebar from "../Sidebar/Sidebar";

// const Dashboard = () => {
//   return (
//     <div className="dashboard-layout">
//       <Sidebar />
//       <div className="main-content">
//         <header className="header">
//           <h1>Dashboard</h1>
//           <div className="search-bar">
//             <input type="text" placeholder="Search..." />
//           </div>
//         </header>
//         <div className="content">
//           <h2>Overview</h2>
//           {/* Add Overview and other components here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard-grid">
      <Sidebar />
      <header className="header">
        <h1>Dashboard</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      </header>
      <main className="main-content">
        <h2>Overview</h2>
        {/* Add Overview and other components here */}
      </main>
    </div>
  );
};

export default Dashboard;