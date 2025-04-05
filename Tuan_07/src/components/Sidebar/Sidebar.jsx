import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src="/src/img/logo.png" alt="" className="mx-auto"/>
      <ul className="menu">
        <li className="flex hover:bg-pink-200 transition duration-400 rounded-2xl  mt-4 mb-6 text-xl py-1 px-5" > <img src="/src/img/four-rounded-squares-button.png" alt="" className="mr-6 size-6 opacity-65" />Dashboard</li>
        <li className="flex hover:bg-pink-200 transition duration-400 rounded-3xl  mt-4 mb-6 text-xl py-1 px-5"> <img src="/src/img/Folder.png" alt="" className="mr-6" /> Projects</li>
        <li className="flex hover:bg-pink-200 transition duration-400 rounded-3xl  mt-4 mb-6 text-xl py-1 px-5"> <img src="/src/img/Groups.png" alt="" className="mr-6" /> Teams</li>
        <li className="flex hover:bg-pink-200 transition duration-400 rounded-3xl  mt-4 mb-6 text-xl py-1 px-5"> <img src="/src/img/Pie chart.png" alt="" className="mr-6" /> Analytics</li>
        <li className="flex hover:bg-pink-200 transition duration-400 rounded-3xl  mt-4 mb-6 text-xl py-1 px-5"> <img src="/src/img/Chat.png" alt="" className="mr-6" /> Messages</li>
        <li className="flex hover:bg-pink-200 transition duration-400 rounded-3xl  mt-4 mb-6 text-xl py-1 px-5"> <img src="/src/img/Code.png" alt="" className="mr-6" /> Integrations</li>
      </ul>
      <div className="footer bg-cyan-100 rounded-2xl">
        <div className="mt-4"><img src="/src/img/Group.png" alt="" /></div>
        <div className="text-xl font-bold mb-2">V2.0 is available</div>
        <button className="border-1 border-cyan-300 bg-white  rounded-lg text-black  hover:bg-cyan-500 transition duration-400 px-14 py-1 mb-4">Try now</button>
      </div>
    </div>
  );
};

export default Sidebar;
