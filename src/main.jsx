import React from 'react'
import ReactDOM from 'react-dom/client'
import {createHashRouter, RouterProvider} from 'react-router-dom'
import App from './App'
import Contact from './components/Contact'

import Skill from './components/Skill'

import Home from './components/Home'
import Projects from './components/Projects'
import './index.css'
import Blog from './pages/Blog/Blog'
import { ErrorPage } from './pages/ErrorPage'

const router = createHashRouter([
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
        path:"skill",
        element: <Skill />
      },  
      {
        path:"projects",
        element: <Projects />
      }, 
      {
        path:"contact",
        element: <Contact />
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
