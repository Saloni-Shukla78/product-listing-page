import React from 'react'
import { FaFacebookF ,FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <>
    <footer className='bg-[#b3d9f8] text-gray-800 px-7 md:px-20 py-8 md:py-12 sm:px-10 sm:py-12'>
        <div className='grid  grid-cols-1 md:grid-cols-3  gap-10 md-gap-x-38 lg:gap-x-52'>
            <div className=''>
                <div className='w-30 mb-3'>
                    <img src='/logo.png' alt='logo'/>
                </div>
                <p className='text-sm leading-relaxed'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
            </div>
            <div>
                <h3 className='font-sans text-[18px] mb-3'>Follow Us</h3>
                <p className='text-sm mb-3'>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                <div className='flex space-x-12 text-lg'>
                    <FaFacebookF className='text-blue-800' />
                    <FaTwitter className='text-blue-500'/>
                </div>
            </div>
            <div>
                <h3 className='font-sans text-[18px] mb-3'>Contact Us</h3>
                <p className='font-sans text-[14px] text-sm'>E-Comm , 4578 <br/> Marmora Road, <br/>Glasgow D04 89GR</p>
            </div>
        </div>
        <div className=' mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 text-sm'>
            <div>
                <h4 className='font-sans text-[18px] mb-2'>Information</h4>
                <ul className='font-sans text-[14px] space-y-1'>
                    <li>About Us</li>
                    <li>Information</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conitions</li>
                </ul>
            </div>
            <div>
                <h4 className='font-sans text-[18px] mb-2'>Service</h4>
                <ul className='font-sans text-[14px] space-y-1'>
                    <li >About Us</li>
                    <li>Information</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conitions</li>
                </ul>
            </div>
            <div>
                <h4 className='font-sans text-[18px] mb-2'>My Account</h4>
                <ul className='font-sans text-[14px] space-y-1'>
                    <li>About Us</li>
                    <li>Information</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conitions</li>
                </ul>
            </div>
            <div>
                <h4 className='font-sans text-[18px] mb-2'>Our Offer</h4>
                <ul className='font-sans text-[14px] space-y-1'>
                    <li>About Us</li>
                    <li>Information</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conitions</li>
                </ul>
            </div>
        </div>
        <div className=' mx-auto mt-10 border-t-2 border-white pt-6 flex flex-col md:flex-row items-center justify-between text-sm'> 
            <p className='text-gray-400 mb-4 md:mb-0'>© 2018 Ecommerce theme by www.bisenbaev.com</p>
            <div className='flex space-x-5'>
                <img src='/Western-union.png' alt='western-union' className='h-6'/>
                <img src='/mastercard.png' alt='mastercard' className='h-6'/>
                <img src='/Paypal.png' alt='Paypal' className='h-6'/>
                <img src='/visa.png' alt='visa' className='h-6'/>
            </div>
        </div>
    </footer>
    
    </>
      
    
  )
}

export default Footer
