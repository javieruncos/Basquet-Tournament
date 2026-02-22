import React from "react";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaSearch,
  FaShieldAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ClubesAdmin = () => {
  const clubes = [
    {
      id: 1,
      nombre: "Estación Experimental",
      siglas: "CAEE",
      ciudad: "Las Talitas",
      estadio: "El Coloso",
      fundacion: "1940",
    },
    {
      id: 2,
      nombre: "Talleres de Tafí",
      siglas: "TTF",
      ciudad: "Tafí Viejo",
      estadio: "La Leonera",
      fundacion: "1915",
    },
    {
      id: 3,
      nombre: "Independiente",
      siglas: "IND",
      ciudad: "San Miguel",
      estadio: "Estadio Rojo",
      fundacion: "1920",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-5xl font-black uppercase tracking-tighter">
            Gestión de <span className="text-amber-300">Clubes</span>
          </h2>
          <p className="text-gray-400 text-sm">
            Administra las instituciones, estadios y datos generales
          </p>
        </div>
        <button className="flex items-center gap-2 bg-amber-300 text-black px-4 py-2 rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-amber-400 transition-colors">
          <FaPlus /> Nuevo Club
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Buscar club por nombre o ciudad..."
            className="w-full bg-black/40 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-amber-300 transition-colors"
          />
        </div>
        <select className="bg-[#111] border border-white/10 rounded-lg py-2 px-4 text-sm focus:outline-none focus:border-amber-300 text-white">
          <option value="">Todas las Ciudades</option>
          <option value="talitas">Las Talitas</option>
          <option value="tafi">Tafí Viejo</option>
          <option value="capital">San Miguel</option>
        </select>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-200">
          <thead>
            <tr className="bg-white/5 text-amber-300 uppercase text-xs tracking-widest font-bold">
              <th className="p-4">Escudo</th>
              <th className="p-4">Club / Siglas</th>
              <th className="p-4">Ciudad</th>
              <th className="p-4">Estadio</th>
              <th className="p-4">Fundación</th>
              <th className="p-4 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {clubes.map((club) => (
              <tr key={club.id} className="hover:bg-white/5 transition-colors">
                <td className="p-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <FaShieldAlt className="text-amber-300" />
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">{club.nombre}</span>
                    <span className="text-[10px] text-amber-300 font-black">
                      {club.siglas}
                    </span>
                  </div>
                </td>
                <td className="p-4 text-sm text-gray-300">{club.ciudad}</td>
                <td className="p-4">
                  <div className="flex items-center gap-2 text-sm">
                    <FaMapMarkerAlt className="text-amber-300 text-[10px]" />
                    {club.estadio}
                  </div>
                </td>
                <td className="p-4 font-mono text-xs text-gray-400">
                  {club.fundacion}
                </td>
                <td className="p-4">
                  <div className="flex justify-center gap-2">
                    <button
                      className="p-2 hover:bg-amber-500/20 hover:text-amber-400 rounded-lg transition-colors"
                      title="Editar"
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
        {clubes.length === 0 && (
          <div className="p-10 text-center text-gray-500">
            No hay clubes registrados.
          </div>
        )}
      </div>
    </div>
  );
};

export default ClubesAdmin;
