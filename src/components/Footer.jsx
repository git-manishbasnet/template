import React from 'react'

function Footer() {
  return (
    <div className='bg-black py-14 px-24 text-white flex space-x-36'>
      <div className='space-y-3'>
        <h1 className='text-2xl font-semibold'>Abstract</h1>
        <ul>
          <li>Start Trial</li>
          <li>Pricing</li>
          <li>Download</li>
        </ul>
      </div>
      <div className='space-y-3'>
        <h1 className='text-2xl font-semibold'>Resources</h1>
        <ul>
          <li>Blog</li>
          <li>Help Center</li>
          <li>Release Notes</li>
          <li>Status</li>
        </ul>
      </div>
      <div className='space-y-3'>
        <h1 className='text-2xl font-semibold'>Community</h1>
        <ul>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Facebook</li>
          <li>Dribble</li>
          <li>Podcast</li>
        </ul>
      </div>
      <div className='space-y-5'>
        <div className='space-y-3'>

          <h1 className='text-2xl font-semibold'>Company</h1>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Legal</li>
          </ul>
        </div>

        <div>
          <h2 className='text-md font-semibold'>Contact Us</h2>
          <a href="">info@abstract.com</a>
        </div>
      </div>
      <div className='mt-48 text-xl'>
        <img src="http://www.w3.org/2000/svg" alt="" />
        <p>© Copyright 2025</p>
<p>

Abstract Studio Design, Inc.
</p>
<p>
All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer