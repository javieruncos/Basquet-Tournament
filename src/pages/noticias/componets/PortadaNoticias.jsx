import React from "react";

const PortadaNoticias = () => {
  return (
    <div className="mt-10 px-10 bg-red-500 h-125 rounded-xl relative">
      <div className="pt-20 w-160 flex flex-col  justify-start gap-4">
        <h1 className="text-7xl text-white">Torneo regional Amateur</h1>
        <p className="text-gray-400">
          El Torneo Regional Amateur celebra el talento y el compromiso de los
          equipos de la región. Un espacio donde el básquet amateur crece, se
          comparte y se vive en cada jornada.
        </p>
        <div className="mt-10">
          <button className="px-10 py-5 bg-amber-300">
            Descubre Noticias Destacadas
          </button>
        </div>
      </div>
      <div className="px-5 py-1 bg-black w-40 text-white border-l-4 border-yellow-400 absolute right-20 top-20 hidden lg:block">
        <span className="text-sm text-gray-500">Temporada</span>
        <p className="text-2xl">2026</p>
      </div>
    </div>
  );
};

export default PortadaNoticias;
