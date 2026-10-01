/* eslint-disable no-undef */

import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import ProductService from './services/productService';
import axios from 'axios';


axios.defaults.baseURL = 'http://dummyjson.com';


function App() {
  
  useEffect(() => {
    ProductService.getSingleProduct()
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }, [])
  

  

  return (
    <div className='container mx-auto flex flex-col items-center justify-center'>
      <h1>RADI</h1>
        <ToastContainer />
        

      
    </div>
  )

    
  
}
 
  


export default App
