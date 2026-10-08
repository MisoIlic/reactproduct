import React from 'react'

function CardComponent({product}) {
  return (
    <div className='border border-mainOrange w-[300px] '>
        <div className='relative'>
            <img src={product.thumbnail} alt="" className='w-full h-[150px] object-cover' />
            <div className='bg-mainBlue/40 hover:bg-mainBlue/0 absolute top-0 bottom-0 left-0 right-0 cursor-pointer transition-all duration-500'></div>
        </div>
        
        <div className='p-[15px] mt-[20px] flex flex-col gap-[10px]'>
            <h2 className='text-mainBlue font-bold'>{product.title}</h2>
            <h2 className='text-mainGreen font-extrabold'>${product.price}</h2>
            <button className='px-[20px] py-[10px] bg-mainOrange rounded-[10px] text-white font-bold transition-all duration-500 hover:bg-mainBlue hover:text-mainOrange'>Add product</button>
        </div>
        
        

    </div>
  )
}

export default CardComponent