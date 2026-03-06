import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaUser,
  FaIdBadge,
  FaBirthdayCake,
  FaShieldAlt,
  FaImage,
  FaSave,
  FaTimes,
  FaChartBar,
} from "react-icons/fa";
import ClubesContext from "../../../../context/ClubesContext";
import { createJugador } from "../../../../services/JugadoresService";
import Swal from "sweetalert2";

const JugadoresForm = () => {
  const { clubes } = useContext(ClubesContext);
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      posicion: "Base",
      estadisticas: {
        puntos: 0,
        rebotes: 0,
        asistencias: 0,
        robos: 0,
        tapones: 0,
        partidosJugados: 0,
        minutos: 0,
        faltas: 0,
        perdidas: 0,
      },
    },
  });

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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  const onSubmit = async (data) => {
    console.log(data);
    try {
      Swal.fire({
        title: "Cargando...",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
        ...swalCustomConfig,
      });

      await createJugador(data);

      Swal.close();

      await Swal.fire({
        icon: "success",
        title: "Jugador creado",
        text: "El jugador se creó correctamente",
        ...swalCustomConfig,
      });

      navigate("/admin/jugadoresAdmin", {
        state: { update: true },
      });
    } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo crear el jugador",
          ...swalCustomConfig,
        });
    }
  };

  return (
    <div className="bg-black/90 border border-white/10 rounded-2xl p-6 w-full max-w-4xl mx-auto shadow-2xl">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-3xl font-black uppercase tracking-tighter">
          Gestionar <span className="text-amber-300">Jugador</span>
        </h3>
        <button
          onClick={() => navigate("/admin/jugadoresAdmin")}
          className="text-gray-500 hover:text-white transition-colors"
        >
          <FaTimes size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
              <FaUser /> Nombre Completo
            </label>
            <input
              type="text"
              {...register("nombre", { required: "El nombre es obligatorio" })}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-amber-300 outline-none"
              placeholder="Ej: Juan Pérez"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
              <FaShieldAlt /> Club
            </label>
            <select
              {...register("clubId", { required: "Selecciona un club" })}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-amber-300 outline-none appearance-none [&>option]:bg-[#111]"
            >
              <option value="">Seleccionar Club</option>
              {clubes.map((club) => (
                <option key={club._id} value={club._id}>
                  {club.name}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
              Posición
            </label>
            <select
              {...register("posicion")}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-amber-300 outline-none appearance-none [&>option]:bg-[#111]"
            >
              {["Base", "Escolta", "Alero", "Ala-Pivot", "Pivot"].map((pos) => (
                <option key={pos} value={pos}>
                  {pos}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
                <FaIdBadge /> Dorsal
              </label>
              <input
                type="number"
                {...register("numero", { required: true })}
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-amber-300 outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
                <FaBirthdayCake /> Edad
              </label>
              <input
                type="number"
                {...register("edad", { required: true })}
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-amber-300 outline-none"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
            <FaImage /> Foto del Jugador
          </label>
          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
            <input
              type="file"
              onChange={handleImageChange}
              className="flex-1 text-xs text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-amber-300 file:text-black hover:file:bg-amber-400 cursor-pointer"
            />
            <div className="w-20 h-20 rounded-full border-2 border-amber-300/30 overflow-hidden bg-black flex items-center justify-center">
              {preview ? (
                <img
                  src={preview}
                  className="w-full h-full object-cover"
                  alt="Preview"
                />
              ) : (
                <FaUser className="text-gray-700" size={30} />
              )}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs font-black uppercase tracking-widest text-amber-300 border-b border-white/10 pb-2 flex items-center gap-2">
            <FaChartBar /> Estadísticas de Carrera
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "Puntos", key: "puntos" },
              { label: "Rebotes", key: "rebotes" },
              { label: "Asistencias", key: "asistencias" },
              { label: "Robos", key: "robos" },
              { label: "Tapones", key: "tapones" },
              { label: "Partidos", key: "partidosJugados" },
              { label: "Minutos", key: "minutos" },
              { label: "Faltas", key: "faltas" },
              { label: "Pérdidas", key: "perdidas" },
            ].map((stat) => (
              <div
                key={stat.key}
                className="bg-white/5 p-3 rounded-lg border border-white/5"
              >
                <label className="text-[9px] uppercase font-bold text-gray-500 block mb-1">
                  {stat.label}
                </label>
                <input
                  type="number"
                  {...register(`estadisticas.${stat.key}`)}
                  className="w-full bg-transparent text-white font-bold text-center outline-none focus:text-amber-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 pt-6">
          <button
            type="submit"
            className="flex-1 bg-amber-300 text-black font-black uppercase py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-amber-400 transition-all tracking-widest text-sm"
          >
            <FaSave /> Guardar Jugador
          </button>
          <button
            type="button"
            onClick={() => navigate("/admin/jugadoresAdmin")}
            className="px-8 border border-white/10 font-bold uppercase py-4 rounded-xl hover:bg-white/5 transition-all tracking-widest text-sm"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default JugadoresForm;
