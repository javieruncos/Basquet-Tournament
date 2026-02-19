import React from 'react';
import { FaCalendarPlus, FaEdit, FaTrash, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const FixtureAdmin = () => {
    const partidos = [
        { id: 1, local: "CAEE", visitante: "TTF", fecha: "24/06/2026", hora: "21:00", estadio: "Estadio Central", jornada: "Fecha 1" },
        { id: 2, local: "Club A", visitante: "Club B", fecha: "25/06/2026", hora: "20:30", estadio: "Microestadio", jornada: "Fecha 1" },
        { id: 3, local: "Independiente", visitante: "Talleres", fecha: "26/06/2026", hora: "22:00", estadio: "Estadio Norte", jornada: "Fecha 2" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                        Gestión de <span className="text-amber-300">Fixture</span>
                    </h2>
                    <p className="text-gray-400 text-xs md:text-sm">Organiza los próximos encuentros y jornadas</p>
                </div>
                <button className="flex items-center gap-2 bg-amber-300 text-black px-4 py-2 rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-amber-400 transition-colors">
                    <FaCalendarPlus /> Programar Partido
                </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-150">
                        <thead>
                            <tr className="bg-white/5 text-amber-300 uppercase text-xs tracking-widest font-bold">
                                <th className="p-4">Jornada</th>
                                <th className="p-4">Encuentro</th>
                                <th className="p-4">Fecha / Hora</th>
                                <th className="p-4">Estadio</th>
                                <th className="p-4 text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {partidos.map((partido) => (
                                <tr key={partido.id} className="hover:bg-white/5 transition-colors">
                                    <td className="p-4">
                                        <span className="text-xs font-bold text-gray-400 uppercase">{partido.jornada}</span>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <span className="font-black text-sm">{partido.local}</span>
                                            <span className="text-[10px] text-amber-300 font-bold">VS</span>
                                            <span className="font-black text-sm">{partido.visitante}</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold flex items-center gap-2">
                                                <FaClock className="text-amber-300 text-[10px]" /> {partido.fecha}
                                            </span>
                                            <span className="text-[10px] text-gray-500">{partido.hora} HS</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-2 text-sm text-gray-400">
                                            <FaMapMarkerAlt className="text-amber-300 text-[10px]" />
                                            {partido.estadio}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex justify-center gap-2">
                                            <button 
                                                className="p-2 hover:bg-amber-500/20 hover:text-amber-400 rounded-lg transition-colors" 
                                                title="Editar Partido"
                                            >
                                                <FaEdit size={14} />
                                            </button>
                                            <button 
                                                className="p-2 hover:bg-red-500/20 hover:text-red-400 rounded-lg transition-colors" 
                                                title="Eliminar"
                                            >
                                                <FaTrash size={14} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {partidos.length === 0 && (
                        <div className="p-10 text-center text-gray-500">
                            No hay partidos programados en el fixture.
                        </div>
                    )}
                </div>
            </div>

            <div className="flex gap-4">
                <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all">
                    Generar Nueva Fecha
                </button>
            </div>
        </div>
    );
};

export default FixtureAdmin;