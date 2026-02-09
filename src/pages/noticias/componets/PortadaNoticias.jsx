import React from "react";

const PortadaNoticias = () => {
  return (
    <div className="mt-10  bg-red-500 h-125 rounded-xl relative">
      <img
        src="https://images.pexels.com/photos/31169292/pexels-photo-31169292.jpeg"
        alt=""
        className="object-cover w-full h-full"
      />
      <div className="h-full w-full absolute top-0 left-0 bg-black/60">
        <div className="pt-20 md:w-180 px-10 flex flex-col justify-start gap-4 absolute top-0 left-0 text-center md:text-center lg:text-left">
          <h1 className="text-5xl md:text-8xl  text-white">Torneo regional Amateur</h1>
          <p className="text-gray-400">
            El Torneo Regional Amateur celebra el talento y el compromiso de los
            equipos de la región. Un espacio donde el básquet amateur crece, se
            comparte y se vive en cada jornada.
          </p>
          <div className="mt-5">
            <button className="px-10 py-5 bg-amber-300 border-2 hover:bg-[#191919] hover:text-white transition duration-300 ease-in-out rounded-md cursor-pointer hover:border-amber-300 hover:border-2">
              Descubre Noticias Destacadas
            </button>
          </div>
        </div>
        <div className="px-5 py-1 bg-black w-40 text-white border-l-4 border-yellow-400 absolute right-20 top-20 hidden lg:block">
          <span className="text-sm text-gray-500">Temporada</span>
          <p className="text-2xl">2026</p>
        </div>
      </div>
    </div>
  );
};

export default PortadaNoticias;
