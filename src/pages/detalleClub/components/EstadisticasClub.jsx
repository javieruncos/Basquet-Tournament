import React from "react";

const EstadisticasClub = () => {
  return (
    <>
      <div className="mt-10 md:mt-15">
        <h3 className="text-3xl md:text-5xl">Resultados Recientes</h3>
      </div>
      <div className=" h-auto w-full grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-3 h-auto numberFonts">
          <div className="h-auto w-full mt-5 bg-white/5 backdrop-blur rounded-md overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-150 md:min-w-full">
              <thead className="bg-[#222222] text-gray-400">
                <tr>
                  <th className="py-3 px-4 md:px-5 font-medium">Fecha</th>
                  <th className="py-3 px-4 md:px-5 font-medium">Rival</th>
                  <th className="py-3 px-4 md:px-5 font-medium">Puntos</th>
                  <th className="py-3 px-4 md:px-5 font-medium">Resultado</th>
                </tr>
              </thead>
              <tbody className="text-white">
                <tr className="border-b border-white/20">
                  <td className="py-4 px-4 md:px-5 text-amber-300">10/10/2026</td>
                  <td className="py-4 px-4 md:px-5 text-amber-300">Est. Experimental</td>
                  <td className="py-4 px-4 md:px-5 text-amber-300">80 - 75</td>
                  <td className="py-4 px-4 md:px-5 text-amber-300">Victoria</td>
                </tr>
                <tr className="border-b border-white/20">
                  <td className="py-4 px-4 md:px-5">17/10/2026</td>
                  <td className="py-4 px-4 md:px-5">Avellaneda Central</td>
                  <td className="py-4 px-4 md:px-5">75 - 60</td>
                  <td className="py-4 px-4 md:px-5">Derrota</td>
                </tr>
                <tr className="border-b border-white/20">
                  <td className="py-4 px-4 md:px-5">24/10/2026</td>
                  <td className="py-4 px-4 md:px-5">Huracan BB</td>
                  <td className="py-4 px-4 md:px-5">92 - 90</td>
                  <td className="py-4 px-4 md:px-5">Victoria</td>
                </tr>
                <tr className="border-b border-white/20">
                  <td className="py-4 px-4 md:px-5">31/10/2026</td>
                  <td className="py-4 px-4 md:px-5">Belgrano</td>
                  <td className="py-4 px-4 md:px-5">88 - 58</td>
                  <td className="py-4 px-4 md:px-5">Victoria</td>
                </tr>
                <tr className="border-b border-white/20">
                  <td className="py-4 px-4 md:px-5">07/11/2026</td>
                  <td className="py-4 px-4 md:px-5">Talleres</td>
                  <td className="py-4 px-4 md:px-5">70 - 50</td>
                  <td className="py-4 px-4 md:px-5">Derrota</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-1  h-auto">
          <div className="h-auto bg-white/5 backdrop-blur-3xl mt-5  rounded-md  py-3">
            <div className="px-4  flex items-center justify-between">
              <p className="text-xl numberFonts">Estadisticas</p>
            </div>
            <div className="h-auto w-full  mt-3 border-t  border-white/20 numberFonts p-2">
              <div className="py-5 px-5 border-b border-white/20 flex items-center justify-between">
                <span className="text-amber-300">Jugados</span>
                <span>3</span>
              </div>
              <div className="py-5 px-5 border-b border-white/20 flex items-center justify-between">
                <span className="text-amber-300">Derrotas</span>
                <span>1</span>
              </div>
              <div className="py-5 px-5 border-b border-white/20 flex items-center justify-between">
                <span className="text-amber-300">Promedio pts</span>
                <span>83</span>
              </div>
              <div className="py-5 px-5 border-b border-white/20 flex items-center justify-between">
                <span className="text-amber-300">Maxima puntuacion</span>
                <span>112</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EstadisticasClub;
