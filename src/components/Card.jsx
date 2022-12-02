import React from 'react'

function Card({img , title , time , text}) {
    return (
        <div className="card bg-white relative  rounded owerflow-hiddin shadow-md hover:shadow-none ease-in duration-300">
            <img src={img} alt="" className="w-full sm:h-48 object-cover" />
            <div className="p-4">
                <span>{title}</span>
                <span className="block text-gray-500  capitalize text-sm">{text}</span>
            </div>
            <div className="bg-gray-200 text-xs uppercase font-bold rounded-full text-gray-400 py-2  px-2 absolute top-5  left-3">
                <span className="">{time}</span>
            </div>
        </div>
    )
}

export default Card