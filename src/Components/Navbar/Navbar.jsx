import React from 'react';
import { FaCartPlus } from "react-icons/fa";
const Navbar = () => {
    const items = <>
        <li className='text-2xl px-4'>Home</li>
        <li className='text-2xl px-4'>Blogs</li>
        <li className='text-2xl px-4'>All Products</li>
        <li className='text-2xl px-4'>Dashbord</li>
        <li className='text-2xl px-4'>Login</li>
    </>
    return (
        <div className="navbar bg-base-300 py-3 ">
            <div className="navbar-start ml-5">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        {items}

                    </ul>
                </div>
                <img src="https://i.ibb.co/M2GJH3g/techzoxne-1.png" alt="techzoxne-1" className='rounded-lg' />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {items}
                </ul>
            </div>
            <div className="navbar-end mr-5">
                <button className="btn">
                    <FaCartPlus className='text-4xl'></FaCartPlus>
                    <div className="badge badge-secondary">0</div>
                </button>
                
            </div>
        </div>
    );
};

export default Navbar;