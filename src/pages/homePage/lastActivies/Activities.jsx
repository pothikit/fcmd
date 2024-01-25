import React, { } from 'react'
import Pagetitle from '../../../components/PageTitle/Pagetitle'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function Activities() {
    const { data: activities, } = useQuery({
        queryKey: ['activity'],
        queryFn: () => axios.get("database.json")
            .then(data => {
                return data.data.lastActivities
            })
    })

    console.log(activities)
    // const [activities, setActivites] = useState([])
    // useEffect(() => {
    //     fetch("database.json")
    //         .then(res => res.json())
    //         .then(data => setActivites(data.lastActivities))
    // }, [])
    // console.log(activities)
    return (
        <section className='py-20'>
            <div className="container mx-auto">
                <Pagetitle pageTitle="Last" coloredTittle="activities" styles="text-center my-5" />
                <p className='lg:text-lg text-center max-w-xl mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tris</p>
                <div className='py-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {
                            activities?.map((activty, idx) => (
                                <div key={idx} className='m-2 border rounded-lg p-7 space-y-4 shadow-lg'>
                                    <img src={activty?.icon} alt={activty?.title} />
                                    <h3 className='md:text-2xl font-bold'>{activty?.title}</h3>
                                    <p className='md:text-md'>{activty?.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Activities