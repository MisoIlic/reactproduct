// eslint-disable-next-line no-unused-vars
import React from 'react'
//icons
import { TiShoppingCart } from "react-icons/ti";



function ListProducts({product}) {
    
    
    
  return (
    <div className='w-[400px] h-[full] border-2 border-black p-4 m-4 flex flex-col justify-center items-center gap-[10px] rounded-[20px] bg-sky-400 '>
        <img src={product.thumbnail} alt={product.title} />
        <h2 className='text-[24px] font-bold'>{product.title}</h2>
        <p className='text-[14px] text-center text-gray-700'>{product.description}</p>
        <h3 className='text-[22px] text-red-700 font-bold'>{product.price} €</h3>

        <TiShoppingCart className='w-[50px] h-[50px] text-red-700 rounded-[50%] cursor-pointer border-1 bg-white p-[3px] hover:bg-red-700 hover:text-white'/>

        <button className='px-[24px] py-[12px] text-[14px] text-gray-700 font-bold bg-white rounded-[50px] border-2 border-7ray-800'>View more</button>

       
    </div>
  )
}

export default ListProducts