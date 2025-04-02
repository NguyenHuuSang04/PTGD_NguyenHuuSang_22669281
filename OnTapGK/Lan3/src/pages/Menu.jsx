import React from "react";
import MenuList from "../components/MenuList";

function Menu() {
    return (
        <div>
            <div className="container mx-auto mt-4">
                <h1 className="text-center text-3xl font-bold">Menu</h1>
                <MenuList />
            </div>
        </div>
    );
}

export default Menu;