import React, { useContext } from "react";
import useJugadores from "../../../hooks/useJugadores";
import ClubesContext from "../../../context/ClubesContext";
import avatar from  "../../../assets/images/avatar2.png"

const LideresSection = () => {
  const { jugadores, setJugadores } = useJugadores();
  const {clubes} = useContext(ClubesContext)

  

  return (
    <section className=" px-5 sm:px-6 lg:px-8  ">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex justify-between items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
              Líderes de la <span className="text-amber-300">Temporada</span>
            </h2>
            <div className="w-24 h-1 bg-amber-300 mt-4 rounded"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {jugadores?.slice(0, 3).map((stat, index) => {
            const club = clubes.find(c => c._id === stat.clubId);
            return (
            <div className="w-full rounded-2xl overflow-hidden  shadow-2xl shadow-black/60  transition-all duration-300">
              <div className="relative h-80 bg-dark-gradient">
                <img
                  src={stat.avatar || avatar}
                  alt="Jugador"
                  className="w-full h-full object-contain"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>

                <div className="absolute top-4 left-4 text-xs  font-bold uppercase text-white/80">
                  REGIONAL AMATEUR
                </div>

                <div className="absolute bottom-16 left-6 text-white">
                  <p className="text-4xl font-extrabold numberFonts">
                    {index + 1}
                  </p>
                  <p className="text-xs uppercase text-gray-300">Puesto</p>
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-lg font-bold uppercase tracking-wide">
                    {stat.nombre}
                  </h3>
                  <p className="text-xs text-gray-300 uppercase">
                    | {club?.name}
                  </p>
                  {stat.posicion && stat.club && (
                    <p className="text-xs text-gray-300 uppercase">
                      {stat.posicion} | {stat.club.name}
                    </p>
                  )}
                </div>
              </div>
              <div className="h-2 bg-amber-300"></div>
              <div className=" bg-white/5 backdrop-blur-3xl   p-6 border border-white/10">
                <div className="grid grid-cols-3 text-center text-white divide-x divide-amber-300">
                  <div className="pb-6">
                    <p className="text-2xl font-extrabold numberFonts">
                      {stat.estadisticas.minutos}
                    </p>
                    <p className="text-xs uppercase text-amber-100/70">
                      Minutos
                    </p>
                  </div>

                  <div className="pb-6">
                    <p className="text-2xl font-extrabold numberFonts">
                      {stat.estadisticas.puntos}
                    </p>
                    <p className="text-xs uppercase text-amber-100/70">
                      Puntos
                    </p>
                  </div>

                  <div className="pb-6 border-r-0!">
                    <p className="text-2xl font-extrabold numberFonts">
                      {stat.estadisticas.tapones}
                    </p>
                    <p className="text-xs uppercase text-amber-100/70">
                      Tapones
                    </p>
                  </div>

                  <div className="pt-6">
                    <p className="text-2xl font-extrabold numberFonts">
                      {stat.estadisticas.rebotes}
                    </p>
                    <p className="text-xs uppercase text-amber-100/70">
                      Rebotes
                    </p>
                  </div>

                  <div className="pt-6">
                    <p className="text-2xl font-extrabold numberFonts">
                      {stat.estadisticas.asistencias}
                    </p>
                    <p className="text-xs uppercase text-amber-100/70">
                      Asistencias
                    </p>
                  </div>

                  <div className="pt-6">
                    <p className="text-2xl font-extrabold numberFonts">
                      {stat.estadisticas.robos}
                    </p>
                    <p className="text-xs uppercase text-amber-100/70">Robos</p>
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LideresSection;
