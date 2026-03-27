import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {FaTag,} from "react-icons/fa";
import NewsContext from "../../context/NewsContext";
import SponsorCTA from "../noticias/components/SponsorCTA";
import { motion } from "framer-motion";
import { obtenerNoticiaID } from "../../services/NewsService";
import TournamentContext from "../../context/TournamentContext";
import CardResultados from "../../components/cards/CardResultados";
import Tabla from "../../components/common/Tabla";

const DetalleNoticia = () => {
  const { id } = useParams();
  const [noticia, setNoticia] = useState({});
  const { fixture, clubes } = useContext(TournamentContext);
  const { noticias } = useContext(NewsContext);

  useEffect(() => {
    obtenerNoticiaID(id).then((data) => {
      setNoticia(data);
    });
  }, [id]);

  const resultadosRecientes = fixture
    ?.filter((item) => item.estado === "Finalizado")
    .slice(0, 2);

  if (!noticia) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="animate-pulse font-black uppercase tracking-tighter text-2xl">
          Cargando noticia...
        </div>
      </div>
    );
  }

  return (
    <>
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-15">
        {/* Noticia Principal (Izquierda) */}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative h-100 md:h-125 rounded-3xl overflow-hidden group cursor-pointer col-span-3"
        >
          <Link to={`/noticiasDetalle/${noticia?._id}`}>
            <img
              src={noticia?.image?.url}
              alt="Main News"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 p-8">
              <span className="bg-amber-400 text-black text-[10px] font-black uppercase px-3 py-1 rounded-full mb-4 inline-block">
                Destacado
              </span>
              <h2 className="text-3xl md:text-6xl font-black text-white uppercase italic leading-none tracking-tighter">
                {noticia?.title}
              </h2>
             
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="relative h-100 md:h-125  overflow-hidden group cursor-pointer col-span-1 flex flex-col justify-end gap-4"
        >
          <div className="h-50 rounded-md overflow-hidden">
            <Link to={`/noticiasDetalle/`}>
              <div className="h-35 bg-amber-600 flex flex-col gap-3">
                <img
                    src={noticias[3]?.image?.url}
                  alt="Main News"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="">
                  <p className="text-[12px] line-clamp-2">
                    {noticias[3]?.content}
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="h-70 bg-white/5 rounded-md">
            <div class="w-full h-full bg-  border-l-4 border-amber-300 rounded-md p-5 text-white font-sans">
              <h3 class="text-center text-2xl font-bold tracking-wider uppercase mb-5 text-amber-300">
                Resultados Recientes
              </h3>
              <div className="flex flex-col justify-between h-[calc(100%-2rem)] pb-4">
                <div className="flex flex-col gap-2 flex-1 justify-center">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={resultadosRecientes[0]?.local?.logo?.url}
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
                        src={resultadosRecientes[1]?.local?.logo?.url}
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
      <div className=" mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className=" col-span-4">
            <div className="lg:col-span-3">
              <p className="text-xl text-gray-300 font-medium leading-relaxed mb-8 border-l-4 border-amber-400 pl-6 italic">
                {noticia.summary ||
                  "Resumen de la noticia destacada del torneo."}
              </p>
              <div className="prose prose-invert prose-amber max-w-none text-gray-400 leading-loose text-[20px]">
                {noticia.content || noticia.description}
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center text-black font-black">
                    {noticia.author?.charAt(0) || "A"}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                      Escrito por
                    </p>
                    <p className="text-white font-bold uppercase">
                      {noticia.author || "Redacción BasketTour"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  {noticia.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full text-gray-400 border border-white/5"
                    >
                      <FaTag className="text-amber-400" size={8} /> {tag.trim()}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-16">
                <h3 className="text-white text-4xl font-black uppercase tracking-tighter mb-6">
                  Resultados <span className="text-amber-400">Recientes</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {fixture
                    ?.filter((item) => item.estado === "Finalizado")
                    .slice(0, 6)
                    .map((item) => (
                      <CardResultados
                        key={item._id}
                        resultados={item}
                        clubes={clubes}
                      />
                    ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-2 hidden lg:block pl-8">
            <h3 className="text-amber-400 font-black uppercase tracking-tighter text-xl mb-6 border-b border-white/10 pb-2">
              Otras Noticias
            </h3>
            <div className="flex flex-col gap-6">
              {noticias
                ?.filter((n) => n._id !== id)
                .slice(0, 3)
                .map((item) => (
                  <Link
                    to={`/noticiasDetalle/${item._id}`}
                    key={item._id}
                    className="group flex gap-4 p-3 rounded-xl  transition-all duration-300 border  border-white/10"
                  >
                    <div className="relative shrink-0 w-1/2">
                      <img
                        src={item.image?.url}
                        className="w-full h-24 object-cover rounded-lg transition-all duration-500"
                        alt={item.title}
                      />
                      <div className="absolute inset-0 bg-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-white font-bold uppercase text-xs leading-tight line-clamp-2 group-hover:text-amber-400 transition-colors tracking-tight">
                        {item.title}
                      </h4>
                      <span className="text-[9px] text-amber-400/60 font-black mt-2 uppercase tracking-widest">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </Link>
                ))}
            </div>

            <div className="mt-17">
              <h3 className="text-white font-black uppercase tracking-tighter text-4xl mb-6 border-b border-white/10 pb-2">
                Posiciones
              </h3>
              <Tabla />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    <SponsorCTA />
    </>
  );
};

export default DetalleNoticia;
