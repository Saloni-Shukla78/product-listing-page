import React ,{ useState } from 'react'
import { ShoppingCart, Menu ,LayoutGrid} from "lucide-react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [menuOpen ,setMenuOpen]=useState(false);
  const [sidebarOpen,setSidebarOpen]=useState(false);
  return (
    <>
    <nav className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-3 px-6 shadow-sm hover:shadow-md bg-white'>
        <div className='flex items-center gap-2'>
            <img src='/Icon.png' alt='logo' className='w-[30px] h-[25px] md:w-[51px] md:h-[44px]'/>
            <h3 className='font-bold text-md md:text-2xl'>E-Comm</h3>
        </div>
        <ul className='hidden md:flex space-x-8 text-md lg:space-x-16 font-normal lg:text-lg'>
            <li><a href='#' className='text-[#40BFFF] cursor-pointer'>HOME</a></li>
            <li><a href='#' className='cursor-pointer'>BAG</a></li>
            <li><a href='#' className='cursor-pointer'>SNEAKERS</a>
            </li>
            <li><a href='#' className='cursor-pointer'>BELT</a></li>
            <li><a href='#' className='cursor-pointer'>CONTACT</a></li>
        </ul>
        <ul className='hidden md:flex space-x-5  text-md lg:space-x-10 font-normal lg:text-lg'>
            <li><ShoppingCart /></li>
            <li>items</li>
            <li className='text-[#262626]'>$0.00</li>
        </ul>
        <div className="flex gap-4 md:hidden text-[#C1C8CE]">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Menu />
          </button>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            <LayoutGrid />
          </button>
        </div>
    </nav>
    {menuOpen && (
      <ul className='absolute top-12 left-0 right-0 flex flex-col items-center gap-6 py-6 font-normal text-lg bg-white md:hidden rounded-xs'>
        <li><a href='#' className='text-[#40BFFF] cursor-pointer'>HOME</a></li>
            <li><a href='#' className='cursor-pointer'>BAG</a></li>
            <li><a href='#' className='cursor-pointer'>SNEAKERS</a>
            </li>
            <li><a href='#' className='cursor-pointer'>BELT</a></li>
            <li><a href='#' className='cursor-pointer'>CONTACT</a></li>
      </ul>
    )}

    {sidebarOpen && (<div className='absolute top-14 flex lg:hidden z-50'>
      <div><Sidebar/></div>
      <div className='flex-1 bg-black' 
      onClick={() => setSidebarOpen(false)}></div>
    </div>)}
    </>
  )
}

export default Navbar
