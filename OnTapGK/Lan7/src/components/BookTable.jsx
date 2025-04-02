import React, { useState } from "react";
function BookTable() {
    const[name, setName] = useState("");
    const[date, setDate] = useState("");
    const[time, setTime] = useState("");
    const[number, setNumber] = useState(1);

    const handleSumbit = (e) => {
        e.preventDefault();
        alert(`Đặt bàn thành công: ${name}, ${date}, ${time}, ${number}`)
    }

    return (
        <div className="container mt-4">
            <form action="" onSubmit={handleSumbit}>
                <div className="form-group">
                    <label htmlFor="">Tên</label>
                    <input type="text" className="form-control w-full px-2 py-3 border rounded-lg" value={name} onChange={(e) => setName(e.target.value)} required />                    
                </div>

                <div className="form-group">
                    <label htmlFor="">Ngày</label>
                    <input type="date" className="form-control w-full px-2 py-3 border rounded-lg" value={date} onChange={(e) => setDate(e.target.value)} required />                    
                </div>

                <div className="form-group">
                    <label htmlFor="">Giờ</label>
                    <input type="time" className="form-control w-full px-2 py-3 border rounded-lg" value={time} onChange={(e) => setTime(e.target.value)} required />                    
                </div>

                <div className="form-group">
                    <label htmlFor="">Số người</label>
                    <input type="number" className="form-control w-full px-2 py-3 border rounded-lg" value={number} onChange={(e) => setNumber(e.target.value)} min={1} required />                    
                </div>

               <button type="submit" className="bg-red-300 hover:bg-red-700 px-3 py-2 mt-4 rounded-lg">Đặt bàn</button>

            </form>

        </div>
    );
}
export default BookTable;