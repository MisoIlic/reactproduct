import React, { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';



function SingleProduct() {
    const [singleProduct, setSingleProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch('https://dummyjson.com/products/1')
        .then(res => res.json())
        .then(response => {setSingleProduct(response)
          setIsLoading(true);
        setTimeout(() => toast.success('Proizvod je uspešno učitan'), 5000)
        });
        
        
    },[])

  return (
    <div className='flex flex-col items-center justify-center w-[50%] mx-auto my-[50px]'>
       
      {isLoading ? <>
      <img src={singleProduct.thumbnail} className='border-2 rounded-full' />
        <h2 className='text-[24px] font-bold text-center'>{singleProduct.title}</h2>
        <p className='text-[16px] text-cyan-900 
        p-[20px] text-center'>{singleProduct.description}
        </p>
        <h3 className='text-[22px] text-red-800 font-bold border-1 animate-pulse bg-amber-400 rounded-full p-5'>{singleProduct.price} €</h3>

        <img src={singleProduct.images[0]} className='w-[90px] h-[90px]' />
      </>: <h2> ('Loading...')</h2>} 

        

        
       

    </div>
  )
}

export default SingleProduct