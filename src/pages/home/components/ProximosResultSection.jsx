import React, { useContext } from "react";
import { motion } from "framer-motion";
import TournamentContext from "../../../context/TournamentContext";
import ClubesContext from "../../../context/ClubesContext";
import useJugadores from "../../../hooks/useJugadores";
import NewsContext from "../../../context/NewsContext";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ProximosResultSection = () => {
  const { fixture } = useContext(TournamentContext);
  const { clubes } = useContext(ClubesContext);
  const { jugadores } = useJugadores();
  const { noticias } = useContext(NewsContext);

  const partidosFilter = Array.isArray(fixture)
    ? fixture.filter((item) => item.estado === "Programado")
    : [];
    
  const goleadores = Array.isArray(jugadores)
    ? [...jugadores]
        .sort((a, b) => b.estadisticas.puntos - a.estadisticas.puntos)
        .slice(0, 5)
    : [];

  return (
    <section className="py-16 px-5 sm:px-6">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
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
                        <button className="text-[9px] font-black uppercase tracking-widest bg-white/5 px-3 py-1 rounded hover:bg-amber-400 hover:text-black transition-all">
                          Previa
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.03 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
            >
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 text-[10px] uppercase tracking-widest text-gray-400">
                    <th className="p-4">Jugador</th>
                    <th className="p-4 text-right">PTS</th>
                  </tr>
                </thead>
                <tbody>
                  {goleadores.map((jugador, index) => (
                    <tr
                      key={jugador._id}
                      className="border-b border-white/5 hover:bg-white/10 transition-colors"
                    >
                      <td className="p-4 flex items-center gap-3">
                        <span className="text-amber-300 font-black italic text-sm w-4">
                          {index + 1}
                        </span>
                        <div>
                          <p className="text-sm font-bold uppercase">
                            {jugador.nombre}
                          </p>
                          <p className="text-[10px] text-gray-500 uppercase">
                            {clubes.find((c) => c._id === jugador.clubId)?.name}
                          </p>
                        </div>
                      </td>
                      <td className="p-4 text-right font-black text-amber-300 numberFonts">
                        {jugador.estadisticas.puntos}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <div className="mt-10">
              <div className="mb-6 flex justify-between items-end">
                <h3 className="text-5xl font-black uppercase tracking-tighter">
                  Últimas <span className="text-amber-300">Noticias</span>
                </h3>
                <Link
                  to="/noticias"
                  className="text-amber-300 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors"
                >
                  Ver más
                </Link>
              </div>

              <div className="space-y-4">
                {noticias?.slice(0, 2).map((noticia) => (
                  <Link
                    key={noticia._id}
                    to={`/noticiasDetalle/${noticia._id}`}
                    className="flex gap-4 group bg-white/5 p-3 rounded-xl border border-white/5 hover:border-amber-300/30 transition-all"
                  >
                    <div className="w-32 h-20 shrink-0 rounded-lg overflow-hidden border border-white/10">
                      <img
                        src={noticia.image?.url}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[9px] text-amber-300 font-bold uppercase tracking-widest mb-1">
                        {noticia.category}
                      </span>
                      <h4 className="text-xs font-black uppercase leading-tight group-hover:text-amber-300 transition-colors line-clamp-2">
                        {noticia.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProximosResultSection;
