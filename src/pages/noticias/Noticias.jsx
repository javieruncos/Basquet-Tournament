import React from "react";
import PortadaNoticias from "./components/PortadaNoticias";
import CardNoticias from "./components/CardNoticias";

const Noticias = () => {
  const filtros = ["Todos", "Masculino", "Femenino", "Juveniles"];

  return (
    <div className="md:px-10 main-container">
      <PortadaNoticias></PortadaNoticias>
      <div className="pt-20 grid grid-cols-3 md:grid-cols-4 gap-2 px-5 lg:px-0 md:px-0 w-full">
        {filtros.map((f, index) => (
          <button key={index} className="py-2 px-5 text-white w-full text-center hover:text-black hover:bg-amber-300 bg-[#191919] transition duration-300 ease-in-out rounded-sm cursor-pointer hover:border-amber-300">
            {f}
          </button>
        ))}
      </div>
      <hr className=" text-gray-200/20 my-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
        <CardNoticias></CardNoticias>
        <CardNoticias></CardNoticias>
        <CardNoticias></CardNoticias>
        <CardNoticias></CardNoticias>
        <CardNoticias></CardNoticias>
        <CardNoticias></CardNoticias>
      </div>
      <div className="h-110 md:h-90 lg:h-70 w-full bg-amber-300 my-20 grid grid-col-1 md:grid-cols-1 lg:grid-cols-2 gap-3 py-5">
        <div className="md:p-10 p-5 md:h-30 flex flex-col gap-4 h-full">
         <h3 className="text-5xl ">Sumate como Sponsor del Torneo</h3>
         <p className="text-black">Impulsá el deporte local y posicioná tu marca frente a jugadores, familias y espectadores. Ofrecemos espacios de visibilidad y acciones promocionales durante todo el torneo.</p>
        </div>
        <div className="flex items-center justify-center md:justify-start lg:justify-center md:items-start lg:items-center md:px-10 px-2 pt-10">
        <div className="h-20 md:h-20 w-100 bg-black grid grid-cols-2 md:grid-cols-2 gap-6 py-5 px-5">
           <div className="text-sm flex items-center">
             <p>Comunicate con nosotros</p>
           </div>
           <div className="flex items-center justify-center">
            <a href="#" className="bg-[#191919] hover:bg-amber-300 px-10 py-2 text-amber-300 cursor-pointer hover:text-white rounded-sm transition duration-300 ease-in-out">Enviar</a>
           </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Noticias;
