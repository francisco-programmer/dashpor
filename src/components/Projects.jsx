
import axiosagency from '../assets/axiosagency.png'
import dashboard from '../assets/dashboard.png'
import transporto from '../assets/transporto.png'
import quiz from '../assets/quiz.png'
import portafolio  from '../assets/portafolio.png'
import notii from '../assets/notti.png'
import latindev from '../assets/latindev.png'
import desafio from '../assets/Desafio-Bilingüe-Metodo-3-en-9.png'
import learning from '../assets/LearningPlus.png'
import AOS from 'aos';
import { useEffect } from 'react'


 const Projects = () => {
    useEffect(() => {
      AOS.init()
    }, [])



  return (
    <div className="" id="project">
      <h1 className="font-poppins f text-2xl text-sky-500 lg:mt-0 mt-10 font-bold text-center lg:text-start  ">Algunos de mis Proyectos</h1>
      <div className="grid lg:grid-cols-2  gap-4 mt-5">

      <div
          data-aos="flip-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="bg-contain  h-52 bg-center duration-1000 hover:scale-90 rounded-2xl cursor-pointer shadow-lg shadow-sky-900 bg-no-repeat"
          style={{ backgroundImage: `url('https://i.imgur.com/I6KN5wz.png')` }}
          onClick={() => {
            window.open("https://courses-premium.vercel.app/", "_blank");
          }}
        >
          {" "}
        </div>
        {/* Learning Plus*/}
        <div
          data-aos="flip-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="bg-contain  h-52 bg-center duration-1000 hover:scale-90 rounded-2xl cursor-pointer shadow-lg shadow-sky-900 bg-no-repeat"
          style={{ backgroundImage: `url(${learning})` }}
          onClick={() => {
            window.open("https://www.learningplus.online/", "_blank");
          }}
        >
          {" "}
        </div>
        {/* Desafio bilingue*/}
        <div
          data-aos="flip-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="bg-contain  h-52 bg-center duration-1000 hover:scale-90 rounded-2xl cursor-pointer shadow-lg shadow-sky-900 bg-no-repeat"
          style={{ backgroundImage: `url(${desafio})` }}
          onClick={() => {
            window.open("https://metodo3-en-9.vercel.app/", "_blank");
          }}
        >
          {" "}
        </div>
        {/* latindev */}
        <div
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
          data-aos="flip-up"
          className="bg-contain  h-52 bg-center duration-1000 hover:scale-90 rounded-2xl cursor-pointer shadow-lg shadow-sky-900 bg-no-repeat"
          style={{ backgroundImage: `url(${latindev})` }}
          onClick={() => {
            window.open("https://latindev.vercel.app/", "_blank");
          }}
        >
          {" "}
        </div>
        {/* notti.tech */}
        <div
         
          className="bg-contain  h-52 bg-center duration-1000 hover:scale-90 rounded-2xl cursor-pointer shadow-lg shadow-sky-900"
          style={{ backgroundImage: `url(${notii})` }}
          onClick={() => {
            window.open("https://notitech.vercel.app/", "_blank");
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
            window.open("https://axiosmarketingdigital.vercel.app/", "_blank");
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
