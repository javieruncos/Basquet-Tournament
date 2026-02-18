import PortadaClub from "./components/PortadaClub";
import EstadisticasClub from "./components/EstadisticasClub";
import CardNoticias from "../../pages/noticias/components/CardNoticias";
import { FaBasketballBall } from "react-icons/fa";

const ClubDetalle = () => {
  return (
    <div className="pt-5 px-3 md:px-10 lg:pt-25">
      <PortadaClub></PortadaClub>

    

      <EstadisticasClub></EstadisticasClub>

        <div className="mt-10 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-md p-6">
        <div className="flex gap-4 items-center mb-8">
          <FaBasketballBall className="text-3xl text-amber-300" />
          <h3 className="text-3xl md:text-5xl">Máximo Anotador</h3>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="h-40 w-40 bg-[#202020] rounded-full border-2 border-amber-300 overflow-hidden shrink-0">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/021/113/130/small/basketball-ball-3d-render-png.png"
              alt="Jugador"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grow w-full">
            <div className="mb-4">
              <span className="text-gray-400 uppercase tracking-widest text-sm">Jugador Estrella</span>
              <h4 className="text-4xl font-bold">Carlos Gómez</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 numberFonts">
              <div className="bg-[#171717] p-4 rounded-md border border-white/5">
                <p className="text-amber-300 text-sm">Puntos Avg</p>
                <span className="text-3xl font-bold">24.5</span>
              </div>
              <div className="bg-[#171717] p-4 rounded-md border border-white/5">
                <p className="text-amber-300 text-sm">Partidos</p>
                <span className="text-3xl font-bold">12</span>
              </div>
              <div className="bg-[#171717] p-4 rounded-md border border-white/5">
                <p className="text-amber-300 text-sm">Rebotes</p>
                <span className="text-3xl font-bold">8.2</span>
              </div>
              <div className="bg-[#171717] p-4 rounded-md border border-white/5">
                <p className="text-amber-300 text-sm">Asistencias</p>
                <span className="text-3xl font-bold">5.4</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div>
          <h4 className="text-3xl md:text-5xl">Ultimas Noticias relacionadas</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-5">
             <CardNoticias></CardNoticias>
             <CardNoticias></CardNoticias>
             <CardNoticias></CardNoticias>

        </div>
      </div>
    </div>
  );
};

export default ClubDetalle;
