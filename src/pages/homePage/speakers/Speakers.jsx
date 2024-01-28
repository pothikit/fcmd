import React from 'react'
import PageTitle from '../../../components/sectionTitle/SectionTitle'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

function Speakers() {
    const { data: speaker } = useQuery({
        queryKey: ["speaker"],
        queryFn: () => axios.get('database.json')
            .then(data => {
                return data.data.speakers
            })
    })
    return (
        <section className='my-20'>
            <div className="container mx-auto">
                <PageTitle sectionTitle="Last Year" coloredTittle="Speaker List" styles="text-center py-10"></PageTitle>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-7'>
                    {
                        speaker?.map((speaker, idx) => (
                            <div key={idx} className='p-1 sm:p-2 lg:p-4 shadow-md rounded-md space-y-4 border'>
                                <img src={speaker?.speake_img} alt={speaker?.speakesName} />
                                <div>
                                    <h4 className='italic text-sm sm:text-base font-bold md:text-2xl'>{speaker?.speakesName}</h4>
                                    <h4 className='text-sm md:text-base'>{speaker?.designation}</h4>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='flex justify-center gap-2 md:gap-6 items-center mt-12'>
                    <button className='border size-12 flex items-center justify-center rounded-md'><MdOutlineArrowBackIos /></button>
                    <button className='border duration-200 size-12 flex items-center text-primary justify-center hover:bg-primary hover:text-white md:font-bold rounded-md border-primary'>1</button>
                    <button className='border duration-200 size-12 flex items-center text-primary justify-center hover:bg-primary hover:text-white md:font-bold rounded-md border-primary'>2</button>
                    <button className='border duration-200 size-12 flex items-center text-primary justify-center hover:bg-primary hover:text-white md:font-bold rounded-md border-primary'>3</button>
                    <button className='border duration-200 size-12 flex items-center text-primary justify-center hover:bg-primary hover:text-white md:font-bold rounded-md border-primary'>4</button>
                    <button className='border duration-200 size-12 flex items-center text-primary justify-center hover:bg-primary hover:text-white md:font-bold rounded-md border-primary'>5</button>
                    <button className='border size-12 flex items-center justify-center rounded-md'><MdOutlineArrowForwardIos /></button>
                </div>
            </div>
        </section>
    )
}

export default Speakers