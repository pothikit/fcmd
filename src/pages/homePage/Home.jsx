import React from 'react'
import Banner from './banner/Banner'
import Activities from './lastActivies/Activities'
import MyHelmet from '../../shared/navbar/MyHelmet'
import "../../app.css"

function Home() {
    return (
        <>
            <MyHelmet siteTitle="Home"></MyHelmet>
            <main className='px-1 md:px-0'>
                <Banner></Banner>
                <Activities></Activities>
            </main>
        </>
    )
}

export default Home