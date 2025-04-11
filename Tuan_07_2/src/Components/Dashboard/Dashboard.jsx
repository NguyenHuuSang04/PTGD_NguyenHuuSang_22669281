import React from "react";
import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
import Overview from "./Overview";
import Detailed from "./Detailed";

const Dashboard = () => {
    return (
        <div className="dashboard-grid">
            <Sidebar />
            <header className="header flex justify-between items-center p-5 border-b-1">
                <h1 className="text-pink-600 font-bold">Dashboard</h1>

                <div className="flex">
                    <div className="flex border border-gray-400 rounded-lg w-80">
                        <img src="/src/img/Search.png" alt="" className="" />
                        <input type="text" placeholder="Search..." className="w-80" />
                    </div>

                    <div className="flex">
                        <img src="/src/img/Bell 1.png" alt="" className="mr-2" />
                        <img src="/src/img/Question 1.png" alt="" className="mr-2" />
                        <img src="/src/img/Avatar (5).png" alt="" className="mr-2" />
                    </div>
                </div>


            </header>
            <main className="main-content">
                <Overview ></Overview>
                <Detailed ></Detailed>
                {/* Add Overview and other components here */}
            </main>
        </div>
    );
};

export default Dashboard;