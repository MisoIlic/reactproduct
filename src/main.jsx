 import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'

//Pages-stranice//
import HomePage from './pages/HomePage.jsx' 
import AboutPage from './pages/AboutPage.jsx'
import AllProductsPage from './pages/AllProductsPage.jsx'
import SingleProductPage from './pages/SingleProductPage.jsx'

//Kreiramo rute za nas browser//

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/products',
        element: <AllProductsPage />,
      },
      {
        path: '/singleProduct/:id',
        element: <SingleProductPage/>,
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
