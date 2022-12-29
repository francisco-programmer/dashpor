import React from 'react'
import Content from '../components/Content'
import Screen from '../components/Screen'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  return (
    <div className="sm:h-screen  bg-slate-900 grid grid-cols-1 sm:grid-cols-12">
      <div className="sm:col-span-1 ">
        <Sidebar />
      </div>
      <div className="sm:col-span-8 col-span-1 overflow-y-auto">
        <Content />
      </div>
      <div className="sm:col-span-3 col-span-1 bg-blue-600/10 my-3  mr-3 rounded-3xl">
        <Screen />
      </div>
    </div>
  );
}

export default Dashboard