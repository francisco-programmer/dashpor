import React from 'react'
import axiosagency from '../assets/axiosagency.png'
import dashboard from '../assets/dashboard.png'
import transporto from '../assets/transporto.png'
import quiz from '../assets/quiz.png'
import portafolio  from '../assets/portafolio.png'
import notii from '../assets/notti.png'
import latindev from '../assets/latindev.png'


 const Projects = () => {
  return (
    <div className="" id='project'>
      <h1 className="font-poppins f text-2xl text-sky-500  " >Proyectos</h1>
      <div className="grid grid-cols-2  gap-4 mt-5">
         {/* latindev */}
      <div
          className="bg-contain  h-52 bg-center duration-1000 hover:scale-90 rounded-2xl cursor-pointer shadow-lg shadow-sky-900 bg-no-repeat"
          style={{ backgroundImage: `url(${latindev})` }} onClick={() => {
            window.open("https://latindev.vercel.app/", "_blank");
          }}
        >
          
          {" "}
        </div>
        {/* notti.tech */}
      <div
          className="bg-contain  h-52 bg-center duration-1000 hover:scale-90 rounded-2xl cursor-pointer shadow-lg shadow-sky-900"
          style={{ backgroundImage: `url(${notii})` }} onClick={() => {
            window.open("https://www.notii.tech/", "_blank");
          }}
        >
          {" "}
        </div>
        {/* portafolio */}
        <div
          className="bg-contain  h-52 bg-center duration-1000 hover:scale-90 rounded-2xl cursor-pointer shadow-lg shadow-sky-900"
          style={{ backgroundImage: `url(${portafolio})` }}
        >
          {" "}
        </div>

        {/* axios agency */}
        <div
          className="bg-contain h-52 bg-center duration-1000 hover:scale-90 rounded-2xl cursor-pointer shadow-lg shadow-sky-900"
          style={{ backgroundImage: `url(${axiosagency})` }}
          onClick={() => {
            window.open("https://www.axiosagency.info/", "_blank");
          }}
        >
          {" "}
        </div>
        {/* dashboar restaurant */}
        <div
          className="bg-contain h-52 bg-center duration-1000 hover:scale-90 rounded-2xl cursor-pointer shadow-lg shadow-sky-900"
          style={{ backgroundImage: `url(${dashboard})` }}
          onClick={() => {
            window.open("https://franciscodashboard.onrender.com/", "_blank");
          }}
        >
          {" "}
        </div>
        {/* app quiz */}
        <div
          className="bg-contain h-52 bg-center duration-1000 hover:scale-90 rounded-2xl cursor-pointer shadow-lg shadow-sky-900"
          style={{ backgroundImage: `url(${quiz})` }}
          onClick={() => {
            window.open("https://app-quiz-sigma.vercel.app/", "_blank");
          }}
        >
          {" "}
        </div>

        {/* transporto */}

        <div
          className="bg-contain h-52 bg-center duration-1000 hover:scale-90 rounded-2xl cursor-pointer shadow-lg shadow-sky-900"
          style={{ backgroundImage: `url(${transporto})` }}
          onClick={() => {
            window.open("https://transporto.vercel.app/", "_blank");
          }}
        >
          <p className="text-white bg-slate-900 rounded-xl">
            No responsive a pedido del cliente codigo final oculto por legalidad
          </p>{" "}
        </div>
      </div>
    </div>
  );
}
export default Projects
