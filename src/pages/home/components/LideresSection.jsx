import React, { useContext } from "react";
import useJugadores from "../../../hooks/useJugadores";
import ClubesContext from "../../../context/ClubesContext";
import avatar from "../../../assets/images/avatar2.png";
import { motion } from "framer-motion";

const LideresSection = () => {
  const { jugadores, setJugadores } = useJugadores();
  const { clubes } = useContext(ClubesContext);

  return (
    <section className="py-16 md:py-16 px-5 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
              Líderes de la <span className="text-amber-300">Temporada</span>
            </h2>
            <div className="w-24 h-1 bg-amber-300 mt-4 rounded"></div>
          </div>
          <button className="text-amber-300 hover:text-white transition-colors font-bold uppercase tracking-widest text-sm border-b border-amber-300 pb-1 whitespace-nowrap flex items-center gap-2">
            <span className="inline">Ver Estadísticas Completas</span>
          </button>
        </div>

        <motion.div
          className="relative z-30"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.03 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {jugadores?.slice(0, 3).map((stat, index) => {
              const club = clubes.find((c) => c._id === stat.clubId);
              return (
                <div key={stat._id || index} className="w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/60 transition-all duration-300">
                  <div className="relative h-64 md:h-80 bg-dark-gradient">
                    <img
                      src={stat.avatar || avatar}
                      alt="Jugador"
                      className="w-full h-full object-contain"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>

                    <div className="absolute top-4 left-4 text-xs  font-bold uppercase text-white/80">
                      REGIONAL AMATEUR
                    </div>

                    <div className="absolute bottom-14 md:bottom-16 left-6 text-white">
                      <p className="text-4xl font-extrabold numberFonts">
                        {index + 1}
                      </p>
                      <p className="text-xs uppercase text-gray-300">Puesto</p>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-lg font-bold uppercase tracking-wide">
                        {stat.nombre}
                      </h3>
                      <p className="text-xs text-gray-300 uppercase">
                        | {club?.name}
                      </p>
                      {stat.posicion && stat.club && (
                        <p className="text-xs text-gray-300 uppercase">
                          {stat.posicion} | {stat.club.name}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="h-2 bg-amber-300"></div>
                  <div className=" bg-white/5 backdrop-blur-3xl   p-6 border border-white/10">
                    <div className="grid grid-cols-3 gap-y-6 text-center text-white divide-x divide-amber-300/30">
                      <div className="flex flex-col items-center">
                        <p className="text-xl md:text-2xl font-extrabold numberFonts">
                          {stat.estadisticas.minutos}
                        </p>
                        <p className="text-[10px] md:text-xs uppercase text-amber-100/70">
                          Minutos
                        </p>
                      </div>

                      <div className="flex flex-col items-center">
                        <p className="text-xl md:text-2xl font-extrabold numberFonts">
                          {stat.estadisticas.puntos}
                        </p>
                        <p className="text-[10px] md:text-xs uppercase text-amber-100/70">
                          Puntos
                        </p>
                      </div>

                      <div className="flex flex-col items-center border-r-0!">
                        <p className="text-xl md:text-2xl font-extrabold numberFonts">
                          {stat.estadisticas.tapones}
                        </p>
                        <p className="text-[10px] md:text-xs uppercase text-amber-100/70">
                          Tapones
                        </p>
                      </div>

                      <div className="flex flex-col items-center">
                        <p className="text-xl md:text-2xl font-extrabold numberFonts">
                          {stat.estadisticas.rebotes}
                        </p>
                        <p className="text-[10px] md:text-xs uppercase text-amber-100/70">
                          Rebotes
                        </p>
                      </div>

                      <div className="flex flex-col items-center">
                        <p className="text-xl md:text-2xl font-extrabold numberFonts">
                          {stat.estadisticas.asistencias}
                        </p>
                        <p className="text-[10px] md:text-xs uppercase text-amber-100/70">
                          Asistencias
                        </p>
                      </div>

                      <div className="flex flex-col items-center">
                        <p className="text-xl md:text-2xl font-extrabold numberFonts">
                          {stat.estadisticas.robos}
                        </p>
                        <p className="text-[10px] md:text-xs uppercase text-amber-100/70">
                          Robos
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LideresSection;
