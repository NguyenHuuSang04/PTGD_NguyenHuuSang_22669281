import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ModalEdit from "../../ModalEdit/ModalEdit"; // Import ModalEdit
import ModalAdd from "../../ModalEdit/ModalAdd"; // Import ModalAdd
import "./Detailed.css";

function Detailed() {
    const [customers, setCustomers] = useState([]); // State để lưu dữ liệu từ API
    const [selectedCustomers, setSelectedCustomers] = useState([]); // State để lưu các hàng được chọn
    const [isModalVisible, setIsModalVisible] = useState(false); // State để hiển thị modal chỉnh sửa
    const [isAddModalVisible, setIsAddModalVisible] = useState(false); // State để hiển thị modal thêm người dùng
    const [editingCustomer, setEditingCustomer] = useState(null); // State để lưu khách hàng đang chỉnh sửa

    // Fetch dữ liệu từ API khi component được mount
    useEffect(() => {
        fetch("http://localhost:3002/customers")
            .then((res) => res.json())
            .then((data) => setCustomers(data))
            .catch((error) => console.error("Error fetching customers:", error));
    }, []);

    // Template để hiển thị ảnh avatar
    const avatarBodyTemplate = (rowData) => {
        return <img src={rowData.avatar} alt={rowData.name} className="w-10 h-10 rounded-full" />;
    };

    // Template để hiển thị biểu tượng cây bút
    const editBodyTemplate = (rowData) => {
        return (
            <button
                className="button p-0"
                onClick={() => {
                    setEditingCustomer(rowData); // Lưu khách hàng đang chỉnh sửa
                    setIsModalVisible(true); // Hiển thị modal chỉnh sửa
                }}
            >
                <img src="/src/img/create.png" alt="Edit" className="w-5 h-5" />
            </button>
        );
    };

    // Hàm xử lý khi lưu thông tin khách hàng
    const handleSave = (updatedCustomer) => {
        setCustomers((prevCustomers) =>
            prevCustomers.map((customer) =>
                customer.id === updatedCustomer.id ? updatedCustomer : customer
            )
        );
    };

    // Hàm xử lý khi thêm người dùng mới
    const handleAdd = (newCustomer) => {
        setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
    };

    return (
        <>
            <div className="flex mt-5 mb-2 justify-between">
                <div className="flex items-center">
                    <img src="/src/img/File text 1.png" alt="" className="w-7 h-7" />
                    <h1 className="font-bold ml-2 text-xl">Detailed report</h1>
                </div>

                <div className="flex ">
                    <button
                        className="flex mr-6 border border-pink-400 hover:bg-pink-200 text-pink-400 px-3 py-1 rounded-lg"
                        onClick={() => setIsAddModalVisible(true)} // Hiển thị modal thêm người dùng
                    >
                        <img src="/src/img/Download.png" alt="" />
                        <p>Import</p>
                    </button>

                    <button className="flex mr-6 border border-pink-400  hover:bg-pink-200 text-pink-400 px-3 py-1 rounded-lg">
                        <img src="/src/img/Move up.png" alt="" />
                        <p>Export</p>
                    </button>
                </div>
            </div>

            <div className="card">
                <DataTable
                    value={customers} // Dữ liệu từ API
                    paginator
                    rows={4}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    tableStyle={{ minWidth: "50rem" }}
                    scrollable // Kích hoạt chế độ cuộn
                    scrollHeight="400px" // Đặt chiều cao cố định cho bảng
                    selection={selectedCustomers} // Gắn state cho checkbox
                    onSelectionChange={(e) => setSelectedCustomers(e.value)} // Cập nhật state khi chọn
                >
                    <Column selectionMode="multiple" headerStyle={{ width: "3em" }}></Column>
                    <Column field="avatar" header="Avatar" body={avatarBodyTemplate} style={{ width: "10%" }}></Column>
                    <Column field="name" header="Name" style={{ width: "20%" }}></Column>
                    <Column field="company" header="Company" style={{ width: "20%" }}></Column>
                    <Column field="order_value" header="Order value" style={{ width: "15%" }}></Column>
                    <Column field="order_date" header="Order Date" style={{ width: "15%" }}></Column>
                    <Column field="status" header="Status" style={{ width: "10%" }}></Column>
                    <Column body={editBodyTemplate} headerStyle={{ width: "5%" }}></Column>
                </DataTable>
            </div>

            {/* Modal chỉnh sửa */}
            <ModalEdit
                visible={isModalVisible}
                onHide={() => setIsModalVisible(false)}
                customer={editingCustomer}
                onSave={handleSave}
            />

            {/* Modal thêm người dùng */}
            <ModalAdd
                visible={isAddModalVisible}
                onHide={() => setIsAddModalVisible(false)}
                onSave={handleAdd}
            />
        </>
    );
}

export default Detailed;