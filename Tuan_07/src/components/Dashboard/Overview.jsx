import React, { useEffect, useState } from "react";

function Overview() {
    const [turnover, setTurnover] = useState(0);
    const [profit, setProfit] = useState(0);
    const [newCustomers, setNewCustomers] = useState(0);

    useEffect(() => {
        // Fetch dữ liệu từ JSON Server
        fetch("http://localhost:3001/turnover")
            .then((res) => res.json())
            .then((data) => setTurnover(data.value));

        fetch("http://localhost:3001/profit")
            .then((res) => res.json())
            .then((data) => setProfit(data.value));

        fetch("http://localhost:3001/newCustomers")
            .then((res) => res.json())
            .then((data) => setNewCustomers(data.value));
    }, []);

    return (
        <div className="flex justify-between">
            <div className="bg-pink-100 w-100 p-5 mr-3 rounded-2xl">
                <div className="flex justify-between">
                    <h1 className="font-bold">Turnover</h1>
                    <img src="/src/img/Button 1509.png" alt="" />
                </div>
                <h1 className="text-2xl font-bold">${turnover.toLocaleString()}</h1>
                <p><span className="text-green-500">5.39%</span> period of change</p>
            </div>
            <div className="bg-cyan-100 w-100 p-5 mr-3 rounded-2xl">
                <div className="flex justify-between">
                    <h1 className="font-bold">Profit</h1>
                    <img src="/src/img/Button 1529.png" alt="" />
                </div>
                <h1 className="text-2xl font-bold">${profit.toLocaleString()}</h1>
                <p><span className="text-green-500">5.39%</span> period of change</p>
            </div>
            <div className="bg-yellow-100 w-100 p-5 mr-3 rounded-2xl">
                <div className="flex justify-between">
                    <h1 className="font-bold">New Customers</h1>
                    <img src="/src/img/Button 1530.png" alt="" />
                </div>
                <h1 className="text-2xl font-bold">{newCustomers.toLocaleString()}</h1>
                <p><span className="text-green-500">5.39%</span> period of change</p>
            </div>
        </div>
    );
}

export default Overview;