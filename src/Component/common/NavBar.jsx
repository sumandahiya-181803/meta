import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CrossIcon, HeartIocn, MenuIcon, SearchIcon, ShoppingCardIcon, SwitchIcon } from '../icon/Icon';
import { NAVBAR_LINKS_LIST } from './Helper';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const path = location.pathname;

    // Toggle scroll based on menu state
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    return (
        <nav className="border-b border-black-dark bg-white">
            <div className="container mx-auto max-w-[1170px] flex justify-between items-center px-4 py-4 lg:py-5">
                
                {/* Logo */}
                <Link to="/" className="text-xl sm:text-2xl font-semibold">
                    Meta <span className="font-extrabold">Blog</span>
                </Link>
                
                {/* Links for larger screens */}
                <div className="hidden md:flex gap-6 lg:gap-10 items-center">
                    {NAVBAR_LINKS_LIST.map((obj, i) => (
                        <Link
                            key={i}
                            to={obj.url}
                            className={`text-base font-medium hover:text-red duration-300 relative after:absolute 
                                after:w-0 after:hover:w-full after:duration-300 after:bottom-[1px] after:left-0 after:bg-red after:h-[2px] 
                                ${path === obj.url ? 'text-red' : 'text-black'}`}
                        >
                            {obj.title}
                        </Link>
                    ))}
                </div>

                {/* Search and icons */}
                <div className="flex items-center gap-2 sm:gap-4">
                    <div className="relative w-full max-w-[100px] sm:max-w-[200px] md:max-w-[150px] lg:max-w-[243px] group">
                        <input
                            className="bg-gray-100 py-[6px] px-2 sm:px-3 lg:px-5 w-full rounded border-transparent group-hover:border-red-600 duration-300 text-xs outline-none"
                            type="search"
                            name="search"
                            placeholder="What are you looking for?"
                        />
                        <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 cursor-pointer">
                            <SearchIcon />
                        </div>
                    </div>

                    {/* Icons */}
                    <SwitchIcon />

                    {/* Hamburger menu for mobile */}
                    <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(true)}>
                        <MenuIcon />
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed top-0 right-0 w-full h-full bg-black z-50 flex flex-col items-center justify-center duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="absolute top-4 right-4 text-white cursor-pointer" onClick={() => setIsOpen(false)}>
                    <CrossIcon />
                </div>

                {NAVBAR_LINKS_LIST.map((obj, i) => (
                    <div key={i} onClick={() => setIsOpen(false)} className="my-4">
                        <Link
                            to={obj.url}
                            className={`text-lg font-medium text-white hover:text-red duration-300 ${path === obj.url ? 'text-red' : 'text-white'}`}
                        >
                            {obj.title}
                        </Link>
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default NavBar;
