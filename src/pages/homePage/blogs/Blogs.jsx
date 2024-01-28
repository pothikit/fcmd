import React from 'react'
import PageTitle from '../../../components/sectionTitle/SectionTitle'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function Blogs() {
    const { data: blogs } = useQuery({
        queryKey: ["blogs"],
        queryFn: () => axios.get('database.json')
            .then(data => {
                return data.data.blogs
            })
    })
    {/* mathmetical terms for calculate time */ }

    blogs?.forEach(blog => {
        const Totalsecond = Math.round((Number(blog?.time)) / 1000)
        // individual second
        const second = Totalsecond % 60;
        const roundSecond = Totalsecond - second;

        // individual minutes
        const totalMinute = roundSecond / 60;
        const minute = totalMinute % 60;
        const roundMinutes = totalMinute - minute;

        //hours
        const totalHours = roundMinutes / 60;
        const hours = totalHours % 24;
        const roundHours = totalHours - hours;



        console.log(second, minute, roundHours)
    })
    return (
        <section className='py-20'>
            <div className="container mx-auto">
                <PageTitle sectionTitle="Our" coloredTittle="Blog Post" styles="text-center my-10"></PageTitle>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        blogs?.map((blog, idx) => (
                            <div key={idx} className='border rounded-3xl'>
                                <img src={blog?.blog_img} alt={blog?.title} className='w-full' />
                                <div className='p-3 md:p-6'>
                                    <div>

                                        <span className='p-2 bg-gray-100'>{blog?.category}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Blogs