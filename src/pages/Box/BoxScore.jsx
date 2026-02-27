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

  const startersLocal = [
    "J. Pérez",
    "M. Rodríguez",
    "A. García",
    "L. Martínez",
    "C. Sánchez",
  ];
  const startersVisit = [
    "R. López",
    "S. Ortiz",
    "F. Blanco",
    "G. Ruiz",
    "H. Sosa",
  ];
  const quarters = [
    { period: "1C", local: 22, visit: 18 },
    { period: "2C", local: 20, visit: 15 },
    { period: "3C", local: 25, visit: 20 },
    { period: "4C", local: 18, visit: 19 },
  ];

  const statsLocal = [
    { name: "J. Pérez", pts: 22, reb: 5, ast: 8, min: "32:10" },
    { name: "M. Rodríguez", pts: 15, reb: 10, ast: 2, min: "28:45" },
    { name: "A. García", pts: 12, reb: 3, ast: 4, min: "25:20" },
    { name: "L. Martínez", pts: 18, reb: 2, ast: 1, min: "30:15" },
    { name: "C. Sánchez", pts: 10, reb: 12, ast: 0, min: "22:30" },
    { name: "B. Diaz", pts: 8, reb: 4, ast: 2, min: "15:00" },
  ];

  const StatTable = ({ title, players }) => (
    <div className="bg-[#171717] border border-white/10 rounded-md overflow-hidden ">
      <div className="bg-[#222222] p-4 border-b border-white/10">
        <h3 className="text-amber-300 font-bold uppercase text-sm tracking-widest">
          {title}
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="text-gray-500 text-xs uppercase">
            <tr>
              <th className="p-4">Jugador</th>
              <th className="p-4 text-center">PTS</th>
              <th className="p-4 text-center">REB</th>
              <th className="p-4 text-center">AST</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {players.map((p, i) => (
              <tr key={i} className="border-t border-white/5 hover:bg-white/5">
                <td className="p-4 font-medium">{p.name}</td>
                <td className="p-4 text-center font-bold text-amber-300">
                  {p.pts}
                </td>
                <td className="p-4 text-center">{p.reb}</td>
                <td className="p-4 text-center">{p.ast}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

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
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Escudo_del_Club_Estaci%C3%B3n_Experimental_Tucum%C3%A1n.svg"
              className="h-16 w-16 lg:h-24 lg:w-24"
              alt="local"
            />
            <span className="text-white font-bold text-center">
              {partido?.local?.name}
            </span>
          </div>

          <div className="flex flex-col items-center">
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

          <div className="flex flex-col items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Escudo_del_Club_Estaci%C3%B3n_Experimental_Tucum%C3%A1n.svg"
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
            {titularesLocal?.map((player, i) => (
              <li
                key={i}
                className="flex items-center gap-3 border-b border-white/5 pb-2"
              >
                <span className="text-gray-500 text-xs">#{i + 1}</span>
                {
                  jugadoresLocal?.find((j) => j._id === player.jugadorId)
                    ?.nombre
                }
              </li>
            ))}
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
        </div>

        <div className="bg-[#171717] p-6 rounded-md border border-white/10">
          <h3 className="text-amber-300 font-bold mb-4 uppercase text-sm tracking-widest">
            Titulares Visitante
          </h3>
          <ul className="text-white space-y-3">
            {titularesVisitante?.map((player, i) => (
              <li
                key={i}
                className="flex items-center gap-3 border-b border-white/5 pb-2"
              >
                <span className="text-gray-500 text-xs">#{i + 7}</span>
                {
                  jugadoresVisitante?.find((j) => j._id === player.jugadorId)
                    ?.nombre
                }
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <div className="mt-10 flex flex-col gap-10">
                <StatTable title="Estadísticas Est. Experimental" players={statsLocal} />
                <StatTable title="Estadísticas Talleres de Tafí" players={statsLocal} />
            </div> */}
    </div>
  );
};

export default BoxScore;
