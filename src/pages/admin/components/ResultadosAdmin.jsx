import React from 'react';
import { FaTrophy, FaEdit, FaTrash, FaPlus, FaChartBar } from 'react-icons/fa';

const ResultadosAdmin = () => {
    const resultados = [
        { id: 1, local: "CAEE", visitante: "TTF", scoreLocal: 85, scoreVisitante: 78, fecha: "20/05/2026", estado: "Finalizado" },
        { id: 2, local: "Club A", visitante: "Club B", scoreLocal: 92, scoreVisitante: 95, fecha: "19/05/2026", estado: "Finalizado" },
        { id: 3, local: "Independiente", visitante: "Talleres", scoreLocal: 0, scoreVisitante: 0, fecha: "22/05/2026", estado: "Pendiente" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                        Gestión de <span className="text-amber-300">Resultados</span>
                    </h2>
                    <p className="text-gray-400 text-xs md:text-sm">Carga marcadores y gestiona las estadísticas de los partidos</p>
                </div>
                <button className="flex items-center gap-2 bg-amber-300 text-black px-4 py-2 rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-amber-400 transition-colors">
                    <FaPlus /> Cargar Resultado
                </button>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-150">
                    <thead>
                        <tr className="bg-white/5 text-amber-300 uppercase text-xs tracking-widest font-bold">
                            <th className="p-4">Fecha</th>
                            <th className="p-4">Partido</th>
                            <th className="p-4 text-center">Marcador</th>
                            <th className="p-4">Estado</th>
                            <th className="p-4 text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {resultados.map((res) => (
                            <tr key={res.id} className="hover:bg-white/5 transition-colors">
                                <td className="p-4 text-sm text-gray-400">{res.fecha}</td>
                                <td className="p-4">
                                    <div className="flex items-center gap-2 font-bold text-sm">
                                        <span>{res.local}</span>
                                        <span className="text-amber-300 text-[10px]">VS</span>
                                        <span>{res.visitante}</span>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="flex justify-center items-center gap-3 font-mono font-black text-lg">
                                        <span className={res.scoreLocal > res.scoreVisitante ? "text-green-400" : ""}>{res.scoreLocal}</span>
                                        <span className="text-gray-600">-</span>
                                        <span className={res.scoreVisitante > res.scoreLocal ? "text-green-400" : ""}>{res.scoreVisitante}</span>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <span className={`text-[10px] uppercase font-black px-2 py-1 rounded-full ${
                                        res.estado === 'Finalizado' 
                                        ? 'bg-blue-500/20 text-blue-400' 
                                        : 'bg-gray-500/20 text-gray-400'
                                    }`}>
                                        {res.estado}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <div className="flex justify-center gap-2">
                                        <button className="p-2 hover:bg-amber-500/20 hover:text-amber-400 rounded-lg transition-colors" title="Editar Marcador">
                                            <FaEdit size={14} />
                                        </button>
                                        <button className="p-2 hover:bg-green-500/20 hover:text-green-400 rounded-lg transition-colors" title="Cargar Boxscore">
                                            <FaChartBar size={14} />
                                        </button>
                                        <button className="p-2 hover:bg-red-500/20 hover:text-red-400 rounded-lg transition-colors" title="Eliminar">
                                            <FaTrash size={14} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {resultados.length === 0 && (
                    <div className="p-10 text-center text-gray-500">
                        No hay resultados registrados.
                    </div>
                )}
            </div>

            <div className="p-4 bg-amber-300/10 border border-amber-300/20 rounded-xl flex items-center gap-4">
                <FaTrophy className="text-amber-300 text-2xl" />
                <p className="text-xs text-amber-100/70 uppercase tracking-wider font-bold">Al finalizar un partido, recuerda cargar las estadísticas individuales para actualizar los líderes de la temporada.</p>
            </div>
        </div>
    );
};

export default ResultadosAdmin;