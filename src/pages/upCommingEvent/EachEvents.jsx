import React from 'react'

const EachEvents = ({ events }) => {
    // console.log(events)
    const year = new Date(events?.date).getFullYear()
    const months = new Date(events?.date).getMonth() + 1;
    const dates = new Date(events?.date).getDate();
    console.log(dates)
    return (
        <div>
            <img src={events?.eventImg} alt={events.title} />
            <div>
                <time></time>
                <h3>{events?.title}</h3>
            </div>
        </div>
    )
}

export default EachEvents