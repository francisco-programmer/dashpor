
import React, {useState, useEffect}from 'react'

import { BsArrowLeft } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { CgMenuRound } from "react-icons/cg";
import { HiUsers} from "react-icons/hi";

const Screen = () => {



  return (
    <div className="px-4 pt-1 mt-20 lg:mt-0">
      <div className="bg-slate-900 rounded-xl"> 
        {/* barra de busqueda */}
        <div className="flex justify-between items-center mx-2 ">
          <BsArrowLeft className="text-slate-300" />
          <p className="text-slate-300 bg-slate-800 w-56 p-2  rounded">
            Francisco Palencia
          </p>
          <AiFillSetting className="text-slate-300" />
        </div>

        {/* portada */}
        <div className="">
          <img src="https://github.com/francisco-programmer/francisco-programmer/raw/main/src/Screenshot%202023-02-08%20at%2020-45-11%20Github%20Profile%20Header%20Generator.png" />
          <div className="flex justify-between">
            <img
              src="https://avatars.githubusercontent.com/u/102636517?v=4"
              className="rounded-full w-20 p-1 mx-2 -mt-8 border-2 cursor-pointer"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/francisco-palencia/",
                  "_blank"
                );
              }}
            />
            <MdOutlineModeEditOutline className="text-slate-300 mr-3 mt-3" />
          </div>
        </div>

        {/* Informacion */}
        <div className="mx-2">
          <p className="text-slate-300 font-poppins font-bold">
            Francisco Palencia
          </p>
          <p className="text-slate-300 text-sm font-poppins ">
            Frontend Developer | React Developer | Web Developer | Startup
          </p>
          <p className="text-slate-300 text-xs font-poppins my-3">
            Monteria, Colombia
          </p>
          <p className="text-blue-500 font-bold text-xs font-poppins ">
            +500 contactos
          </p>
        </div>
        {/* botones interes */}
        <div className="flex  gap-2 mx-2 justify-between items-center">
          <button className="text-white  text-sm px-1 bg-blue-600 rounded-3xl w-26">
            Tengo interés en..
          </button>
          <button className="text-white  text-sm  px-1 border-2 border-blue-600 rounded-3xl w-26">
            Añadir sección
          </button>
          <CgMenuRound className="text-3xl text-slate-300" />
        </div>

        {/* scroll horizontal */}

        <div className="overflow-x-auto p-2 flex gap-4 ">
          <div className="border-x border-y border-slate-700 rounded-xl p-2 w-full">
            <p className="text-xs text-blue-600  font-poppins">
              Muestra a los tecnicos de seleccion que estas buscando empleo
            </p>
            <p className="text-xs text-slate-300 font-poppins">
              y controla quien puede verlo
            </p>
          </div>
        </div>
      </div>

      {/* analisis */}
      <div className="bg-slate-900 mt-1 p-1 rounded-lg
      ">
        <div className="">
          <p className="font-poppins text-slate-300 font-bold ">Análisis</p>
          <div className="flex items-center gap-1">
            <AiFillEye />
            <p className="text-slate-400 text-xs font-poppins">Solo para ti</p>
          </div>
          <div className="flex gap-2 border-b-1 border-slate-900 mt-2">
            <HiUsers className="text-slate-300" />
            <div className="">
              <p className="text-slate-300 text-sm font-poppins font-bold">
                320 Visualizaciones del Perfil
              </p>
              <p className="text-slate-300 text-xs font-poppins">
                Descubre quien ha visto tu perfil.
              </p>
            </div>
          </div>
          <div className="flex gap-2 border-b-1 border-slate-900  ">
            <HiUsers className="text-slate-300" />
            <div className="">
              <p className="text-slate-300 text-sm font-poppins font-bold">
                530 impresioness de tu publicacion
              </p>
              <p className="text-slate-300 text-xs font-poppins">
                Mira quien esta interactúando con tus publicaciones
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screen