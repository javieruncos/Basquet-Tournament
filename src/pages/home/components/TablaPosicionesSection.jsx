import React from 'react';

const TablaPosicionesSection = () => {
    return (
     <section className="pt-20 pb-19 px-5 sm:px-6 lg:px-8  ">
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
            </button>
          </div>

          <div className="overflow-x-auto bg-white/3 backdrop-blur-3xl border border-white/10 rounded-md shadow-xl">
            <table className="w-full text-left border-collapse min-w-150">
              <thead className="bg-white/5">
                <tr>
                  {["Pos", "Equipo", "PJ", "PG", "PP", "PTS"].map((h) => (
                    <th
                      key={h}
                      className="p-3 md:p-5 text-amber-300 uppercase text-xs md:text-sm tracking-widest text-center font-bold numberFonts"
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
    );
};

export default TablaPosicionesSection;