import React, {useState} from 'react'
import { BsFillHouseDoorFill} from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { AiFillExperiment, AiFillMessage } from "react-icons/ai";
import { SiMicrodotblog } from "react-icons/si";
import { Link } from 'react-router-dom';
import { Link as Linkk } from 'react-scroll';

const Sidebar = () => {
  const [color, setColor] = useState(0)

  return (
    <div className=" lg:my-3  z-50  fixed  sm:ml-3 rounded-full bg-gray-900 mt-2  lg:w-14 w-full shadow-lg shadow-sky-800   h-[7vh] lg:h-[96vh] flex lg:flex-col flex-row justify-around  items-center ">
      {/* <p className="text-sky-500 text-2xl  w-12 p-2 text-center font-bold sm:bg-slate-900 rounded-full"> 
        F
      </p> */}
      
        <div>
          {/* Link as Linkk para crear el scroll a home*/}
          <Linkk onClick={() => setColor(1)}
            to="home"
            smooth={true}
            duration={1500}
            className="lg:hidden flex"
          >
            {" "}
            <BsFillHouseDoorFill
              className={` ${color === 1 ? "text-sky-500" : "text-slate-600"} text-4xl  w-12  h-10 p-2 font-bolt  hover:rounded-full hover:bg-slate-900 hover:text-sky-500 cursor-pointer`}
              title="home"
            />
          </Linkk>
          <Link to={`/`} onClick={() => setColor(1)}>
            <BsFillHouseDoorFill
              className={` text-4xl lg:flex hidden  w-12 h-12 p-2 hover:bg-slate-900  ${color === 1 ? "text-sky-500" : "text-slate-600"} hover:text-sky-500 cursor-pointer`}
              title="Home"
            />
          </Link>
        </div>

        <div>
          {/* Link as Linkk para crear el scroll a skill */}
          <Linkk onClick={() => setColor(2)}
            to="skill"
            smooth={true}
            duration={1500}
            className="lg:hidden flex"
          >
            {" "}
            <GiSkills
              className={` ${color === 2 ? "text-sky-500" : "text-slate-600"} text-4xl  w-12 h-10 p-2 font-bolt  hover:rounded-full hover:bg-slate-900 hover:text-sky-500 cursor-pointer  `}
              title="Habilidades"
            />
          </Linkk>
          <Link to={`skill`} className="lg:flex hidden" onClick={() => setColor(2)}>
            <GiSkills
              className={`${color === 2 ? "text-sky-500" : "text-slate-600"}   w-12  h-12 p-2  hover:text-sky-500 cursor-pointer  hover:bg-slate-900`}
              title="Habilidades"
            />
          </Link>
        </div>

        <div className="">
          {/* Link as Linkk para crear el scroll a projects */}
          <Linkk onClick={() => setColor(3)}
            to="project"
            smooth={true}
            duration={1500}
            className="lg:hidden flex"
          >
            {" "}
            <AiFillExperiment
              className={` ${color === 3 ? "text-sky-500" : "text-slate-600"} text-4xl  w-12  h-10 p-2 font-bolt  hover:rounded-full hover:bg-slate-900 hover:text-sky-500 cursor-pointer`}
              title="Proyectos"
            />
          </Linkk> 
          <Link to={`projects`} className="lg:flex hidden" onClick={() => setColor(3)}>
            <AiFillExperiment
              className={` text-4xl lg:flex hidden  w-12 h-12 p-2 hover:bg-slate-900  ${color === 3 ? "text-sky-500" : "text-slate-600"} hover:text-sky-500 cursor-pointer`}
              title="Proyectos"
            />
          </Link>
        </div>
        <div>
          {/* Link as Linkk para crear el scroll a home*/}
          <Linkk onClick={() => setColor(4)}
            to="contacto"
            smooth={true}
            duration={1500}
            className="lg:hidden flex"
          >
            {" "}
            <AiFillMessage
              className={` ${color === 4 ? "text-sky-500" : "text-slate-600"} text-4xl  w-12  h-10 p-2 font-bolt  hover:rounded-full hover:bg-slate-900 hover:text-sky-500 cursor-pointer`}
              title="Contacto"
            />
          </Linkk>
          <Link to={`contact`} onClick={() => setColor(4)}>
            <AiFillMessage
              className={` text-4xl lg:flex hidden  w-12 h-12 p-2   ${color === 4 ? "text-sky-500" : "text-slate-600"} hover:text-sky-500 cursor-pointer`}
              title="Contacto"
            />
          </Link>
        </div>
     
      {/* <div>
        <Link to={"blog"}>
          <SiMicrodotblog
            className="text-slate-600 text-2xl w-12 h-12 p-2  hover:text-sky-500 cursor-pointer  hover:rounded-full hover:bg-slate-900"
            title="Blog"
          />
        </Link>
      </div> */}
    </div>
  );
}

export default Sidebar