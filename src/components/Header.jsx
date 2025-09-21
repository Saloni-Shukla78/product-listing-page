import React from 'react'
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between items-center md:px-8 px-4 sm:px-6 py-2 bg-[#40BFFF] gap-6 md:gap-14 rounded-xs'>
        <div className='text-white mt-15 pl-4'>
          <h2 className=' text-2xl md:text-[30px] sm:text-[27px] mb-0 font-[500]'>Adidas Men Running<br/>
            Sneakers</h2>
          <p className='-mt-3 mb-5 text-[14px] font-[400]'>Performance and design. Taken right to the edge.</p>
          <Link to='/Sidebar' className='text-[12px] font-[600]'>
          <span className='underline decoration-[#FFFFF] decoration-2'>SHOP N</span>OW</Link>
        </div>
        <div className='mt-15'>
          <img src='/shoe-header.png' alt='shoe' />
        </div>
      </div>

    </>
  )
}

export default Header
