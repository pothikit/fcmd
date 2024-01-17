import React, { } from 'react'
import logo from "../../assets/logo.png"
import { NavLink } from 'react-router-dom'
import "./navbar.css"
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
    // const [submenu, setSubmenu] = useState(false)
    return (
        <nav className='bg-white shadow py-4'>
            <div className="container mx-auto">
                <div className='flex justify-between items-center'>
                    <div className="logo">
                        <img src={logo} alt="FCMD" className='max-w-[160px]' />
                    </div>
                    <div className="flex gap-8 items-center">
                        <NavLink to="/" className={`${({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                            } md:text-lg capitalize`}>home
                        </NavLink>
                        {/* event menu */}
                        <NavLink to="/" className={`${({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                            } md:text-lg capitalize relative flex items-center gap-1 md:gap-2 group`}>
                            <span>Event</span>
                            <span><IoIosArrowDown size={20} /></span>
                            <div className='absolute top-[500%] whitespace-nowrap invisible group-hover:visible flex flex-col group-hover:top-full duration-100 gap-3 bg-slate-100 shadow p-4 -left-2/3 mt-4 pt-10 z-0'>
                                <NavLink to="/">
                                    Upcomming Event
                                </NavLink>
                                <NavLink to="/">
                                    Last Event
                                </NavLink>
                                <div className='w-10 h-10 absolute -top-1 bg-slate-100 rotate-45 -z-50 left-1/2 -translate-x-1/2'></div>
                            </div>
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
                    <button className='px-4 py-2 md:px-6 rounded-md bg-primary text-white hover:bg-opacity-80 duration-200'>About us</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar