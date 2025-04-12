import React from 'react';

const RecipeCard = ({ image, title, time, avatar, author, descript }) => {
    return (
        <div className="border rounded-lg shadow-md overflow-hidden">
            <img src={image} alt={title} className="w-65 h-60 mx-auto object-cover " />
            <div className="p-4">
                <div className='flex justify-between mb-2'>
                    <h3 className="text-lg font-bold mb-2">{title}</h3>
                    <button className="text-pink-500 hover:text-pink-600 transition border-1 rounded-full">
                        <img src="/src/img/save-instagram.png" alt="Icon" className="w-4 h-4 m-2 " />
                    </button>
                </div>

                <span className="bg-pink-100 text-pink-500 text-xs font-bold px-2 py-1 rounded-full inline-block mb-2">
                    {time}
                </span>
                {/* Hiển thị avatar và description chỉ khi được truyền vào */}
                {avatar && author && (
                    <div className="flex items-center mt-4">
                        <img src={avatar} alt={author} className="w-10 h-10 rounded-full mr-2" />
                        <span className="text-gray-700 font-medium">{author}</span>
                    </div>
                )}
                {descript && <p className="text-sm text-gray-600 mt-2">{descript}</p>}
            </div>
        </div>
    );
};

export default RecipeCard;