/* eslint-disable no-undef */
import { useEffect } from "react"
import { useState } from "react"
import ListProducts from "./components/ListProducts";
import SingleProduct from "./components/SingleProduct";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Navbar from './components/Navbar';


function App() {
   //State - smjestamo podatke u state
const [isLoading, setIsLoading] = useState(false);
const [allProducts, setAllProducts] = useState([]);
  //KAKO I KAD ucitavamo podatke?


useEffect(() => {
  //Zelim podatke???
     fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setAllProducts(data.products)
        setIsLoading(true); //setIsLoading - funkcija koja mijenja stanje isLoading
      });

    

}, []); //[] - prazan niz znaci da se ovo izvrsava samo jednom, kad se ucita App komponenta
  

  return (
    <div>
        <Navbar/>

      
      

      <div className="flex flex-wrap items-center justify-center">
        {isLoading ? allProducts.map((product) =>{
        return <ListProducts key={product.id} product={product}/>

      }): <h2> LOADING...</h2>}
      </div>

       <SingleProduct/>

       <ToastContainer 
       position="bottom-center"
       />
      
    </div>

    
  )//Prosledjuemo podatke u ListProducts komponentu
}
 
  


export default App
