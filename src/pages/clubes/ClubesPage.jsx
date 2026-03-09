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
    <>
      <div className="p-5 pt-24 lg:pt-30 lg:px-8">
        <div className="py-5 w-full flex gap-4 text-gray-400 text-sm uppercase tracking-widest md:justify-start justify-center">
          <span>Torneo</span>
          <span>/</span>
          <span className="text-amber-300">Clubes</span>
        </div>
        <div className="flex flex-col items-center gap-5 md:items-start lg:gap-2 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">Directorio de Clubes</h1>
          <p className="text-sm md:text-2xl text-amber-300 numberFonts">
           {clubes.length} clubes registrados compitiendo
          </p>
        </div>
        {filtro.length === 0 ? (
          <div className="p-20 w-full">
            <p className="py-10 text-center text-3xl font-bold animate-pulse text-gray-500">
              No hay clubes registrados
            </p>
          </div>
        ) : (
          <div className="h-auto py-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtro.map((club) => (
              <CardClubes key={club._id} club={club} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ClubesPage;
