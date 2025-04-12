import React, { useEffect, useState } from 'react';
import RecipeCard from '../Components/RecipeCard';
import selectionImage from '../img/Selection.png';

const Home = () => {
    const [recipes, setRecipes] = useState([]);

    // Fetch data from json-server
    useEffect(() => {
        fetch('http://localhost:5000/Recipes')
            .then((response) => response.json())
            .then((data) => setRecipes(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="bg-gray-50">
            {/* Featured Recipe Section */}
            <section
                className="relative bg-cover bg-center  h-190 w-full"
                style={{ backgroundImage: `url(${selectionImage})` }}
            >
                <div className="absolute inset-0 flex items-center justify-start px-15">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
                        <div className="bg-yellow-400 text-black text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                            Recipe of the day
                        </div>
                        <h1 className="text-3xl font-bold text-pink-500 mb-4">Salad Caprese</h1>
                        <p className="text-gray-600 mb-6">
                            Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar
                            create a refreshing dish for lunch or appetizer.
                        </p>
                        <div className="flex items-center justify-center mb-6">
                            <img
                                src="/src/img/Avatar (1).png"
                                alt="Chef Avatar"
                                className="w-10 h-10 rounded-full mr-2"
                            />
                            <span className="text-gray-700 font-medium">Salad Caprese</span>
                        </div>
                        <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition">
                            View now →
                        </button>
                    </div>
                </div>
            </section>

            {/* Recipes Section */}
            <section className="py-12">
                <h2 className="text-2xl font-bold text-center text-pink-500">This Summer Recipes</h2>
                <p className="text-center mb-8">We have all your Independence Day sweets covered.</p>
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
                    {recipes.slice(0, 4).map((recipe) => (
                        <RecipeCard
                            key={recipe.id}
                            image={recipe.img}
                            title={recipe.name}
                            time={recipe.time}

                        />

                    ))
                    }

                </div>
            </section>

            {/* Recipes With Videos Section */}
            <section className="py-12 bg-gray-100">
                <h2 className="text-2xl font-bold text-center text-pink-500">Recipes With Videos</h2>
                <p className="text-center mb-8">Cooking Up Culinary Creations with Step-by-Step Videos.</p>
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
                    {recipes.slice(4, 8).map((recipe) => (
                        <RecipeCard
                            key={recipe.id}
                            image={recipe.img}
                            title={recipe.name}
                            time={recipe.time}

                        />
                    ))}
                </div>
            </section>

            {/* Editor's Pick Section */}
            <section className="py-12">
                <h2 className="text-2xl font-bold text-center text-pink-500">Editor's Pick</h2>
                <p className="text-center mb-8">
                    Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!
                </p>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
                    {recipes.slice(8, 12).map((recipe) => (
                        <RecipeCard
                            key={recipe.id}
                            image={recipe.img}
                            title={recipe.name}
                            time={recipe.time}
                            avatar={recipe.creator.avatar}
                            author={recipe.creator.name}
                            descript={recipe.creator.description}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;