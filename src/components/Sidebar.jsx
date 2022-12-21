import React from 'react'
import { BsFillHouseDoorFill} from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { AiFillExperiment, AiFillMessage } from "react-icons/ai";
import { SiMicrodotblog } from "react-icons/si";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className=" my-3  md:p-2   sm:ml-3 rounded-full bg-blue-600/10 sm:w-16   h-[8vh] sm:h-[96vh] flex sm:flex-col flex-row justify-between ">
      <p className="text-sky-500 text-2xl  w-12 p-2 text-center font-bold sm:bg-slate-900 rounded-full">
        F
      </p>
      <ul className="flex sm:flex-col sm:justify-between   sm:h-[40vh] mb-9">
        <li>
          <Link to={`home`}>
            <BsFillHouseDoorFill
              className="text-slate-600 text-4xl  w-12 h-12 p-2 hover:bg-slate-900 hover:text-sky-500  hover:rounded-full cursor-pointer"
              title="Home"
            />
          </Link>
        </li>
        <li>
          <Link to={`habilidades`}>
            <GiSkills
              className="text-slate-600   w-12  h-12 p-2  hover:text-sky-500 cursor-pointer  hover:rounded-full hover:bg-slate-900"
              title="Habilidades"
            />
          </Link>
        </li>
        <li className="">
          <Link to={`proyectos`}>
            <AiFillExperiment
              className="text-slate-600 text-4xl  w-12 h-12 p-2 font-bolt  hover:rounded-full hover:bg-slate-900 hover:text-sky-500 cursor-pointer  "
              title="Experiencia"
            />
          </Link>
        </li>
        <li>
          <Link to={`contacto`}>
            <AiFillMessage
              className="text-slate-600 text-2xl w-12 h-12 p-2  hover:text-sky-500 cursor-pointer  hover:rounded-full hover:bg-slate-900"
              title="Contacto"
            />
          </Link>
        </li>
      </ul>
      <div>
        <Link to={"blog"}>
          <SiMicrodotblog
            className="text-slate-600 text-2xl w-12 h-12 p-2  hover:text-sky-500 cursor-pointer  hover:rounded-full hover:bg-slate-900"
            title="Blog"
          />
        </Link>
      </div>
    </div>
  );
}

export default Sidebar