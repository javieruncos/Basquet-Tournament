import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import CardProximos from "../../components/cards/CardProximos";
import { motion } from "framer-motion";
import SkeletonCard from "../../components/cards/CardSkeleton";
import Tabla from "../../components/common/Tabla";
import CardResultados from "../../components/cards/CardResultados";
import useTournamentFilter from "../../hooks/useTournamentFilter";

const Fixture = () => {
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
      {/* Resultado Reciente Estilo ESPN/FoxSports */}
      <div className="bg-[#111] border-l-4 border-amber-400 rounded-r-xl overflow-hidden shadow-2xl w-full mb-10">
        <div className="bg-[#1a1a1a] px-6 py-2 flex justify-between items-center border-b border-white/5">
          <div className="flex items-center gap-3">
            <span className="bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded animate-pulse">FINAL</span>
            <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">
              Jornada {resultadoReciente[0]?.jornada} • {resultadoReciente[0]?.fase || "Fase Regular"}
            </span>
          </div>
          <span className="text-gray-500 text-[10px] font-bold uppercase tracking-tighter">
            {resultadoReciente[0]?.fecha}
          </span>
        </div>

        <div className="p-6 md:p-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          {/* Local */}
          <div className="flex flex-col md:flex-row items-center justify-end gap-4 md:gap-6 flex-1 w-full">
            <div className="text-center md:text-right order-2 md:order-1">
              <h3 className="text-xl md:text-4xl font-black uppercase tracking-tighter leading-none">
                {resultadoReciente[0]?.local?.name}
              </h3>
              <span className="text-gray-500 text-[10px] font-bold tracking-widest block md:inline">LOCAL</span>
            </div>
            <img
              src={resultadoReciente[0]?.local?.logo?.url}
              className="h-14 w-34 md:h-24 md:w-24 object-contain order-1 md:order-2"
              alt="Local"
            />
          </div>

          {/* Marcador Central */}
          <div className="flex items-center px-6 md:px-8 py-4 md:py-0 border-y md:border-y-0 md:border-x border-white/10 w-full md:w-auto justify-center">
            <div className="flex items-center gap-4 numberFonts">
              <span className={`text-5xl md:text-8xl font-black ${resultadoReciente[0]?.resultado?.total?.local > resultadoReciente[0]?.resultado?.total?.visitante ? 'text-white' : 'text-gray-600'}`}>
                {resultadoReciente[0]?.resultado?.total?.local}
              </span>
              <span className="text-2xl text-amber-400 font-bold">-</span>
              <span className={`text-5xl md:text-8xl font-black ${resultadoReciente[0]?.resultado?.total?.visitante > resultadoReciente[0]?.resultado?.total?.local ? 'text-white' : 'text-gray-600'}`}>
                {resultadoReciente[0]?.resultado?.total?.visitante}
              </span>
            </div>
          </div>

          {/* Visitante */}
          <div className="flex flex-col md:flex-row items-center justify-start gap-4 md:gap-6 flex-1 w-full">
            <img
              src={resultadoReciente[0]?.visitante?.logo?.url}
              className="h-14 w-34 md:h-24 md:w-24 object-contain"
              alt="Visitante"
            />
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-4xl font-black uppercase tracking-tighter leading-none">
                {resultadoReciente[0]?.visitante?.name}
              </h3>
              <span className="text-gray-500 text-[10px] font-bold tracking-widest">VISITANTE</span>
            </div>
          </div>
        </div>
        <div className="bg-white/5 p-3 text-center text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">
          Sede: {resultadoReciente[0]?.estadio || "Estadio a confirmar"}
        </div>
      </div>

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
        <div className="grid grid-col-1 md:grid-cols-6 gap-4">
          {contextLoading || isFiltering ? (
            <div className="col-span-4 mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
              {[1, 2, 3, 4].map((n) => (
                <SkeletonCard key={n} />
              ))}
            </div>
          ) : filtroVacio ? (
            <div className="col-span-4  h-auto">
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
              className="col-span-4 mt-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {partidosFilter.map((item) => (
                  <CardProximos key={item._id} partido={item} clubes={clubes} />
                ))}
              </div>
            </motion.div>
          ) : (
            <div className="col-span-4 mt-20 text-center">
              <h3 className="text-gray-500 text-3xl font-black uppercase tracking-tighter opacity-50">
                No se encontraron{" "}
                <span className="text-amber-300/50">partidos</span>
              </h3>
            </div>
          )}

          <div className="hidden md:block md:col-span-2 mt-10">
            <div className="sticky top-28">
              <Tabla />
            </div>
          </div>
        </div>
      </div>

      <div className="h-auto w-full mt-14">
        <h3 className="text-white text-4xl font-bold my-4">
          Resultado Recientes
        </h3>
        <hr className="text-white/10" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
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
    </div>
  );
};

export default Fixture;
