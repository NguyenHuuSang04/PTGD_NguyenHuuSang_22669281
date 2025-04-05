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

// grid-area: header;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px;
//   background-color: #f1f1f1;
//   border-bottom: 1px solid #ddd;

import React from "react";
import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
import Overview from "./Overview";

const Dashboard = () => {
  return (
    <div className="dashboard-grid">
      <Sidebar />
      <header className="header flex justify-between items-center p-5 border-b-1">
        <h1 className="text-pink-600 font-bold">Dashboard</h1>

        <div className="flex">
          <div className="flex border border-gray-400 rounded-lg w-80">
            <img src="/src/img/Search.png" alt="" className=""/>
            <input type="text" placeholder="Search..." className="w-80" />
          </div>

          <div className="flex">
            <img src="/src/img/Bell 1.png" alt="" className="mr-2"/>
            <img src="/src/img/Question 1.png" alt="" className="mr-2"/>
            <img src="/src/img/Avatar (5).png" alt="" className="mr-2"/>
          </div>
        </div>
       

      </header>
      <main className="main-content">
        <Overview></Overview>
        {/* Add Overview and other components here */}
      </main>
    </div>
  );
};

export default Dashboard;