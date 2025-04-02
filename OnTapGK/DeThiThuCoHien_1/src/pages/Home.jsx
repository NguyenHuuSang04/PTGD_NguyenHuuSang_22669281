import React from "react";

function Home() {
    return(
        <div>
             {/* Banner Section */}
             <div className="relative bg-blue-500 text-white text-center py-16">
                <h1 className="text-4xl font-bold">Welcome to Our Menu & Pricing</h1>
                <p className="mt-4 text-lg">Discover delicious dishes and affordable prices!</p>
            </div>

            {/* Main Content */}
            <div className="mt-8">
                <img src="../img/img.jpg" alt="" />
            </div>
        </div>
    );
}

export default Home;