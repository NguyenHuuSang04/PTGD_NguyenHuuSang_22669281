import React, { useState } from "react";
import { Dialog } from "primereact/dialog";

const ModalAdd = ({ visible, onHide, onSave }) => {
    const [newUser, setNewUser] = useState({
        name: "",
        company: "",
        order_value: "",
        order_date: "",
        status: "New",
        avatar: "/src/img/default-avatar.png", // Avatar mặc định
    });

    // Cập nhật thông tin người dùng khi nhập liệu
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    // Gửi yêu cầu POST để thêm người dùng mới
    const handleSave = () => {
        fetch("http://localhost:3002/customers", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser),
        })
            .then((res) => res.json())
            .then((data) => {
                onSave(data); // Gọi callback để cập nhật danh sách khách hàng
                onHide(); // Đóng modal
            })
            .catch((error) => console.error("Error adding user:", error));
    };

    return (
        <Dialog visible={visible} onHide={onHide} header="Add New User">
            <div className="p-fluid">
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        value={newUser.name}
                        onChange={handleChange}
                        className="p-inputtext p-component"
                    />
                </div>
                <div className="field">
                    <label htmlFor="company">Company</label>
                    <input
                        id="company"
                        name="company"
                        value={newUser.company}
                        onChange={handleChange}
                        className="p-inputtext p-component"
                    />
                </div>
                <div className="field">
                    <label htmlFor="order_value">Order Value</label>
                    <input
                        id="order_value"
                        name="order_value"
                        value={newUser.order_value}
                        onChange={handleChange}
                        className="p-inputtext p-component"
                    />
                </div>
                <div className="field">
                    <label htmlFor="order_date">Order Date</label>
                    <input
                        id="order_date"
                        name="order_date"
                        type="date"
                        value={newUser.order_date}
                        onChange={handleChange}
                        className="p-inputtext p-component"
                    />
                </div>
                <button className="p-button p-component mt-3" onClick={handleSave}>
                    Save
                </button>
            </div>
        </Dialog>
    );
};

export default ModalAdd;