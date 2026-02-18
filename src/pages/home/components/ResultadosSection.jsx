import React from "react";
import CardResultados from "../../resultados/components/CardResultados";
import { FaPlus } from "react-icons/fa";

const ResultadosSection = () => {
    return (
       <section className="py-20 px-5 sm:px-6 lg:px-8">
               <div className="max-w-7xl mx-auto">
                 <div className="mb-12 flex justify-between items-center">
                   <div>
                     <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
                       Resultados <span className="text-amber-300">Recientes</span>
                     </h2>
                     <div className="w-24 h-1 bg-amber-300 mt-4 rounded"></div>
                   </div>
                   <button className="text-amber-300 hover:text-white transition-colors font-bold uppercase tracking-widest text-sm border-b border-amber-300 pb-1 whitespace-nowrap ml-4 flex items-center gap-2">
                     <span className="hidden md:inline">Ver Calendario</span>
                     <span className="md:hidden bg-amber-300 text-black p-1 rounded-full">
                       <FaPlus size={12} />
                     </span>
                   </button>
                 </div>
       
                 <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                   {[1, 2, 3, 4].map((item) => (
                       <CardResultados />
                   ))}
                 </div>
               </div>
             </section>
    );
};

export default ResultadosSection;