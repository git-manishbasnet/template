import React from 'react'

function Navbar() {
    return (
        <div>

       
        <div className=' items-center bg-black py-4 px-24 text-gray-200 justify-between text-[24px] flex font-medium'>
            <div className='flex items-center space-x-2'>
                <img src="abstractlogo.svg" alt="logo" className='hover:opacity-70 transition duration-300'/>
               <a href="" className='border-l-2  pl-2 whitespace-nowrap hover:underline'>Help Center</a>
            </div>
            <div className='space-x-4'>
                <input type="text" placeholder='Search' className='bg-white placeholder-gray-400 p-3 rounded-md h-10'/>
                <button className='border-2 rounded-md px-6 py-1'>Submit a request</button>
                <button className='bg-purple-900 px-7 py-2 rounded-md '>Sign in</button>
            </div>
        </div>
        </div>
    )
}

export default Navbar