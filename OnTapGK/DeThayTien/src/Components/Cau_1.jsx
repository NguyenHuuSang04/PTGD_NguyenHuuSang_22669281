import React, { useState } from "react";

function Cau_1() {
    const [count, setCount] = useState(0);
    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Counter Example</h2>
            <p className="text-4xl font-semibold text-blue-500 mb-6">{count}</p>
            <div className="flex justify-center space-x-4">
                <button
                    onClick={() => setCount(count + 1)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                    Tăng
                </button>
                <button
                    onClick={() => setCount(count - 1)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                    Giảm
                </button>
                <button
                    onClick={() => setCount(0)}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Cau_1;