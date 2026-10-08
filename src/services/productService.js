
import axios from 'axios'
class ProductService {
    static getAllProduct = () => axios.get('/products?limit=10&skip=80')
    
}

export default ProductService;

