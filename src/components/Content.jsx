import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './pure/Header'


const Content = () => {
  return (
    <div className='mx-3'>
        <Header />
        <div className=''>
          <Outlet />
        </div>
    </div>
  )
}

export default Content