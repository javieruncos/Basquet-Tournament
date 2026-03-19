import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import NewsContext from '../../../context/NewsContext';


const UltimasNoticias = () => {

    const { noticias } = useContext(NewsContext);
    return (
         <div className="mt-10">
              <div className="mb-6 flex justify-between items-end">
                <h3 className="text-5xl font-black uppercase tracking-tighter">
                  Últimas <span className="text-amber-300">Noticias</span>
                </h3>
                <Link
                  to="/noticias"
                  className="text-amber-300 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors"
                >
                  Ver más
                </Link>
              </div>

              <div className="space-y-4">
                {noticias?.slice(0, 2).map((noticia) => (
                  <Link
                    key={noticia._id}
                    to={`/noticiasDetalle/${noticia._id}`}
                    className="flex gap-4 group bg-white/5 p-3 rounded-xl border border-white/5 hover:border-amber-300/30 transition-all"
                  >
                    <div className="w-32 h-20 shrink-0 rounded-lg overflow-hidden border border-white/10">
                      <img
                        src={noticia.image?.url}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[9px] text-amber-300 font-bold uppercase tracking-widest mb-1">
                        {noticia.category}
                      </span>
                      <h4 className="text-xs font-black uppercase leading-tight group-hover:text-amber-300 transition-colors line-clamp-2">
                        {noticia.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
    );
};

export default UltimasNoticias;