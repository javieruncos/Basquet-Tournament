import { useContext, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus, FaEye } from "react-icons/fa";
import NewsContext from "../../../context/useNewsContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getNoticias } from "../../../services/NewsService";

const NoticiasAdmin = () => {
  const { noticias, setNoticias } = useContext(NewsContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.update) {
      getNoticias().then((data) => {
        setNoticias(data);
        navigate(location.pathname, { replace: true, state: null });
      });
    }
  }, [location.state, navigate, setNoticias]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
            Gestión de <span className="text-amber-300">Noticias</span>
          </h2>
          <p className="text-gray-400 text-xs md:text-sm">
            Crea, edita y elimina las noticias del portal
          </p>
        </div>
        <Link
          to="/admin/noticias/crear"
          className="flex items-center gap-2 bg-amber-300 text-black px-4 py-2 rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-amber-400 transition-colors"
        >
          <FaPlus /> Nueva Noticia
        </Link>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-150">
          <thead>
            <tr className="bg-white/5 text-amber-300 uppercase text-xs tracking-widest font-bold">
              <th className="p-4">ID</th>
              <th className="p-4">Título</th>
              <th className="p-4">Categoría</th>
              <th className="p-4">Fecha</th>
              <th className="p-4">Estado</th>
              <th className="p-4 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {noticias.map((noticia) => (
              <tr
                key={noticia._id}
                className="hover:bg-white/5 transition-colors"
              >
                <td className="p-4 text-gray-400 font-mono text-sm">
                  #{noticia._id}
                </td>
                <td className="p-4 font-bold text-sm">{noticia.title}</td>
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
                    >
                      <FaTrash size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {noticias.length === 0 && (
          <div className="p-10 text-center text-gray-500">
            No hay noticias registradas.
          </div>
        )}
      </div>
    </div>
  );
};

export default NoticiasAdmin;
