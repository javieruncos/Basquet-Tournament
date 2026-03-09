import React from "react";
import { Link } from "react-router-dom";

const CardReultados = ({resultados,clubes}) => {
  return (
    <Link to={`/boxscore/${resultados._id}`}href="">
       <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 shadow-xl p-5">
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
        <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
       Fase {resultados?.fase}
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col items-center text-center">
          <img
            src={resultados?.local.logo.url}
            className="w-20 h-10 mb-1"
          />
          <span className="text-lg font-medium">{
            clubes?.find((club) => club._id === resultados?.local._id)?.shortname
            }</span>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-400">{resultados?.estado}</p>
          <p className="text-md font-bold"> {resultados?.fecha}</p>
        </div>

        <div className="flex flex-col items-center text-center">
           <img
            src={resultados?.visitante.logo.url}
            className="w-20 h-10 mb-1"
          />
          <span className="text-lg font-medium">
            {clubes?.find((club) => club._id === resultados?.visitante._id)?.shortname}
          </span>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="flex-1 bg-[#323232] rounded-lg p-3 flex flex-col justify-between">
          <div className="text-xs text-white font-bold">local</div>
          <div className="flex justify-between items-end mt-2 ">
            <span className="text-sm font-bold ">PTS</span>
            <span className="font-bold text-3xl text-amber-300">{resultados?.resultado.total.local}</span>
          </div>
        </div>
        <div className="flex-1 bg-[#323232] rounded-lg p-3 flex flex-col justify-between">
          <div className="text-xs  font-bold">Visitante</div>

          <div className="flex justify-between items-end mt-2 ">
            <span className="text-sm font-bold">PTS</span>
            <span className="font-bold text-3xl text-amber-300">{resultados?.resultado.total?.visitante}</span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default CardReultados;
