import { FaPlus } from "react-icons/fa";
import CardNoticias from "../../../components/cards/CardNoticias";
import NewsContext from "../../../context/NewsContext";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NoticiasSection = () => {
  const { noticias } = useContext(NewsContext);

  return (
    <section className="relative px-5 sm:px-6 py-16 md:py-12 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-8 md:mb-12 flex justify-between items-end md:items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              noticias{" "}
              <span
                className="text-transparent stroke-amber-400 stroke-1"
                style={{ WebkitTextStroke: "1px #fbbf24" }}
              >
                destacadas
              </span>
            </h2>
            <div className="w-24 h-1 bg-amber-300 mt-4 rounded"></div>
          </div>
          <Link to="/noticias" className="text-amber-300 hover:text-white transition-colors font-bold uppercase tracking-widest text-sm border-b border-amber-300 pb-1 whitespace-nowrap ml-4 flex items-center gap-2">
            <span className="hidden md:inline">Ver Todas</span>
            <span className="md:hidden bg-amber-300 text-black p-1 rounded-full">
              <FaPlus size={12} />
            </span>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.03 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              {noticias[0] && (
                <Link 
                  to={`/noticiasDetalle/${noticias[0]._id}`}
                  className="group relative h-100 md:h-134 flex flex-col justify-end overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
                >
                  <img 
                    src={noticias[0].image?.url} 
                    alt={noticias[0].title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>
                  <div className="relative z-10 p-6 md:p-10">
                    <span className="inline-block bg-amber-300 text-black px-3 py-1 rounded-sm font-black uppercase tracking-widest text-[10px] mb-4">
                      {noticias[0].category}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-black uppercase italic leading-none group-hover:text-amber-300 transition-colors">
                      {noticias[0].title}
                    </h3>
                    <p className="text-gray-300 mt-4 line-clamp-2 text-sm md:text-base max-w-2xl">
                      {noticias[0].content}
                    </p>
                  </div>
                </Link>
              )}
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              {noticias.slice(1, 5).map((noticia) => (
                <Link 
                  key={noticia._id}
                  to={`/noticiasDetalle/${noticia._id}`}
                  className="flex items-center gap-4 bg-white/5 hover:bg-white/5 p-3 rounded-xl border border-white/5 hover:border-amber-300/20 transition-all group"
                >
                  <div className="w-24 h-24 md:w-32 md:h-24 shrink-0 overflow-hidden rounded-lg border border-white/10">
                    <img src={noticia.image?.url} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[9px] text-amber-300 font-black uppercase tracking-widest mb-1">{noticia.category}</span>
                    <h4 className="text-sm md:text-base font-black uppercase leading-tight line-clamp-2 group-hover:text-amber-300 transition-colors">
                      {noticia.title}
                    </h4>
                    <span className="text-[10px] text-gray-500 mt-2 font-bold">{new Date(noticia.updatedAt).toLocaleDateString("es-AR")}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NoticiasSection;
