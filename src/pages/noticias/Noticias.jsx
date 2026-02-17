import React from "react";
import PortadaNoticias from "./components/PortadaNoticias";
import CardNoticias from "./components/CardNoticias";
import SponsorCTA from "./components/SponsorCTA";
import Sponsor from "../../components/common/Sponsor";

const Noticias = () => {
  const filtros = ["Todos", "Masculino", "Femenino", "Juveniles"];

  return (
    <div className="md:px-0 main-container">
      <PortadaNoticias></PortadaNoticias>
      
      <div className="pt-20 flex flex-col md:flex-row md:items-center justify-between gap-6 px-5 lg:px-10">
        <div className="flex flex-wrap gap-3">
          {filtros.map((f, index) => (
            <button 
              key={index} 
              className={`px-6 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer border-2 ${index === 0 ? 'bg-amber-400 border-amber-400 text-black' : 'bg-transparent border-gray-700 text-gray-400 hover:border-amber-400 hover:text-amber-400'}`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="text-gray-500 text-sm font-medium italic">
          Mostrando: <span className="text-amber-400">Todas las categorías</span>
        </div>
      </div>

      <hr className="border-gray-800 my-8" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
        <CardNoticias></CardNoticias>
        <CardNoticias></CardNoticias>
        <CardNoticias></CardNoticias>
        <CardNoticias></CardNoticias>
        <CardNoticias></CardNoticias>
        <CardNoticias></CardNoticias>
      </div>
      <div className="mt-20">
      <SponsorCTA />
      <Sponsor></Sponsor>
      </div>
    </div>
  );
};

export default Noticias;
