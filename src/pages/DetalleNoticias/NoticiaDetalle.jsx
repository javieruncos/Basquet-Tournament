import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaCalendarAlt, FaTag, FaChevronLeft, FaShareAlt } from 'react-icons/fa';
import NewsContext from '../../context/NewsContext';
import SponsorCTA from '../noticias/components/SponsorCTA';
import { obtenerNoticiaID } from '../../services/NewsService';

const DetalleNoticia = () => {
    const { id } = useParams();
    const [noticia, setNoticia] = useState({})
   

    useEffect(() => {
       obtenerNoticiaID(id).then((data) => {
        setNoticia(data);
      });
    }, []);

    if (!noticia) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                <div className="animate-pulse font-black uppercase tracking-tighter text-2xl">Cargando noticia...</div>
            </div>
        );
    }

    return (
        <div className=" bg-[#0a0a0a] text-white ">
            <div className="relative h-[50vh] md:h-[90vh] w-full overflow-hidden">
                <img 
                    src={noticia.image?.url || 'https://via.placeholder.com/1200x800'} 
                    alt={noticia.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
                    <div className="max-w-6xl ">
                        <Link to="/noticias" className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6 hover:text-white transition-colors">
                            <FaChevronLeft /> Volver a noticias
                        </Link>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-amber-400 text-black px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-wider">
                                {noticia.category || 'General'}
                            </span>
                            <span className="flex items-center gap-2 text-gray-300 text-xs font-medium">
                                <FaCalendarAlt className="text-amber-400" />
                                {new Date(noticia.createdAt).toLocaleDateString()}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
                            {noticia.title}
                        </h1>
                    </div>
                </div>
            </div>

            <div className=" mx-auto px-10 mt-12">
                <div className=" gap-12">

                    <div className="lg:col-span-3">
                        <p className="text-xl text-gray-300 font-medium leading-relaxed mb-8 border-l-4 border-amber-400 pl-6 italic">
                            {noticia.summary || "Resumen de la noticia destacada del torneo."}
                        </p>
                        <div className="prose prose-invert prose-amber max-w-none text-gray-400 leading-loose text-lg">
                            {noticia.content || noticia.description}
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center text-black font-black">
                                    {noticia.author?.charAt(0) || 'A'}
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Escrito por</p>
                                    <p className="text-white font-bold uppercase">{noticia.author || 'Redacción BasketTour'}</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-2">
                                {noticia.tags?.map((tag, i) => (
                                    <span key={i} className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full text-gray-400 border border-white/5">
                                        <FaTag className="text-amber-400" size={8} /> {tag.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <SponsorCTA></SponsorCTA>   
            </div>
        </div>
    );
};

export default DetalleNoticia;