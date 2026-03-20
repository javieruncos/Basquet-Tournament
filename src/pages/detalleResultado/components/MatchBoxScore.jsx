import React, { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";
import PortadaDetalle from "./PortadaDetalle";
import EstadisticasEquipos from "./EstadisticasEquipos";
import DetallesPartido from "./DetallesPartido";
import avatar from "../../../assets/images/avatar2.png";
import { obtenerFixtureID } from "../../../services/FixtureService";
import { useParams } from "react-router-dom";
import ClubesContext from "../../../context/ClubesContext";
import LineupCard from "./LineupCard";
import TournamentContext from "../../../context/TournamentContext";
import CardResultados from "../../../components/cards/CardResultados";

const MatchBoxScore = () => {
  const [partido, setpartido] = useState(null);
  const { clubes } = useContext(ClubesContext);
  const { fixture } = useContext(TournamentContext);
  const { id } = useParams();

  useEffect(() => {
    obtenerFixtureID(id).then((res) => {
      console.log(res);
      setpartido(res);
    });
  }, []);

  const estadisticaMVP = partido?.estadisticasJugadores?.find(
    (e) => e.jugadorId?._id === partido?.mvp?._id,
  );

  if (!partido) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white">
        <div className="w-16 h-16 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mb-4"></div>
        <div className="animate-pulse font-black uppercase tracking-tighter text-2xl">
          Cargando Estadísticas...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-amber-400 selection:text-black pb-20">
      <PortadaDetalle partido={partido} />

      <div className=" mx-auto px-4 md:px-10 py-16 md:py-14  md:mt-5 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 flex flex-col gap-8"
          >
            <EstadisticasEquipos partido={partido} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <LineupCard
                team={partido?.local?.name}
                players={partido?.estadisticasJugadores?.filter(
                  (p) => p.clubId === partido?.local?._id,
                )}
                logo={partido?.local?.logo?.url}
                clubes={clubes}
              />
              <LineupCard
                team={partido?.visitante?.name}
                players={partido?.estadisticasJugadores?.filter(
                  (p) => p.clubId === partido?.visitante?._id,
                )}
                logo={partido?.visitante?.logo?.url}
                clubes={clubes}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col gap-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative h-100 rounded-2xl overflow-hidden bg-linear-to-b from-[#1a1a1a] to-black border border-white/10 group"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/20 rounded-full blur-[80px] -mr-20 -mt-20"></div>

              <div className="relative z-10 p-6 h-full flex flex-col">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2 text-amber-400">
                    <FaTrophy className="text-xl animate-bounce" />
                    <span className="font-black italic uppercase tracking-tighter text-2xl">
                      MVP
                    </span>
                  </div>
                </div>

                <div className="mt-auto relative">
                  <div className="relative z-10">
                    <h3 className="text-5xl font-black uppercase italic leading-none text-white mb-1">
                      {partido?.mvp?.nombre}
                    </h3>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">
                      {partido?.mvp?.posicion}
                    </p>

                    <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
                      <div className="text-center">
                        <span className="block text-2xl font-black text-white numberFonts">
                          {estadisticaMVP?.puntos || 0}
                        </span>
                        <span className="text-[9px] uppercase font-bold text-gray-500">
                          PTS
                        </span>
                      </div>
                      <div className="text-center border-l border-white/5">
                        <span className="block text-2xl font-black text-white numberFonts">
                          {estadisticaMVP?.asistencias || 0}
                        </span>
                        <span className="text-[9px] uppercase font-bold text-gray-500">
                          AST
                        </span>
                      </div>
                      <div className="text-center border-l border-white/5">
                        <span className="block text-2xl font-black text-white numberFonts">
                          {estadisticaMVP?.rebotes || 0}
                        </span>
                        <span className="text-[9px] uppercase font-bold text-gray-500">
                          REB
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <DetallesPartido partido={partido} />
          </motion.div>
        </div>

        {/* Sección de Resultados Recientes */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-12 bg-amber-400"></div>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              Otros <span className="text-amber-400">Resultados</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fixture
              ?.filter(
                (item) => item.estado === "Finalizado" && item._id !== id,
              )
              .slice(0, 3)
              .map((item) => (
                <CardResultados
                  key={item._id}
                  resultados={item}
                  clubes={clubes}
                />
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MatchBoxScore;
