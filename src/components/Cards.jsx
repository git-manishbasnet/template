import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { items } from '../Data/Carddata'
items
function Cards() {
    return (
        <div className='m-32 grid grid-cols-2 space-y-24 space-x-12'>

            {

                items.map((data, index) => {
                    return (
                        

                        
                        <div key={index} className=' flex space-x-6 '>
                            <img src={data.image} alt="" className='h-20' />
                            <div className='space-y-4'>
                                <h1 className='font-extrabold text-3xl'>{data.title}</h1>
                                <p className='text-2xl font-medium'>{data.description}</p>
                                <a href={data.link} className='text-blue-600 text-xl font-medium inline-flex items-center gap-1 hover:underline'>Learn More
                                    <FaArrowRight size={16}/>
                                </a>
                            </div>
                        </div>
                    )
                }
                )
            }

        </div>
    )
}

export default Cards