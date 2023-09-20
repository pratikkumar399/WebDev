import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const toggleMenu = () => {
        setToggle((prevToggle) => !prevToggle);
    };

    return (
        <div>
            {/* Responsive Navbar */}
            <nav className="flex items-center justify-between flex-wrap bg-teal-600 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Link to="/"  >

                        <span className="font-semibold text-xl tracking-tight">Learn React</span>
                    </Link>
                </div>
                <div className="block lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
                    >
                        <svg
                            className="fill-current h-3 w-3"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                            />
                        </svg>
                    </button>
                </div>
                {/* Always show the menu on larger screens */}
                <div className={`w-full ${toggle ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto`}>
                    <div className="text-sm lg:flex-grow">
                        <Link
                            to="/show"
                            className="block mt-4 lg:inline-block lg:mt-0 text-white-600 font-bold hover:text-white mr-4"
                        >
                            Visibility
                        </Link>
                    </div>
                    <div className="text-sm lg:flex-grow">
                        <Link
                            to="/password"
                            className="block mt-4 lg:inline-block lg:mt-0 text-white-600 font-bold hover:text-white mr-4"
                        >
                            Password
                        </Link>
                    </div>
                    <div className="text-sm lg:flex-grow">
                        <Link
                            to="/currency"
                            className="block mt-4 lg:inline-block lg:mt-0 text-white-600 font-bold hover:text-white mr-4"
                        >
                            Currency
                        </Link>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;
