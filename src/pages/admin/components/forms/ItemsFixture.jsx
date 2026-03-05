import React from "react";
import { FaClock, FaEdit, FaMapMarkerAlt, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ItemsFixture = ({partido,onDelete}) => {
  return (
    <>
      <tr key={partido._id} className="hover:bg-white/5 transition-colors">
        <td className="p-4">
          <span className="text-xs font-bold text-gray-400 uppercase">
            {partido.hora}
          </span>
        </td>
        <td className="p-4">
          <div className="flex items-center gap-3">
            <span className="font-black text-sm">
              <span className="lg:hidden">{partido?.local?.name?.substring(0, 5)}</span>
              <span className="hidden lg:inline">{partido?.local?.name}</span>
            </span>
            <span className="text-[10px] text-amber-300 font-bold">VS</span>
            <span className="font-black text-sm">
              <span className="lg:hidden">{partido?.visitante?.name?.substring(0, 5)}</span>
              <span className="hidden lg:inline">{partido?.visitante?.name}</span>
            </span>
          </div>
        </td>
        <td className="p-4">
          <div className="flex flex-col">
            <span className="text-sm font-bold flex items-center gap-2">
              <FaClock className="text-amber-300 text-[10px]" />{" "}
              {new Date(partido.fecha).toLocaleDateString("es-AR")}
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
              onClick={() => onDelete(partido._id)}
            >
              <FaTrash size={14} />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ItemsFixture;
