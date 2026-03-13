import { motion } from "framer-motion";
import { useContext } from "react";
import ClubesContext from "../../../context/ClubesContext";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaChevronRight, FaPlus } from "react-icons/fa";
import CardClubes from "../../../components/cards/CardClubes";

const ClubesSection = () => {
  const { clubes } = useContext(ClubesContext);

  return (
    <section className="relative py-12 px-5 sm:px-6 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-amber-400"></div>
              <span className="text-amber-400 font-black tracking-[0.4em] text-xs uppercase">
                regional amateur
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              clubes{" "}
              <span
                className="text-transparent stroke-amber-400 stroke-1"
                style={{ WebkitTextStroke: "1px #fbbf24" }}
              >
                compitiendo
              </span>
            </h2>
          </div>
          <Link
            to="/noticias"
            className="text-amber-300 hover:text-white transition-colors font-bold uppercase tracking-widest text-sm border-b border-amber-300 pb-1 whitespace-nowrap ml-4 flex items-center gap-2"
          >
            <span className="hidden md:inline">Ver Todas</span>
            <span className="md:hidden bg-amber-300 text-black p-1 rounded-full">
              <FaPlus size={12} />
            </span>
          </Link>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, duration: 0.8, ease: "easeOut" } },
          }}
        >
          {clubes.slice(0, 3).map((club, index) => (
            <CardClubes key={club._id} club={club} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClubesSection;
