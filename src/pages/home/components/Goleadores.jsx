import React, { useContext, useMemo } from "react";
import useJugadores from "../../../hooks/useJugadores";
import { motion } from "framer-motion";
import ClubesContext from "../../../context/ClubesContext";


const Goleadores = () => {
 const { jugadores } = useJugadores();
  const { clubes } = useContext(ClubesContext);


  const goleadores = useMemo(() => {
    return Array.isArray(jugadores)
      ? [...jugadores]
          .sort((a, b) => b.estadisticas.puntos - a.estadisticas.puntos)
          .slice(0, 5)
      : [];
  }, [jugadores]);

  return (
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
  );
};

export default Goleadores;
