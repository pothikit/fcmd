import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import { Link, NavLink } from 'react-router-dom'
import "./navbar.css"
import { IoIosArrowDown } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <nav className='bg-white shadow-md shadow-[#0303030c] py-4 px-1'>
            <div className="container mx-auto">
                <div className='flex justify-between items-center'>
                    <div className="logo">
                        <img src={logo} alt="FCMD" className='max-w-[160px]' />
                    </div>
                    <ul className={`absolute lg:static text-white lg:text-inherit bg-primary lg:bg-transparent top-20 ${toggleMenu ? "left-0" : "-left-full"} duration-200 p-10 lg:p-0 lg:flex gap-8 space-y-4 lg:space-y-0 items-center`}>
                        <li>
                            <NavLink to="/" className={`${({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                                } md:text-lg capitalize`}>home
                            </NavLink>
                        </li>
                        {/* event menu */}
                        <li className='relative group'>
                            <NavLink to="/" className={`${({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                                } md:text-lg capitalize flex items-center gap-1 md:gap-2 `}>
                                <span>Event</span>
                                <span><IoIosArrowDown size={20} /></span>
                            </NavLink>
                            <div className='absolute top-[500%] hidden group-hover:block group-hover:top-full duration-100 lg:-left-2/3 pt-5 z-0'>
                                <div className='whitespace-nowrap flex flex-col gap-3 shadow p-4 lg:bg-slate-100 bg-slate-900 z-50 pt-3'>
                                    <Link to="/">
                                        Upcomming Event
                                    </Link>
                                    <Link to="/">
                                        Last Event
                                    </Link>
                                    <div className='w-8 h-8 absolute top-2 lg:bg-slate-100 bg-primary rotate-45 -z-50 left-1/2 -translate-x-1/2'></div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <NavLink to="/" className={`${({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                                } md:text-lg capitalize`}>
                                Photo Gallery
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className={`${({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                                } md:text-lg capitalize relative flex items-center gap-1 md:gap-2`}>
                                <span>Community Contributor</span>
                                <span><IoIosArrowDown size={20} /></span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className={`${({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                                } md:text-lg capitalize`}>Blog</NavLink>
                        </li>
                    </ul>
                    <div className='space-x-5 mr-2 flex items-center'>
                        {/* navigation bar and about */}
                        <button className='px-4 py-2 md:px-6 rounded-md bg-primary text-white hover:bg-opacity-80 duration-200'>About us</button>
                        <button className='lg:hidden' onClick={() => { setToggleMenu(!toggleMenu) }}>
                            {
                                !toggleMenu ?
                                    <FaBarsStaggered size={20} /> :
                                    <GrClose size={20} />
                            }
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar