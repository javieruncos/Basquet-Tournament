import React from 'react';

const EstadisticasEquipos = ({partido}) => {
  return (
    <div className="flex flex-col gap-6">
        <div className="bg-[#121212] rounded-2xl border border-white/5 p-6 overflow-hidden">
             <div className="flex justify-between items-end mb-6">
                 <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">Evolución por Cuarto</h3>
                 <span className="text-[10px] text-gray-500 uppercase font-bold bg-white/5 px-2 py-1 rounded">Score Progress</span>
             </div>
             
             <div className="grid grid-cols-4 gap-2 md:gap-4">
                 {partido?.resultado?.cuartos.map((q, i) => (
                     <div key={i} className="flex flex-col items-center gap-2 group">
                         <div className="w-full h-32 md:h-40 bg-white/5 rounded-xl relative flex items-end justify-center gap-1 md:gap-2 px-1 pb-2 overflow-hidden">
                             <div 
                                style={{ height: `${(q.local / 30) * 100}%` }} 
                                className="w-full bg-amber-400 rounded-t-sm shadow-[0_0_15px_rgba(251,191,36,0.3)] group-hover:bg-amber-300 transition-all duration-300"
                             ></div>
                             <div 
                                style={{ height: `${(q.visitante / 30) * 100}%` }} 
                                className="w-full bg-gray-600 rounded-t-sm group-hover:bg-gray-500 transition-all duration-300"
                             ></div>
                         </div>
                         <span className="text-xs font-bold text-gray-500 uppercase">{q.q}</span>
                         <div className="flex gap-1.5 text-[10px] md:text-xs font-black numberFonts">
                             <span className="text-amber-400">{q.local}</span>
                             <span className="text-gray-600">-</span>
                             <span className="text-gray-400">{q.visitante}</span>
                         </div>
                     </div>
                 ))}
             </div>
        </div>
    </div>
  );
};

export default EstadisticasEquipos;