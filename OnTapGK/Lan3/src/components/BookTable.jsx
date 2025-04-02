import React, { useState } from "react";


function BookTable() {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [number, setNumber] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Đặt bàn thành công: ${name}, ${date}, ${time}, ${number}`);
    };

    return (
        <div className="container mx-auto mt-4">
            <h1 className="text-center text-3xl font-bold mb-4">Đặt bàn</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-group">
                    <label htmlFor="name" className="block text-gray-700">Tên</label>
                    <input 
                        type="text" 
                        id="name" 
                        className="form-control w-full px-3 py-2 border border-gray-300 rounded-md" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="date" className="block text-gray-700">Ngày</label>
                    <input 
                        type="date" 
                        id="date" 
                        className="form-control w-full px-3 py-2 border border-gray-300 rounded-md" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="time" className="block text-gray-700">Giờ</label>
                    <input 
                        type="time" 
                        id="time" 
                        className="form-control w-full px-3 py-2 border border-gray-300 rounded-md" 
                        value={time} 
                        onChange={(e) => setTime(e.target.value)} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="number" className="block text-gray-700">Số người</label>
                    <input 
                        type="number" 
                        id="number" 
                        className="form-control w-full px-3 py-2 border border-gray-300 rounded-md" 
                        value={number} 
                        onChange={(e) => setNumber(e.target.value)} 
                        min={1} 
                        required 
                    />
                </div>

                <button 
                    type="submit" 
                    className="btn bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Đặt bàn
                </button>
            </form>
        </div>
    );
}

export default BookTable;
