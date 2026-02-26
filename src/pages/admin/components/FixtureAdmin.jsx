import React, { useContext, useEffect } from "react";
import {FaCalendarPlus,} from "react-icons/fa";
import TournamentContext from "../../../context/TournamentContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { eliminarFixture, getFixtures } from "../../../services/FixtureService";
import Swal from "sweetalert2";
import ItemsFixture from "./forms/ItemsFixture";

const FixtureAdmin = () => {
  const { fixture, setFixture } = useContext(TournamentContext);
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

  const swalCustomConfig = {
    background: "#111",
    color: "#fff",
    confirmButtonColor: "#fbbf24", 
    cancelButtonColor: "#333",
    customClass: {
      popup: "border border-white/10 rounded-2xl",
      title: "font-black uppercase tracking-tighter",
    },
  };

  const onDelete = async (id) => {
    try {
      if (!id) return;

      const result = await Swal.fire({
        title: "¿Eliminar partido?",
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

      await eliminarFixture(id);

      Swal.close();

      const data = await getFixtures();
      setFixture(data);

      await Swal.fire({
        icon: "success",
        title: "Eliminado",
        text: "El partido fue eliminado correctamente",
        ...swalCustomConfig,
      });
    } catch (error) {
      console.error(error);

      await Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo eliminar el partido",
        ...swalCustomConfig,
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
            Gestión de <span className="text-amber-300">Fixture</span>
          </h2>
          <p className="text-gray-400 text-xs md:text-sm">
            Organiza los próximos encuentros y jornadas
          </p>
        </div>
        <Link
          to="/admin/fixtureAdmin/crear"
          className="flex items-center gap-2 bg-amber-300 text-black px-4 py-2 rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-amber-400 transition-colors"
        >
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
                <ItemsFixture partido={partido} onDelete={onDelete} key={partido._id}></ItemsFixture>
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
