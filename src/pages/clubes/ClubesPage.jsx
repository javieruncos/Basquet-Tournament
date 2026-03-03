import React, { useContext, useState } from "react";
import CardClubes from "../../components/cards/CardClubes";
import Sponsor from "../../components/common/Sponsor";
import ClubesContext from "../../context/ClubesContext";

const ClubesPage = () => {
  const { clubes } = useContext(ClubesContext);

  const [filters, setFilters] = useState({
    categoria: "",
  });

  const filterClubes = (clubes) => {
    return clubes.filter((item) => {
      return !filters.categoria || item.category === filters.categoria;
    });
  };

  const filtro = filterClubes(clubes);

  return (
    <div className="p-5 lg:pt-30 lg:px-8">
      <div className=" flex flex-col items-center gap-5 lg:items-start lg:gap-2 text-center lg:text-left">
        <h1 className="text-7xl">Directorio de Clubes</h1>
        <p className="text-sm lg:text-2xl text-amber-300 numberFonts">
          32 clubes registrados compitiendo
        </p>
      </div>
      <div className="w-full mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-7 numberFonts pt-5 lg:pt-0">
        <button
          className="w-40 py-3 bg-[#171717] rounded-md hover:bg-amber-300 transition-all duration-300 hover:text-black cursor-pointer text-center"
          onClick={() => setFilters({ categoria: "" })}
        >
          Todos
        </button>
        <button
          className="w-40 py-3 bg-[#171717] rounded-md hover:bg-amber-300 transition-all duration-300 hover:text-black cursor-pointer text-center"
          onClick={() => setFilters({ categoria: "Masculino" })}
        >
          Masculino
        </button>
        <button
          className="w-40 py-3 bg-[#171717] rounded-md hover:bg-amber-300 transition-all duration-300 hover:text-black cursor-pointer text-center"
          onClick={() => setFilters({ categoria: "Femenino" })}
        >
          Femenino
        </button>
      </div>
      {filtro.length === 0 ? (
        <div className="p-20 w-full">
          <p className="py-10 text-center text-3xl font-bold animate-pulse text-gray-500">
            No hay clubes registrados
          </p>
        </div>
      ) : (
        <div className="h-auto py-10 w-full grid grid-cols-1 md:grid-cols-3 gap-5">
          {filtro.map((club) => (
            <CardClubes key={club._id} club={club} />
          ))}
        </div>
      )}

      <div>
        <Sponsor></Sponsor>
      </div>
    </div>
  );
};

export default ClubesPage;
