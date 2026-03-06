import React, { useState } from 'react';
import { FaChartBar, FaPlus, FaSearch, FaEdit, FaTrash, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JugadoresAdmin = () => {
  // Mock data for UI consistency, replace with context/service later
  const [jugadores] = useState([]);

  const onDelete = (id) => {
    // Logic for deletion following the pattern of other components
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
            Gestión de <span className="text-amber-300">Jugadores</span>
          </h2>
          <p className="text-gray-400 text-xs md:text-sm">
            Administra la base de datos de atletas y sus estadísticas
          </p>
        </div>
        <Link
          to="/admin/jugadoresAdmin/crear"
          className="flex items-center gap-2 bg-amber-300 text-black px-4 py-2 rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-amber-400 transition-colors"
        >
          <FaPlus /> Nuevo Jugador
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Buscar por nombre o club..."
            className="w-full bg-black/40 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-amber-300 transition-colors text-white"
          />
        </div>
        <select className="bg-[#111] border border-white/10 rounded-lg py-2 px-4 text-sm focus:outline-none focus:border-amber-300 text-white">
          <option value="">Todos los Clubes</option>
        </select>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-150">
          <thead>
            <tr className="bg-white/5 text-amber-300 uppercase text-xs tracking-widest font-bold">
              <th className="p-4">Jugador</th>
              <th className="p-4">Club</th>
              <th className="p-4">Posición</th>
              <th className="p-4">Dorsal</th>
              <th className="p-4 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {jugadores.map((jugador) => (
              <tr key={jugador._id} className="hover:bg-white/5 transition-colors">
                {/* Row content following ClubesAdmin pattern */}
              </tr>
            ))}
          </tbody>
        </table>
        {jugadores.length === 0 && (
          <div className="p-10 text-center text-gray-500">
            No hay jugadores registrados.
          </div>
        )}
      </div>
    </div>
  );
};

export default JugadoresAdmin;