import React from 'react'
import { IoStarSharp } from "react-icons/io5";

const ProductCard = ({product}) => {
   const {
    name,
    price,
    discountPrice,
    discountPercent,
    ratingValue,
    ratingCount,
    isHot,
    colors,
    imageUrl,
  } = product;
  return (
    <>
    <div className="group relative bg-white border-[3px] border-[#F6F7F8] rounded-xs shadow-md hover:shadow-lg transition-all duration-300 font-sans">
      {isHot && (
        <span className="absolute top-0 left-0 bg-[#FF4858] text-white text-[18px] font-[400] py-1 px-2 rounded-xs">
          HOT
        </span>
      )}
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 sm:h-56 md:h-64 lg:h-48 object-cover rounded-xs group-hover:opacity-80 transition-opacity duration-300"
      />
      <div className="p-4 ">
        <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-[700] text-[#223263] text-center">{name}</h3>
        <div className="flex justify-center space-x-1 mt-1 text-center text-[#FFC600] gap-1 sm:gap-2 text-[14px] sm:text-[16px]">
          <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp className='text-[#C1C8CE]' />
          {/* <span className="text-sm text-gray-700">
            {ratingValue} ({ratingCount})
          </span> */}
        </div>
        <div className="flex justify-center items-center space-y-1 space-x-1 sm:space-y-0 sm:space-x-2 mt-1">
          <span className="text-[16px] sm:text-[18px] font-[700]  text-[#40BFFF]">
            ${discountPrice.toFixed(2)}
          </span>
          <span className="ml-2 text-[12px] sm:text-[14px] text-[#9098B1] line-through">
            ${price.toFixed(2)}
          </span>
          <span className="text-[12px] sm:text-[14px] text-[#FB7181] font-[700]">
            {discountPercent}% OFF
          </span>
        </div>
        
        {/* <div className="flex space-x-2 mt-3">
          {colors.map((color, index) => (
            <span
              key={index}
              className={`w-6 h-6 rounded-full border-2 border-white cursor-pointer ${
                color === 'black'
                  ? 'bg-black'
                  : color === 'white'
                  ? 'bg-white'
                  : 'bg-blue-500'
              }`}
              title={color}
            />
          ))}
        </div> */}
      </div>
    </div>
      
    </>
  )
}

export default ProductCard
