import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='p-2 pb-0'>
            <nav className="bg-teal-500 p-4 rounded-lg ">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="text-white font-serif font-bold text-xl">
                        <a href="#">Speech</a>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        <a href="#home" className="text-gray-300 hover:text-white">
                            Home
                        </a>
                        <a href="#about" className="text-gray-300 hover:text-white">
                            About
                        </a>
                        <Link to="/therapist" className="text-gray-300 hover:text-white">
                            Therapist
                        </Link>
                        <a href="#contact" className="text-gray-300 hover:text-white">
                            Contact
                        </a>
                        <a href='/theraphyplan' className='text-gray-300 hover:text-white'>
                            Theraphy Plan    
                        </a>
                    </div>
                    <div className="md:hidden">
                        <button className="text-gray-300 hover:text-white">
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
