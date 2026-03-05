import React from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ItemsNoticias = ({noticia,onDelete}) => {
  return (
    <>
      <tr>
        <td className="p-4 text-gray-400 font-mono text-sm">#{noticia._id}</td>
        <td className="p-4 font-bold text-sm">
          <span className="lg:hidden">
            {noticia.title?.substring(0, 5)}...
          </span>
          <span className="hidden lg:inline">{noticia.title}</span>
        </td>
        <td className="p-4">
          <span className="px-2 py-1 bg-white/10 rounded text-[10px] uppercase font-bold tracking-wider">
            {noticia.category}
          </span>
        </td>
        <td className="p-4 text-sm text-gray-400">
          {new Date(noticia.updatedAt).toLocaleDateString()}
        </td>
        <td className="p-4">
          <span
            className={`text-[10px] uppercase font-black px-2 py-1 rounded-full ${
              noticia.published
                ? "bg-green-500/20 text-green-400"
                : "bg-amber-500/20 text-amber-400"
            }`}
          >
            {noticia.published ? "Publicado" : "Borrador"}
          </span>
        </td>
        <td className="p-4">
          <div className="flex justify-center gap-2">
            <button
              className="p-2 hover:bg-blue-500/20 hover:text-blue-400 rounded-lg transition-colors"
              title="Ver"
            >
              <FaEye size={14} />
            </button>
            <Link
              to={`/admin/noticias/editar/${noticia._id}`}
              className="p-2 hover:bg-amber-500/20 hover:text-amber-400 rounded-lg transition-colors"
              title="Editar"
            >
              <FaEdit size={14} />
            </Link>
            <button
              className="p-2 hover:bg-red-500/20 hover:text-red-400 rounded-lg transition-colors"
              title="Eliminar"
              onClick={() => onDelete(noticia._id)}
            >
              <FaTrash size={14} />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ItemsNoticias;
