import React, { useEffect, useState } from "react";

function Overview() {
    const [turnover, setTurnover] = useState(0);
    const [profit, setProfit] = useState(0);
    const [newCustomers, setNewCustomers] = useState(0);

    useEffect(() => {
        // Giả sử bạn có 3 API
        fetch("/api/turnover").then(res => res.json()).then(data => setTurnover(data.value));
        fetch("/api/profit").then(res => res.json()).then(data => setProfit(data.value));
        fetch("/api/new-customers").then(res => res.json()).then(data => setNewCustomers(data.value));
    }, []);

    return (
        <div className="flex justify-between">
            <div className="bg-pink-100 w-100 p-5 mr-3 rounded-2xl">
                <div className="flex justify-between">
                    <h1 className="font-bold">Turnover</h1>
                    <img src="/src/img/Button 1509.png" alt="" />
                </div>
                {/* <h1 className="text-2xl font-bold">${turnover}</h1> */}
                <h1 className="text-2xl font-bold">$92,405</h1>
                <p><span className="text-green-500">5.39%</span> period of change</p>
            </div>
            <div className="bg-cyan-100 w-100 p-5 mr-3 rounded-2xl">
                <div className="flex justify-between">
                    <h1 className="font-bold">Profit</h1>
                    <img src="/src/img/Button 1529.png" alt="" />
                </div>
                {/* <h1 className="text-2xl font-bold">${profit}</h1> */}
                <h1 className="text-2xl font-bold">$32,218</h1>

                <p><span className="text-green-500">5.39%</span> period of change</p>
            </div>
            <div className="bg-yellow-100 w-100 p-5 mr-3 rounded-2xl">
                <div className="flex justify-between">
                    <h1 className="font-bold">New Customers</h1>
                    <img src="/src/img/Button 1530.png" alt="" />
                </div>
                {/* <h1 className="text-2xl font-bold">${newCustomers}</h1> */}
                <h1 className="text-2xl font-bold">298</h1>

                <p><span className="text-green-500">5.39%</span> period of change</p>
            </div>
        </div>
    );
}

export default Overview;