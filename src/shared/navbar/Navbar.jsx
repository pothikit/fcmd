import React from 'react'
import logo from "../../assets/logo.png"
import { NavLink } from 'react-router-dom'
import "./navbar.css"
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
    return (
        <nav className='bg-white shadow py-2'>
            <div className="container mx-auto">
                <div className='flex justify-between items-center'>
                    <div className="logo">
                        <img src={logo} alt="FCMD" className='max-w-[180px]' />
                    </div>
                    <div className="flex gap-8 items-center">
                        <NavLink to="/" className={`${({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                            } md:text-lg capitalize`}>home
                        </NavLink>
                        <NavLink to="/" className={`${({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                            } md:text-lg capitalize relative flex items-center gap-1 md:gap-2`}>
                            <span>Event</span>
                            <span><IoIosArrowDown size={20} /></span>
                        </NavLink>
                        <NavLink to="/" className={`${({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                            } md:text-lg capitalize`}>
                            Photo Gallery
                        </NavLink>
                        <NavLink to="/" className={`${({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                            } md:text-lg capitalize relative flex items-center gap-1 md:gap-2`}>
                            <span>Community Contributor</span>
                            <span><IoIosArrowDown size={20} /></span>
                        </NavLink>
                        <NavLink to="/" className={`${({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                            } md:text-lg capitalize`}>Blog</NavLink>
                    </div>
                    <button className='px-4 py-2 md:px-6 md:py-3 rounded-md bg-primary text-white hover:bg-opacity-80 duration-200'>About us</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar