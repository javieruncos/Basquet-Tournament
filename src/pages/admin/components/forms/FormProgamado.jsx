import React, { use, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  FaCalendarPlus,
  FaTimes,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaSave,
} from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import ClubesContext from "../../../../context/ClubesContext";
import {
  crearFixture,
  editarFixture,
  obtenerFixtureID,
} from "../../../../services/FixtureService";
import Swal from "sweetalert2";

const FormProgamado = () => {
  const { clubes } = useContext(ClubesContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (id) {
      obtenerFixtureID(id).then((data) => {
        reset({
          fecha: data?.fecha?.split("T")[0], // 🔥 importante
          hora: data?.hora,
          estado: data?.estado,
          local: data?.local?._id,
          visitante: data?.visitante?._id,
          fase: data?.fase,
          jornada: String(data?.jornada),
          arbitro1: data?.arbitro1,
          arbitro2: data?.arbitro2,
          arbitro3: data?.arbitro3,
          estadio: data?.estadio,
        });
      });
    }
  }, [id, reset]);

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

  const onSubmit = async (data) => {
    try {

      if (id) {
        const result = await Swal.fire({
          title: "¿Confirmar edición?",
          text: "Se actualizará el resultado del partido",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, actualizar",
          cancelButtonText: "Cancelar",
          ...swalCustomConfig,
        });

        if (!result.isConfirmed) return;

        await editarFixture(id, data);

        await Swal.fire({
          icon: "success",
          title: "Resultado actualizado",
          text: "Los cambios se guardaron correctamente",
          ...swalCustomConfig,
        });

        navigate("/admin/fixtureAdmin", {
          state: { update: true },
        });

        return; 
      }

      Swal.fire({
        title: "Cargando...",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
        ...swalCustomConfig,
      });

      await crearFixture(data);

      Swal.close();

      await Swal.fire({
        icon: "success",
        title: "Partido Programado",
        text: "El encuentro se ha registrado correctamente",
        ...swalCustomConfig,
      });

      navigate("/admin/fixtureAdmin", {
        state: { update: true },
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: id
          ? "No se pudo actualizar el partido"
          : "No se pudo programar el partido",
        ...swalCustomConfig,
      });
    }

    console.log(data);
  };

  return (
    <div className="bg-black/90 border border-white/10 rounded-2xl p-6 w-full max-w-4xl mx-auto shadow-2xl">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-3xl font-black uppercase tracking-tighter">
          Programar <span className="text-amber-300">Partido</span>
        </h3>
        <button
          onClick={() => navigate("/admin/fixtureAdmin")}
          className="text-gray-500 hover:text-white transition-colors"
        >
          <FaTimes size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
              <FaUsers /> Equipo Local
            </label>
            <select
              {...register("local", { required: "Campo obligatorio" })}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-amber-300 outline-none appearance-none"
            >
              <option value="" className="bg-[#111]">
                Seleccionar Local
              </option>
              {clubes.map((club) => (
                <option key={club._id} value={club._id} className="bg-[#111]">
                  {club.name}
                </option>
              ))}
            </select>
            {errors.local && (
              <span className="text-red-500 text-[10px] font-bold uppercase">
                {errors.local.message}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
              <FaUsers /> Equipo Visitante
            </label>
            <select
              {...register("visitante", { required: "Campo obligatorio" })}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-amber-300 outline-none appearance-none"
            >
              <option value="" className="bg-[#111]">
                Seleccionar Visitante
              </option>
              {clubes.map((club) => (
                <option key={club._id} value={club._id} className="bg-[#111]">
                  {club.name}
                </option>
              ))}
            </select>
            {errors.visitante && (
              <span className="text-red-500 text-[10px] font-bold uppercase">
                {errors.visitante.message}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
              <FaCalendarPlus /> Fecha del Encuentro
            </label>
            <input
              type="date"
              {...register("fecha", { required: "Campo obligatorio" })}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-amber-300 outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
              <FaClock /> Hora
            </label>
            <input
              type="time"
              {...register("hora", { required: "Campo obligatorio" })}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-amber-300 outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
              Fase / Jornada
            </label>
            <select
              {...register("fase")}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-amber-300 outline-none appearance-none"
            >
              <option value="" className="bg-[#111]">
                Seleccionar Fase
              </option>
              <option value="Regular" className="bg-[#111]">
                Regular
              </option>
              <option value="Octavos" className="bg-[#111]">
                Octavos
              </option>
              <option value="Cuartos" className="bg-[#111]">
                Cuartos
              </option>
              <option value="SemiFinal" className="bg-[#111]">
                SemiFinal
              </option>
              <option value="Final" className="bg-[#111]">
                Final
              </option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
              Número de Jornada
            </label>
            <select
              {...register("jornada", {
                valueAsNumber: true,
              })}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-amber-300 outline-none appearance-none"
            >
              <option value="" className="bg-[#111]">
                Seleccionar Jornada
              </option>
              {[...Array(20)].map((_, i) => (
                <option key={i + 1} value={i + 1} className="bg-[#111]">
                  Fecha {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
              Árbitro Principal
            </label>
            <input
              type="text"
              placeholder="Nombre del árbitro"
              autoComplete="off"
              {...register("arbitro1")}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-amber-300 outline-none"
            />
          </div>
        
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
              Árbitro Secundario
            </label>
            <input
              type="text"
              placeholder="Nombre del árbitro"
              autoComplete="off"
              {...register("arbitro2")}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-amber-300 outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
              Árbitro Auxiliar
            </label>
            <input
              type="text"
              placeholder="Nombre del árbitro"
               autoComplete="off"
              {...register("arbitro3")}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-amber-300 outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
              <FaMapMarkerAlt /> Estadio / Sede
            </label>
            <select
              {...register("estadio")}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-amber-300 outline-none appearance-none [&>option]:bg-[#111]"
            >
              <option value="" className="bg-[#111]">
                Seleccionar Estadio
              </option>
              {clubes
                .filter(
                  (c) =>
                    c._id === watch("local") || c._id === watch("visitante"),
                )
                .map((c) => (
                  <option key={c._id} value={c.city}>
                    Estadio {c.name} ({c.city})
                  </option>
                ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-amber-300 text-black font-black uppercase py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-amber-400 transition-all tracking-widest text-sm mt-4"
        >
          <FaSave /> Confirmar Programación
        </button>
      </form>
    </div>
  );
};

export default FormProgamado;
