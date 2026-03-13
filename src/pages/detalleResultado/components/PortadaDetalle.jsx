import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const PortadaDetalle = ({ partido }) => {
  return (
    <div className="relative w-full h-112.5 md:h-157.5 overflow-hidden rounded-b-3xl shadow-2xl group border-b border-white/5">
      {/* Background with parallax-like feel */}
      <div className="absolute inset-0">
         <img
          src="https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2016/04/08/14600951269464.jpg"
          className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000 ease-out"
          alt="Stadium"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-b from-[#050505] to-transparent opacity-80"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-10 max-w-7xl mx-auto pt-10">
        
        {/* Top Meta */}
        <div className="mb-0 flex flex-col items-center gap-3 mt-10">
           <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_10px_#fbbf24]"></span>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-amber-100">Finalizado</span>
           </div>
           <span className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
              Regional Amateur • Jornada 5
           </span>
        </div>

        {/* Score Board */}
        <div className="w-full grid grid-cols-3 items-center gap-2 md:gap-12">
            
            {/* Local Team */}
            <div className="flex flex-col items-center gap-4 md:gap-8 text-center group/team">
                <div className="relative">
                     <div className="absolute inset-0 bg-amber-400/20 blur-[50px] rounded-full opacity-0 group-hover/team:opacity-100 transition-opacity duration-500"></div>
                     <img
                        src={partido?.local?.logo?.url}
                        alt="Local"
                        className="relative h-20 w-20 md:h-40 md:w-40 lg:h-48 lg:w-58 object-contain drop-shadow-2xl"
                     />
                </div>
                <div className="flex flex-col items-center">
                     <h2 className="text-xl md:text-4xl font-black italic text-white uppercase tracking-tighter leading-none">
                        {partido?.local?.name}
                     </h2>
                     <div className="h-0.5 w-8 bg-amber-400 mt-3 hidden md:block"></div>
                </div>
            </div>

            {/* Score */}
            <div className="flex flex-col items-center justify-center relative z-20">
                <div className="flex items-center gap-3 md:gap-8">
                     <span className="text-5xl md:text-8xl lg:text-9xl font-black text-white numberFonts tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">88</span>
                     <div className="h-8 md:h-12 w-0.5 md:w-1 bg-white/10 -skew-x-12"></div>
                     <span className="text-5xl md:text-8xl lg:text-9xl font-black text-white/40 numberFonts tracking-tighter">74</span>
                </div>
            </div>

            {/* Visitor Team */}
            <div className="flex flex-col items-center gap-4 md:gap-8 text-center group/team">
                <div className="relative">
                     <div className="absolute inset-0 bg-white/10 blur-[50px] rounded-full opacity-0 group-hover/team:opacity-100 transition-opacity duration-500"></div>
                     <img
                        src={partido?.visitante?.logo.url}
                        alt="Visitante"
                        className="relative h-20 w-20 md:h-40 md:w-40 lg:h-48 lg:w-58 object-contain drop-shadow-2xl contrast-125 opacity-70  transition-all duration-500"
                     />
                </div>
                <div className="flex flex-col items-center">
                     <h2 className="text-xl md:text-4xl font-black italic transition-colors uppercase tracking-tighter leading-none">
                        {partido?.visitante?.name}
                     </h2>
                     <div className="h-0.5 w-8 bg-gray-600  mt-3 hidden md:block transition-colors"></div>
                </div>
            </div>
        </div>

        {/* Footer Meta */}
        <div className="mt-8 md:mt-16 flex flex-wrap justify-center gap-4 md:gap-8 text-gray-400">
             <div className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest bg-black/40 backdrop-blur px-4 py-2 rounded-lg border border-white/5">
                <FaCalendarAlt className="text-amber-400" /> 31 Diciembre 2022
             </div>
             <div className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest bg-black/40 backdrop-blur px-4 py-2 rounded-lg border border-white/5">
                <FaClock className="text-amber-400" /> 21:30 HS
             </div>
             <div className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest bg-black/40 backdrop-blur px-4 py-2 rounded-lg border border-white/5">
                <FaMapMarkerAlt className="text-amber-400" /> Tucumán
             </div>
        </div>
      </div>
    </div>
  );
};

export default PortadaDetalle;
