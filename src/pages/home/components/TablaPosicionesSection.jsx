import React, { useEffect, useState, useContext } from "react";
import { getTabla } from "../../../services/tablaService";
import { motion } from "framer-motion";
import TournamentContext from "../../../context/TournamentContext";
import ClubesContext from "../../../context/ClubesContext";
import CardResultados from "../../../components/cards/CardResultados";

const TablaPosicionesSection = () => {
  const [tabla, setTabla] = useState([]);
  const { fixture } = useContext(TournamentContext);
  const { clubes } = useContext(ClubesContext);

  useEffect(() => {
    getTabla().then((res) => {
      setTabla(res);
    });
  }, []);

  return (
    <section className="py-12 px-5 sm:px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-1 flex flex-col gap-4"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.03 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                resultados{" "}
                <span
                  className="text-transparent stroke-amber-400 stroke-1"
                  style={{ WebkitTextStroke: "1px #fbbf24" }}
                >
                  recientes
                </span>
              </h2>
            </div>
            <div className="flex flex-col gap-7">
              {fixture
                ?.filter((item) => item.estado !== "Programado")
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

          <motion.div
            className="lg:col-span-2 relative z-30"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.03 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="overflow-hidden bg-[#111] border border-white/5 rounded-xl shadow-2xl">
              <table className="w-full text-left border-collapse table-fixed md:table-auto">
                <thead className="bg-white/2">
                  <tr>
                    {["Pos", "Equipo", "PJ", "PG", "PP", "PTS"].map((h) => (
                      <th
                        key={h}
                        className={`p-2 md:p-6 text-gray-500 uppercase text-[8px] md:text-xs tracking-tighter md:tracking-[0.2em] font-black border-b border-white/5 
                        ${h === "Equipo" ? "text-left" : "text-center"} 
                        ${h === "Pos" ? "w-10 md:w-20" : ""}
                        ${h === "Equipo" ? "w-auto" : "w-8 md:w-16"}`}
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
                      <td className="p-2 md:p-6 text-center">
                        <span className="inline-flex items-center justify-center w-5 h-5 md:w-8 md:h-8 rounded-full text-[9px] md:text-sm font-black numberFonts bg-amber-300 text-black">
                          {index + 1}
                        </span>
                      </td>

                      <td className="p-2 md:p-6 overflow-hidden">
                        <div className="flex items-center gap-1.5 md:gap-4">
                          <img
                            src={pos.club.logo.url}
                            className="w-5 h-5 md:w-10 md:h-10 object-contain transition-all shrink-0"
                          />
                          <span className="uppercase font-black text-[9px] md:text-base tracking-tighter md:tracking-tight text-gray-200 group-hover:text-white truncate">
                            {pos.club.name}
                          </span>
                        </div>
                      </td>

                      <td className="p-2 md:p-6 text-center text-[10px] md:text-base font-medium text-gray-400 numberFonts">
                        {pos.jugados}
                      </td>
                      <td className="p-2 md:p-6 text-center text-[10px] md:text-base font-bold text-white numberFonts">
                        {pos.ganados}
                      </td>
                      <td className="p-2 md:p-6 text-center text-[10px] md:text-base font-medium text-gray-500 numberFonts">
                        {pos.perdidos}
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
      </div>
    </section>
  );
};

export default TablaPosicionesSection;
