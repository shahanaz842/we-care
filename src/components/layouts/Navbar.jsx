import React from 'react';
import Logo from './Logo';
import NavLink from '../buttons/NavLink';
import Link from 'next/link';

const Navbar = () => {
    const nav = (
        <>
            <li><NavLink href={"/"}>Home</NavLink></li>
            <li><NavLink href={"/services"}>Services</NavLink></li>
            <li><NavLink href={"/about"}>About</NavLink></li>
            <li><NavLink href={"/blog"}>Blog</NavLink></li>
            <li><NavLink href={"/contact"}>Contact</NavLink></li>
        </>
    );

    return (
        /* The Wrapper: sticky, top-0, and high z-index is key */
        <div className="sticky top-0 z-50 w-full border-b border-base-200 bg-white/70 backdrop-blur-md">
            <div className="navbar max-w-7xl mx-auto px-4 md:px-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-[2rem] z-50 mt-3 w-52 p-4 shadow-xl border border-base-200">
                            {nav}
                        </ul>
                    </div>
                    <Logo />
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-6 px-1">
                        {nav}
                    </ul>
                </div>

                <div className="navbar-end gap-2">
                    <Link href={"/login"} className="hidden sm:flex text-neutral font-bold hover:text-primary transition-colors px-4">
                        Login
                    </Link>
                    <Link href={"/register"} className="btn btn-primary rounded-2xl px-8 shadow-lg shadow-primary/20 border-none text-white">
                        Join Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;