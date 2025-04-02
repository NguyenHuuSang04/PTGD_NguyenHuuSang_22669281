import React, { useState } from "react";
function BookTable() {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [number, setNumber] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Đặt bàn thành công: ${name}, ${date}, ${time}, ${number}`)
    }

    return (
        <div className="container mt-4">
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">Tên</label>
                    <input type="text" className="forn-control border w-full px-3 py-2 rounded-lg" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>

                <div className="form-group">
                    <label htmlFor="">Ngày</label>
                    <input type="date" className="forn-control border w-full px-3 py-2 rounded-lg" value={date} onChange={(e) => setDate(e.target.value)} required />
                </div>

                <div className="form-group">
                    <label htmlFor="">Giờ</label>
                    <input type="time" className="forn-control border w-full px-3 py-2 rounded-lg" value={time} onChange={(e) => setTime(e.target.value)} required />
                </div>

                <div className="form-group">
                    <label htmlFor="">số người</label>
                    <input type="number" className="forn-control border w-full px-3 py-2 rounded-lg" value={number} onChange={(e) => setNumber(e.target.value)} required min={1}/>
                </div>

                <button type="submit" className="border bg-amber-400 hover:bg-amber-700 text-white rounded-lg px-5 py-3 mt-4">Đặt bàn</button>
            </form>
        </div>
    );
}
export default BookTable;