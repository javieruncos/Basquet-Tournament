import React, { useContext, useEffect, useState } from "react";
import { useForm, useFieldArray, set } from "react-hook-form";
import {
  FaSave,
  FaTimes,
  FaTrophy,
  FaClock,
  FaCalendarAlt,
  FaUser,
} from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import ClubesContext from "../../../../context/ClubesContext";
import {
  crearFixture,
  editarFixture,
  obtenerFixtureID,
} from "../../../../services/FixtureService";
import TournamentContext from "../../../../context/TournamentContext";
import { Block } from "@mui/icons-material";

const FormResultados = () => {
  const { fixture, setFixture } = useContext(TournamentContext);
  const { clubes } = useContext(ClubesContext);
  const { id } = useParams();
  const [estadoPartido, setestadoPartido] = useState("")
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { fields: cuartosFields } = useFieldArray({
    control,
    name: "resultado.cuartos",
  });

  useEffect(() => {
    obtenerFixtureID(id).then((data) => {
      const formatDate = (date) => {
        return date?.split("T")[0];
      };

      if(data?.estado){
         setestadoPartido(data?.estado)
      }
      reset({
        fecha: formatDate(data?.fecha),
        hora: data?.hora,
        estado: data?.estado,
        local: data?.local,
        visitante: data?.visitante,
        resultado: data?.resultado,
        ganador: data?.ganador,
        mvp: data?.mvp,
        id: data._id,
      });
    });
  }, [id, reset]);

  const onSubmit = async (data) => {
    console.log("Datos del partido:", data);
    if (id) {
      // 🔥 CONFIRMAR EDICIÓN
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
    }

    reset();

    navigate("/admin/resultadosAdmin", {
      state: { update: true },
    });

    // Aquí iría la lógica para conectar con FixtureService
    crearFixture(data).then((res) => {
      console.log(res);
      setFixture([...fixture, res]);
    });
  };

  return (
    <div className="bg-black/90 border border-white/10 rounded-2xl p-6 w-full max-w-5xl mx-auto shadow-2xl">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-3xl font-black uppercase tracking-tighter">
          Cargar <span className="text-amber-300">Resultado</span>
        </h3>
        <button
          onClick={() => navigate("/admin/resultadosAdmin")}
          className="text-gray-500 hover:text-white transition-colors"
        >
          <FaTimes size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Información General */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
              <FaCalendarAlt /> Fecha
            </label>
            <input
              type="date"
              {...register("fecha", { required: true })}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-white focus:border-amber-300 outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
              <FaClock /> Hora
            </label>
            <input
              type="time"
              {...register("hora", { required: true })}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-white focus:border-amber-300 outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300">
              Estado
            </label>
            <select
              {...register("estado")}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-white focus:border-amber-300 outline-none"
            >
              <option value="Programado" className="bg-[#111]">
                Programado
              </option>
              <option value="En juego" className="bg-[#111]">
                En juego
              </option>
              <option value="Finalizado" className="bg-[#111]">
                Finalizado
              </option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-white/5 p-6 rounded-xl border border-white/5">
          <div className="text-center space-y-3">
            <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">
              Equipo Local
            </label>
            <select
              {...register("local", { required: true })}
              className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-center font-bold"
            >
              <option value="">Seleccionar Local</option>
              {clubes.map((club) => (
                <option key={club._id} value={club._id}>
                  {club.name}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="0"
              {...register("resultado.total.local")}
              className={`w-24 bg-white/10 border border-amber-300/50 rounded-lg py-4 text-center text-3xl font-black text-amber-300 mx-auto block ${estadoPartido === "Programado" ? "hidden" : "block"} `}
            />
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl font-black text-white/20 italic">VS</span>
            <div className={`mt-4 px-4 py-1 bg-amber-300 text-black text-[10px] font-black uppercase rounded-full ${estadoPartido === "Programado" ? "hidden" : "block"}`}>
              Marcador Final
            </div>
          </div>

          <div className="text-center space-y-3">
            <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">
              Equipo Visitante
            </label>
            <select
              {...register("visitante", { required: true })}
              className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-center font-bold"
            >
              <option value="">Seleccionar Visitante</option>
              {clubes.map((club) => (
                <option key={club._id} value={club._id}>
                  {club.name}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="0"
              {...register("resultado.total.visitante")}
              className={`w-24 bg-white/10 border border-amber-300/50 rounded-lg py-4 text-center text-3xl font-black text-amber-300 mx-auto block ${estadoPartido === "Programado" ? "hidden" : "block"}`}
            />
          </div>
        </div>  

        <div className={`space-y-4 ${estadoPartido === "Programado" ? "hidden" : "block"}`}>
          <h4 className="text-xs font-black uppercase tracking-widest text-amber-300 border-b border-white/10 pb-2">
            Desglose por Cuartos
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cuartosFields.map((field, index) => (
              <div
                key={field.id}
                className="bg-white/5 p-4 rounded-lg border border-white/5 space-y-3"
              >
                <p className="text-[10px] font-black text-center text-gray-500 uppercase">
                  {index + 1}º Cuarto
                </p>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="L"
                    {...register(`resultado.cuartos.${index}.local`)}
                    className="w-full bg-black/50 border border-white/10 rounded py-1 text-center text-sm"
                  />
                  <input
                    type="number"
                    placeholder="V"
                    {...register(`resultado.cuartos.${index}.visitante`)}
                    className="w-full bg-black/50 border border-white/10 rounded py-1 text-center text-sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${estadoPartido === "Programado" ? "hidden" : "block"}}`}>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
              <FaTrophy /> Ganador del Encuentro
            </label>
            <select
              {...register("ganador")}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white outline-none focus:border-amber-300"
            >
              <option value="" className="bg-[#111]">
                Empate / Sin definir
              </option>
              {/* Opciones dinámicas basadas en local/visitante */}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
              <FaUser /> Jugador Más Valioso (MVP)
            </label>
            <select
              {...register("mvp")}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white outline-none focus:border-amber-300"
            >
              <option value="" className="bg-[#111]">
                Seleccionar Jugador
              </option>
              {/* Mapear jugadores de ambos equipos */}
            </select>
          </div>
        </div>

        <div className="bg-amber-300/5 border border-amber-300/10 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-300 rounded-lg text-black">
              <FaTrophy size={16} />
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-tight">
                Estadísticas Individuales
              </h4>
              <p className="text-[10px] text-gray-400 uppercase">
                Carga los puntos y faltas de los jugadores
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-[10px] uppercase font-bold">
              <thead>
                <tr className="text-amber-300 border-b border-white/10">
                  <th className="p-2 text-left">Jugador</th>
                  <th className="p-2">PTS</th>
                  <th className="p-2">REB</th>
                  <th className="p-2">AST</th>
                  <th className="p-2">FLT</th>
                  <th className="p-2">MIN</th>
                </tr>
              </thead>
              <tbody>
                {/* Aquí se podrían agregar filas dinámicamente para estadisticasJugadores */}
                <tr>
                  <td
                    colSpan="6"
                    className="p-4 text-center text-gray-600 italic"
                  >
                    Las estadísticas detalladas se habilitan al marcar el
                    partido como "Finalizado"
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 bg-amber-300 text-black font-black uppercase py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-amber-400 transition-all tracking-widest text-sm"
          >
            <FaSave /> Guardar Resultado
          </button>
          <button
            type="button"
            onClick={() => navigate("/admin/resultados")}
            className="px-8 border border-white/10 font-bold uppercase py-4 rounded-xl hover:bg-white/5 transition-all tracking-widest text-sm"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormResultados;
