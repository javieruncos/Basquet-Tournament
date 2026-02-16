import PortadaInicio from "./components/PortadaInicio";
import CardNoticias from "../../pages/noticias/components/CardNoticias";

export const Inicio = () => {
  return (
    <div className="bg-[#0b0b0b] text-white">
      <PortadaInicio />
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
              Próximos <span className="text-amber-300">Partidos</span>
            </h2>
            <div className="w-24 h-1 bg-amber-300 mt-4 rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="
                bg-[#1a1a1a]
                border border-white/5
                rounded-2xl
                p-6
                shadow-md shadow-black/70
                hover:scale-[1.02]
                hover:border-amber-300/40
                transition-all duration-300
              "
              >
                <div className="flex justify-between mb-6">
                  <span className="text-amber-300 text-xs font-bold uppercase tracking-widest">
                    25 JUN 2026
                  </span>
                  <span className="text-gray-400 text-sm">20:00 HS</span>
                </div>

                <div className="flex flex-col gap-4">
                  {[1, 2].map((team) => (
                    <div
                      key={team}
                      className="
                      flex items-center justify-between
                      bg-white/5
                      px-3 py-2
                      rounded-lg
                    "
                    >
                      <span className="text-xs font-bold uppercase">
                        Equipo {team === 1 ? "Local" : "Visitante"}
                      </span>

                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Escudo_del_Club_Estaci%C3%B3n_Experimental_Tucum%C3%A1n.svg"
                        alt="Escudo"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                  ))}
                </div>

                <button
                  className="
                  w-full mt-8 py-3
                  bg-amber-400 text-black
                  rounded-xl
                  font-bold uppercase tracking-widest
                  shadow-lg shadow-amber-400/20
                  hover:bg-amber-300
                  hover:scale-[1.03]
                  transition-all duration-300
                "
                >
                  Detalles
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
              Noticias <span className="text-amber-300">Destacadas</span>
            </h2>
            <div className="w-24 h-1 bg-amber-300 mt-4 rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <CardNoticias key={n} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
              Tabla de <span className="text-amber-300">Posiciones</span>
            </h2>
            <div className="w-24 h-1 bg-amber-300 mt-4 rounded"></div>
          </div>

          <div className="overflow-x-auto bg-[#1a1a1a] border border-white/5 rounded-2xl ">
            <table className="w-full text-left border-collapse">
              <thead className="bg-white/5">
                <tr>
                  {["Pos", "Equipo", "PJ", "PG", "PP", "PTS"].map((h) => (
                    <th
                      key={h}
                      className="p-4 text-amber-300 uppercase text-sm tracking-widest text-center"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {[1, 2, 3, 4, 5].map((pos) => (
                  <tr
                    key={pos}
                    className="border-b border-white/5 hover:bg-white/10 transition"
                  >
                    <td className="p-4 text-center font-bold text-lg">{pos}</td>

                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Escudo_del_Club_Estaci%C3%B3n_Experimental_Tucum%C3%A1n.svg"
                          className="w-8 h-8"
                        />
                        <span className="uppercase font-bold text-sm">
                          Equipo {pos}
                        </span>
                      </div>
                    </td>

                    <td className="p-4 text-center">10</td>
                    <td className="p-4 text-center text-green-400">8</td>
                    <td className="p-4 text-center text-red-400">2</td>

                    <td className="p-4 text-center font-bold text-amber-300 text-lg">
                      18
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
              Líderes de la <span className="text-amber-300">Temporada</span>
            </h2>
            <div className="w-24 h-1 bg-amber-300 mt-4 rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Puntos", "Rebotes", "Asistencias"].map((stat) => (
              //   <div
              //     key={stat}
              //     className="
              //     bg-[#1a1a1a]
              //     border border-white/5
              //     rounded-2xl
              //     p-6
              //     text-center
              //     shadow-md shadow-black/40
              //     hover:scale-[1.02]
              //     hover:shadow-2xl
              //     transition-all
              //   "
              //   >
              //     <span className="text-amber-300 text-xs font-bold uppercase tracking-widest">
              //       {stat}
              //     </span>

              //     <div className="relative mx-auto my-6 w-28 h-28">
              //       <img
              //         src="https://media.istockphoto.com/id/525345961/es/foto/afro-americano-hombre-con-pelota-de-baloncesto.jpg"
              //         className="w-full h-full object-cover rounded-full border-4 border-amber-300 shadow-lg"
              //       />
              //       <div className="absolute -bottom-2 -right-2 bg-amber-300 text-black font-bold px-2 py-1 rounded">
              //         #23
              //       </div>
              //     </div>

              //     <h3 className="text-xl font-bold uppercase">
              //       Nombre Jugador
              //     </h3>

              //     <p className="text-gray-400 text-sm mb-4">
              //       EQUIPO EJEMPLO
              //     </p>

              //     <div className="text-4xl font-extrabold">
              //       24.5 <span className="text-sm text-gray-500">PROM</span>
              //     </div>

              //     <button className="mt-6 text-xs font-bold uppercase tracking-widest text-amber-300 hover:text-white transition">
              //       Ver Perfil
              //     </button>
              //   </div>
              <div className="w-full rounded-2xl overflow-hidden bg-[#1a1a1a] shadow-2xl shadow-black/60  transition-all duration-300">
                <div className="relative h-80">
                  <img
                    src="https://media.istockphoto.com/id/525345961/es/foto/afro-americano-hombre-con-pelota-de-baloncesto.jpg?s=612x612&w=0&k=20&c=gsDL6UVsgy0cvv5y6tlU1nQmZcmGZRhN4PCt5ZMYeOY="
                    alt="Jugador"
                    className="w-full h-full object-cover"
                  />

                  <div
                    className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>

                  <div className="absolute top-4 left-4 text-xs  font-bold uppercase text-white/80" >
                    NBA PLAYOFFS
                  </div>

                  <div className="absolute bottom-16 left-6 text-white">
                    <p className="text-4xl font-extrabold">1</p>
                    <p className="text-xs uppercase text-gray-300">Place</p>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 classaclassName="text-lg font-bold uppercase tracking-wide">
                      Giannis Antetokounmpo
                    </h3>
                    <p className="text-xs text-gray-300 uppercase">
                      Power Forward | Milwaukee Bucks
                    </p>
                  </div>
                </div>
                <div className="h-2 bg-amber-300"></div>
                <div  className=" to-black p-6 border border-white/10">
                  <div className="grid grid-cols-3 text-center text-white divide-x divide-amber-300">
                    <div className="pb-6">
                      <p className="text-2xl font-extrabold">27</p>
                      <p className="text-xs uppercase text-amber-100/70">Minutes</p>
                    </div>

                    <div className="pb-6">
                      <p className="text-2xl font-extrabold">21</p>
                      <p className="text-xs uppercase text-amber-100/70">Points</p>
                    </div>

                    <div className="pb-6 border-r-0!">
                      <p className="text-2xl font-extrabold">52%</p>
                      <p className="text-xs uppercase text-amber-100/70">FG%</p>
                    </div>

                    <div className="pt-6">
                      <p className="text-2xl font-extrabold">13</p>
                      <p className="text-xs uppercase text-amber-100/70">Rebounds</p>
                    </div>

                    <div className="pt-6">
                      <p className="text-2xl font-extrabold">3.7</p>
                      <p className="text-xs uppercase text-amber-100/70">Assists</p>
                    </div>

                    <div className="pt-6">
                      <p className="text-2xl font-extrabold">0.7</p>
                      <p className="text-xs uppercase text-amber-100/70">Steals</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 border-y border-white/5 bg-[#0b0b0b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 text-xs font-bold uppercase tracking-[0.3em] mb-8">
            Main Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-500">
            {["SPALDING", "GATORADE", "NIKE", "TISSOT"].map((brand) => (
              <h3
                key={brand}
                className="text-3xl md:text-5xl font-black text-white tracking-tighter cursor-pointer hover:text-amber-300 transition-colors"
              >
                {brand}
              </h3>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
