import { Link } from "react-router-dom"


function CardComponent({product}) {
  return (
    <div className="container mx-auto flex flex-col  border border-mainOrange w-[300px] h-full">
      <img className="w-full object-cover" src={product.thumbnail} alt="" />

      <div className="flex flex-col items-baseline justify-center p-4 gap-[10px]">
        <h2 className="text-[20px] text-mainGreen font-extrabold">{product.title}</h2>
        <p className="text-[12px] text-mainBlue">{product.description}</p>
        <p className="text-[20px] text-mainGreen font-bold">${product.price}</p>
        <Link className="bg-mainBlue text-mainGreen font-bold text-[12px] px-[20px] py-[10px] rounded-lg" to={`/singleProduct/${product.id}`}>View Details</Link>


      </div>
      
        
        
        

    </div>
  )
}

export default CardComponent