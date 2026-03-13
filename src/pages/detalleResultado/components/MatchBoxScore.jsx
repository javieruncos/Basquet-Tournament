import React, { useEffect,useState } from 'react';
import { motion } from "framer-motion";
import { FaTrophy } from 'react-icons/fa';
import PortadaDetalle from './PortadaDetalle';
import EstadisticasEquipos from './EstadisticasEquipos';
import DetallesPartido from './DetallesPartido';
import avatar from "../../../assets/images/avatar2.png"; 
import { obtenerFixtureID } from '../../../services/FixtureService';
import { useParams } from 'react-router-dom';

const LineupCard = ({ team, players }) => (
  <div className="bg-[#121212] rounded-2xl border border-white/5 p-5 h-100">
    <div className="flex items-center justify-between mb-4">
        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-300">{team}</h4>
        <span className="text-[10px] bg-amber-400/10 text-amber-400 px-2 py-0.5 rounded font-bold uppercase">Starters</span>
    </div>
    <div className="space-y-10">
        {players.map((p, i) => (
             <div key={i} className="flex items-center gap-3 group cursor-pointer">
                 <div className="w-8 h-8 rounded-full bg-white/5 overflow-hidden border border-white/10 group-hover:border-amber-400 transition-colors">
                     <img src={avatar} alt="" className="w-full h-full object-cover" />
                 </div>
                 <div className="flex-1">
                     <p className="text-xs font-bold text-gray-200 group-hover:text-amber-400 transition-colors uppercase truncate">{p.name}</p>
                     <p className="text-[10px] text-gray-600 font-black">{p.pos} • #{p.num}</p>
                 </div>
                 <span className="text-xs font-black numberFonts text-white">{p.pts}</span>
             </div>
        ))}
    </div>
  </div>
);



const MatchBoxScore = () => {
   const [partido, setpartido] = useState(null)
   const {id} = useParams()

   useEffect(() => {
    obtenerFixtureID(id).then((res) => setpartido(res))
   }, [])

  


  const startersLocal = [
      { name: "Juan Morales", pos: "PG", num: 5, pts: 22 },
      { name: "Carlos Perez", pos: "SG", num: 12, pts: 18 },
      { name: "M. Ginobili", pos: "SF", num: 20, pts: 15 },
      { name: "Luis Scola", pos: "PF", num: 4, pts: 10 },
      { name: "Fabr. Oberto", pos: "C", num: 7, pts: 8 },
  ];
  
  const startersVisit = [
      { name: "Facu Campazzo", pos: "PG", num: 7, pts: 25 },
      { name: "N. Laprovittola", pos: "SG", num: 8, pts: 14 },
      { name: "Gabo Deck", pos: "SF", num: 14, pts: 12 },
      { name: "Luca Vildoza", pos: "PF", num: 3, pts: 9 },
      { name: "Marcos Delia", pos: "C", num: 12, pts: 6 },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-amber-400 selection:text-black pb-20">
       <PortadaDetalle partido={partido} />

       <div className="max-w-7xl mx-auto px-4 md:px-10 py-16 md:py-14  md:mt-5 relative z-20">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
               
               <div className="lg:col-span-8 flex flex-col gap-8">
                    <EstadisticasEquipos partido={partido} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <LineupCard team="Atle. Tucuman" players={startersLocal} />
                        <LineupCard team="Experimental" players={startersVisit} />
                    </div>

                  
               </div>

               <div className="lg:col-span-4 flex flex-col gap-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative h-96 rounded-2xl overflow-hidden bg-linear-to-b from-[#1a1a1a] to-black border border-white/10 group"
                    >
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/20 rounded-full blur-[80px] -mr-20 -mt-20"></div>
                        
                        <div className="relative z-10 p-6 h-full flex flex-col">
                             <div className="flex justify-between items-start">
                                <div className="flex items-center gap-2 text-amber-400">
                                    <FaTrophy className="text-xl animate-bounce" />
                                    <span className="font-black italic uppercase tracking-tighter text-2xl">MVP</span>
                                </div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Escudo_del_Club_Estaci%C3%B3n_Experimental_Tucum%C3%A1n.svg" alt="logo" className="w-10 h-10 opacity-50 grayscale" />
                             </div>

                             <div className="mt-auto relative">
                                  <div className="relative z-10">
                                      <h3 className="text-3xl font-black uppercase italic leading-none text-white mb-1">Juan <br/><span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-amber-500">Morales</span></h3>
                                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Atle. Tucuman • Base</p>
                                      
                                      <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
                                           <div className="text-center">
                                               <span className="block text-2xl font-black text-white numberFonts">32</span>
                                               <span className="text-[9px] uppercase font-bold text-gray-500">PTS</span>
                                           </div>
                                           <div className="text-center border-l border-white/5">
                                               <span className="block text-2xl font-black text-white numberFonts">8</span>
                                               <span className="text-[9px] uppercase font-bold text-gray-500">AST</span>
                                           </div>
                                           <div className="text-center border-l border-white/5">
                                               <span className="block text-2xl font-black text-white numberFonts">5</span>
                                               <span className="text-[9px] uppercase font-bold text-gray-500">REB</span>
                                           </div>
                                      </div>
                                  </div>
                             </div>
                        </div>
                    </motion.div>

                    <DetallesPartido />
               </div>
           </div>
       </div>
    </div>
  );
};

export default MatchBoxScore;