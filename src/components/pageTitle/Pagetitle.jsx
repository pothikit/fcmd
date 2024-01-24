import React from 'react'

function Pagetitle({ pageTitle, coloredTittle, styles }) {
    return (
        <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold ${styles && styles}`}>
            {pageTitle}
            <span className='text-primary'> {coloredTittle}</span>
        </h1>
    )
}

export default Pagetitle