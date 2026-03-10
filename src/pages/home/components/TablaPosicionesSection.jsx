import React, { useEffect, useState } from "react";
import { getTabla } from "../../../services/tablaService";
import { motion } from "framer-motion";

const TablaPosicionesSection = () => {
  const [tabla, setTabla] = useState([]);

  useEffect(() => {
    getTabla().then((res) => {
      console.log(res);
      setTabla(res);
    });
  }, []);

  return (
    <section className="py-32 px-5 sm:px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex justify-between items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
              Tabla de <span className="text-amber-300">Posiciones</span>
            </h2>
            <div className="w-24 h-1 bg-amber-300 mt-4 rounded"></div>
          </div>
          <button className="text-amber-300 hover:text-white transition-colors font-bold uppercase tracking-widest text-sm border-b border-amber-300 pb-1 whitespace-nowrap ml-4 flex items-center gap-2">
            <span className="hidden md:inline">Ver Tabla Completa</span>
          </button>
        </div>
        <motion.div
          className="relative z-30"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.03 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="overflow-x-auto bg-white/5 backdrop-blur-3xl border border-white/10 rounded-md shadow-xl">
            <table className="w-full text-left border-collapse min-w-150">
              <thead className="bg-white/5">
                <tr>
                  {[
                    "Pos",
                    "Equipo",
                    "PJ",
                    "PG",
                    "PP",
                    "PF",
                    "PC",
                    "DF",
                    "PTS",
                  ].map((h) => (
                    <th
                      key={h}
                      className="p-3 md:p-5 text-amber-300 uppercase text-xs md:text-sm tracking-widest text-center font-bold numberFonts"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {tabla?.map((pos, index) => (
                  <tr
                    key={pos._id}
                    className="border-b border-white/5 hover:bg-white/10 transition"
                  >
                    <td className="p-3 md:p-5 text-center font-bold text-base md:text-lg numberFonts">
                      {index + 1}
                    </td>

                    <td className="p-3 md:p-5">
                      <div className="flex items-center justify-center gap-3">
                        <img
                          src={pos.club.logo.url}
                          className="w-6 h-6 md:w-8 md:h-8 object-contain"
                        />
                        <span className="uppercase font-bold text-xs md:text-sm whitespace-nowrap">
                          {pos.club.name}
                        </span>
                      </div>
                    </td>

                    <td className="p-3 md:p-5 text-center text-sm md:text-base numberFonts">
                      {pos.jugados}
                    </td>
                    <td className="p-3 md:p-5 text-center text-green-400 text-sm md:text-base numberFonts">
                      {pos.ganados}
                    </td>
                    <td className="p-3 md:p-5 text-center text-red-400 text-sm md:text-base numberFonts">
                      {pos.perdidos}
                    </td>
                    <td className="p-3 md:p-5 text-center text-green-400 text-sm md:text-base numberFonts">
                      {pos.puntosFavor}
                    </td>

                    <td className="p-3 md:p-5 text-center font-bold text-amber-300 text-base md:text-lg numberFonts">
                      {pos.puntosContra}
                    </td>

                    <td className="p-3 md:p-5 text-center font-bold text-amber-300 text-base md:text-lg numberFonts">
                      {pos.diferencia}
                    </td>

                    <td className="p-3 md:p-5 text-center font-bold text-amber-300 text-base md:text-lg numberFonts">
                      {pos.puntos}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TablaPosicionesSection;
