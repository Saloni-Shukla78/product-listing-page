import React from 'react'
import { LuAlignJustify } from "react-icons/lu";
import { BiSolidGrid } from "react-icons/bi";

const FilterPanel = ({categoryFilter, setCategoryFilter, itemsPerPage, setItemsPerPage}) => {
  return (
    <>
    <div className='flex flex-row justify-between bg-[#F6F7F8] px-5 rounded-xs border-2 border-[#F1F3F4] space-x-3 text-[#22262A] items-center' >
        <div className='flex items-center gap-5'>
          <div className='md:text-[16px] p-1 sm:p-2  text-[12px]'> 13 items</div>
        <div className='flex flex-row p-2 gap-3 md:text-[16px]  text-[12px]'>
            <span className='mt-2'>Sort By</span>
            <span>
                <select className='w-full px-3 py-1  border-[#F1F3F4] border-2 text-[#22262A]'
                value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}>
                    <option value='All'>All</option>
                    <option value='Fashion'>Fashion</option>
                    <option value='Footwear'>Footwear</option>
                    <option value='Electronics'>Electronics</option>
                    <option value='Food'>Food</option>
                </select>
            </span>
        </div>
        <div className='flex flex-row p-2 gap-3 md:text-[16px]  text-[12px]'>
          <span className='mt-2'>Show</span>
            <span>
                <select className='w-full px-3 py-1  border-[#F1F3F4] border-2'
                value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}>
                    <option value={6}>6</option>
                    <option value={12}>12</option>
                    <option value={18}>18</option>
                    
                </select>
            </span>
        </div>
        </div>
        <div className='hidden sm:flex flex-row gap-3 sm:text-3xl  text-xl'>
          <span className='text-[#40BFFF]'><BiSolidGrid /></span>
          <span className='text-[#C1C8CE] justify-end'><LuAlignJustify /></span>
        </div>
    </div>
      
    </>
  )
}

export default FilterPanel
