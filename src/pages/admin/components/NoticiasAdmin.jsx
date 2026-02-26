import { useContext, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus, FaEye } from "react-icons/fa";
import NewsContext from "../../../context/NewsContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { eliminarNoticia, getNoticias } from "../../../services/NewsService";
import Swal from "sweetalert2";
import ItemsNoticias from "./forms/ItemsNoticias";

const NoticiasAdmin = () => {
  const { noticias, setNoticias } = useContext(NewsContext);
  const location = useLocation();
  const navigate = useNavigate();

  const swalCustomConfig = {
    background: "#111",
    color: "#fff",
    confirmButtonColor: "#fbbf24", // amber-400
    cancelButtonColor: "#333",
    customClass: {
      popup: "border border-white/10 rounded-2xl",
      title: "font-black uppercase tracking-tighter",
    },
  };

  useEffect(() => {
    if (location.state?.update) {
      getNoticias().then((data) => {
        setNoticias(data);
        navigate(location.pathname, { replace: true, state: null });
      });
    }
  }, [location.state, navigate, setNoticias]);

   const onDelete = async (id) => {
      try {
        if (!id) return;
  
        const result = await Swal.fire({
          title: "¿Eliminar noticia?",
          text: "No se puede revertir esta acción",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, eliminar",
          cancelButtonText: "Cancelar",
          ...swalCustomConfig,
        });
  
        if (!result.isConfirmed) return;
  
        Swal.fire({
          title: "Eliminando...",
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
          ...swalCustomConfig,
        });
  
        await eliminarNoticia(id);
        
        Swal.close(); 
  
        const data = await getNoticias();
        setNoticias(data);
  
        await Swal.fire({
          icon: "success",
          title: "Eliminado",
          text: "La noticia fue eliminada correctamente",
          ...swalCustomConfig,
        });
      } catch (error) {
        console.error(error);
  
        await Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo eliminar la noticia",
          ...swalCustomConfig,
        });
      }
    };

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
               <ItemsNoticias noticia={noticia} onDelete={onDelete} key={noticia._id}></ItemsNoticias>
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
