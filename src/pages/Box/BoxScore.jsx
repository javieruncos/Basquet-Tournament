import React, { use, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerFixtureID } from "../../services/FixtureService";
import ClubesContext from "../../context/ClubesContext";
import { jugadoresClub } from "../../services/ClubesService";

const BoxScore = () => {
  const [partido, setpartido] = useState({});
  const [jugadoresLocal, setJugadoresLocal] = useState([]);
  const [jugadoresVisitante, setJugadoresVisitante] = useState([]);
  const { id } = useParams();
  const { clubes } = useContext(ClubesContext);

  useEffect(() => {
    obtenerFixtureID(id).then((data) => {
      console.log(data);
      setpartido(data);
    });
  }, []);

  useEffect(() => {
    if (partido?.local?._id) {
      jugadoresClub(partido.local._id).then((data) => setJugadoresLocal(data));
    }
    if (partido?.visitante?._id) {
      jugadoresClub(partido.visitante._id).then((data) =>
        setJugadoresVisitante(data),
      );
    }
  }, [partido?.local?._id, partido?.visitante?._id]);



  const titularesLocal = partido?.estadisticasJugadores?.filter(
    (j) => j.clubId === partido?.local?._id && j.titular,
  );

  const titularesVisitante = partido?.estadisticasJugadores?.filter(
    (j) => j.clubId === partido?.visitante?._id && j.titular,);

  return (
    <div className="p-10 px-3 lg:px-10 numberFonts mt-10">
      <div className="py-5 w-full flex gap-1 text-amber-300 text-sm lg:gap-4">
        <span>{partido?.fecha}</span>
        <span>/</span>
        <span>{partido?.hora} hs.</span>
        <span>/</span>
        <span>Fase</span>
        <span>/</span>
        <span>{partido?.fase}</span>
      </div>
      <div className="bg-[#171717] border border-white/10 rounded-md p-6 mb-10">
        <div className="grid grid-cols-3 items-center max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-2 justify-self-start">
            <img
              src={
                clubes?.find((c) => c._id === partido?.local?._id)?.logo.url }
              className="h-16 w-16 lg:h-24 lg:w-24"
              alt="local"
            />
            <span className="text-white font-bold text-center">
              {partido?.local?.name}
            </span>
          </div>

          <div className="flex flex-col items-center justify-self-center">
            <div className="flex items-center gap-6">
              <span className="text-5xl lg:text-7xl font-bold text-white">
                {partido?.resultado?.total.local}
              </span>
              <span className="text-2xl text-gray-500">-</span>
              <span className="text-5xl lg:text-7xl font-bold text-white">
                {partido?.resultado?.total.visitante}
              </span>
            </div>
            <span className="text-amber-300 mt-2 uppercase tracking-widest text-sm">
              Finalizado
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 justify-self-end">
           <img
              src={
                clubes?.find((c) => c._id === partido?.visitante?._id)?.logo.url }
              className="h-16 w-16 lg:h-24 lg:w-24"
              alt="visitante"
            />
            <span className="text-white font-bold text-center">
              {partido?.visitante?.name}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-[#171717] p-6 rounded-md border border-white/10">
          <h3 className="text-amber-300 font-bold mb-4 uppercase text-sm tracking-widest">
            Titulares Local
          </h3>
          <ul className="text-white space-y-3">
            {titularesLocal?.length === 0 ? (
              <p className="text-gray-500 text-sm italic">No hay titulares designados</p>
            ) : (
              titularesLocal?.map((player, i) => {
                const datosJugador = jugadoresLocal?.find((j) => j._id === player.jugadorId);
                return (
                  <li
                    key={player.jugadorId || i}
                    className="flex items-center gap-3 border-b border-white/5 pb-2"
                  >
                    <span className="text-gray-500 text-xs">#{datosJugador?.nro || i + 1}</span>
                    {datosJugador?.nombre || "Cargando..."}
                  </li>
                );
              })
            )}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-[#171717] p-6 rounded-md border border-white/10">
            <h3 className="text-amber-300 font-bold mb-4 uppercase text-sm tracking-widest text-center">
              Resultado por Cuartos
            </h3>
            <table className="w-full text-white">
              <thead>
                <tr className="text-gray-500 text-xs">
                  <th className="pb-2">PER</th>
                  <th className="pb-2">LOC</th>
                  <th className="pb-2">VIS</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {partido?.resultado?.cuartos?.map((q, i) => (
                  <tr key={i} className="border-t border-white/5">
                    <td className="py-2 font-bold text-gray-400">{q.period}C</td>
                    <td className="py-2">{q.local}</td>
                    
                    <td className="py-2">{q.visitante}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#171717] p-6 rounded-md border border-white/10 text-center">
            <h3 className="text-amber-300 font-bold mb-2 uppercase text-sm tracking-widest">
              Sede del Encuentro
            </h3>
            <p className="text-white">Estadio "El Coloso de las Flores"</p>
            <p className="text-gray-500 text-sm mt-1">Las Talitas, Tucumán</p>
          </div>

          <div className="bg-[#171717] p-6 rounded-md border border-white/10 text-center">
            <h3 className="text-amber-300 font-bold mb-4 uppercase text-sm tracking-widest">
              Árbitros
            </h3>
            <div className="flex flex-col gap-2">
              {partido?.arbitros?.length > 0 ? (
                partido.arbitros.map((arbitro, index) => (
                  <p key={index} className="text-white text-sm">
                    {arbitro}
                  </p>
                ))
              ) : (
                <p className="text-gray-500 text-xs italic">No asignados</p>
              )}
            </div>
          </div>
        </div>

        <div className="bg-[#171717] p-6 rounded-md border border-white/10">
          <h3 className="text-amber-300 font-bold mb-4 uppercase text-sm tracking-widest">
            Titulares Visitante
          </h3>
          <ul className="text-white space-y-3">
            {titularesVisitante?.length === 0 ? (
              <p className="text-gray-500 text-sm italic">No hay titulares designados</p>
            ) : (
              titularesVisitante?.map((player, i) => {
                const datosJugador = jugadoresVisitante?.find((j) => j._id === player.jugadorId);
                return (
                  <li
                    key={player.jugadorId || i}
                    className="flex items-center gap-3 border-b border-white/5 pb-2"
                  >
                    <span className="text-gray-500 text-xs">#{datosJugador?.nro || i + 1}</span>
                    {datosJugador?.nombre || "Cargando..."}
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BoxScore;
