/* eslint-disable no-undef */
import axios from 'axios';
import NavbarComponent from './components/NavbarComponent';
import { Outlet } from 'react-router-dom';


axios.defaults.baseURL = 'https://dummyjson.com';


function App() {

  return (
    <div>
      <NavbarComponent />

      <Outlet />

    </div>
  )

}
 
  


export default App
