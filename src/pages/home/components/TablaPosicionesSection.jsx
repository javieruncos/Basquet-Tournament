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
    <section className="py-12 px-5 sm:px-6 ">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="relative z-30"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.03 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="overflow-x-auto bg-[#111] border border-white/5 rounded-xl shadow-2xl">
            <table className="w-full text-left border-collapse min-w-150 md:min-w-full">
              <thead>
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
                      className={`p-3 md:p-6 text-gray-500 uppercase text-[9px] md:text-xs tracking-widest md:tracking-[0.2em] font-black border-b border-white/5 
                        ${h === "Equipo" ? "text-left" : "text-center"} 
                        ${["PF", "PC", "DF"].includes(h) ? "hidden sm:table-cell" : ""}`}
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
                    className="group border-b border-white/5 hover:bg-amber-300/2 transition-colors"
                  >
                    <td className="p-3 md:p-6 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full text-[10px] md:text-sm font-black numberFonts bg-amber-300 text-black">
                        {index + 1}
                      </span>
                    </td>

                    <td className="p-3 md:p-6">
                      <div className="flex items-center gap-2 md:gap-4">
                        <img
                          src={pos.club.logo.url}
                          className="w-6 h-6 md:w-10 md:h-10 object-contain transition-all"
                        />
                        <span className="uppercase font-black text-[11px] md:text-base tracking-tight text-gray-200 group-hover:text-white whitespace-nowrap">
                          {pos.club.name}
                        </span>
                      </div>
                    </td>

                    <td className="p-3 md:p-6 text-center text-xs md:text-base font-medium text-gray-400 numberFonts">
                      {pos.jugados}
                    </td>
                    <td className="p-3 md:p-6 text-center text-xs md:text-base font-bold text-white numberFonts">
                      {pos.ganados}
                    </td>
                    <td className="p-3 md:p-6 text-center text-xs md:text-base font-medium text-gray-500 numberFonts">
                      {pos.perdidos}
                    </td>
                    <td className="p-3 md:p-6 text-center text-[10px] md:text-sm text-gray-400 numberFonts hidden sm:table-cell">
                      {pos.puntosFavor}
                    </td>
                    <td className="p-3 md:p-6 text-center text-[10px] md:text-sm text-gray-400 numberFonts hidden sm:table-cell">
                      {pos.puntosContra}
                    </td>
                    <td className={`p-3 md:p-6 text-center font-bold text-[10px] md:text-sm numberFonts hidden sm:table-cell ${pos.diferencia >= 0 ? "text-green-500" : "text-red-500"}`}>
                      {pos.diferencia > 0 ? `+${pos.diferencia}` : pos.diferencia}
                    </td>
                    <td className="p-3 md:p-6 text-center">
                      <span className="text-sm md:text-xl font-black text-amber-300 numberFonts">
                        {pos.puntos}
                      </span>
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
