import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            {/* <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 "> */}
            <div className="container mx-auto flex gap-8 px-4 ">
                {/* About Us Section */}
                <div className='w-3/4'>
                    <h3 className="text-lg font-bold mb-4">About Us</h3>
                    <p className="text-sm mb-4">
                        Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
                    </p>
                    <div className="flex w-full">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-1/2 bg-white px-4 py-2 rounded-md focus:outline-none text-gray-900"
                        />
                        <button className="ml-3 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition">
                            Send
                        </button>
                    </div>

                    {/* Footer Bottom */}
                    <div className="pt-25 flex text-sm">
                        <div className="flex  items-center space-x-2">
                            <img src="/src/img/chefify.png" alt="Chefify Logo" className="w-35 " />
                            <span>© 2023 Chefify Company</span>
                        </div>
                        <div className="mt-3">
                            <a href="#terms" className="hover:underline mx-2">Terms of Service</a>
                            <a href="#privacy" className="hover:underline mx-2">Privacy Policy</a>
                        </div>
                    </div>

                </div>

                {/* Learn More Section */}
                <div className='w-1/4' >
                    <h3 className="text-lg font-bold mb-4">Learn More</h3>
                    <ul className="space-y-2">
                        <li><a href="#our-cooks" className="hover:underline">Our Cooks</a></li>
                        <li><a href="#features" className="hover:underline">See Our Features</a></li>
                        <li><a href="#faq" className="hover:underline">FAQ</a></li>
                    </ul>

                    {/* Shop Section */}
                    <div className='mt-6'>
                        <h3 className="text-lg font-bold mb-4">Shop</h3>
                        <ul className="space-y-2">
                            <li><a href="#gift-subscription" className="hover:underline">Gift Subscription</a></li>
                            <li><a href="#feedback" className="hover:underline">Send Us Feedback</a></li>
                        </ul>
                    </div>

                </div>


                {/* Recipes Section */}
                <div className='w-1/4'>
                    <h3 className="text-lg font-bold mb-4">Recipes</h3>
                    <ul className="space-y-2">
                        <li><a href="#what-to-cook" className="hover:underline">What to Cook This Week</a></li>
                        <li><a href="#pasta" className="hover:underline">Pasta</a></li>
                        <li><a href="#dinner" className="hover:underline">Dinner</a></li>
                        <li><a href="#healthy" className="hover:underline">Healthy</a></li>
                        <li><a href="#vegetarian" className="hover:underline">Vegetarian</a></li>
                        <li><a href="#vegan" className="hover:underline">Vegan</a></li>
                        <li><a href="#christmas" className="hover:underline">Christmas</a></li>
                    </ul>
                </div>


            </div>


        </footer>
    );
};

export default Footer;