import React from 'react'

const Pagination = ({currentPage,totalPages,onPageChange}) => {
  return (
    <>
    <div className='flex flex-row justify-center mt-4 bg-[#F6F7F8] rounded-xs space-x-5 text-[#22262A] items-center text-[18px] font-[400]' >
      {Array.from({length:totalPages},(_,i)=>(
        <button key={i}
        className={`px-7 py-5 ${currentPage === i+1 ? "bg-[#40BFFF] text-white":"bg-[#F6F7F8]"}`} onClick={() => onPageChange(i+1)}>{i+1}</button>
      ))}
       </div>
      
    </>
  )
}

export default Pagination
