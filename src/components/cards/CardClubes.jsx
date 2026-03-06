import React from "react";
import { Link } from "react-router-dom";

const CardClubes = ({club}) => {
  return (
    <div className=" w-full flex items-center justify-center bg-black">
      <div className="relative w-full rounded-3xl bg-linear-to-b from-[#0b0b0b] to-black p-6 shadow-2xl overflow-hiddenb border border-white/3">
        <div className="absolute top-5 right-5 grid grid-cols-2 gap-1 opacity-40">
          <div className="w-3 h-3 bg-white/70"></div>
          <div className="w-3 h-3 bg-white/70"></div>
          <div className="w-3 h-3 bg-white/70"></div>
          <div className="w-3 h-3 bg-white/70"></div>
        </div>

        <p className="text-xs tracking-[0.3em] text-amber-300 font-semibold">
          REGIONAL AMATEUR
        </p>

        <h2 className="text-4xl font-extrabold italic text-white mt-1">
          {club.name}
        </h2>

        <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          TUCUMAN
        </div>

        <div className="relative flex items-center justify-center mt-10 mb-8">
          <div className="absolute w-52 h-52 rounded-full bg-amber-400/30 blur-3xl"></div>

          <div className="relative w-44 h-44 rounded-full bg-black  flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border  border-amber-300/30"></div>
            <img
              src={club.logo.url}
              alt="escudo"
              className="object-cover "
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 bg-amber-300 text-black text-xs font-bold rounded-full py-2 text-center shadow-lg">
            PARTICIPANTE 2026
          </div>

          <Link to={`/detelleClub/${club._id}`} className="flex items-center gap-2 bg-gray-900 text-white text-xs font-semibold rounded-full px-4 py-2 border border-white/10 cursor-pointer">
            <span className="w-2 h-2 bg-amber-300 rounded-full"></span>
            ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardClubes;
