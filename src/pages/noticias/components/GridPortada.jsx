import React, { useContext } from "react";
import { motion } from "framer-motion";
import TournamentContext from "../../../context/TournamentContext";
import { Link } from "react-router-dom";

const HeroNews = ({ noticias }) => {
  const { fixture } = useContext(TournamentContext);

  const resultadosRecientes = fixture
    ?.filter((item) => item.estado === "Finalizado")
    .slice(0, 2);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-10 md:mt-15">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative h-80 sm:h-100 md:h-125 rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer lg:col-span-3"
        >
          <Link to={`/noticiasDetalle/${noticias[2]?._id}`}>
            <img
              src={noticias[2]?.image?.url}
              alt="Main News"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 p-8">
              <span className="bg-amber-400 text-black text-[10px] font-black uppercase px-3 py-1 rounded-full mb-4 inline-block">
                Destacado
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-white uppercase italic leading-tight md:leading-none tracking-tighter">
                {noticias[2]?.title}
              </h2>
              <p className="text-gray-300 mt-4 text-sm max-w-md line-clamp-2">
                {noticias[2]?.content}
              </p>
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="relative h-auto lg:h-125 overflow-hidden group cursor-pointer lg:col-span-1 flex flex-col sm:flex-row lg:flex-col justify-end gap-4"
        >
          <div className="h-auto sm:w-1/2 lg:w-full lg:h-50 rounded-md overflow-hidden">
            <Link to={`/noticiasDetalle/${noticias[3]?._id}`}>
              <div className="h-full bg-white/5 flex flex-col gap-3">
                <img
                  src={noticias[3]?.image?.url}
                  alt="Main News"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-2">
                  <p className="text-[12px] line-clamp-2 text-white">
                    {noticias[3]?.content}
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="h-auto sm:w-1/2 lg:w-full lg:h-70 bg-white/5 rounded-md">
            <div class="w-full h-full border-l-4 border-amber-300 rounded-md p-4 md:p-5 text-white font-sans">
              <h3 class="text-center text-2xl font-bold tracking-wider uppercase mb-5 text-amber-300">
                Resultados Recientes
              </h3>
              <div className="flex flex-col justify-between h-[calc(100%-2rem)] pb-4">
                <div className="flex flex-col gap-2 flex-1 justify-center">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={fixture[2]?.local?.logo?.url}
                        className="w-10 h-6 object-contain"
                      />
                      <span className="font-bold text-[10px] uppercase">
                        {resultadosRecientes[0]?.local?.name}
                      </span>
                    </div>
                    <span className="text-[10px] text-gray-500 font-black">
                      {resultadosRecientes[0]?.resultado?.total.local}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={resultadosRecientes[0]?.visitante?.logo?.url}
                        className="w-10 h-6 object-contain"
                      />
                      <span className="font-bold text-[10px] uppercase">
                        {resultadosRecientes[0]?.visitante?.name}
                      </span>
                    </div>
                    <span className="text-[10px] text-amber-300 font-black">
                      {resultadosRecientes[1]?.resultado?.total.visitante}
                    </span>
                  </div>
                </div>

                <div className="h-px bg-white/5 w-full"></div>

                <div className="flex flex-col gap-2 flex-1 justify-center">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={fixture[3]?.local?.logo?.url}
                        className="w-10 h-6 object-contain"
                      />
                      <span className="font-bold text-[10px] uppercase">
                        {resultadosRecientes[1]?.local?.name}
                      </span>
                    </div>
                    <span className="text-[10px] text-gray-500 font-black">
                      {resultadosRecientes[1]?.resultado?.total.local}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={resultadosRecientes[1]?.visitante?.logo?.url}
                        className="w-10 h-6 object-contain"
                      />
                      <span className="font-bold text-[10px] uppercase">
                        {resultadosRecientes[1]?.visitante?.name}
                      </span>
                    </div>
                    <span className="text-[10px] text-amber-300 font-black">
                      {resultadosRecientes[1]?.resultado?.total.visitante}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroNews;
