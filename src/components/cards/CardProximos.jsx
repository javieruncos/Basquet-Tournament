import React from "react";
import { Link } from "react-router-dom";

const CardProximos = ({ partido, clubes }) => {
  return (
    <div  className="w-full rounded-2xl p-1">
      <div className="bg-white/5 backdrop-blur-3xl border border-white/10  hover:bg-white/10 transition-all duration-300 shadow-xl rounded-md p-6 text-white relative overflow-hidden group hover:border-amber-300/30 ">
        <p className="text-center text-xs text-amber-300 mb-4 tracking-[0.2em] uppercase font-bold numberFonts">
          Regional Amateur
        </p>

        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col items-center gap-2">
            <img
              src={partido.local.logo.url}
              className="w-14 h-14 object-contain"
              alt="Local"
            />
            <span className="text-2xl font-bold uppercase tracking-tighter">
              {clubes?.find((club) => club._id === partido.local._id)?.shortname}
            </span>
          </div>

          <div className="text-center">
            <p className="text-2xl font-black numberFonts text-white">VS</p>
            <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-tighter">
              {partido.estado}
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img
              src={partido.visitante.logo.url}
              className="w-14 h-14 object-contain"
              alt="Visitante"
            />
            <span className="text-2xl font-bold uppercase tracking-tighter">
              {
                clubes?.find((club) => club._id === partido.visitante._id)
                  ?.shortname
              }
            </span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/5 flex flex-col items-center gap-1">
          <span className="text-sm font-bold numberFonts text-amber-300">
            {partido.fecha}
          </span>
          <span className="text-xs text-gray-500">
            {partido.hora} HS - {partido.estadio}
          </span>
          <Link to={`/detalleFixture/${partido._id}`}className="mt-4 w-full py-2 bg-white/5 hover:bg-amber-300 hover:text-black transition-colors rounded-lg text-xs font-bold uppercase tracking-widest text-center">
            Ver Previa
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProximos;
