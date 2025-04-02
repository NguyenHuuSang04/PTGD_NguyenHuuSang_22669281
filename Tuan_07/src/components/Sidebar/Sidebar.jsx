import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src="/src/img/logo.png" alt="" className="mx-auto"/>
      <ul className="menu">
        <li className="menu-item flex transition duration-700" > <img src="/src/img/Squares four 1.png" alt="" className="mx-auto" />Dashboard</li>
        <li className="menu-item flex"> <img src="/src/img/Folder.png" alt="" className="mx-auto" /> Projects</li>
        <li className="menu-item flex"> <img src="/src/img/Groups.png" alt="" className="mx-auto" /> Teams</li>
        <li className="menu-item flex"> <img src="/src/img/Pie chart.png" alt="" className="mx-auto" /> Analytics</li>
        <li className="menu-item flex"> <img src="/src/img/Chat.png" alt="" className="mx-auto" /> Messages</li>
        <li className="menu-item flex"> <img src="/src/img/Code.png" alt="" className="mx-auto" /> Integrations</li>
      </ul>
      <div className="footer">
        <div className="version">V2.0 is available</div>
        <button className="try-now">Try now</button>
      </div>
    </div>
  );
};

export default Sidebar;