import React, {useRef, useState} from 'react'
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { BiMessageDots } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  
 
 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    notify()

    emailjs.sendForm('service_dqfr3ol', 'template_sxmum97', form.current, '3rbcs8T7pzbbaiP0qqx8W')
     
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log(error);
      });

   
  };


  const notify = () => toast.success('Mensaje Enviado! 😁', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  return (
    <div className="mt-20 lg:mt-0 " id='contacto'>
      <p className="text-slate-300 font-poppins text-center px-5 ">
        Podemos construir cosas increibles y estas aun paso de hacerlo!!.
      </p>
      <h1 className="font-poppins font-bold text-center  text-2xl text-sky-500  mt-6">
        Contáctame
      </h1>
      <div className="flex gap-4 justify-center my-6">
        <AiFillLinkedin
          className="text-slate-300 text-4xl rounded hover:text-sky-500 cursor-pointer"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/francisco-palencia/",
              "_blank"
            );
          }}
        />{" "}
        <FaGithubSquare
          onClick={() => {
            window.open(
              "https://www.github.com/francisco-programmer/",
              "_blank"
            );
          }}
          className="text-slate-300 text-4xl rounded hover:text-sky-500 cursor-pointer"
        />
      </div>

      {/* Formulario */}
      <form ref={form} onSubmit={sendEmail}>
        <div className="mx-auto  flex flex-col   gap-4 place-items-center">
          <div className="relative ">
            <AiOutlineUser className="absolute top-1/2 -translate-y-1/2 left-2 text-slate-500 " />

            <input
              type="text"
              name="user_name"
              className="w-72 mx-auto p-2 pl-8 rounded my-1 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 bg-sky-600/10 text-white  disabled:border-sky-200 disabled:shadow-none
      invalid:border-sky-500 g-pink-600"
              maxLength={30}
              required
              placeholder="Nombre"
            />
          </div>

          <div className="relative ">
            <MdEmail className="absolute top-1/2 -translate-y-1/2 left-2 text-slate-500 " />

            <input
              type="email"
              name="user_email"
              className="w-72 mx-auto p-2 pl-8 rounded my-1 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 bg-sky-600/10 text-white disabled:border-slate-200 disabled:shadow-none
      invalid:border-sky-500 g-pink-600"
              maxLength={30}
              required
              placeholder="Email"
            />
          </div>
          <div className="relative ">
            <BiMessageDots className="absolute top-1/3 -translate-y-1/2 left-2 text-slate-500 " />

            <textarea
              type="text"
              name="message"
              className="w-72 mx-auto p-2 pl-8 rounded bg-sky-600/10 text-white my-1 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-sky-500 g-pink-600"
              required
              placeholder="Mensaje"
            />
          </div>
          <input
            type="submit"
            value="Enviar"
            className="text-slate-300 bg-green-500 p-3 w-72 font-poppins font-semibold rounded cursor-pointer  text-center"
          />
        </div>
      </form>

      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default Contact