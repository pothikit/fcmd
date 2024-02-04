import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import Loading from '../../components/Loading'
import { FaFacebook, FaLinkedin, FaXTwitter } from 'react-icons/fa6';


const IntroduceTeam = () => {
    const { data: team, isloaded } = useQuery({
        queryKey: ["team"],
        queryFn: () => axios.get('database.json')
            .then(data => {
                return data.data.team
            })
    })
    if (isloaded) {
        return <Loading></Loading>
    }
    return (
        <section className='py-20'>
            <div className="container mx-auto">
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-20'>
                    {
                        team?.map((team, idx) => (
                            <div key={idx} className='text-center'>
                                <img src={team?.img} alt={team?.name} className='size-32 mx-auto' />
                                <div className='space-y-4'>
                                    <h2 className='font-bold text-base md:text-xl'>{team?.name}</h2>
                                    <p className='text-primary text-sm md:text-lg'>{team?.designation}</p>
                                    <ul className='flex gap-5 justify-center'>
                                        <li><FaXTwitter size={24} color='#777' /></li>
                                        <li><FaFacebook size={24} color='#777' /></li>
                                        <li><FaLinkedin size={24} color='#777' /></li>
                                    </ul>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default IntroduceTeam