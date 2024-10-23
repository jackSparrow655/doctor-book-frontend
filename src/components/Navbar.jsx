import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)
    
    
    return (
        <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
            <img className="w-44 cursor-pointer" src={assets.logo} alt="" />
            <ul className="hidden md:flex flex-row items-start gap-5 font-medium">
                <NavLink to='/'>
                    <li className="py-1 transition-all duration-200 hover:scale-95">HOME</li>
                    <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto inline" />
                </NavLink>
                <NavLink to='doctors'>
                    <li className="py-1 transition-all duration-200 hover:scale-95">All DOCTORS</li>
                    <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto inline" />
                </NavLink>
                <NavLink to='/about'>
                    <li className="py-1 transition-all duration-200 hover:scale-95">ABOUT</li>
                    <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto inline" />
                </NavLink>
                <NavLink to='/contact'>
                    <li className="py-1 transition-all duration-200 hover:scale-95">CONTACT</li>
                    <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto inline" />
                </NavLink>
            </ul>
            <div className="flex items-center gap-4">
            {
                token
                ? <div className="flex items-center gap-2 cursor-pointer group relative">
                    <img className="w-8 rounded-full" src={assets.profile_pic} alt="profile_pic" />
                    <img className="w-2.5" src={assets.dropdown_icon} alt="dropdown" />
                    <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                        <div className="min-w-48 bg-stone-100 flex flex-col rounded gap-4 p-4">
                            <p className="hover:text-black cursor-pointer" onClick={() => navigate('/my-profile')}>My Profile</p>
                            <p className="hover:text-black cursor-pointer" onClick={() => navigate('/my-appointments')}>My Appointment</p>
                            <p className="hover:text-black cursor-pointer" onClick={() => setToken(false)}>Log Out</p>
                        </div>
                    </div>
                </div>
                :<button onClick={() => {
                    navigate('/login')
                }} className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block" >create Account</button>
            }
                
            </div>
        </div>
    );
};

export default Navbar;
