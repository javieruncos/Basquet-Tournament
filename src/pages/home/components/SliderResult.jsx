import React, { useContext } from "react";
import "swiper/css"; 
import { Swiper, SwiperSlide } from "swiper/react";
import TournamentContext from "../../../context/TournamentContext";
import ClubesContext from "../../../context/ClubesContext";
import { Link } from "react-router-dom";

const SliderResult = () => {
  const { fixture } = useContext(TournamentContext);

  return (
    <div className="hidden md:block w-full bg-[#05050573] border-b border-white/5 overflow-hidden">
      <div className="w-full">
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3.5 },
          }}
          className="w-full h-48 cursor-pointer"
        >
          {fixture
            .filter((item) => item.estado !== "Programado")
            .map((resultado) => (
              <SwiperSlide
                key={resultado?._id}
                className="p-2"
              >
                <Link to={`/boxscore/${resultado._id}`} className="block h-full">
                <div className="h-full bg-white/5 hover:bg-white/10 transition-colors border border-white/5 rounded-xl p-4 flex flex-col justify-center shadow-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex flex-col">
                      <span className="text-[9px] text-amber-300 font-black uppercase tracking-[0.2em]">
                        {resultado.torneo}
                      </span>
                      <span className="text-[12px] text-amber-300 font-bold uppercase">
                        Jornada {resultado?.jornada} • {resultado?.fecha}
                      </span>
                    </div>
                    <span className="text-[10px] bg-dark-gradient text-gray-500 px-2 py-0.5 rounded font-bold uppercase">
                      Final
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <img 
                          src={resultado?.local?.logo?.url} 
                          alt="logo" 
                          className="h-15 w-18 object-contain"
                        />
                        <span className="text-xs font-bold text-gray-200 uppercase tracking-tight">{resultado?.local?.name}</span>
                      </div>
                      <span className={`text-lg font-black numberFonts ${resultado?.resultado?.total?.local > resultado?.resultado?.total?.visitante ? 'text-white' : 'text-gray-500'}`}>
                        {resultado?.resultado?.total?.local}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <img 
                          src={resultado?.visitante?.logo?.url} 
                          alt="logo" 
                          className="h-15 w-18 object-contain"
                        />
                        <span className="text-xs font-bold text-gray-200 uppercase tracking-tight">{resultado?.visitante?.name}</span>
                      </div>
                      <span className={`text-lg font-black numberFonts ${resultado?.resultado?.total?.visitante > resultado?.resultado?.total?.local ? 'text-white' : 'text-gray-500'}`}>
                        {resultado?.resultado?.total?.visitante}
                      </span>
                    </div>
                  </div>
                </div>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default React.memo(SliderResult);
