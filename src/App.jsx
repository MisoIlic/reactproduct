/* eslint-disable no-undef */
import axios from 'axios';
import useFetch from './utils/useFetch';
import CardComponent from './components/CardComponent';
import NavbarComponent from './components/NavbarComponent';


axios.defaults.baseURL = 'http://dummyjson.com';


function App() {

  const {data, loading} = useFetch();


  

  return (
    <div className='flex flex-col items-center justify-center container mx-auto mt-[50px]'>
      <NavbarComponent />

      <div className='flex flex-wrap gap-[20px] justify-center` mt-[50px]'>
        {loading ? data.map((product) => {
          return <CardComponent key={product.id} product={product} />
        }) : <h2>Loading...</h2>}
      </div>
        

      
    </div>
  )

    
  
}
 
  


export default App
