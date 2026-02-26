import React from "react";
import { FaChartBar, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ItemsResultados = ({res,onDelete}) => {
  return (
    <>
      <tr key={res.id} className="hover:bg-white/5 transition-colors">
        <td className="p-4 text-sm text-gray-400">{res.fecha}</td>
        <td className="p-4 text-sm text-gray-400">{res.hora}</td>
        <td className="p-4">
          <div className="flex items-center gap-2 font-bold text-sm">
            <span>{res.local?.name}</span>
            <span className="text-amber-300 text-[10px]">VS</span>
            <span>{res.visitante?.name}</span>
          </div>
        </td>
        <td className="p-4">
          <div className="flex justify-center items-center gap-3 font-mono font-black text-lg">
            <span
              className={
                res.resultado.total?.local > res.resultado.total?.visitante
                  ? "text-green-400"
                  : ""
              }
            >
              {res.resultado.total?.local}
            </span>
            <span className="text-gray-600">-</span>
            <span
              className={
                res.resultado.total?.visitante > res.total?.local
                  ? "text-green-400"
                  : ""
              }
            >
              {res.resultado.total?.visitante}
            </span>
          </div>
        </td>
        <td className="p-4">
          <span
            className={`text-[10px] uppercase font-black px-2 py-1 rounded-full ${
              res.estado === "Finalizado"
                ? "bg-blue-500/20 text-blue-400"
                : "bg-gray-500/20 text-gray-400"
            }`}
          >
            {res.estado}
          </span>
        </td>
        <td className="p-4">
          <div className="flex justify-center gap-2">
            <Link
              to={`editar/${res._id}`}
              className="p-2 hover:bg-amber-500/20 hover:text-amber-400 rounded-lg transition-colors"
              title="Editar Marcador"
            >
              <FaEdit size={14} />
            </Link>
            <button
              className="p-2 hover:bg-green-500/20 hover:text-green-400 rounded-lg transition-colors"
              title="Cargar Boxscore"
            >
              <FaChartBar size={14} />
            </button>
            <button
              className="p-2 hover:bg-red-500/20 hover:text-red-400 rounded-lg transition-colors"
              title="Eliminar"
              onClick={()=>{onDelete(res._id)}}
            >
              <FaTrash size={14} />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ItemsResultados;
