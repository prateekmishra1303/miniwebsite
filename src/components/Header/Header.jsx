import React from 'react'
import { useState } from 'react';
import {Link, NavLink} from 'react-router-dom'

export default function Header({ toggleColor }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setIsMenuOpen(prev => !prev);
    }
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-3 sm:px-5 lg:px-6 py-2 sm:py-3">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="/name_logo.png"
                            className="h-14 sm:h-20"
                            alt="Logo"
                        />
                    </Link>
                     {/* Hamburger Icon (shown on small screens) */}
                    <button
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? (
                            // "X" icon (close)
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                                ) : (
                                    // Hamburger icon
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                    </button>

                    {/* Right Section */}
                    <div className="hidden sm:flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 lg:order-2">
                        {/* <button onClick={toggleColor} ...>Get Started</button> */}
                    </div>

                    {/* Nav Menu */}
                    <div
                        className={`w-full lg:flex lg:w-auto lg:order-1 mt-4 lg:mt-0 ${
                            isMenuOpen ? 'block' : 'hidden'
                        }`}
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col text-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6">
                            {[
                                { to: '/', label: 'Home' },
                                { to: '/about', label: 'About' },
                                { to: '/experience', label: 'Experience' },
                                { to: '/skills', label: 'Skills' },
                                { to: '/Contact', label: 'Contact Me' },
                                { to: '/github', label: 'Github' },
                            ].map(({ to, label }) => (
                                <li key={to}>
                                    <NavLink
                                        to={to}
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 
                                            lg:hover:bg-transparent lg:border-0 lg:p-0 hover:text-[#76B900] 
                                            ${isActive ? 'text-[#76B900]' : 'text-black'}`
                                        }
                                        onClick={() => setIsMenuOpen(false)} // close on click
                                    >
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                </div>
                </div>
            </nav>
        </header>
    );
}