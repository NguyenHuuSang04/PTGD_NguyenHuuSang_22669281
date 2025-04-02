import React, { useState } from "react";
function BookTable() {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [number, setNumber] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert( `Đặt bàn thành công. ${name}, ${date}, ${time}, ${number}`)

    }
    return(
        <div className="container mx-auto mt-4">
            <h1 className="text-center font-bold text-3xl mb-4">Đặt bàn</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="" className="">Tên</label>
                    <input type="text" className=" form-control border w-full px-3 py-2 rounded-2xl" value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="" className="">Ngày</label>
                    <input type="date" className=" form-control border w-full px-3 py-2 rounded-2xl" value={date} onChange={(e) => setDate(e.target.value)} required/>
                </div>

                <div>
                    <label htmlFor="" className="">Giờ</label>
                    <input type="time" className=" form-control border w-full px-3 py-2 rounded-2xl" value={time} onChange={(e) => setTime(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="" className="">Số người</label>
                    <input type="number" className=" form-control border w-full px-3 py-2 rounded-2xl" value={number} onChange={(e) => setNumber(e.target.value)} min={1} required/>
                </div>
                <button type="submit" className="border bg-red-500 text-white px-5 py-3 rounded-2xl mt-2 hover:bg-red-800">Đặt bàn</button>
            </form>
        </div>
    );
}
export default BookTable;

