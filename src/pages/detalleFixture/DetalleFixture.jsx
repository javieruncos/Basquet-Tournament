import React, { use, useContext, useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaUserTie,
  FaBasketballBall,
  FaHistory,
} from "react-icons/fa";
import { obtenerFixtureID } from "../../services/FixtureService";
import { useParams } from "react-router-dom";
import TournamentContext from "../../context/TournamentContext";

const DetalleFixture = () => {
  const { fixture } = useContext(TournamentContext);

  const { id } = useParams();
  const [partido, setpartido] = useState({});

  useEffect(() => {
    obtenerFixtureID(id).then((resultado) => {
      console.log(resultado);
      setpartido(resultado);
    });
  }, [id]);

  // Datos simulados basados en la instrucción
  // const partido = {
  //     arbitro1: "Carlos perez",
  //     arbitro2: "Juan Juniors",
  //     arbitro3: "Sebastian luna",
  //     estadio: "Las talitas",
  //     estado: "Programado",
  //     fase: "Regular",
  //     fecha: "2026-02-26",
  //     hora: "21:00",
  //     jornada: 2,
  //     local: { name: 'Talleres', logo: { url: 'https://via.placeholder.com/80' } },
  //     visitante: { name: 'Est. Experimental', logo: { url: 'https://via.placeholder.com/80' } },
  //     resultado: { local: 0, visitante: 0 }
  // };

  const historial = fixture.filter((item) => {
    return (
      (item.local._id === partido?.local?._id &&
        item.visitante._id === partido?.visitante?._id) ||
      (item.local._id === partido?.visitante?._id &&
        item.visitante._id === partido?.local?._id)
    );
  });

  return (
    <div className="p-10 px-3 lg:px-10 lg:pt-25 numberFonts min-h-screen bg-[#0b0b0b] text-white">
      <div className="py-5 w-full flex gap-4 text-gray-400 text-sm uppercase tracking-widest">
        <span>Fixture</span>
        <span>/</span>
        <span className="text-amber-300">Detalle del Partido</span>
      </div>

      <div className="mb-10">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">
          Previa del <span className="text-amber-300">Encuentro</span>
        </h2>
        <p className="text-gray-400 mt-2 uppercase tracking-[0.3em] text-sm">
          {partido?.fase} — Jornada {partido?.jornada}
        </p>
      </div>

      <div className="bg-[#171717] border border-white/10 rounded-2xl p-8 md:p-12 mb-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-amber-300"></div>

        <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto gap-10">
          <div className="flex flex-col items-center gap-4 w-full md:w-1/3">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-full flex items-center justify-center border border-white/10 p-4">
              <img
                src={partido?.local?.logo?.url}
                alt={partido?.local?.name}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-black uppercase text-center">
              {partido?.local?.name}
            </h3>
          </div>

          <div className="flex flex-col items-center w-full md:w-1/3">
            <div className="flex items-center gap-6">
              <span className="text-6xl md:text-8xl font-black text-white opacity-20">
                0
              </span>
              <span className="text-4xl font-black text-amber-300 italic">
                VS
              </span>
              <span className="text-6xl md:text-8xl font-black text-white opacity-20">
                0
              </span>
            </div>
            <div className="mt-4 px-4 py-1 bg-amber-300/10 border border-amber-300/20 rounded-full">
              <span className="text-amber-300 text-xs font-bold uppercase tracking-widest">
                {partido?.estado}
              </span>
            </div>
          </div>

          {/* Visitante */}
          <div className="flex flex-col items-center gap-4 w-full md:w-1/3">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-full flex items-center justify-center border border-white/10 p-4">
              <img
                src={partido?.visitante?.logo?.url}
                alt={partido?.visitante?.name}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-black uppercase text-center">
              {partido?.visitante?.name}
            </h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#171717] border border-white/10 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
            <FaBasketballBall className="text-amber-300" />
            <h4 className="text-xl font-bold uppercase tracking-tight">
              Información del Estadio
            </h4>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-amber-300">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">
                  Sede
                </p>
                <p className="font-bold">{partido?.estadio}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-amber-300">
                <FaCalendarAlt />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">
                  Fecha
                </p>
                <p className="font-bold">
                  {new Date(partido?.fecha).toLocaleDateString("es-AR", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-amber-300">
                <FaClock />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">
                  Hora de Inicio
                </p>
                <p className="font-bold">{partido?.hora} HS</p>
              </div>
            </div>
          </div>
        </div>

        {/* Referees Box */}
        <div className="bg-[#171717] border border-white/10 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
            <FaUserTie className="text-amber-300" />
            <h4 className="text-xl font-bold uppercase tracking-tight">
              Cuerpo Arbitral
            </h4>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-gray-500 text-xs uppercase font-bold">
                Primer Árbitro
              </span>
              <span className="font-bold">{partido?.arbitro1}</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-gray-500 text-xs uppercase font-bold">
                Segundo Árbitro
              </span>
              <span className="font-bold">{partido?.arbitro2}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-xs uppercase font-bold">
                Tercer Árbitro
              </span>
              <span className="font-bold">{partido?.arbitro3}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Historial de Enfrentamientos */}
      <div className="mt-10 bg-[#171717] border border-white/10 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
          <FaHistory className="text-amber-300" />
          <h4 className="text-xl font-bold uppercase tracking-tight">
            Enfrentamientos Previos
          </h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-500 text-xs uppercase tracking-widest border-b border-white/5">
                <th className="py-4 px-2">Fecha</th>
                <th className="py-4 px-2">Partido</th>
                <th className="py-4 px-2 text-center">Resultado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {historial.map((h, index) => (
                <tr key={index} className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-2 text-sm text-gray-400">
                    {new Date(h.fecha).toLocaleDateString("es-AR")}
                  </td>
                  <td className="py-4 px-2 font-bold text-sm md:text-base">
                    {h.local.name} vs {h.visitante.name}
                  </td>
                  <td className="py-4 px-2 text-center font-black text-amber-300">
                    {h.resultado.total.local} - {h.resultado.total.visitante}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetalleFixture;
