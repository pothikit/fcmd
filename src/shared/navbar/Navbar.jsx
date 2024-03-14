import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import { Link, NavLink } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <nav className='bg-white shadow-md shadow-[#0303030c] py-2 lg:py-4 px-1 fixed top-0 w-full z-50'>
            <div className="container mx-auto">
                <div className='flex justify-between items-center'>
                    <div className="logo">
                        <Link to="/"><img src={logo} alt="FCMD" className='max-w-[160px]' /></Link>
                    </div>
                    <ul className={`absolute lg:static text-white lg:text-inherit bg-primary w-full z-50 lg:w-auto lg:bg-transparent top-16 ${toggleMenu ? "left-0" : "-left-full"} duration-200 p-10 lg:p-0 lg:flex gap-8 space-y-4 lg:space-y-0 items-center`}>
                        <li>
                            <NavLink to="/" className={`md:text-lg capitalize`}>home</NavLink>
                        </li>
                        {/* event menu */}
                        <li className='relative group border-b lg:border-0'>
                            <NavLink to="/" className={`md:text-lg capitalize flex items-center gap-1 md:gap-2 `}>
                                <span>Event</span>
                                <span><IoIosArrowDown size={20} /></span>
                            </NavLink>
                            <div className='absolute hidden group-hover:block group-hover:top-full duration-100 lg:-left-2/3 pt-5 z-50'>
                                <div className='whitespace-nowrap flex flex-col shadow p-1 bg-primary text-white z-50 pt-3 pb-5 space-y-2'>
                                    <Link to="/upcomming-events" className='block duration-200 hover:bg-white py-2 hover:text-primary px-5 md:px-10 font-semibold'>
                                        Upcomming Events
                                    </Link>
                                    <Link to="/last-events" className='block duration-200 hover:bg-white py-2 hover:text-primary px-5 md:px-10 font-semibold'>
                                        Last Events
                                    </Link>
                                    <div className='w-8 h-8 absolute top-2 bg-slate-100 rotate-45 -z-50 left-1/2 -translate-x-1/2'></div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <NavLink to="/" className={`md:text-lg capitalize`}>
                                Photo Gallery
                            </NavLink>
                        </li>
                        {/* commounity */}
                        <li className='relative group border-b lg:border-0'>
                            <NavLink to="/" className={`md:text-lg capitalize flex items-center gap-1 md:gap-2 `}>
                                <span>Community Contributor</span>
                                <span><IoIosArrowDown size={20} /></span>
                            </NavLink>
                            <div className='absolute hidden group-hover:block group-hover:top-full duration-100 left-0 w-full lg:left-[20%] pt-5 z-50 md:z-0'>
                                <div className='whitespace-nowrap flex flex-col gap-1 shadow p-1 bg-primary text-white z-50 pt-3 pb-5 space-y-2'>
                                    <Link to="/" className='block hover:bg-white py-2 hover:text-primary px-5 md:px-10 font-semibold'>
                                        Commounity1
                                    </Link>
                                    <Link to="/" className='block hover:bg-white py-2 hover:text-primary px-5 md:px-10 font-semibold'>
                                        Commounity2
                                    </Link>
                                    <div className='w-8 h-8 absolute top-2 bg-slate-100 rotate-45 -z-50 left-1/2 -translate-x-1/2'></div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <NavLink to="/blog" className={` md:text-lg capitalize`}>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={` md:text-lg capitalize block md:hidden`}>About us</NavLink>
                        </li>
                    </ul>
                    <div className='space-x-5 mr-2 flex items-center'>
                        {/* navigation bar and about */}
                        <NavLink to="/about">
                            <button className='px-4 py-2 md:px-6 rounded-md bg-primary text-white hover:bg-opacity-80 duration-200 hidden md:block'>About us</button>
                        </NavLink>
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