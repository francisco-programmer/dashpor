import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Contacto from './components/Contacto'

import Habilidades from './components/Habilidades'

import Home from './components/Home'
import Proyectos from './components/Proyectos'
import './index.css'
import Blog from './pages/Blog/Blog'
import { ErrorPage } from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />,
    
    children: [
      {index:true, element:<Home />},
      {
        path:"home",
        element: <Home />
      },   
      {
        path:"habilidades",
        element: <Habilidades />
      },  
      {
        path:"proyectos",
        element: <Proyectos />
      }, 
      {
        path:"contacto",
        element: <Contacto />
      }, 
      {
        path:"blog",
        element: <Blog />
      }, 
    ]
  },  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    
    <RouterProvider router={router}>
          <App />
        </RouterProvider>
    
  </React.StrictMode>,
)
