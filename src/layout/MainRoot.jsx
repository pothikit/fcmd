import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../shared/navbar/Navbar'

function MainRoot() {
    return (
        <>
            {/* navbar will go here */}
            <Navbar />
            <Outlet />
            {/* footer */}
        </>
    )
}

export default MainRoot