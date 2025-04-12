import React from 'react';

const Header = () => {
    return (
        <header className="w-full flex justify-between items-center p-4 bg-white shadow-md">
            <div className="flex ">
                <img src="/src/img/chefify.png" alt="" className='w-40 h-12 mx-auto ' />
                <div className="relative ml-6">
                    <img
                        src="/src/img/search.png" // Thay bằng đường dẫn thực tế đến ảnh icon kính lúp
                        alt="Search Icon"
                        className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                    />
                    <input
                        type="text"
                        placeholder="What would you like to cook?"
                        className="px-10 py-2 w-96 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                    />

                </div>
            </div>
            <nav className="flex items-center space-x-4">

                <ul className="flex space-x-4">
                    <li><a href="#what-to-cook" className="text-gray-700 hover:text-red-500">What to cook</a></li>
                    <li><a href="#recipes" className="text-gray-700 hover:text-red-500">Recipes</a></li>
                    <li><a href="#ingredients" className="text-gray-700 hover:text-red-500">Ingredients</a></li>
                    <li><a href="#Occasions" className="text-gray-700 hover:text-red-500">Occasions</a></li>
                    <li><a href="#about-us" className="text-gray-700 hover:text-red-500">About us</a></li>
                </ul>
                <div className="flex space-x-2">
                    <button className="px-4 py-2 border bg-pink-100 border-pink-500 text-pink-500 rounded-md hover:bg-pink-500 hover:text-white transition">
                        Login
                    </button>
                    <button className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-700 transition ">
                        Subscribe
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;