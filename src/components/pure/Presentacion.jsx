import React, {useEffect} from 'react'
import { MdOutlineDevices } from "react-icons/md";
import { AiTwotoneStar } from "react-icons/ai";
import { HiLightBulb } from "react-icons/hi";
import { SiFastapi } from "react-icons/si";
import AOS from 'aos';

const Presentacion = () => {
    useEffect(() => {
    AOS.init()
    }, [])
    


  return (
    <div id="home">
      <div className="flex flex-wrap place-items-center px-2 lg:px-0 lg:mt-0 mt-20">
        <img
          src="https://avatars.githubusercontent.com/u/102636517?v=4"
          className="rounded-full w-40 mx-auto "
        />

        <div className=" ">
          <div>
            <p className="text-sky-500 text-3xl font-semibolt font-poppins  text-center lg:text-start ">
              Francisco Palencia{" "}
            </p>
            <p className="text-slate-400  text-xl font-extrabold text-center lg:text-start font-poppins">
              Desarrollador Frontend
            </p>
          </div>
          <div className=" items-center  bg-green-600/10 p-4 rounded-lg border border-dashed border-green-600 shadow-lg shadow-green-900 ">
            <p className="font-poppins text-slate-50 text-justify ">
              Tengo una gran pasión por los efectos de interfaz de usuario,
              <br></br>
              las animaciones y la creacion de experiencias de usuario
              intuitivas y <br></br> dinamicas hagamos algo increible.
            </p>
          </div>
        </div>
      </div>
      <div className="grid  grid-cols-2  md:grid-cols-2 xl:grid-cols-4 mt-7 gap-4 px-2  lg:px-0">
        <div
          data-aos="zoom-out-right" data-aos-duration="1000"
          className="bg-sky-600/10 p-4 rounded-3xl flex flex-col place-items-center shadow-lg shadow-sky-900"
        >
          <div className="h-20 ">
            <div className="bg-sky-900 w-20 h-20 rounded-full p-4">
              <MdOutlineDevices className="text-white text-5xl" />
            </div>
          </div>
          <div>
            <p className="text-slate-200 text-2xl font-poppins font-bold my-4">
              Responsive
            </p>
          </div>
          <p className="text-slate-300 text-center">
            Mis diseños funcionarán en cualquier dispositivo, grande o pequeño.
          </p>
          <div></div>
        </div>

        <div
          data-aos="zoom-out-left" data-aos-duration="1000"
          className="bg-sky-600/10 p-4 rounded-3xl flex flex-col place-items-center shadow-lg shadow-sky-900"
        >
          <div className="h-20 ">
            <div className="bg-sky-900 w-20 h-20 rounded-full p-4">
              <AiTwotoneStar className="text-white text-5xl" />
            </div>
          </div>
          <div>
            <p className="text-slate-200 text-2xl font-poppins font-bold my-4">
              Dinámicos
            </p>
          </div>
          <p className="text-slate-300 text-center">
            Los sitios web no tienen que ser estáticos, me encanta hacer que las
            páginas cobren vida.
          </p>
          <div></div>
        </div>

        <div
          data-aos="zoom-out-right"
          data-aos-duration="1000"
          className="bg-sky-600/10 p-4 rounded-3xl flex flex-col place-items-center shadow-lg shadow-sky-900"
        >
          <div className="h-20 ">
            <div className="bg-sky-900 w-20 h-20 rounded-full p-4">
              <HiLightBulb className="text-white text-5xl" />
            </div>
          </div>
          <div>
            <p className="text-slate-200 text-2xl font-poppins font-bold my-4">
              Intuitiva
            </p>
          </div>
          <p className="text-slate-300 text-center">
            Fuerte preferencia por una UX/UI intuitiva y fácil de usar.
          </p>
          <div></div>
        </div>

        <div
          data-aos="zoom-out-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="bg-sky-600/10 p-4 rounded-3xl flex flex-col place-items-center shadow-lg shadow-sky-900"
        >
          <div className="h-20 ">
            <div className="bg-sky-900 w-20 h-20 rounded-full p-4">
              <SiFastapi className="text-white text-5xl" />
            </div>
          </div>
          <div>
            <p className="text-slate-200 text-2xl font-poppins font-bold my-4">
              Rapidos
            </p>
          </div>
          <p className="text-slate-300 text-center">
            Tiempos de carga rápidos e interacción sin demoras, mi máxima
            prioridad.
          </p>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Presentacion