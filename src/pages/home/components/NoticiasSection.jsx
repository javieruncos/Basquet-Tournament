import { FaPlus } from "react-icons/fa";
import CardNoticias from "../../../components/cards/CardNoticias";
import NewsContext from "../../../context/NewsContext";
import { useContext } from "react";


const NoticiasSection = () => {

   const {noticias} = useContext(NewsContext)



    return (
        <section className="relative px-5 sm:px-6 lg:px-8 overflow-hidden">
               <div className="relative z-10 max-w-7xl mx-auto">
                 <div className="mb-12 flex justify-between items-center">
                   <div>
                     <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
                       Noticias <span className="text-amber-300">Destacadas</span>
                     </h2>
                     <div className="w-24 h-1 bg-amber-300 mt-4 rounded"></div>
                   </div>
                   <button className="text-amber-300 hover:text-white transition-colors font-bold uppercase tracking-widest text-sm border-b border-amber-300 pb-1 whitespace-nowrap ml-4 flex items-center gap-2">
                     <span className="hidden md:inline">Ver Todas</span>
                   </button>
                 </div>
       
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                   {noticias.map((noticia) => (
                     <CardNoticias key={noticia._id} noticia={noticia}/>
                   ))}
                 </div>
               </div>
             </section>
    );
};

export default NoticiasSection;