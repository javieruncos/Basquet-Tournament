import React, { useContext, useEffect } from 'react';
import { FaCalendarPlus, FaEdit, FaTrash, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import TournamentContext from '../../../context/TournamentContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getFixtures } from '../../../services/FixtureService';

const FixtureAdmin = () => {
    const { fixture, setFixture } = useContext(TournamentContext)
    const location = useLocation();
    const navigate = useNavigate();

     useEffect(() => {
        if (location.state?.update) {
          getFixtures().then((data) => {
            setFixture(data);
            navigate(location.pathname, { replace: true, state: null });
          });
        }
      }, [location.state, navigate, setFixture]);
     


    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                        Gestión de <span className="text-amber-300">Fixture</span>
                    </h2>
                    <p className="text-gray-400 text-xs md:text-sm">Organiza los próximos encuentros y jornadas</p>
                </div>
                <Link to="/admin/fixtureAdmin/crear" className="flex items-center gap-2 bg-amber-300 text-black px-4 py-2 rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-amber-400 transition-colors">
                    <FaCalendarPlus /> Programar Partido
                </Link>
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
                            {fixture.map((partido) => (
                                <tr key={partido._id} className="hover:bg-white/5 transition-colors">
                                    <td className="p-4">
                                        <span className="text-xs font-bold text-gray-400 uppercase">{partido.hora}</span>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <span className="font-black text-sm">{partido?.local?.name}</span>
                                            <span className="text-[10px] text-amber-300 font-bold">VS</span>
                                            <span className="font-black text-sm">{partido?.visitante?.name}</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold flex items-center gap-2">
                                                <FaClock className="text-amber-300 text-[10px]" />   {new Date(partido.fecha).toLocaleDateString("es-AR")}
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
                                            <Link 
                                                to={`/admin/fixtureAdmin/editar/${partido._id}`}
                                                className="p-2 hover:bg-amber-500/20 hover:text-amber-400 rounded-lg transition-colors" 
                                                title="Editar Partido"
                                            >
                                                <FaEdit size={14} />
                                            </Link>
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
                    {fixture.length === 0 && (
                        <div className="p-10 text-center text-gray-500">
                            No hay partidos programados en el fixture.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FixtureAdmin;