import React, { useContext } from "react";
import CardResultados from "../../../components/cards/CardResultados";
import { FaPlus } from "react-icons/fa";
import ClubesContext from "../../../context/ClubesContext";
import TournamentContext from "../../../context/TournamentContext";
import { motion } from "framer-motion";

const ResultadosSection = () => {
  const { fixture } = useContext(TournamentContext);
  const { clubes } = useContext(ClubesContext);

  return (
    <section className="py-32 px-5 sm:px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex justify-between items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
              Resultados <span className="text-amber-300">Recientes</span>
            </h2>
            <div className="w-24 h-1 bg-amber-300 mt-4 rounded"></div>
          </div>
          <button className="text-amber-300 hover:text-white transition-colors font-bold uppercase tracking-widest text-sm border-b border-amber-300 pb-1 whitespace-nowrap ml-4 flex items-center gap-2">
            <span className="hidden md:inline">Ver Calendario</span>
            <span className="md:hidden bg-amber-300 text-black p-1 rounded-full">
              <FaPlus size={12} />
            </span>
          </button>
        </div>
        <motion.div
          className="relative z-30"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.03 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {fixture
              .filter((item) => item.estado !== "Programado")
              .map((item) => (
                <CardResultados
                  resultados={item}
                  key={item._id}
                  clubes={clubes}
                />
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultadosSection;
