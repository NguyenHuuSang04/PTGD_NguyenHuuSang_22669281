// import React, { useEffect, useState } from "react";

// function Overview() {
//     const [totalTurnover, setTotalTurnover] = useState(0); // Tổng doanh thu
//     const [totalProfit, setTotalProfit] = useState(0); // Tổng lợi nhuận
//     const [newCustomersCount, setNewCustomersCount] = useState(0); // Số khách hàng mới

//     useEffect(() => {
//         // Fetch tổng doanh thu
//         fetch("http://localhost:3001/turnover")
//             .then((res) => res.json())
//             .then((data) => {
//                 const total = data.reduce((sum, item) => sum + item.amount, 0);
//                 setTotalTurnover(total);
//             });

//         // Fetch tổng lợi nhuận
//         fetch("http://localhost:3001/profit")
//             .then((res) => res.json())
//             .then((data) => {
//                 const total = data.reduce((sum, item) => sum + item.amount, 0);
//                 setTotalProfit(total);
//             });

//         // Fetch số khách hàng mới
//         fetch("http://localhost:3001/customers")
//             .then((res) => res.json())
//             .then((data) => {
//                 const newCustomers = data.filter((customer) => customer.status === "New");
//                 setNewCustomersCount(newCustomers.length);
//             });
//     }, []);

//     return (
//         <div className="flex justify-between">
//             {/* Tổng doanh thu */}
//             <div className="bg-pink-100 w-100 p-5 mr-3 rounded-2xl">
//                 <div className="flex justify-between">
//                     <h1 className="font-bold">Total Turnover</h1>
//                     <img src="/src/img/Button 1509.png" alt="" />
//                 </div>
//                 <h1 className="text-2xl font-bold">${totalTurnover.toLocaleString()}</h1>
//                 <p><span className="text-green-500">Overall Revenue</span></p>
//             </div>

//             {/* Tổng lợi nhuận */}
//             <div className="bg-cyan-100 w-100 p-5 mr-3 rounded-2xl">
//                 <div className="flex justify-between">
//                     <h1 className="font-bold">Total Profit</h1>
//                     <img src="/src/img/Button 1529.png" alt="" />
//                 </div>
//                 <h1 className="text-2xl font-bold">${totalProfit.toLocaleString()}</h1>
//                 <p><span className="text-green-500">Overall Profit</span></p>
//             </div>

//             {/* Số khách hàng mới */}
//             <div className="bg-yellow-100 w-100 p-5 mr-3 rounded-2xl">
//                 <div className="flex justify-between">
//                     <h1 className="font-bold">New Customers</h1>
//                     <img src="/src/img/Button 1530.png" alt="" />
//                 </div>
//                 <h1 className="text-2xl font-bold">{newCustomersCount}</h1>
//                 <p><span className="text-green-500">Recently Added</span></p>
//             </div>
//         </div>
//     );
// }

// export default Overview;

import React, { useEffect, useState } from "react";

function Overview({ onDetailClick }) {
    const [totalTurnover, setTotalTurnover] = useState(0); // Tổng doanh thu
    const [totalProfit, setTotalProfit] = useState(0); // Tổng lợi nhuận
    const [newCustomersCount, setNewCustomersCount] = useState(0); // Số khách hàng mới

    useEffect(() => {
        // Fetch tổng doanh thu
        fetch("http://localhost:3001/turnover")
            .then((res) => res.json())
            .then((data) => {
                const total = data.reduce((sum, item) => sum + item.amount, 0);
                setTotalTurnover(total);
            });

        // Fetch tổng lợi nhuận
        fetch("http://localhost:3001/profit")
            .then((res) => res.json())
            .then((data) => {
                const total = data.reduce((sum, item) => sum + item.amount, 0);
                setTotalProfit(total);
            });

        // Fetch số khách hàng mới
        fetch("http://localhost:3001/customers")
            .then((res) => res.json())
            .then((data) => {
                const newCustomers = data.filter((customer) => customer.status === "New");
                setNewCustomersCount(newCustomers.length);
            });
    }, []);

    return (
        <div>
            {/* Tựa đề Overview */}
            <div className="flex items-center mb-5">
                <img src="/src/img/Squares four 1.png" alt="" className="w-6 h-6" />
                <h1 className="font-bold ml-2 text-xl">Overview</h1>
            </div>

            {/* Các thẻ thông tin */}
            <div className="flex justify-between">
                {/* Tổng doanh thu */}
                <div
                    className="bg-pink-100 w-100 p-5 mr-3 rounded-2xl cursor-pointer hover:bg-pink-200 transition"
                    onClick={() => onDetailClick("turnover")} // Gửi sự kiện khi nhấn
                >
                    <div className="flex justify-between">
                        <h1 className="font-bold">Total Turnover</h1>
                        <img src="/src/img/Button 1509.png" alt="" />
                    </div>
                    <h1 className="text-2xl font-bold">${totalTurnover.toLocaleString()}</h1>
                    <p><span className="text-green-500">Overall Revenue</span></p>
                </div>

                {/* Tổng lợi nhuận */}
                <div
                    className="bg-cyan-100 w-100 p-5 mr-3 rounded-2xl cursor-pointer hover:bg-cyan-200 transition"
                    onClick={() => onDetailClick("profit")} // Gửi sự kiện khi nhấn
                >
                    <div className="flex justify-between">
                        <h1 className="font-bold">Total Profit</h1>
                        <img src="/src/img/Button 1529.png" alt="" />
                    </div>
                    <h1 className="text-2xl font-bold">${totalProfit.toLocaleString()}</h1>
                    <p><span className="text-green-500">Overall Profit</span></p>
                </div>

                {/* Số khách hàng mới */}
                <div
                    className="bg-yellow-100 w-100 p-5 mr-3 rounded-2xl cursor-pointer hover:bg-yellow-200 transition"
                    onClick={() => onDetailClick("customers")} // Gửi sự kiện khi nhấn
                >
                    <div className="flex justify-between">
                        <h1 className="font-bold">New Customers</h1>
                        <img src="/src/img/Button 1530.png" alt="" />
                    </div>
                    <h1 className="text-2xl font-bold">{newCustomersCount}</h1>
                    <p><span className="text-green-500">Recently Added</span></p>
                </div>
            </div>
        </div>
    );
}

export default Overview;