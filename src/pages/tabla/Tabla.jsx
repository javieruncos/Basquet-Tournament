import React, { useEffect ,useState} from "react";
import { getTabla } from "../../services/tablaService";

const Tabla = () => {
  const [tabla, setTabla] = useState([]);

  useEffect(() => {
    getTabla().then((res) => {
      setTabla(res);
    });
  }, []);

  return (
    <>
    
    <div className="min-h-screen bg-[#0b0b0b] text-white pt-34 px-10">
      <div className="relative py-0">
        <div className="max-w-7xl mx-auto  ">
          <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
            Clasificación <span className="text-amber-300">General</span>
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl uppercase tracking-widest text-sm font-bold">
            Temporada Regular 2026 • Torneo Regional Amateur
          </p>
        </div>
      </div>
      <div className="overflow-x-auto bg-white/5 backdrop-blur-3xl border border-white/10 rounded-md shadow-xl mt-10">
        <table className="w-full text-left border-collapse min-w-150">
          <thead className="bg-white/5">
            <tr>
              {["Pos", "Equipo", "PJ", "PG", "PP", "PF", "PC", "DF", "PTS"].map(
                (h) => (
                  <th
                    key={h}
                    className={`p-3 md:p-5 text-amber-300 uppercase text-xs md:text-sm tracking-widest font-bold numberFonts ${h === "Equipo" ? "text-left pl-8" : "text-center"}`}
                  >
                    {h}
                  </th>
                ),
              )}
            </tr>
          </thead>

          <tbody>
            {tabla?.map((pos, index) => (
              <tr
                key={pos._id}
                className="border-b border-white/5 hover:bg-white/10 transition"
              >
                <td className="p-3 md:p-5 text-center font-bold text-base md:text-lg numberFonts">
                  {index + 1}
                </td>

                <td className="p-3 md:p-5">
                  <div className="flex items-center justify-start pl-8 gap-3">
                    <img
                      src={pos.club.logo.url}
                      className="w-6 h-6 md:w-8 md:h-8 object-contain"
                    />
                    <span className="uppercase font-bold text-xs md:text-sm whitespace-nowrap">
                      {pos.club.name}
                    </span>
                  </div>
                </td>

                <td className="p-3 md:p-5 text-center text-sm md:text-base numberFonts">
                  {pos.jugados}
                </td>
                <td className="p-3 md:p-5 text-center text-green-400 text-sm md:text-base numberFonts">
                  {pos.ganados}
                </td>
                <td className="p-3 md:p-5 text-center text-red-400 text-sm md:text-base numberFonts">
                  {pos.perdidos}
                </td>
                <td className="p-3 md:p-5 text-center text-green-400 text-sm md:text-base numberFonts">
                  {pos.puntosFavor}
                </td>

                <td className="p-3 md:p-5 text-center font-bold text-amber-300 text-base md:text-lg numberFonts">
                  {pos.puntosContra}
                </td>

                <td className="p-3 md:p-5 text-center font-bold text-amber-300 text-base md:text-lg numberFonts">
                  {pos.diferencia}
                </td>

                <td className="p-3 md:p-5 text-center font-bold text-amber-300 text-base md:text-lg numberFonts">
                  {pos.puntos}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};
export default Tabla;
