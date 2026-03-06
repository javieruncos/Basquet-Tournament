import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaUsers, FaTrophy, FaHistory, FaInfoCircle } from "react-icons/fa";
import ClubesContext from "../../context/ClubesContext";
import TournamentContext from "../../context/TournamentContext";
import Sponsor from "../../components/common/Sponsor";
import { jugadoresClub } from "../../services/ClubesService";
import useDetalleClub from "../../hooks/useDetalleClub";

const DetalleClub = () => {
   const {club,jugadores,id} =useDetalleClub();
   const {fixture} = useContext(TournamentContext);
  
  if (!club) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0b0b0b] text-white">
        <p className="animate-pulse uppercase tracking-widest">Cargando información del club...</p>
      </div>
    );
  }

  const partidosClub = fixture.filter(
    (p) => p.local._id === id || p.visitante._id === id
  );

  return (
    <div className="p-10 px-3 lg:px-10 pt-24 md:px-5 md:pt-15 lg:pt-25 numberFonts min-h-screen bg-[#0b0b0b] text-white">
      <div className="py-5 w-full flex gap-4 text-gray-400 text-sm uppercase tracking-widest md:mt-4 lg:mt-0 justify-center md:justify-start">
        <span>Clubes</span>
        <span>/</span>
        <span className="text-amber-300">Perfil del Club</span>
      </div>

      <div className="mb-10 flex flex-col md:flex-row items-center gap-8 bg-[#171717] border border-white/10 rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-amber-300"></div>
        
        <div className="w-40 h-40 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 p-6">
          <img
            src={club.logo?.url || "https://via.placeholder.com/150"}
            alt={club.name}
            className=" h-33 object-cover"
          />
        </div>

        <div className="text-center md:text-left flex-1">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">
            {club.name}
          </h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4">
            <div className="flex items-center gap-2 text-gray-400">
              <FaMapMarkerAlt className="text-amber-300" />
              <span className="uppercase text-sm font-bold tracking-wider">{club?.city || "Sede Central"}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <FaUsers className="text-amber-300" />
              <span className="uppercase text-sm font-bold tracking-wider">{club.categoria || "Primera"}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        <div className="lg:col-span-1 flex flex-col">
          <div className="bg-[#171717] border border-white/10 rounded-xl p-6 h-full">
            <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
              <FaInfoCircle className="text-amber-300" />
              <h4 className="text-xl font-bold uppercase tracking-tight">Información General</h4>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">Presidente</p>
                <p className="font-bold text-lg">{club.presidente || "No asignado"}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">Fundación</p>
                <p className="font-bold text-lg">{club.fundacion || "----"}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">Colores</p>
                <div className="flex gap-2 mt-1">
                  <div className="w-6 h-6 rounded-full bg-amber-300 border border-white/20"></div>
                  <div className="w-6 h-6 rounded-full bg-white border border-white/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-[#171717] border border-white/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
              <FaHistory className="text-amber-300" />
              <h4 className="text-xl font-bold uppercase tracking-tight">Calendario y Resultados</h4>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-gray-500 text-xs uppercase tracking-widest border-b border-white/5">
                    <th className="py-4 px-2">Fecha</th>
                    <th className="py-4 px-2">Rival</th>
                    <th className="py-4 px-2">Condición</th>
                    <th className="py-4 px-2 text-center">Resultado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {partidosClub.length > 0 ? (
                    partidosClub.map((p, index) => {
                      const esLocal = p.local._id === id;
                      const rival = esLocal ? p.visitante : p.local;
                      return (
                        <tr key={index} className="hover:bg-white/5 transition-colors">
                          <td className="py-4 px-2 text-sm text-gray-400">
                            {new Date(p.fecha).toLocaleDateString("es-AR")}
                          </td>
                          <td className="py-4 px-2 font-bold">{rival.name}</td>
                          <td className="py-4 px-2 text-xs uppercase text-gray-500">{esLocal ? "Local" : "Visitante"}</td>
                          <td className="py-4 px-2 text-center font-black text-amber-300">
                            {p.resultado?.total?.local ?? 0} - {p.resultado?.total?.visitante ?? 0}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="4" className="py-10 text-center text-gray-500 italic">No hay partidos programados</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-[#171717] border border-white/10 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
          <FaUsers className="text-amber-300" />
          <h4 className="text-xl font-bold uppercase tracking-tight">Plantel de Jugadores</h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {jugadores?.length > 0 ? (
            jugadores?.map((jugador, index) => (
              <div key={index} className="bg-white/5 p-4 rounded-lg border border-white/5 flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-300/20 rounded-full flex items-center justify-center text-amber-300 font-black">
                  {jugador.numero || "00"}
                </div>
                <div>
                  <p className="font-bold uppercase text-sm">{jugador.nombre}</p>
                  <p className="text-xs text-gray-500 uppercase">{jugador.posicion || "Jugador"}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-10 text-center border border-dashed border-white/10 rounded-lg">
              <p className="text-gray-500 italic">No hay jugadores registrados en este club</p>
              <div className="mt-4 flex justify-center gap-2 opacity-20">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 bg-white rounded-full"></div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-10">
        <Sponsor />
      </div>
    </div>
  );
};

export default DetalleClub;