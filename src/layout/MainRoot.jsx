import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../shared/navbar/Navbar'
import Footer from '../shared/footer/Footer'

function MainRoot() {
    return (
        <div className='pt-12 lg:pt-16'>
            {/* navbar will go here */}
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainRoot