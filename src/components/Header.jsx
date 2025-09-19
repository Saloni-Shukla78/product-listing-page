import React from 'react'
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      <div className='flex flex-row justify-between items-center px-9 py-5 bg-[#40BFFF] gap-20 rounded-xs'>
        <div className='text-white mt-20'>
          <h1 className='font-bold text-2xl'>Adidas Men Running<br/>
            Sneakers</h1>
          <p className='mt-0 mb-7'>Performance and design. Taken right to the edge.</p>
          <Link to='/Sidebar' className='text-sm mt-4'>SHOP NOW</Link>
        </div>
        <div className='mt-15'>
          <img src='/shoe-header.png' alt='shoe' />
        </div>
      </div>

    </>
  )
}

export default Header
