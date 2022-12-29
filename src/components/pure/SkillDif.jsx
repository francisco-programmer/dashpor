import React from 'react'
import { MdCameraFront } from "react-icons/md";
import { AiFillApi } from "react-icons/ai";
import { DiLinux  } from "react-icons/di";
import { BsFillPatchCheckFill  } from "react-icons/bs";

const SkillDif = () => {
  return (
    <div>
      <div>
        <p className='text-sky-500 font-poppins text-2xl'>Habilidades Tecnicas</p><br></br>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
        {/* frontend skill */}

        <div className="bg-sky-600/10 p-4 rounded-3xl flex flex-col place-items-center">
          <div className="h-20 ">
            <div className="bg-sky-900 w-20 h-20 rounded-full p-4">
              <MdCameraFront className="text-white text-5xl" />
            </div>
          </div>
          <div>
            <p className="text-slate-200 text-2xl font-poppins font-bold my-4">
              Frontend
            </p>
          </div>
         
        <div className='flex flex-col'>
          <div className='flex gap-3 justify-start'>
          <BsFillPatchCheckFill className='text-yellow-500 justify-start' /><p className="text-slate-300 text-center font-poppins ">
           Html, Css, Javascript
          </p>
          </div>

          <div className='flex gap-3'>
          <BsFillPatchCheckFill className='text-yellow-500' /><p className="text-slate-300 text-center font-poppins ">
           Sass, Bootstrap, Tailwind
          </p>
          </div>

          <div className='flex gap-3'>
          <BsFillPatchCheckFill className='text-yellow-500 justify-start' /><p className="text-slate-300 text-center font-poppins ">
           React, Redux
          </p>
          </div>
          <div className='flex gap-3'>
          <BsFillPatchCheckFill className='text-yellow-500 justify-start' /><p className="text-slate-300 text-center font-poppins ">
           Wordpress
          </p>
          </div>
          <div className='flex gap-3'>
          <BsFillPatchCheckFill className='text-yellow-500 justify-start' /><p className="text-slate-300 text-center font-poppins ">
           Git y Github
          </p>
          </div>

          </div>
        </div>
        {/* api skill */}
        <div className="bg-sky-600/10 p-4 rounded-3xl flex flex-col place-items-center">
          <div className="h-20 ">
            <div className="bg-sky-900 w-20 h-20 rounded-full p-4">
              <AiFillApi className="text-white text-5xl" />
            </div>
          </div>
          <div>
            <p className="text-slate-200 text-2xl font-poppins font-bold my-4">
               Rest API
            </p>
          </div>

          <div className='flex flex-col'>
          <div className='flex gap-3 justify-start'>
          <BsFillPatchCheckFill className='text-yellow-500 justify-start' /><p className="text-slate-300 text-center font-poppins ">
           Nodejs, Express
          </p>
          </div>

          <div className='flex gap-3'>
          <BsFillPatchCheckFill className='text-yellow-500' /><p className="text-slate-300 text-center font-poppins ">
          Python, FastAPI
          </p>
          </div>

          <div className='flex gap-3'>
          <BsFillPatchCheckFill className='text-yellow-500 justify-start' /><p className="text-slate-300 text-center font-poppins ">
           Sequelize
          </p>
          </div>
          <div className='flex gap-3'>
          <BsFillPatchCheckFill className='text-yellow-500 justify-start' /><p className="text-slate-300 text-center font-poppins ">
          Mysql
          </p>
          </div>
          <div className='flex gap-3'>
          <BsFillPatchCheckFill className='text-yellow-500 justify-start' /><p className="text-slate-300 text-center font-poppins ">
           MongoDB
          </p>
          </div>

          </div>
        </div>

        {/* software skill */}
        <div className="bg-sky-600/10 p-4 rounded-3xl flex flex-col place-items-center">
          <div className="h-20 ">
            <div className="bg-sky-900 w-20 h-20 rounded-full p-4">
              <DiLinux className="text-white text-5xl" />
            </div>
          </div>
          <div>
            <p className="text-slate-200 text-2xl font-poppins font-bold my-4">
              Software
            </p>
          </div>

          <div className='flex flex-col '>
          <div className='flex gap-3 '>
          <BsFillPatchCheckFill className='text-yellow-500 ' /><p className="text-slate-300 text-center font-poppins ">
           Notion
          </p>
          </div>

          <div className='flex gap-3'>
          <BsFillPatchCheckFill className='text-yellow-500' /><p className="text-slate-300 text-center font-poppins ">
          Postman
          </p>
          </div>

          <div className='flex gap-3'>
          <BsFillPatchCheckFill className='text-yellow-500 justify-start' /><p className="text-slate-300 text-center font-poppins ">
            Visual Studio Code
          </p>
          </div>
          <div className='flex gap-3'>
          <BsFillPatchCheckFill className='text-yellow-500 justify-start' /><p className="text-slate-300 text-center font-poppins ">
          Linux Terminal
          </p>
          </div>
          <div className='flex gap-3'>
          <BsFillPatchCheckFill className='text-yellow-500 justify-start' /><p className="text-slate-300 text-center font-poppins ">
          Chrome Devtools
          </p>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillDif