import React, { useState } from 'react'

const Sidebar = () => {
 const [minPrice, setMinPrice] = useState(0); 
 const [maxPrice, setMaxPrice] = useState(1000);
  const handleMinChange = (e) => { 
    const value = Number(e.target.value); 
    if (value <= maxPrice) setMinPrice(value);
   }; 
   const handleMaxChange = (e) => { 
    const value = Number(e.target.value);
     if (value >= minPrice) setMaxPrice(value); 
    };
  return (
    <>
      <div className='flex flex-col gap-5 bg-white m-2'>
        <div className='flex flex-col bg-[#F6F7F8] py-10 px-6 rounded '>
          <h3 className='font-medium text-lg mb-9'>Hot Deals</h3>
          <ul className='flex flex-col gap-y-6 font-normal text-base'>
            <li className=' flex justify-between'><span className='text-[#262626]'>Nike</span><span className='text-gray-400'>2</span></li>
            <li className=' flex justify-between'><span className='text-[#33A0FF]'>Airmax</span><span className='text-[#33A0FF]'>48</span></li>
            <li className=' flex justify-between'><span className='text-[#262626]'>Nike</span><span className='text-gray-400'>14</span></li>
            <li className=' flex justify-between'><span className='text-[#262626]'>Adidas</span><span className='text-gray-400'>15</span></li>
            <li className=' flex justify-between'><span className='text-[#262626]'>Vans</span><span className='text-gray-400'>23</span></li>
            <li className=' flex justify-between'><span className='text-[#262626]'>All Stars</span ><span className='text-gray-400'>1</span></li>
            <li className=' flex justify-between'><span className='text-[#262626]'>Adidas</span><span className='text-gray-400'>95</span></li>
          </ul>
        </div>
        <div className='flex flex-col bg-gray-100 gap-y-4 py-5 px-6 rounded '> 
          <h3 className='font-medium text-lg'>PRICES</h3> 
          <div className=' flex justify-between font-[400] text-[18px]'>
             <span>Ranger:</span> 
             <span className=''> ${minPrice}- ${maxPrice}</span>
              </div> 
              <div className="flex mb-2 bg-[#2E90E5] [262.889px] h-[5.293px]"> 
                <input type="range" min="0" max="500" value={minPrice} onChange={handleMinChange} className="w-full h-1 rounded-lg appearance-none accent-[#2E90E5]" />
                 <input type="range" min="501" max="1000" value={maxPrice} onChange={handleMaxChange} className="w-full h-1 rounded-lg appearance-none accent-[#2E90E5]" /> 
                 </div> 
                 </div>
        <div className='flex flex-col bg-gray-100 gap-y-4 py-6 px-6 rounded '>
          <h3 className='font-medium text-lg'>COLOR</h3>
          <div className='flex flex-row gap-x-4 justify-between mb-2'>
            <div className='flex justify-center items-center rounded-full border-2 border-[#006CFF] p-1'>
            <button className='w-6 h-6 rounded-full bg-[#006CFF]'/></div>
            
            <button className='w-6 h-6 rounded-full bg-[#FC3E39]'/>
            <button className='w-6 h-6 rounded-full bg-[#171717]'/>
            <button className='w-6 h-6 rounded-full bg-[#FFF600]'/>

            <button className='w-6 h-6 rounded-full bg-[#FF00B4]'/>
            <button className='w-6 h-6 rounded-full bg-[#EFDFDF]'/>

          </div>
        </div>
        <div className='flex flex-col bg-gray-100 py-5 px-6 rounded '>
          <h3 className='font-medium text-lg mb-8'>BRAND</h3>
          <ul className='flex flex-col gap-y-6 font-normal text-base'>
            <li className=' flex justify-between'><span className='text-[#262626]' >Nike</span><span className='text-gray-400'>99</span></li>
            <li className=' flex justify-between'><span className='text-[#33A0FF]' >Nike</span><span className='text-[#33A0FF]'>99</span></li>
            <li className=' flex justify-between'><span className='text-[#262626]'>Adidas</span><span className='text-gray-400'>99</span></li>
            <li className=' flex justify-between'><span className='text-[#262626]' >Siemens</span><span className='text-gray-400'>99</span></li>
          </ul>
        </div>
        <button className='bg-[#F6F7F8] py-5 px-5 rounded font-medium text-lg text-[#262626]'>MORE</button>

      </div>

    </>
  )
}

export default Sidebar
