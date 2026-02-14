import React from "react";
import CardClubes from "./components/CardClubes";

const ClubesPage = () => {
  return (
    <div className="p-5 lg:p-10">
      <div className=" flex flex-col items-center gap-5 lg:items-start lg:gap-2 text-center lg:text-left">
        <h1 className="text-7xl">Directorio de Clubes</h1>
        <p className="text-sm lg:text-2xl text-amber-300 numberFonts">
          32 clubes registrados compitiendo
        </p>
      </div>
      <div className="w-full mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-7 numberFonts pt-5 lg:pt-0">
        <button className="w-40 py-3 bg-[#171717] rounded-md hover:bg-amber-300 transition-all duration-300 hover:text-black cursor-pointer text-center">
          Todos
        </button>
        <button className="w-40 py-3 bg-[#171717] rounded-md hover:bg-amber-300 transition-all duration-300 hover:text-black cursor-pointer text-center">
          Masculino
        </button>
        <button className="w-40 py-3 bg-[#171717] rounded-md hover:bg-amber-300 transition-all duration-300 hover:text-black cursor-pointer text-center">
          Femenino
        </button>
        <button className="w-40 py-3 bg-[#171717] rounded-md hover:bg-amber-300 transition-all duration-300 hover:text-black cursor-pointer text-center">
          Juveniles
        </button>
      </div>
      <div className="h-auto py-10 w-full  grid grid-cols-1 md:grid-cols-4 gap-5">
        <CardClubes></CardClubes>
        <CardClubes></CardClubes>
        <CardClubes></CardClubes>
        <CardClubes></CardClubes>
      </div>
    </div>
  );
};

export default ClubesPage;
