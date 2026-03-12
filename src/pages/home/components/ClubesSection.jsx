import { motion } from "framer-motion";
import { useContext } from "react";
import ClubesContext from "../../../context/ClubesContext";
import CardClubes from "../../../components/cards/CardClubes";

const ClubesSection = () => {
  const { clubes } = useContext(ClubesContext);

  return (
    <section className="py-16 md:py-12 px-5 sm:px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-12 flex justify-between items-end md:items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
              Nuestros <span className="text-amber-300">Clubes</span>
            </h2>
            <div className="w-24 h-1 bg-amber-300 mt-4 rounded"></div>
          </div>
          <button className="text-amber-300 hover:text-white transition-colors font-bold uppercase tracking-widest text-sm border-b border-amber-300 pb-1 whitespace-nowrap ml-4 flex items-center gap-2">
            <span className="hidden md:inline">Ver Todos</span>
          </button>
        </div>

        <motion.div
          className="relative z-30"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.03 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {clubes.map((club) => (
            <CardClubes key={club._id} club={club}></CardClubes>
          ))}
        </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ClubesSection;
