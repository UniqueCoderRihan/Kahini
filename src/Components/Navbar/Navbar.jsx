import React, { useContext } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContex } from '../../Provider/AuthProvider';
const Navbar = () => {
    const { user,logout } = useContext(AuthContex);
    console.log(user);
    const handleLogout = ()=>{
        logout()
    }
    const items = <>
        <li className='text-2xl px-2'> <Link to='/'>Home</Link> </li>
        <li className='text-2xl px-2'> <Link to='/all-products'>All Products</Link> </li>
        <li className='text-2xl px-2'> <Link to='/blog'>Blog</Link> </li>

        {
            user ? <>
                <li className='text-2xl px-2'> <Link to='/dashbord'>Dashbord</Link> </li>
                <div className="avatar">
                    <div className="w-12  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.photoURL} />
                    </div>
                </div>
                <li className='text-2xl px-2'> <Link onClick={handleLogout}>Logout</Link> </li>
            </> : <>
                <li className='text-2xl px-2'> <Link to='/login'>Login</Link> </li>
            </>
        }
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