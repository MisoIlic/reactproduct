import React, { useEffect, useState } from 'react'
import ProductService from '../services/productService'
import CardComponent from '../components/CardComponent';



function AllProductsPage() {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    ProductService.getAllProduct()
      .then(res => setAllProducts(res.data.products))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-[20px] my-[50px]'>
      
        {allProducts.map((product) => (
          <CardComponent key={product.id} product={product}></CardComponent>
        ))}
    
        
      
    </div>
  )
}

export default AllProductsPage