import PortadaInicio from "./components/PortadaInicio";
import CardNoticias from "../../pages/noticias/components/CardNoticias";
import CardResultad from "../../pages/resultados/components/CardReultados";
import Footer from "../../components/layout/Footer";
import { FaPlus } from "react-icons/fa";

export const Inicio = () => {
  return (
    <div className=" text-white mt-0">
      <PortadaInicio />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f] ">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex justify-between items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
                Resultados <span className="text-amber-300">Recientes</span>
              </h2>
              <div className="w-24 h-1 bg-amber-300 mt-4 rounded"></div>
            </div>
            <button className="text-amber-300 hover:text-white transition-colors font-bold uppercase tracking-widest text-sm border-b border-amber-300 pb-1 whitespace-nowrap ml-4 flex items-center gap-2">
              <span className="hidden md:inline">Ver Calendario</span>
              <span className="md:hidden bg-amber-300 text-black p-1 rounded-full">
                <FaPlus size={12} />
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((item) => (
              <CardResultad key={item}></CardResultad>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
              <span className="md:hidden bg-amber-300 text-black p-1 rounded-full">
                <FaPlus size={12} />
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <CardNoticias key={n} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0b0b0b]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex justify-between items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
                Próximos <span className="text-amber-300">Partidos</span>
              </h2>
              <div className="w-24 h-1 bg-amber-300 mt-4 rounded"></div>
            </div>
            <button className="text-amber-300 hover:text-white transition-colors font-bold uppercase tracking-widest text-sm border-b border-amber-300 pb-1 whitespace-nowrap ml-4 flex items-center gap-2">
              <span className="hidden md:inline">Ver Fixture</span>
              <span className="md:hidden bg-amber-300 text-black p-1 rounded-full">
                <FaPlus size={12} />
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="w-full rounded-2xl p-1">
                <div className="bg-[#171717] border border-white/5 rounded-md p-6 text-white relative overflow-hidden group hover:border-amber-300/30 transition-all">
                  <p className="text-center text-xs text-amber-300 mb-4 tracking-[0.2em] uppercase font-bold">
                    Regional Amateur
                  </p>

                  <div className="flex items-center justify-between gap-2">
                    <div className="flex flex-col items-center gap-2">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Escudo_del_Club_Estaci%C3%B3n_Experimental_Tucum%C3%A1n.svg"
                        className="w-14 h-14 object-contain"
                        alt="Local"
                      />
                      <span className="text-2xl font-bold uppercase tracking-tighter">
                        CAEE
                      </span>
                    </div>

                    <div className="text-center">
                      <p className="text-2xl font-black numberFonts text-white">
                        VS
                      </p>
                      <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-tighter">
                        Programado
                      </p>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Escudo_del_Club_Estaci%C3%B3n_Experimental_Tucum%C3%A1n.svg"
                        className="w-14 h-14 object-contain"
                        alt="Visitante"
                      />
                      <span className="text-2xl font-bold uppercase tracking-tighter">
                        TTF
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex flex-col items-center gap-1">
                    <span className="text-sm font-bold numberFonts">
                      24/06/2026
                    </span>
                    <span className="text-xs text-gray-500">
                      21:00 HS - Estadio Central
                    </span>
                    <button className="mt-4 w-full py-2 bg-white/5 hover:bg-amber-300 hover:text-black transition-colors rounded-lg text-xs font-bold uppercase tracking-widest">
                      Ver Previa
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex justify-between items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
                Nuestros <span className="text-amber-300">Clubes</span>
              </h2>
              <div className="w-24 h-1 bg-amber-300 mt-4 rounded"></div>
            </div>
            <button className="text-amber-300 hover:text-white transition-colors font-bold uppercase tracking-widest text-sm border-b border-amber-300 pb-1 whitespace-nowrap ml-4 flex items-center gap-2">
              <span className="hidden md:inline">Ver Todos</span>
              <span className="md:hidden bg-amber-300 text-black p-1 rounded-full">
                <FaPlus size={12} />
              </span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((club) => (
              <div class="w-full rounded-md p-1 bg-[#171717]">
                <div class=" rounded-3xl p-4 text-white">
                  <h3 class="text-md font-semibold text-center">
                   CAEE
                  </h3>

                  <p class="text-xs text-center text-gray-400 mb-3">
                    Las Talitas
                  </p>

                  <div class="rounded-2xl  mb-4 flex justify-center items-center bg-[#323232]  w-full h-36">
                     <img
                        src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Escudo_del_Club_Estaci%C3%B3n_Experimental_Tucum%C3%A1n.svg"
                        className="w-24 h-24 object-contain"
                        alt="Local"
                      />
                  </div>

                  <div class="bg-[#323232] rounded-md py-2 text-center mb-3 border border-white/5">
                    <p class="text-sm font-bold numberFonts">Estacion Experimental</p>
                  </div>
                  <div class="flex justify-center items-center">
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f] ">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex justify-between items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
                Líderes de la <span className="text-amber-300">Temporada</span>
              </h2>
              <div className="w-24 h-1 bg-amber-300 mt-4 rounded"></div>
            </div>
            <button className="text-amber-300 hover:text-white transition-colors font-bold uppercase tracking-widest text-sm border-b border-amber-300 pb-1 whitespace-nowrap ml-4 flex items-center gap-2">
              <span className="hidden md:inline">Ver Estadísticas</span>
              <span className="md:hidden bg-amber-300 text-black p-1 rounded-full">
                <FaPlus size={12} />
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Puntos", "Rebotes", "Asistencias"].map((stat) => (
              <div className="w-full rounded-2xl overflow-hidden bg-[#1a1a1a] shadow-2xl shadow-black/60  transition-all duration-300">
                <div className="relative h-80">
                  <img
                    src="https://media.istockphoto.com/id/525345961/es/foto/afro-americano-hombre-con-pelota-de-baloncesto.jpg?s=612x612&w=0&k=20&c=gsDL6UVsgy0cvv5y6tlU1nQmZcmGZRhN4PCt5ZMYeOY="
                    alt="Jugador"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>

                  <div className="absolute top-4 left-4 text-xs  font-bold uppercase text-white/80">
                    NBA PLAYOFFS
                  </div>

                  <div className="absolute bottom-16 left-6 text-white">
                    <p className="text-4xl font-extrabold numberFonts">1</p>
                    <p className="text-xs uppercase text-gray-300">Place</p>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-lg font-bold uppercase tracking-wide">
                      Giannis Antetokounmpo
                    </h3>
                    <p className="text-xs text-gray-300 uppercase">
                      Power Forward | Milwaukee Bucks
                    </p>
                  </div>
                </div>
                <div className="h-2 bg-amber-300"></div>
                <div className=" to-black p-6 border border-white/10">
                  <div className="grid grid-cols-3 text-center text-white divide-x divide-amber-300">
                    <div className="pb-6">
                      <p className="text-2xl font-extrabold numberFonts">27</p>
                      <p className="text-xs uppercase text-amber-100/70">
                        Minutes
                      </p>
                    </div>

                    <div className="pb-6">
                      <p className="text-2xl font-extrabold numberFonts">21</p>
                      <p className="text-xs uppercase text-amber-100/70">
                        Points
                      </p>
                    </div>

                    <div className="pb-6 border-r-0!">
                      <p className="text-2xl font-extrabold numberFonts">52%</p>
                      <p className="text-xs uppercase text-amber-100/70">FG%</p>
                    </div>

                    <div className="pt-6">
                      <p className="text-2xl font-extrabold numberFonts">13</p>
                      <p className="text-xs uppercase text-amber-100/70">
                        Rebounds
                      </p>
                    </div>

                    <div className="pt-6">
                      <p className="text-2xl font-extrabold numberFonts">3.7</p>
                      <p className="text-xs uppercase text-amber-100/70">
                        Assists
                      </p>
                    </div>

                    <div className="pt-6">
                      <p className="text-2xl font-extrabold numberFonts">0.7</p>
                      <p className="text-xs uppercase text-amber-100/70">
                        Steals
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-10 pb-19 px-4 sm:px-6 lg:px-8  ">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex justify-between items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
                Tabla de <span className="text-amber-300">Posiciones</span>
              </h2>
              <div className="w-24 h-1 bg-amber-300 mt-4 rounded"></div>
            </div>
            <button className="text-amber-300 hover:text-white transition-colors font-bold uppercase tracking-widest text-sm border-b border-amber-300 pb-1 whitespace-nowrap ml-4 flex items-center gap-2">
              <span className="hidden md:inline">Ver Tabla Completa</span>
              <span className="md:hidden bg-amber-300 text-black p-1 rounded-full">
                <FaPlus size={12} />
              </span>
            </button>
          </div>

          <div className="overflow-x-auto bg-[#1a1a1a] border border-white/5 rounded-2xl shadow-xl">
            <table className="w-full text-left border-collapse min-w-150">
              <thead className="bg-white/5">
                <tr>
                  {["Pos", "Equipo", "PJ", "PG", "PP", "PTS"].map((h) => (
                    <th
                      key={h}
                      className="p-3 md:p-5 text-amber-300 uppercase text-xs md:text-sm tracking-widest text-center font-bold"
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
                    <td className="p-3 md:p-5 text-center font-bold text-base md:text-lg numberFonts">
                      {pos}
                    </td>

                    <td className="p-3 md:p-5">
                      <div className="flex items-center justify-center gap-3">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Escudo_del_Club_Estaci%C3%B3n_Experimental_Tucum%C3%A1n.svg"
                          className="w-6 h-6 md:w-8 md:h-8 object-contain"
                        />
                        <span className="uppercase font-bold text-xs md:text-sm whitespace-nowrap">
                          Equipo {pos}
                        </span>
                      </div>
                    </td>

                    <td className="p-3 md:p-5 text-center text-sm md:text-base numberFonts">
                      10
                    </td>
                    <td className="p-3 md:p-5 text-center text-green-400 text-sm md:text-base numberFonts">
                      8
                    </td>
                    <td className="p-3 md:p-5 text-center text-red-400 text-sm md:text-base numberFonts">
                      2
                    </td>

                    <td className="p-3 md:p-5 text-center font-bold text-amber-300 text-base md:text-lg numberFonts">
                      18
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase">
            <span className="text-amber-300">Únete</span> a la Acción
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            No te quedes afuera. Registra tu equipo para la próxima temporada o
            asegura tus entradas para ver a las futuras estrellas del básquet.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <button className="bg-amber-400 text-black font-bold uppercase tracking-widest py-3 px-8 rounded-lg hover:bg-amber-300 transition-all duration-300 shadow-lg shadow-amber-400/20 hover:scale-105">
              Registrar Equipo
            </button>
            <button className="border-2 border-amber-400 text-white font-bold uppercase tracking-widest py-3 px-8 rounded-lg hover:bg-amber-400 hover:text-black transition-all duration-300 hover:scale-105">
              Comprar Entradas
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 border-y border-white/5 bg-[#0b0b0b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 text-xs font-bold uppercase tracking-[0.3em] mb-8">
            Main Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
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

      <Footer />
    </div>
  );
};

export default Inicio;
