// import React, { useState } from "react";
// import { Dialog } from "primereact/dialog";

// const ModalEdit = ({ visible, onHide, customer, onSave }) => {
//     const [editedCustomer, setEditedCustomer] = useState(customer);

//     // Cập nhật thông tin khách hàng khi chỉnh sửa
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setEditedCustomer({ ...editedCustomer, [name]: value });
//     };

//     // Gửi yêu cầu PUT để lưu thông tin
//     const handleSave = () => {
//         fetch(`http://localhost:300/customers/${editedCustomer.id}`, {
//             method: "PUT",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(editedCustomer),
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 onSave(data); // Gọi callback để cập nhật danh sách khách hàng
//                 onHide(); // Đóng modal
//             })
//             .catch((error) => console.error("Error updating customer:", error));
//     };

//     return (
//         <Dialog visible={visible} onHide={onHide} header="Edit Customer">
//             {editedCustomer && (
//                 <div className="p-fluid">
//                     <div className="field">
//                         <label htmlFor="name">Name</label>
//                         <input
//                             id="name"
//                             name="name"
//                             value={editedCustomer.name}
//                             onChange={handleChange}
//                             className="p-inputtext p-component"
//                         />
//                     </div>
//                     <div className="field">
//                         <label htmlFor="company">Company</label>
//                         <input
//                             id="company"
//                             name="company"
//                             value={editedCustomer.company}
//                             onChange={handleChange}
//                             className="p-inputtext p-component"
//                         />
//                     </div>
//                     <div className="field">
//                         <label htmlFor="order_value">Order Value</label>
//                         <input
//                             id="order_value"
//                             name="order_value"
//                             value={editedCustomer.order_value}
//                             onChange={handleChange}
//                             className="p-inputtext p-component"
//                         />
//                     </div>
//                     <button className="p-button p-component mt-3" onClick={handleSave}>
//                         Save
//                     </button>
//                 </div>
//             )}
//         </Dialog>
//     );
// };

// export default ModalEdit;


import React, { useState, useEffect } from "react";
import { Dialog } from "primereact/dialog";

const ModalEdit = ({ visible, onHide, customer, onSave }) => {
    const [editedCustomer, setEditedCustomer] = useState(customer);

    // Đồng bộ hóa editedCustomer với customer khi customer thay đổi
    useEffect(() => {
        setEditedCustomer(customer);
    }, [customer]);

    // Cập nhật thông tin khách hàng khi chỉnh sửa
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedCustomer({ ...editedCustomer, [name]: value });
    };

    // Gửi yêu cầu PUT để lưu thông tin
    const handleSave = () => {
        fetch(`http://localhost:300/customers/${editedCustomer.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editedCustomer),
        })
            .then((res) => res.json())
            .then((data) => {
                onSave(data); // Gọi callback để cập nhật danh sách khách hàng
                onHide(); // Đóng modal
            })
            .catch((error) => console.error("Error updating customer:", error));
    };

    return (
        <Dialog visible={visible} onHide={onHide} header="Edit Customer">
            {editedCustomer && (
                <div className="p-fluid">
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            value={editedCustomer.name || ""}
                            onChange={handleChange}
                            className="p-inputtext p-component"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="company">Company</label>
                        <input
                            id="company"
                            name="company"
                            value={editedCustomer.company || ""}
                            onChange={handleChange}
                            className="p-inputtext p-component"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="order_value">Order Value</label>
                        <input
                            id="order_value"
                            name="order_value"
                            value={editedCustomer.order_value || ""}
                            onChange={handleChange}
                            className="p-inputtext p-component"
                        />
                    </div>
                    <button className="p-button p-component mt-3" onClick={handleSave}>
                        Save
                    </button>
                </div>
            )}
        </Dialog>
    );
};

export default ModalEdit;