import React from 'react'

const FilterPanel = () => {
  return (
    <>
    <div className='flex flex-row bg-[#F6F7F8] py-1 px-5 rounded-xs border-2 border-[#F1F3F4] space-x-3 text-[#22262A] items-center' >
        <div className=''> 13 items</div>
        <div className='flex flex-row p-2 gap-2'>
            <span>Sort By</span>
            <span>
                <select className='w-full px-4 py-2  border-[#F1F3F4] border-2'>
                    <option>Name</option>
                    <option>....</option>
                    <option>....</option>
                    <option>....</option>
                    <option>....</option>
                </select>
            </span>

        </div>
        <div></div>
        <div></div>
    </div>
      
    </>
  )
}

export default FilterPanel
