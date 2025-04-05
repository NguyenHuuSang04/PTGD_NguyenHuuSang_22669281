import React, { useState, useEffect } from "react";

function DatabaseAPI() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch("/api/customers")
            .then((res) => res.json())
            .then((data) => setCustomers(data));
    }, []);

    return (
        <DataTable value={customers} paginator rows={5}>
            {/* Các cột */}
        </DataTable>
    );
}

export default DatabaseAPI;