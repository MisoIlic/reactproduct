
import axios from 'axios'
class ProductService {
    static getAllProduct = () => axios.get('/products')
    static getSingleProduct = () => axios.get('/products/25');
}

export default ProductService;