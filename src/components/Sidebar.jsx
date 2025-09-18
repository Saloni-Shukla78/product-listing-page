import React from 'react'

const Sidebar = () => {
  return (
    <>
    <div className='w-1/4 flex flex-col p-5 gap-5'>
        <div className='flex flex-col bg-gray-100 py-5 px-6 rounded '>
            <h3 className='font-semibold mb-9'>Hot Deals</h3>
            <ul className='flex flex-col gap-y-6'>
                <li className=' flex justify-between'><span>Nike</span><span className='text-gray-400'>2</span></li>
                <li className=' flex justify-between'><span>Airmax</span><span className='text-gray-400'>48</span></li>
                <li className=' flex justify-between'><span>Nike</span><span className='text-gray-400'>14</span></li>
                <li className=' flex justify-between'><span>Adidas</span><span className='text-gray-400'>15</span></li>
                <li className=' flex justify-between'><span>Vans</span><span className='text-gray-400'>23</span></li>
                <li className=' flex justify-between'><span>All Stars</span ><span className='text-gray-400'>1</span></li>
                <li className=' flex justify-between'><span>Adidas</span><span className='text-gray-400'>95</span></li>
            </ul>
        </div>
        <div className='flex flex-col bg-gray-100 gap-y-4 py-5 px-6 rounded '>
            <h3 className='font-semibold'>PRICES</h3>
            <div className=' flex justify-between'>
                <span>Ranger:</span>
                <span>$13.99 - $25.99</span>
            </div>
        </div>
        <div className='flex flex-col bg-gray-100 gap-y-4 py-5 px-6 rounded '>
            <h3 className='font-semibold'>COLOR</h3>
            <div className='flex flex-row gap-x-4'>
                <button className='w-6 h-6 rounded-full bg-[#006CFF]'></button>
                <button className='w-6 h-6 rounded-full bg-[#FC3E39]'></button>
                <button className='w-6 h-6 rounded-full bg-[#171717]'></button>
                <button className='w-6 h-6 rounded-full bg-[#FFF600]'></button>
                
                <button className='w-6 h-6 rounded-full bg-[#FF00B4]'></button>
                <button className='w-6 h-6 rounded-full bg-[#EFDFDF]'></button>

            </div>
        </div>
        <div className='flex flex-col bg-gray-100 py-5 px-6 rounded '>
            <h3 className='font-semibold mb-9'>BRAND</h3>
             <ul className='flex flex-col gap-y-6'>
                <li className=' flex justify-between'><span>Nike</span><span className='text-gray-400'>99</span></li>
                <li className=' flex justify-between'><span>Nike</span><span className='text-gray-400'>99</span></li>
                <li className=' flex justify-between'><span>Adidas</span><span className='text-gray-400'>99</span></li>
                <li className=' flex justify-between'><span>Siemens</span><span className='text-gray-400'>99</span></li>
            </ul>
        </div>
            <button className='bg-gray-100 py-4 px-5 rounded font-semibold'>MORE</button>
        
    </div>
      
    </>
  )
}

export default Sidebar
