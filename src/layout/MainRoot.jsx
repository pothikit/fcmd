import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../shared/navbar/Navbar'
import Footer from '../shared/footer/Footer'

function MainRoot() {
    return (
        <>
            {/* navbar will go here */}
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainRoot