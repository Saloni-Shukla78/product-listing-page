import React ,{useState} from 'react'
import { mockProducts } from '../data/mockProducts.js';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import FilterPanel from './FilterPanel.jsx';

const ProductList = () => {
  const [currentPage ,setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [categoryFilter, setCategoryFilter] = useState('All');

const filteredProducts = mockProducts.filter((product) => {
    const categoryMatch = categoryFilter === 'All' || product.category === categoryFilter;
    
    return categoryMatch;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  return (
    <>
    <FilterPanel
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          
        />
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 p-">
      {currentProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>

    <Pagination currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={(page) => setCurrentPage(page)}/>
      
    </>
  )
}

export default ProductList
