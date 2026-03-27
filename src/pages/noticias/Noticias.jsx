

import { useContext, useState } from "react";
import GridPortada from "./components/GridPortada";
import CardNoticias from "../../components/cards/CardNoticias";
import SponsorCTA from "./components/SponsorCTA";
import { motion } from "framer-motion";
import ProximosResultSection from "../home/components/ProximosResultSection";
import NewsContext from "../../context/NewsContext";
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
    setTimeout(() => setIsFiltering(false), 600);

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
    <div className="main-container">

      {/* HERO */}
      <GridPortada noticias={noticias} />

      {/* HEADER + FILTROS */}
      <div className="pt-10  mx-auto px-4 md:px-10">
        <div className="w-full pb-6 border-b border-white/5 flex flex-col md:flex-row gap-4 justify-between items-center">

          <div className="flex flex-col gap-1 ">
            <span className="text-amber-400 font-black tracking-[0.25em] text-[10px] uppercase">
              Noticias del torneo
            </span>

            <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">
            noticias <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/40">del torneo</span>
          </h1>
          </div>

          {/* filtros tipo APP */}
          <div className="flex items-center bg-white/5 rounded-xl p-1">
            {categorias.map((cat) => (
              <button
                key={cat.value}
                onClick={() => handleFilterClick(cat.value)}
                className={`px-4 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                  filters.categoria === cat.value
                    ? "bg-amber-400 text-black"
                    : "text-gray-400 hover:text-amber-400"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* GRID */}
      <motion.div
        className="relative z-30  md:px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.6 }}
      >
        {contextLoading || isFiltering ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 md:px-6 mt-8"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <SkeletonCard key={n} />
            ))}
          </motion.div>
        ) : filterResult.length === 0 ? (
          <div className="h-60 w-full text-center flex items-center justify-center">
            <p className="text-gray-500 text-2xl animate-pulse">
              No hay noticias relacionadas
            </p>
          </div>
        ) : (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 md:px-6 mt-8"
          >
            {filterResult.map((noticia) => (
              <CardNoticias
                noticia={noticia}
                key={noticia._id}
              />
            ))}
          </div>
        )}
      </motion.div>

      {/* PROXIMOS PARTIDOS (ANTES DEL SPONSOR → producto thinking) */}
      <div className="md:mt-20  mx-auto  md:px-6">
        <ProximosResultSection />
      </div>

      {/* SPONSOR */}
      <div className="mt-28">
        <SponsorCTA />
      </div>

    </div>
  );
};

export default Noticias;
