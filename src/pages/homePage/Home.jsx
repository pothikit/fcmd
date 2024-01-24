import React from 'react'
import Banner from './banner/Banner'
import Activities from './lastActivies/Activities'

function Home() {
    return (
        <main className='px-1 md:px-0'>
            <Banner></Banner>
            <Activities></Activities>
        </main>
    )
}

export default Home