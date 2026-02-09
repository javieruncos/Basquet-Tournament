import React from "react";

const PortadaDetalle = () => {
  return (
    <div
      className="h-120 w-full rounded-md border-gray-400/30 border bg-[#171717] relative">
      <div className=" py-5 px-14">
        <div className="flex gap-4 items-center">
          <span className="px-3 py-1 bg-yellow-300 rounded-md text-black">
            Fecha 5{" "}
          </span>
          <span>31/12/2022</span>
        </div>
      </div>
      <div className="grid grid-cols-3 items-center h-90 px-4">
        <div className="flex flex-col items-center gap-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Escudo_del_Club_Estaci%C3%B3n_Experimental_Tucum%C3%A1n.svg"
            alt="Local"
            className="h-24 w-24 md:h-52 md:w-52 object-contain"
          />
          <h2 className="text-xl md:text-2xl font-bold text-white">Local</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-2 md:gap-4 text-5xl md:text-9xl font-bold text-white">
            <span>88</span>
            <span className="text-amber-300">-</span>
            <span>74</span>
          </div>
          <span className="text-gray-400 mt-2 uppercase tracking-widest text-sm">Finalizado</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Escudo_del_Club_Estaci%C3%B3n_Experimental_Tucum%C3%A1n.svg"
            alt="Visitante"
            className="h-24 w-24 md:h-52 md:w-52 object-contain"
          />
          <h2 className="text-xl md:text-2xl font-bold text-white">Visitante</h2>
        </div>
      </div>
      <div className="px-5 py-1 bg-black w-40 text-white border-l-4 border-yellow-400 absolute right-10 top-2 hidden lg:block">
          <span className="text-sm text-gray-500">Temporada</span>
          <p className="text-2xl">2026</p>
        </div>
    </div>
  );
};

export default PortadaDetalle;
