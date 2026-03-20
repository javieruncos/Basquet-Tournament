import React from 'react';
import { FaMapMarkerAlt, FaFlag, FaUsers } from 'react-icons/fa';

const DetallesPartido = ({ partido }) => {
  return (
    <div className="h-80 bg-[#121212] rounded-2xl border border-white/5 overflow-hidden relative group">
        <div className="absolute top-0 right-0 p-32 bg-amber-400/5 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>
        
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/2">
             <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">Información</h3>
             <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_10px_#fbbf24]"></div>
        </div>

        <div className="p-6 space-y-8">
           
            <div className="relative pl-4 border-l-2 border-amber-400/30 hover:border-amber-400 transition-colors duration-300">
                <div className="flex items-center gap-2 mb-1 text-amber-400 text-xs font-black uppercase tracking-widest">
                    <FaMapMarkerAlt /> Estadio
                </div>
                <p className="text-lg text-white font-bold leading-tight">{partido?.estadio}</p>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mt-0.5">Tucuman</p>
            </div>

             {/* Referees */}
            <div className="relative pl-4 border-l-2 border-white/10 hover:border-amber-400 transition-colors duration-300">
                <div className="flex items-center gap-2 mb-2 text-gray-400 text-xs font-black uppercase tracking-widest">
                    <FaFlag /> Árbitros
                </div>
                <div className="space-y-2">
                    <div className="flex items-center justify-between group/ref">
                        <span className="text-sm text-gray-300 font-bold">{partido.arbitro1}</span>
                        <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-gray-500 group-hover/ref:text-amber-400 transition-colors">Principal</span>
                    </div>
                     <div className="flex items-center justify-between group/ref">
                        <span className="text-sm text-gray-400 font-medium">{partido.arbitro2}</span>
                        <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-gray-600">Umpire 1</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
};

export default DetallesPartido;