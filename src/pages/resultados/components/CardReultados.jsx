import React from "react";

const CardReultados = () => {
  return (
    <div className="h-auto lg:h-75  w-full bg-dark-gradient rounded-md">
      <div className="p-4 flex gap-6 items-center justify-between lg:justify-start">
        <span className="bg-amber-300 px-2 py-1 rounded-md text-black">
          Finalizado
        </span>
        <p>Fecha 3 - 20/03/2026</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 lg:gap-4 px-4 pt-3">
        <div className="flex flex-col gap-3 items-center justify-center">
          <div className="bg-black/10 rounded-2xl h-30 lg:w-full w-70 py-20 lg:py-0 flex justify-center items-center flex-col  border border-red-500/20">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Escudo_del_Club_Estaci%C3%B3n_Experimental_Tucum%C3%A1n.svg"
              alt="club"
              className="h-30 lg:h-20 w-full"
            />
          </div>
          <p className="truncate max-w-40.5">CAEE</p>
        </div>
        <div className=" h-30 flex justify-center items-center gap-3 font-bold px-10">
          <p className="text-5xl">50</p>
          <span className="text-4xl">-</span>
          <p className="text-5xl text-amber-300">100</p>
        </div>
       <div className="flex flex-col gap-3 items-center justify-center">
          <div className="bg-black/10 rounded-2xl h-30 lg:w-full w-70 py-20 lg:py-0 flex justify-center items-center flex-col  border border-green-500/20">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Escudo_del_Club_Estaci%C3%B3n_Experimental_Tucum%C3%A1n.svg"
              alt="club"
              className="h-30 lg:h-20 w-full"
            />
          </div>
          <p>CATBB</p>
        </div>
      </div>
      <div className="flex justify-center items-center py-10 lg:py-0">
        <button
          className="px-5 py-2 bg-amber-300 text-black rounded-md border
        border-amber-300/20 hover:bg-black hover:text-white transition duration-300 ease-in-out
        cursor-pointer"
        >
          Ver detalles
        </button>
      </div>
    </div>
  );
};

export default CardReultados;
