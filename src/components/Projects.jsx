import React from 'react'
import axiosagency from '../assets/axiosagency.png'
import dashboard from '../assets/dashboard.png'
import transporto from '../assets/transporto.png'
import quiz from '../assets/quiz.png'
import portafolio  from '../assets/portafolio.png'


 const Projects = () => {
  return (
    <div className="">
      <h1 className="font-poppins f text-2xl text-sky-500  ">Proyectos</h1>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-5">
        {/* portafolio */}
        <div
          className="bg-contain  h-52 bg-center duration-1000 hover:scale-90 rounded-2xl cursor-pointer"
          style={{ backgroundImage: `url(${portafolio})` }}
        >
          {" "}
        </div>

        {/* axios agency */}
        <div
          className="bg-contain h-52 bg-center duration-1000 hover:scale-90 rounded-2xl cursor-pointer"
          style={{ backgroundImage: `url(${axiosagency})` }}
          onClick={() => {
            window.open("https://www.axiosagency.info/", "_blank");
          }}
        >
          {" "}
        </div>
        {/* dashboar restaurant */}
        <div
          className="bg-contain h-52 bg-center duration-1000 hover:scale-90 rounded-2xl cursor-pointer"
          style={{ backgroundImage: `url(${dashboard})` }}
          onClick={() => {
            window.open("https://franciscodashboard.onrender.com/", "_blank");
          }}
        >
          {" "}
        </div>
        {/* app quiz */}
        <div
          className="bg-contain h-52 bg-center duration-1000 hover:scale-90 rounded-2xl cursor-pointer"
          style={{ backgroundImage: `url(${quiz})` }}
          onClick={() => {
            window.open("https://app-quiz-sigma.vercel.app/", "_blank");
          }}
        >
          {" "}
        </div>

        {/* transporto */}

        <div
          className="bg-contain h-52 bg-center duration-1000 hover:scale-90 rounded-2xl cursor-pointer"
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
