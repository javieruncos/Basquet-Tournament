import { FaPlus } from "react-icons/fa";
import CardNoticias from "../../../components/cards/CardNoticias";
import NewsContext from "../../../context/NewsContext";
import { useContext } from "react";
import { motion } from "framer-motion";

const NoticiasSection = () => {
  const { noticias } = useContext(NewsContext);

  return (
    <section className="relative px-5 sm:px-6 py-16 md:py-12 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-8 md:mb-12 flex justify-between items-end md:items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
              Noticias <span className="text-amber-300">Destacadas</span>
            </h2>
            <div className="w-24 h-1 bg-amber-300 mt-4 rounded"></div>
          </div>
          <button className="text-amber-300 hover:text-white transition-colors font-bold uppercase tracking-widest text-sm border-b border-amber-300 pb-1 whitespace-nowrap ml-4 flex items-center gap-2">
            <span className="hidden md:inline">Ver Todas</span>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {noticias.slice(0, 3).map((noticia) => (
              <CardNoticias key={noticia._id} noticia={noticia} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NoticiasSection;
