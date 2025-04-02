import React, { useState } from "react";

function BookTable() {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [number, setNumber] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Đặt bàn thành công: ${name}, ${date}, ${time}, ${number}`);
    }
    return (
        <div className="container mx-auto mt-4">
            <h1 className="text-center font-bold text-3xl mb-4">Đặt bàn</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="block text-gray-600" htmlFor="name" >Tên</label>
                    <input className="form-control w-full px-3 py-2 border rounded-md" type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="name">Ngày</label>
                    <input type="date" className="form-control w-full px-3 py-2 border rounded-md" value={date} onChange={(e) => setDate(e.target.value)} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Giờ</label>
                    <input type="time" className="form-control w-full px-3 py-2 border rounded-md" value={time} onChange={(e) => setTime(e.target.value)} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Người</label>
                    <input type="number" className="form-control w-full px-3 py-2 border rounded-md" value={number} onChange={(e) => setNumber(e.target.value)} min={1} required />
                </div>

                <button type="submit" className="btn bg-red-500 text-white px-2 py-2 rounded hover:bg-red-700">Đặt bàn</button>
            </form>
        </div>
    );
}
export default BookTable;