import { useEffect } from "react";
import ProductService from "../services/productService";
import { useState } from "react";

const useFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        ProductService.getAllProduct()
        .then(res => {
            setData(res.data.products)
        setLoading(true);
    })
        .catch(err => console.log(err))
        
        
        
    }, [])

    return {data, loading}
}

export default useFetch;