import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import CardProximos from "../../components/cards/CardProximos";
import { motion } from "framer-motion";
import SkeletonCard from "../../components/cards/CardSkeleton";
import Tabla from "../../components/common/Tabla";
import CardResultados from "../../components/cards/CardResultados";
import useTournamentFilter from "../../hooks/useTournamentFilter";
import GridPortada from "../noticias/components/GridPortada";
import NewsContext from "../../context/NewsContext";
import { useContext } from "react";

const Fixture = () => {
const { noticias } = useContext(NewsContext);
const {
  partidosFilter,
  filter,
  onChange,
  isFiltering,
  filtroVacio,
  fixture,
  clubes,
  contextLoading,
  jornadas,
  resultadoReciente,
  partidosPorJornada1,
} = useTournamentFilter();

  return (
    <div className="p-5 pt-24 md:p-20 md:pt-30 px-3 w-full md:px-10 lg:px-10">
      {resultadoReciente[0] && (
        <div className="mb-12 bg-[#111] border-y-4 border-amber-400 rounded-xl overflow-hidden shadow-2xl">
          <div className="bg-amber-400 px-6 py-2 flex justify-between items-center">
            <span className="text-black font-black uppercase tracking-tighter text-sm flex items-center gap-2">
              <FaCalendarAlt /> Último Resultado
            </span>
            <span className="text-black font-bold text-xs uppercase tracking-widest">
              Jornada {resultadoReciente[0].jornada || "Fase Regular"}
            </span>
          </div>

          <div className="p-6 md:p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative">
            <div className="flex flex-col md:flex-col lg:flex-row items-center gap-4 lg:gap-6 flex-1 w-full lg:justify-end">
              <div className="text-center md:text-center lg:text-right order-2 lg:order-1">
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter leading-tight">
                  {resultadoReciente[0].local?.name}
                </h4>
                <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Local</span>
              </div>
              <img
                src={resultadoReciente[0].local?.logo?.url}
                alt="Local"
                className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] order-1 lg:order-2"
              />
            </div>

            <div className="flex flex-col items-center px-4 md:px-6 lg:px-8 border-y md:border-y-0 md:border-x border-white/10 py-4 md:py-0 w-full md:w-auto">
              <div className="flex items-center gap-4 numberFonts">
                <span className="text-5xl md:text-6xl lg:text-7xl font-black text-white">
                  {resultadoReciente[0].resultado?.total?.local}
                </span>
                <span className="text-2xl text-amber-400 font-bold">-</span>
                <span className="text-5xl md:text-6xl lg:text-7xl font-black text-white">
                  {resultadoReciente[0].resultado?.total?.visitante}
                </span>
              </div>
              <div className="text-center mt-2">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{resultadoReciente[0].fecha}</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-col lg:flex-row items-center gap-4 lg:gap-6 flex-1 w-full lg:justify-start">
              <img
                src={resultadoReciente[0].visitante?.logo?.url}
                alt="Visitante"
                className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] order-1 lg:order-1"
              />
              <div className="text-center md:text-center lg:text-left order-2 lg:order-2">
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter leading-tight">
                  {resultadoReciente[0].visitante?.name}
                </h4>
                <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Visitante</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-4 flex justify-center items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-widest">
            <FaMapMarkerAlt className="text-amber-400" />
            {resultadoReciente[0].estadio || "Estadio a confirmar"}
          </div>
        </div>
      )}

      <div className="w-full py-10 bg-[#191919] bg-dark-gradient mt-10 flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between items-center gap-4 rounded-md px-4 lg:px-10">
        <FormControl className="w-full md:w-48 lg:w-48 text-white ">
          <InputLabel
            id="demo-simple-select-label"
            className="text-white"
            sx={{ color: "white", "&.Mui-focused": { color: "white" } }}
          >
            Fecha
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="fecha"
            name="jornada"
            value={filter.jornada}
            onChange={onChange}
            className="bg-[#171717] rounded-md"
            sx={{
              color: "white",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#313131",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#313131",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#313131 !important",
              },
              "& .MuiSvgIcon-root": {
                color: "white",
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: "#191919",
                  color: "white",
                  "& .MuiMenuItem-root": {
                    bgcolor: "#191919",
                    "&:hover": {
                      bgcolor: "#333",
                    },
                  },
                },
              },
            }}
          >
            {jornadas.map((jornada) => (
              <MenuItem key={jornada} value={jornada}>
                Jornada {jornada}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div className="flex items-center gap-2 bg-[#171717] p-1 rounded-xl border border-[#313131]">
          {["Todos", "Regular", "Definicion"].map((fase) => (
            <button
              key={fase}
              onClick={() =>
                onChange({
                  target: { name: "fase", value: fase === "Todos" ? "" : fase },
                })
              }
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                filter.fase === fase || (fase === "Todos" && filter.fase === "")
                  ? "bg-amber-300 text-black shadow-[0_0_15px_rgba(252,211,77,0.3)]"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {fase}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
          {contextLoading || isFiltering ? (
            <div className="lg:col-span-4 mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
              {[1, 2, 3, 4].map((n) => (
                <SkeletonCard key={n} />
              ))}
            </div>
          ) : filtroVacio ? (
            <div className="lg:col-span-4 h-auto">
              <div className="h-auto w-full">
               
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
                  {partidosPorJornada1.map((item) => (
                    <CardProximos
                      key={item._id}
                      partido={item}
                      clubes={clubes}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : partidosFilter.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-4 mt-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {partidosFilter.map((item) => (
                  <CardProximos key={item._id} partido={item} clubes={clubes} />
                ))}
              </div>
            </motion.div>
          ) : (
            <div className="lg:col-span-4 mt-20 text-center">
              <h3 className="text-gray-500 text-3xl font-black uppercase tracking-tighter opacity-50">
                No se encontraron{" "}
                <span className="text-amber-300/50">partidos</span>
              </h3>
            </div>
          )}

          <div className="hidden lg:block lg:col-span-2 mt-10">
            <div className="sticky top-28">
              <Tabla />
            </div>
          </div>
        </div>
      </div>

      <div className="h-auto w-full mt-14">
        <h3 className="text-white text-4xl font-bold my-4 text-center md:text-left">
          Resultado Recientes
        </h3>
        <hr className="text-white/10" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {fixture
            .filter((item) => item.estado !== "Programado")
            .slice(0, 6)
            .map((item) => (
              <CardResultados
                key={item._id}
                resultados={item}
                clubes={clubes}
              />
            ))}
        </div>
      </div>

      <div className="">
        <GridPortada noticias={noticias} />
      </div>
    </div>
  );
};

export default Fixture;
