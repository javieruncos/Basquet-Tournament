import React, { useContext, useEffect, useState } from "react";
import { useForm, useFieldArray, set } from "react-hook-form";
import {
  FaSave,
  FaTimes,
  FaTrophy,
  FaClock,
  FaCalendarAlt,
  FaUser,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import ClubesContext from "../../../../context/ClubesContext";
import {
  crearFixture,
  editarResultadoFixture,
  obtenerFixtureID,
} from "../../../../services/FixtureService";
import Swal from "sweetalert2";
import { jugadoresClub } from "../../../../services/ClubesService";

const FormResultados = () => {
  const { clubes } = useContext(ClubesContext);
  const { id } = useParams();

  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      resultado: {
        cuartos: Array.from({ length: 4 }, () => ({ local: 0, visitante: 0 })),
        total: { local: 0, visitante: 0 },
      },
      estadisticasJugadores: [],
    },
  });

  const swalCustomConfig = {
    background: "#111",
    color: "#fff",
    confirmButtonColor: "#fbbf24",
    cancelButtonColor: "#333",
  };

  const { fields: cuartosFields, replace: replaceCuartos } = useFieldArray({
    control,
    name: "resultado.cuartos",
  });

  // --- LÓGICA DE ESTADÍSTICAS ---
  const {
    fields: estadisticasFields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "estadisticasJugadores",
  });

  const [jugadoresLocal, setJugadoresLocal] = useState([]);
  const [jugadoresVisitante, setJugadoresVisitante] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedPlayerId, setSelectedPlayerId] = useState("");

  const localId = watch("local");
  const visitanteId = watch("visitante");

  useEffect(() => {
    if (localId) jugadoresClub(localId).then(setJugadoresLocal);
  }, [localId]);

  useEffect(() => {
    if (visitanteId) jugadoresClub(visitanteId).then(setJugadoresVisitante);
  }, [visitanteId]);

  const agregarJugador = () => {
    if (!selectedPlayerId || !selectedTeam) return;
    const lista =
      selectedTeam === "local" ? jugadoresLocal : jugadoresVisitante;
    const jugador = lista.find((j) => j._id === selectedPlayerId);

    if (estadisticasFields.some((f) => f.jugadorId === jugador._id)) return;

    if (jugador) {
      append({
        jugadorId: jugador._id,
        clubId: selectedTeam === "local" ? localId : visitanteId,
        nombre: jugador.nombre,
        puntos: 0,
        rebotes: 0,
        asistencias: 0,
        faltas: 0,
        robos: 0,
        tapones: 0,
        perdidas: 0,
        minutos: 0,
      });
      setSelectedPlayerId("");
    }
  };

  useEffect(() => {
    if (id) {
    obtenerFixtureID(id).then((data) => {
      const formatDate = (date) => {
        return date?.split("T")[0];
      };
      reset({
        fecha: formatDate(data?.fecha) || "",
        hora: data?.hora || "",
        estado: data?.estado || "Programado",
        local: data?.local?._id || "",
        visitante: data?.visitante?._id || "",
        resultado: {
          total: {
            local: Number(data?.resultado?.total?.local) || 0,
            visitante: Number(data?.resultado?.total?.visitante) || 0,
          },
          cuartos:
            data?.resultado?.cuartos?.length === 4
              ? data.resultado.cuartos
              : Array(4).fill({ local: 0, visitante: 0 }),
        },
        fase: data?.fase || "Regular",
        jornada: data?.jornada || "",
        arbitro1: data?.arbitro1 || "",
        arbitro2: data?.arbitro2 || "",
        arbitro3: data?.arbitro3 || "",
        estadio: data?.estadio || "",
        ganador: data?.ganador?._id || null,
        mvp: data?.mvp || null,
        estadisticasJugadores: data?.estadisticasJugadores || [],
        id: data?._id || null,
      });
    });
    }
  }, [id, reset]);

  const onSubmit = async (data) => {
    try {
      const payload = {
        fecha: data.fecha,
        hora: data.hora,
        estado: data.estado,
        local: data.local,
        visitante: data.visitante,
        fase: data.fase,
        jornada: data.jornada,
        estadio: data.estadio,
        arbitro1: data.arbitro1,
        arbitro2: data.arbitro2,
        arbitro3: data.arbitro3,
        resultado: {
          cuartos: data.resultado.cuartos,
        },
        ganador: data.ganador,
        mvp: data.mvp,
        estadisticasJugadores: data.estadisticasJugadores || [],
        reabrir: true,
      };

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

        await editarResultadoFixture(id, payload);

        await Swal.fire({
          icon: "success",
          title: "Resultado actualizado",
          text: "Los cambios se guardaron correctamente",
          ...swalCustomConfig,
        });

        navigate("/admin/resultadosAdmin", {
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

      await crearFixture(payload);

      Swal.close();

      await Swal.fire({
        icon: "success",
        title: "Partido Programado",
        text: "El encuentro se ha registrado correctamente",
        ...swalCustomConfig,
      });
      console.log(payload);

      navigate("/admin/fixtureAdmin");
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
              <option value="Cancelado" className="bg-[#111]">
                Cancelado
              </option>
              <option value="Suspendido" className="bg-[#111]">
                Suspendido
              </option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300">
              Fase
            </label>
            <select
              {...register("fase")}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-white focus:border-amber-300 outline-none"
            >
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
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300">
              Jornada
            </label>
            <input
              type="number"
              {...register("jornada")}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-white focus:border-amber-300 outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
              <FaMapMarkerAlt /> Estadio
            </label>
            <input
              type="text"
              {...register("estadio")}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-white focus:border-amber-300 outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300">
              Árbitro 1
            </label>
            <input
              type="text"
              {...register("arbitro1")}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-white focus:border-amber-300 outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300">
              Árbitro 2
            </label>
            <input
              type="text"
              {...register("arbitro2")}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-white focus:border-amber-300 outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300">
              Árbitro 3
            </label>
            <input
              type="text"
              {...register("arbitro3")}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-white focus:border-amber-300 outline-none"
            />
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
              readOnly
              {...register("resultado.total.local", {
                valueAsNumber: true,
              })}
              className="w-24 bg-white/10 border border-amber-300/50 rounded-lg py-4 text-center text-3xl font-black text-amber-300 mx-auto block "
            />
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl font-black text-white/20 italic">VS</span>
            <div className="mt-4 px-4 py-1 bg-amber-300 text-black text-[10px] font-black uppercase rounded-full">
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
              readOnly
              {...register("resultado.total.visitante", {
                valueAsNumber: true,
              })}
              className="w-24 bg-white/10 border border-amber-300/50 rounded-lg py-4 text-center text-3xl font-black text-amber-300 mx-auto block"
            />
          </div>
        </div>

        <div className="space-y-4">
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
                     autoComplete="off"
                    {...register(`resultado.cuartos.${index}.local`, {
                      valueAsNumber: true,
                    })}
                    className="w-full bg-black/50 border border-white/10 rounded py-1 text-center text-sm"
                  />
                  <input
                    type="number"
                    placeholder="V"
                     autoComplete="off"
                    {...register(`resultado.cuartos.${index}.visitante`, {
                      valueAsNumber: true,
                    })}
                    className="w-full bg-black/50 border border-white/10 rounded py-1 text-center text-sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
              <FaTrophy /> Ganador del Encuentro
            </label>
            <input
              type="text"
               autoComplete="off"
              value={
                watch("resultado.total.local") >
                watch("resultado.total.visitante")
                  ? clubes.find((c) => c._id === watch("local"))?.name
                  : clubes.find((c) => c._id === watch("visitante"))?.name
              }
              readOnly
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-center text-white font-bold"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
              <FaUser /> Jugador Más Valioso (MVP)
            </label>
            <input
              type="text"
               autoComplete="off"
              value={
                jugadoresLocal.find((j) => j._id === watch("mvp"))?.nombre ||
                jugadoresVisitante.find((j) => j._id === watch("mvp"))
                  ?.nombre ||
                ""
              }
              readOnly
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white"
            />
            <input type="hidden" {...register("mvp")} />
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 bg-black/40 p-4 rounded-lg border border-white/5">
            <select
              className="bg-[#111] border border-white/10 rounded-lg py-2 px-3 text-xs text-white outline-none"
              onChange={(e) => {
                setSelectedTeam(e.target.value);
                setSelectedPlayerId("");
              }}
              value={selectedTeam}
            >
              <option value="" className="bg-[#111]">
                Seleccionar Equipo
              </option>
              <option value="local" className="bg-[#111]">
                {clubes.find((c) => c._id === watch("local"))?.name}
              </option>
              <option value="visitante" className="bg-[#111]">
                {clubes.find((c) => c._id === watch("visitante"))?.name}
              </option>
            </select>

            <select
              className="bg-[#111] border border-white/10 rounded-lg py-2 px-3 text-xs text-white outline-none"
              onChange={(e) => setSelectedPlayerId(e.target.value)}
              value={selectedPlayerId}
              disabled={!selectedTeam}
            >
              <option value="">Seleccionar Jugador</option>
              {(selectedTeam === "local"
                ? jugadoresLocal
                : jugadoresVisitante
              ).map((j) => (
                <option key={j._id} value={j._id} className="bg-[#111]">
                  {j.nombre}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={agregarJugador}
              className="bg-amber-300 text-black text-[10px] font-black uppercase rounded-lg hover:bg-amber-400 transition-colors"
            >
              Agregar Jugador
            </button>
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
                  <th className="p-2">ROB</th>
                  <th className="p-2">TAP</th>
                  <th className="p-2">PER</th>
                  <th className="p-2">MIN</th>
                  <th className="p-2 text-center">TIT</th>
                  <th className="p-2"></th>
                </tr>
              </thead>
              <tbody>
                {estadisticasFields.length > 0 ? (
                  estadisticasFields.map((field, index) => (
                    <tr key={field.id} className="border-b border-white/5">
                      <td className="p-2">
                        <input
                          type="hidden"
                          defaultValue={field.jugadorId}
                          {...register(
                            `estadisticasJugadores.${index}.jugadorId`,
                          )}
                        />
                        <input
                          type="hidden"
                          defaultValue={field.clubId}
                          {...register(`estadisticasJugadores.${index}.clubId`)}
                        />
                        <span className="text-white">
                          {field.jugadorId
                            ? jugadoresLocal.find(
                                (j) => j._id === field.jugadorId,
                              )?.nombre ||
                              jugadoresVisitante.find(
                                (j) => j._id === field.jugadorId,
                              )?.nombre
                            : "Jugador"}
                        </span>
                      </td>
                      <td className="p-2">
                        <input
                          type="number"
                          {...register(
                            `estadisticasJugadores.${index}.puntos`,
                            {
                              valueAsNumber: true,
                            },
                          )}
                          className="w-12 bg-black border border-white/10 rounded text-center"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="number"
                          {...register(
                            `estadisticasJugadores.${index}.rebotes`,
                            {
                              valueAsNumber: true,
                            },
                          )}
                          className="w-12 bg-black border border-white/10 rounded text-center"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="number"
                          {...register(
                            `estadisticasJugadores.${index}.asistencias`,
                            {
                              valueAsNumber: true,
                            },
                          )}
                          className="w-12 bg-black border border-white/10 rounded text-center"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="number"
                          {...register(
                            `estadisticasJugadores.${index}.faltas`,
                            {
                              valueAsNumber: true,
                            },
                          )}
                          className="w-12 bg-black border border-white/10 rounded text-center"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="number"
                          {...register(`estadisticasJugadores.${index}.robos`, {
                            valueAsNumber: true,
                          })}
                          className="w-12 bg-black border border-white/10 rounded text-center"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="number"
                          {...register(
                            `estadisticasJugadores.${index}.tapones`,
                            {
                              valueAsNumber: true,
                            },
                          )}
                          className="w-12 bg-black border border-white/10 rounded text-center"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="number"
                          {...register(
                            `estadisticasJugadores.${index}.perdidas`,
                            {
                              valueAsNumber: true,
                            },
                          )}
                          className="w-12 bg-black border border-white/10 rounded text-center"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="number"
                          {...register(
                            `estadisticasJugadores.${index}.minutos`,
                            {
                              valueAsNumber: true,
                            },
                          )}
                          className="w-12 bg-black border border-white/10 rounded text-center"
                        />
                      </td>
                      <td className="p-2 text-center align-middle">
                        <input
                          type="checkbox"
                          {...register(
                            `estadisticasJugadores.${index}.titular`,
                          )}
                          className="w-4 h-4 accent-amber-400"
                        />
                      </td>
                      <td className="p-2">
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="text-red-500 hover:text-red-400"
                        >
                          <FaTimes />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="9"
                      className="p-4 text-center text-gray-600 italic"
                    >
                      Las estadísticas detalladas se habilitan al marcar el
                      partido como "Finalizado"
                    </td>
                  </tr>
                )}
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
