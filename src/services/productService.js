
import axios from 'axios'
class ProductService {
    static getAllProduct = () => axios.get('/products?limit=12&skip=90')
    static getProduct = (id) => axios.get(`/products/${id}`)
    
}

export default ProductService;

