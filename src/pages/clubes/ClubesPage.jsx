import React, { useContext, useState } from "react";
import CardClubes from "../../components/cards/CardClubes";
import Sponsor from "../../components/common/Sponsor";
import ClubesContext from "../../context/ClubesContext";
import TournamentContext from "../../context/TournamentContext";
import NewsContext from "../../context/NewsContext";
import { FaCalendarAlt, FaMapMarkerAlt, FaNewspaper } from "react-icons/fa";
import CardNoticias from "../../components/cards/CardNoticias";
import Tabla from "../../components/common/Tabla";
import CardResultados from "../../components/cards/CardResultados";

const ClubesPage = () => {
  const { clubes } = useContext(ClubesContext);
  const { fixture } = useContext(TournamentContext);
  const { noticias } = useContext(NewsContext);


  const [filters, setFilters] = useState({
    categoria: "",
  });

  const filterClubes = (clubes) => {
    return clubes.filter((item) => {
      return !filters.categoria || item.category === filters.categoria;
    });
  };

  const filtro = filterClubes(clubes);

  const proximoPartido = fixture?.find(p => !p.resultado?.total?.local) || fixture?.[0];

  return (
    <>
    
      <div className="p-5 pt-24 lg:pt-30  px-4 md:px-10">
        

        {proximoPartido && (
          <div className="mb-12 bg-[#111] border-y-4 border-amber-400 rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-amber-400 px-6 py-2 flex justify-between items-center">
              <span className="text-black font-black uppercase tracking-tighter text-sm flex items-center gap-2">
                <FaCalendarAlt /> Próximo Partido
              </span>
              <span className="text-black font-bold text-xs uppercase tracking-widest">
                {proximoPartido.jornada || "Fase Regular"}
              </span>
            </div>

            <div className="p-6 md:p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative">
              {/* Local */}
              <div className="flex flex-col md:flex-col lg:flex-row items-center gap-4 lg:gap-6 flex-1 w-full lg:justify-end">
                <div className="text-center md:text-center lg:text-right order-2 lg:order-1">
                  <h4 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter leading-tight">
                    {proximoPartido.local.name}
                  </h4>
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Local</span>
                </div>
                <img 
                  src={proximoPartido.local.logo?.url} 
                  alt="Local" 
                  className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] order-1 lg:order-2" 
                />
              </div>

              {/* Divider / Info */}
              <div className="flex flex-col items-center px-4 md:px-6 lg:px-8 border-y md:border-y-0 md:border-x border-white/10 py-4 md:py-0 w-full md:w-auto">
                <div className="text-amber-400 font-black text-4xl md:text-5xl italic mb-2">VS</div>
                <div className="text-center">
                  <p className="text-xl font-bold numberFonts">{new Date(proximoPartido.fecha).toLocaleDateString("es-AR", { day: '2-digit', month: '2-digit' })}</p>
                  <p className="text-amber-300 font-black text-lg">21:00 HS</p>
                </div>
              </div>

              {/* Visitante */}
              <div className="flex flex-col md:flex-col lg:flex-row items-center gap-4 lg:gap-6 flex-1 w-full lg:justify-start">
                <img 
                  src={proximoPartido.visitante.logo?.url} 
                  alt="Visitante" 
                  className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] order-1 lg:order-1" 
                />
                <div className="text-center md:text-center lg:text-left order-2 lg:order-2">
                  <h4 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter leading-tight">
                    {proximoPartido.visitante.name}
                  </h4>
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Visitante</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 p-4 flex justify-center items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-widest">
              <FaMapMarkerAlt className="text-amber-400" />
              {proximoPartido.estadio || "Estadio a confirmar"}
            </div>
          </div>
        )}

       <div className="flex flex-col items-center gap-4 md:items-start text-center md:text-left mb-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-1 bg-amber-300"></div>
            <span className="text-amber-300 font-bold tracking-[0.3em] uppercase text-xs md:text-sm">Instituciones</span>
          </div>
          <h1 className="text-6xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">
            Nuestros <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/40">Clubes compitiendo</span>
          </h1>
       
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20">
          <div className="w-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-1 bg-amber-300"></div>
              <h3 className="text-5xl font-black uppercase tracking-tighter italic">Tabla de Posiciones</h3>
            </div>
            <Tabla />
          </div>
          <div className="w-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-1 bg-amber-300"></div>
              <h3 className="text-5xl font-black uppercase tracking-tighter italic">Resultados Recientes</h3>
            </div>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2">
              {fixture?.filter(p => p.estado !== "Programado").slice(0, 6).map((item) => (
                <CardResultados key={item._id} resultados={item} clubes={clubes} />
              ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex flex-col items-center gap-4 md:items-start text-center md:text-left mb-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-1 bg-amber-300"></div>
              <span className="text-amber-300 font-bold tracking-[0.3em] uppercase text-xs md:text-sm">Actualidad</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">
              Últimas <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/40">Noticias</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {noticias?.slice(0, 3).map((noticia, index) => (
              <CardNoticias key={noticia._id || index} noticia={noticia} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClubesPage;
