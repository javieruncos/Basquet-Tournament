import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const PortadaDetalle = ({ partido }) => {
  return (
    <div className="relative w-full h-112.5 md:h-157.5 overflow-hidden rounded-b-3xl shadow-2xl group border-b border-white/5">
      {/* Background with parallax-like feel */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-[#111] to-[#1a1a1a]"></div>
        <div className="absolute inset-0 bg-linear-to-b from-[#050505] to-transparent opacity-80"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-10 max-w-7xl mx-auto pt-16 md:pt-10">
        
        {/* Top Meta */}
        <div className="mb-4 md:mb-0 flex flex-col items-center gap-3 mt-4 md:mt-10">
           <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_10px_#fbbf24]"></span>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-amber-100">Finalizado</span>
           </div>
           <span className="text-gray-400 text-[8px] md:text-xs font-bold uppercase tracking-[0.3em] text-center">
              Regional Amateur • Jornada 5
           </span>
        </div>

        {/* Score Board */}
        <div className="w-full grid grid-cols-3 items-center gap-1 md:gap-12">
            
            {/* Local Team */}
            <div className="flex flex-col items-center gap-4 md:gap-8 text-center group/team">
                <div className="relative">
                     <div className="absolute inset-0 bg-amber-400/20 blur-[50px] rounded-full opacity-0 group-hover/team:opacity-100 transition-opacity duration-500"></div>
                     <img
                        src={partido?.local?.logo?.url}
                        alt="Local"
                        className="relative h-16 w-16 sm:h-20 sm:w-20 md:h-40 md:w-40 lg:h-48 lg:w-58 object-contain drop-shadow-2xl"
                     />
                </div>
                <div className="flex flex-col items-center">
                     <h2 className="text-xs sm:text-xl md:text-4xl font-black italic text-white uppercase tracking-tighter leading-tight md:leading-none">
                        {partido?.local?.name}
                     </h2>
                     <div className="h-0.5 w-8 bg-amber-400 mt-3 hidden md:block"></div>
                </div>
            </div>

          {/* Score */}
          <div className="flex flex-col items-center justify-center relative z-20">
            <div className="flex items-center gap-2 sm:gap-4 md:gap-10">
              <span className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white numberFonts tracking-tighter drop-shadow-[0_0_30px_rgba(251,191,36,0.3)]">
                {partido?.resultado?.total?.local || 0}
              </span>
              <div className="flex flex-col items-center gap-2">
                <div className="h-6 md:h-20 w-0.5 md:w-1 bg-linear-to-b from-amber-400 to-transparent rounded-full opacity-50"></div>
                <span className="text-amber-400 font-black italic text-xs md:text-2xl opacity-40">
                  VS
                </span>
                <div className="h-6 md:h-20 w-0.5 md:w-1 bg-linear-to-t from-amber-400 to-transparent rounded-full opacity-50"></div>
              </div>
              <span className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white/40 numberFonts tracking-tighter">
                {partido?.resultado?.total?.visitante || 0}
              </span>
            </div>
          </div>

            {/* Visitor Team */}
            <div className="flex flex-col items-center gap-4 md:gap-8 text-center group/team">
                <div className="relative">
                     <div className="absolute inset-0 bg-white/10 blur-[50px] rounded-full opacity-0 group-hover/team:opacity-100 transition-opacity duration-500"></div>
                     <img
                        src={partido?.visitante?.logo.url}
                        alt="Visitante"
                        className="relative h-16 w-16 sm:h-20 sm:w-20 md:h-40 md:w-40 lg:h-48 lg:w-58 object-contain drop-shadow-2xl contrast-125 opacity-70  transition-all duration-500"
                     />
                </div>
                <div className="flex flex-col items-center">
                     <h2 className="text-xs sm:text-xl md:text-4xl font-black italic transition-colors uppercase tracking-tighter leading-tight md:leading-none">
                        {partido?.visitante?.name}
                     </h2>
                     <div className="h-0.5 w-8 bg-gray-600  mt-3 hidden md:block transition-colors"></div>
                </div>
            </div>
        </div>

        {/* Footer Meta */}
        <div className="mt-8 md:mt-16 flex flex-wrap justify-center gap-2 md:gap-8 text-gray-400">
             <div className="flex items-center gap-2 text-[9px] md:text-sm font-bold uppercase tracking-widest bg-black/40 backdrop-blur px-3 md:px-4 py-1.5 md:py-2 rounded-lg border border-white/5">
                <FaCalendarAlt className="text-amber-400" /> 31 Diciembre 2022
             </div>
             <div className="flex items-center gap-2 text-[9px] md:text-sm font-bold uppercase tracking-widest bg-black/40 backdrop-blur px-3 md:px-4 py-1.5 md:py-2 rounded-lg border border-white/5">
                <FaClock className="text-amber-400" /> 21:30 HS
             </div>
             <div className="flex items-center gap-2 text-[9px] md:text-sm font-bold uppercase tracking-widest bg-black/40 backdrop-blur px-3 md:px-4 py-1.5 md:py-2 rounded-lg border border-white/5">
                <FaMapMarkerAlt className="text-amber-400" /> Tucumán
             </div>
        </div>
      </div>
    </div>
  );
};

export default PortadaDetalle;
