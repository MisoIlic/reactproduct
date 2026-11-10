import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductService from '../services/productService';

function SingleProductPage() {
    const[loading, setLoading] = useState(false);
    const[singleProduct, setSingleProduct] = useState({});
    const[currentIndexImg, setCurrentIndexImg] = useState(0);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        ProductService.getProduct(id)
            .then((res) => {
                setSingleProduct(res.data);
                setLoading(true);
                })
            .catch((err) => {
                console.log(err);
            })
        
    }, []);

    function handleImage(index){
        setCurrentIndexImg(index);

    }
    
  return (
    <div className='container mx-auto flex items-center justify-center'>

        {loading ?<>
        <div className='flex flex-col items-baseline justify-center w-[70%]'>
            <img src={singleProduct.images[currentIndexImg]} alt='' className='w-[100%] h-[100%]' />
            <div className='flex items-center justify-center gap-[10px]'>
                {singleProduct.images?.map((image, index) =>{
                return(
                <img key={index} src={image} alt="ahahah" className={currentIndexImg === index ? 'w-[90px] h-[90px] border-1 border-mainOrange cursor-pointer' : 'w-[90px] h-[90px] border-1 cursor-pointer'}
                onClick={()=> handleImage(index)}></img>
                )
            })}
            </div>
            
        </div>
        

        <div className='flex flex-col justify-center gap-[10px] w-[30%]'>
            <h2 className='text-mainGreen text-[24px] font-extrabold'>{singleProduct.title}</h2>
            <p className='text-[14px] text-mainBlue'>{singleProduct.description}</p>
            <p className='text-mainGreen text-[20px] font-extrabold'>{singleProduct.price}</p>
        </div>
        </> : <h1>Loading...</h1>}
        
        </div>
  );
}

export default SingleProductPage