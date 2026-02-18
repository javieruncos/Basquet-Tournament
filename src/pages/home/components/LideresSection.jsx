import React from 'react';

const LideresSection = () => {
    return (
       <section className=" px-5 sm:px-6 lg:px-8  ">
               <div className="max-w-7xl mx-auto">
                 <div className="mb-12 flex justify-between items-center">
                   <div>
                     <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
                       Líderes de la <span className="text-amber-300">Temporada</span>
                     </h2>
                     <div className="w-24 h-1 bg-amber-300 mt-4 rounded"></div>
                   </div>
                   <button className="text-amber-300 hover:text-white transition-colors font-bold uppercase tracking-widest text-sm border-b border-amber-300 pb-1 whitespace-nowrap ml-4 flex items-center gap-2">
                     <span className="hidden md:inline">Ver Estadísticas</span>
                   </button>
                 </div>
       
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   {["Puntos", "Rebotes", "Asistencias"].map((stat) => (
                     <div className="w-full rounded-2xl overflow-hidden  shadow-2xl shadow-black/60  transition-all duration-300">
                       <div className="relative h-80">
                         <img
                           src="https://media.istockphoto.com/id/525345961/es/foto/afro-americano-hombre-con-pelota-de-baloncesto.jpg?s=612x612&w=0&k=20&c=gsDL6UVsgy0cvv5y6tlU1nQmZcmGZRhN4PCt5ZMYeOY="
                           alt="Jugador"
                           className="w-full h-full object-cover"
                         />
       
                         <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>
       
                         <div className="absolute top-4 left-4 text-xs  font-bold uppercase text-white/80">
                           NBA PLAYOFFS
                         </div>
       
                         <div className="absolute bottom-16 left-6 text-white">
                           <p className="text-4xl font-extrabold numberFonts">1</p>
                           <p className="text-xs uppercase text-gray-300">Place</p>
                         </div>
                         <div className="absolute bottom-6 left-6 right-6 text-white">
                           <h3 className="text-lg font-bold uppercase tracking-wide">
                             Giannis Antetokounmpo
                           </h3>
                           <p className="text-xs text-gray-300 uppercase">
                             Power Forward | Milwaukee Bucks
                           </p>
                         </div>
                       </div>
                       <div className="h-2 bg-amber-300"></div>
                       <div className=" bg-white/3 backdrop-blur-3xl   p-6 border border-white/10">
                         <div className="grid grid-cols-3 text-center text-white divide-x divide-amber-300">
                           <div className="pb-6">
                             <p className="text-2xl font-extrabold numberFonts">27</p>
                             <p className="text-xs uppercase text-amber-100/70">
                               Minutes
                             </p>
                           </div>
       
                           <div className="pb-6">
                             <p className="text-2xl font-extrabold numberFonts">21</p>
                             <p className="text-xs uppercase text-amber-100/70">
                               Points
                             </p>
                           </div>
       
                           <div className="pb-6 border-r-0!">
                             <p className="text-2xl font-extrabold numberFonts">52%</p>
                             <p className="text-xs uppercase text-amber-100/70">FG%</p>
                           </div>
       
                           <div className="pt-6">
                             <p className="text-2xl font-extrabold numberFonts">13</p>
                             <p className="text-xs uppercase text-amber-100/70">
                               Rebounds
                             </p>
                           </div>
       
                           <div className="pt-6">
                             <p className="text-2xl font-extrabold numberFonts">3.7</p>
                             <p className="text-xs uppercase text-amber-100/70">
                               Assists
                             </p>
                           </div>
       
                           <div className="pt-6">
                             <p className="text-2xl font-extrabold numberFonts">0.7</p>
                             <p className="text-xs uppercase text-amber-100/70">
                               Steals
                             </p>
                           </div>
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
             </section>
    );
};

export default LideresSection;