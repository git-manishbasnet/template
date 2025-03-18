import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
function Body() {
  return (
    <div className='bg-[#dadbf1] items-center justify-center flex pt-[80px] pb-[115px] font-medium'>
        <div className='flex-col space-y-6 '>
        <h1 className='text-4xl text-[80px] mx-8'>How can we help?</h1>
        <div className='relative '>
        <input type="search" name="" id="" placeholder='Search' className='border w-full bg-white h-14 p-3 pr-12 text-2xl'/>
        <FaArrowRight className='absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-xl hover:text-gray-500 text-black'/>
        </div>
        </div>
    </div>
  )
}

export default Body