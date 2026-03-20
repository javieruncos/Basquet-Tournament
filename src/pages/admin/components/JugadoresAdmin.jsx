import React, { useContext, useEffect, useState } from "react";
import { FaPlus, FaSearch, FaEdit, FaTrash, FaUser } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  eliminarJugador,
  getJugadores,
} from "../../../services/JugadoresService";
import ClubesContext from "../../../context/ClubesContext";
import { a } from "framer-motion/client";
import Swal from "sweetalert2";

const JugadoresAdmin = () => {
  const { clubes } = useContext(ClubesContext);
  const [jugadores, setJugadores] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [filter, setfilter] = useState({
    nombre: "",
    club: "",
  });

  useEffect(() => {
    getJugadores().then((data) => {
      console.log(data);
      setJugadores(data);
    });

    if (location.state?.update) {
      navigate(location.pathname, { replace: true, state: null });
    }
  }, []);

  const handleFilterChange = (e) => {
    console.log(e.target.value);
    setfilter({ ...filter, [e.target.name]: e.target.value });
  };

  const filterJugadores = (jugadores, filter) => {
    return jugadores.filter((jugador) => {
      return (
        jugador.nombre.toLowerCase().includes(filter.nombre.toLowerCase()) &&
        (!filter.club || jugador.clubId?._id === filter.club)
      );
    });
  };

  const filteredJugadores = filterJugadores(jugadores, filter);

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
      const result = await Swal.fire({
        title: "¿Eliminar jugador?",
        text: "No se puede revertir esta acción",
        icon: "warning",
        timer: 5000,
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
        ...swalCustomConfig,
      });

      if (!result.isConfirmed) return;

   
      await eliminarJugador(id);

      Swal.close();

      Swal.fire({
        icon: "success",
        title: "Eliminado",
        text: "El jugador fue eliminado correctamente",
        ...swalCustomConfig,
      });

      const data = await getJugadores();
      setJugadores(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo eliminar el jugador",
        ...swalCustomConfig,
      });
    }
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
            name="nombre"
            value={filter.nombre}
            onChange={handleFilterChange}
            placeholder="Buscar por nombre o club..."
            className="w-full bg-black/40 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-amber-300 transition-colors text-white"
          />
        </div>
        <select
          className="bg-[#111] border border-white/10 rounded-lg py-2 px-4 text-sm focus:outline-none focus:border-amber-300 text-white"
          name="club"
          value={filter.club}
          onChange={handleFilterChange}
        >
          {clubes.map((club) => (
            <option key={club._id} value={club._id}>
              {club.name}
            </option>
          ))}
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
            {filteredJugadores.map((jugador) => {
              const club = clubes.find(
                (c) => c._id === (jugador.clubId?._id || jugador.clubId),
              );
              return (
                <tr
                  key={jugador._id}
                  className="hover:bg-white/5 transition-colors"
                >
                  <td className="p-4 text-sm font-bold">{jugador.nombre}</td>
                  <td className="p-4 text-sm text-gray-400">
                    {club ? club.shortname : "Sin Club"}
                  </td>
                  <td className="p-4 text-sm text-gray-400">
                    {jugador.posicion}
                  </td>
                  <td className="p-4 text-sm text-gray-400">
                    {jugador.numero}
                  </td>
                  <td className="p-4">
                    <div className="flex justify-center gap-2">
                      <Link
                        to={`/admin/jugadoresAdmin/editar/${jugador._id}`}
                        className="p-2 hover:bg-amber-500/20 hover:text-amber-400 rounded-lg transition-colors"
                        title="Editar"
                      >
                        <FaEdit size={14} />
                      </Link>
                      <button
                        onClick={() => onDelete(jugador._id)}
                        className="p-2 hover:bg-red-500/20 hover:text-red-400 rounded-lg transition-colors"
                        title="Eliminar"
                      >
                        <FaTrash size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {filteredJugadores.length === 0 && (
          <div className="p-10 text-center text-gray-500">
            No hay jugadores registrados.
          </div>
        )}
      </div>
    </div>
  );
};

export default JugadoresAdmin;
