import React, { useContext, useState } from "react";
import PortadaNoticias from "./components/PortadaNoticias";
import CardNoticias from "../../components/cards/CardNoticias";
import SponsorCTA from "./components/SponsorCTA";
import { motion } from "framer-motion";
import ProximosResultSection from "../home/components/ProximosResultSection";
import NewsContext from "../../context/NewsContext";
import ClubesContext from "../../context/ClubesContext";
import SkeletonCard from "../../components/cards/CardSkeleton";

const Noticias = () => {
  const { noticias, loading: contextLoading } = useContext(NewsContext);
  const [filters, setFilters] = useState({
    fecha: "",
    categoria: "",
  });
  const [isFiltering, setIsFiltering] = useState(false);
  const categorias = [
    { label: "Todas", value: "" },
    { label: "Masculino", value: "masculino" },
    { label: "Femenino", value: "femenino" },
  ];

  const handleFilterClick = (value) => {
    setIsFiltering(true);
    setTimeout(() => setIsFiltering(false), 800);
    setFilters((prev) => ({
      ...prev,
      categoria: value,
    }));
  };

  const filterResult = noticias.filter(
    (noticia) =>
      (!filters.fecha ||
        new Date(noticia.createdAt).toISOString().slice(0, 10) ===
          filters.fecha) &&
      (!filters.categoria || noticia.category === filters.categoria),
  );

  return (
    <div className="md:px-0 main-container">
      <PortadaNoticias></PortadaNoticias>
      <div className="pt-16 max-w-7xl mx-auto px-4 md:px-10">
        <div className="w-full pb-8 border-b border-white/10 flex flex-col md:flex-row gap-6 justify-between items-end">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-1 bg-amber-400 rounded-full"></div>
              <span className="text-amber-400 font-black tracking-[0.3em] text-xs uppercase">Explorar</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Noticias <span className="text-transparent stroke-amber-400 stroke-1" style={{ WebkitTextStroke: "1px #fbbf24" }}>Destacadas</span>
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {categorias.map((cat) => (
              <button
                key={cat.value}
                onClick={() => handleFilterClick(cat.value)}
                className={`px-6 py-2 rounded-md text-xs font-black uppercase tracking-widest transition-all duration-300 cursor-pointer border-2 ${
                  filters.categoria === cat.value
                    ? "bg-amber-400 border-amber-400 text-black"
                    : "bg-transparent border-white/10 text-gray-400 hover:border-amber-400/50 hover:text-amber-400"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      

      <motion.div
        className="relative z-30 max-w-7xl mx-auto "
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.03 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="">
          {contextLoading || isFiltering ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 mt-10"
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <SkeletonCard key={n} />
              ))}
            </motion.div>
          ) : filterResult.length === 0 ? (
            <div className="h-50 w-full text-center bg-dark-gradient flex items-center justify-center">
              <p className="text-gray-500 text-4xl animate-pulse">
                No hay Resultados relacionados
              </p>
            </div>
          ) : (
            <div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 mt-10"
            >
              {filterResult.map((noticia) => (
                <CardNoticias
                  noticia={noticia}
                  key={noticia._id}
                ></CardNoticias>
              ))}
            </div>
          )}
        </div>
      </motion.div>
      <div className=" max-w-7xl mx-auto lg:px-4">
        <ProximosResultSection />
      </div>
      <div className="mt-32">
        <SponsorCTA />
      </div>
    </div>
  );
};

export default Noticias;
