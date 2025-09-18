import React from 'react'
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <>
    <nav className='flex items-center justify-between p-4'>
        <div className='flex items-center'>
            <img src='/logo.png' alt='logo' className='w-32'></img>
        </div>
        <ul className='flex space-x-16'>
            <li><a href='#' className=''>HOME</a></li>
            <li><a href='#' className=''>BAG</a></li>
            <li><a href='#' className=''>SNEAKERS</a>
            </li>
            <li><a href='#' className=''>BELT</a></li>
            <li><a href='#' className=''>CONTACT</a></li>
        </ul>
        <ul className='flex space-x-10'>
            <li><ShoppingCart /></li>
            <li>items</li>
            <li>$0.00</li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
