import { Button, Modal } from "bootstrap";
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
        <div className="container mt-4">
            <h1 className="text-center">Đặt bàn</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">Tên</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Ngày</label>
                    <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Giờ</label>
                    <input type="time" className="form-control" value={time} onChange={(e) => setTime(e.target.value)} required/>    
                </div>

                <div className="form-group">
                    <label htmlFor="">Số người</label>
                    <input type="number" className="form-control" value={number} onChange={(e) => setNumber(e.target.value)} min={1} required/>
                </div>

                <p></p>
                <button type="submit" className="btn btn-danger">Đặt bàn</button>
            </form>

           
        </div>
    );
}
export default BookTable;