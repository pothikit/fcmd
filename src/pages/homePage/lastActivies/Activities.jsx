import React from 'react'
import Pagetitle from '../../../components/pageTitle/Pagetitle'
// import { useQuery } from '@tanstack/react-query'

function Activities() {
    // const { data: activities } = useQuery({
    //     queryKey: ["activity"]
    // })

    return (
        <section className='py-20'>
            <div className="container mx-auto">
                <Pagetitle pageTitle="Last" coloredTittle="activities" styles="text-center my-5" />
                <p className='lg:text-lg text-center max-w-xl mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tris</p>
                <div className='py-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {

                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Activities