import React from 'react'
import Content from '../components/Content'
import Screen from '../components/Screen'
import Sidebar from '../components/Sidebar'
import Presentacion from '../components/pure/Presentacion'
import SkillDif from '../components/pure/SkillDif'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Dashboard = () => {
  return (
    <>

    <div className="sm:h-screen  bg-slate-900 lg:grid grid-cols-1 lg:grid-cols-12 hidden">
      <div className="sm:col-span-1 ">
        <Sidebar />
      </div>
      {/* vista laptops */}
      
      <div className="sm:col-span-8 col-span-1 overflow-y-auto ">
        <Content />
      </div>
      <div className="sm:col-span-3 col-span-1 bg-blue-600/10 my-3  mr-3 rounded-3xl shadow-lg shadow-sky-900">
        <Screen />
      </div>
      </div>
      {/* vista mobile */}
      <div className='lg:hidden flex flex-col bg-slate-900'>
        <Sidebar />
        <Presentacion />
        <SkillDif />
        <Projects />
        <Contact />
        <Screen />
      </div>
    
    </>
  );
}

export default Dashboard