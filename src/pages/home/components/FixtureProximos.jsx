import React, { useContext, useMemo } from 'react';
import TournamentContext from '../../../context/TournamentContext';
import ClubesContext from '../../../context/ClubesContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const FixtureProximos = () => {
  const { fixture } = useContext(TournamentContext);
  const { clubes } = useContext(ClubesContext);


     const partidosFilter = useMemo(() => {
       return Array.isArray(fixture)
         ? fixture.filter((item) => item.estado === "Programado")
         : [];
     }, [fixture]);


    return (
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.03 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-4"
            >
              {partidosFilter.slice(0, 4).map((item) => {
                const local = clubes.find((c) => c._id === item.local?._id);
                const visitante = clubes.find(
                  (c) => c._id === item.visitante?._id,
                );
                return (
                  <div
                    key={item._id}
                    className="group relative bg-linear-to-r bg-white/5 to-transparent border-l-4 border-l-amber-400 border-y border-r border-white/10 rounded-r-xl p-4 md:p-6 hover:from-amber-400/10 transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden"
                  >
                    <div className="flex items-center justify-between gap-4 md:gap-12 flex-1 w-full relative z-10">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="relative">
                          <img
                            src={local?.logo?.url}
                            alt={local?.name}
                            className="relative w-20 h-20 md:w-32 md:h-32 object-contain drop-shadow-2xl"
                          />
                        </div>
                        <span className="text-[10px] md:text-sm font-black uppercase tracking-tighter text-gray-300">
                          {local?.name}
                        </span>
                      </div>

                      <div className="flex flex-col items-center">
                        <span className="text-amber-400 font-black text-2xl italic tracking-tighter opacity-40 group-hover:opacity-100 transition-opacity">
                          VS
                        </span>
                      </div>

                      <div className="flex items-center justify-end gap-4 flex-1">
                        <span className="text-[10px] md:text-sm font-black uppercase tracking-tighter text-right text-gray-300">
                          {visitante?.name}
                        </span>
                        <div className="relative">
                          <img
                            src={visitante?.logo?.url}
                            alt={visitante?.name}
                            className="relative w-20 h-20 md:w-32 md:h-32 object-contain drop-shadow-2xl"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row md:flex-col items-center justify-center gap-6 md:gap-1 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8 w-full md:w-40 shrink-0">
                      <span className="text-lg md:text-xl font-black numberFonts text-white group-hover:text-amber-400 transition-colors">
                        {item.hora} HS
                      </span>
                      <span className="text-[10px] font-bold text-amber-400/60 uppercase tracking-[0.2em]">
                        {item.fecha}
                      </span>
                      <div className="hidden md:block mt-2">
                        <Link
                          to={`/detalleFixture/${item._id}`}
                          className="text-[9px] font-black uppercase tracking-widest bg-white/5 px-3 py-1 rounded hover:bg-amber-400 hover:text-black transition-all"
                        >
                          Previa
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
    );
};

export default FixtureProximos;