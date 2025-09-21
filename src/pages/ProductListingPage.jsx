import React from 'react'
import Header from '../components/Header'
import FilterPanel from '../components/FilterPanel'
import ProductList from '../components/ProductList'



const ProductListingPage = () => {
  return (
    <>
      <div className='flex flex-col gap-4 flex-1 m-4 sm:m-2 md:m-0'>
        <Header/>
        <ProductList/>
        
      </div>
    </>
  )
}

export default ProductListingPage
