import React from 'react';

const EstadisticasEquipos = () => {
  // Datos simulados para el ejemplo. En el futuro vendrán de tus props o API.
  const stats = [
    { label: "Tiros de Campo", local: "45%", visitor: "38%", localWidth: "45%", visitorWidth: "38%" },
    { label: "Triples", local: "32%", visitor: "28%", localWidth: "32%", visitorWidth: "28%" },
    { label: "Rebotes", local: "42", visitor: "35", localWidth: "55%", visitorWidth: "45%" },
    { label: "Asistencias", local: "18", visitor: "12", localWidth: "60%", visitorWidth: "40%" },
    { label: "Pérdidas", local: "10", visitor: "14", localWidth: "40%", visitorWidth: "56%" },
    { label: "Faltas", local: "15", visitor: "18", localWidth: "45%", visitorWidth: "55%" },
  ];

  return (
    <div className=" bg-white/3 backdrop-blur-3xl border border-white/10 bg rounded-md p-5 mb-10">
      <h3 className="text-3xl mb-6 border-l-4 border-yellow-400 pl-3">Estadísticas de Equipo</h3>
      <div className="flex flex-col gap-6">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-2 text-sm md:text-base uppercase font-bold text-gray-300">
              <span className="w-12 text-left numberFonts">{stat.local}</span>
              <span className="text-gray-500 tracking-widest text-xs md:text-sm numberFonts">{stat.label}</span>
              <span className="w-12 text-right numberFonts">{stat.visitor}</span>
            </div>
            <div className="grid grid-cols-2 gap-1 h-2">
               <div className="flex justify-end bg-[#222222] rounded-l-full overflow-hidden">
                  <div className="bg-yellow-400 h-full" style={{ width: stat.localWidth }}></div>
               </div>
               <div className="flex justify-start bg-[#222222] rounded-r-full overflow-hidden">
                  <div className="bg-gray-500 h-full" style={{ width: stat.visitorWidth }}></div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EstadisticasEquipos;