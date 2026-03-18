import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TournamentContext from "../../context/TournamentContext";
import { useContext } from "react";
import ClubesContext from "../../context/ClubesContext";
import CardProximos from "../../components/cards/CardProximos";
import { motion } from "framer-motion";
import SkeletonCard from "../../components/cards/CardSkeleton";
import Tabla from "../../components/common/Tabla";
import CardResultados from "../../components/cards/CardResultados";

const Fixture = () => {
  const { fixture, loading: contextLoading } = useContext(TournamentContext);
  const { clubes } = useContext(ClubesContext);
  const [filter, setFilter] = useState({
    jornada: "",
    fase: "",
    categoria: "",
  });

  const [isFiltering, setIsFiltering] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setIsFiltering(true);
    setTimeout(() => {
      setIsFiltering(false);
    }, 600);

    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log([name, value]);
  };

  const filterResult = (fixture) => {
    return fixture.filter((item) => {
      return (
        (!filter.estado || item.estado === "Programado") &&
        (!filter.jornada || item.jornada === filter.jornada) &&
        (!filter.fase || item.fase === filter.fase) &&
        (!filter.categoria || item.categoria === filter.categoria)
      );
    });
  };

  const partidosFilter = filterResult(fixture);

  const partidosPorJornada1 = fixture.filter((item) => item.jornada === 1);

  const filtroVacio = !filter.jornada && !filter.fase && !filter.categoria;

  const resultadoReciente = fixture
    .filter((item) => item.estado === "Finalizado")
    .slice(0, 2);

  

  return (
    <div className="p-20 px-3 w-full md:px-10 lg:px-10 lg:pt-30">
      <div className="bg-[#171717] border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden w-full">
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-300/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

        <div className="relative z-10">
          <div className="text-center mb-8 ">
            <span className="text-black text-xs font-black uppercase tracking-[0.3em] bg-amber-300 px-4 py-3 rounded-full border border-amber-300/20">
              {resultadoReciente[0]?.estado} - jornada {resultadoReciente[0]?.jornada}
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
            <div className="flex flex-col items-center gap-4 w-full md:w-1/3">
              <img
                src={fixture[0]?.local?.logo?.url}
                className="h-24 w-24 md:h-32 md:w-52 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                alt="Local"
              />
              <h3 className="text-white font-black text-2xl md:text-3xl uppercase tracking-tighter text-center">
               {fixture[0]?.local?.name}
              </h3>
              <span className="text-gray-500 text-sm font-bold">LOCAL</span>
            </div>

            <div className="flex flex-col items-center w-full md:w-1/3">
              <div className="flex items-center gap-6 numberFonts">
                <span className="text-7xl md:text-9xl font-black text-white">
                 {fixture[0]?.resultado?.total?.local}
                </span>
                <span className="text-4xl md:text-6xl text-amber-300 font-light">
                  :
                </span>
                <span className="text-7xl md:text-9xl font-black text-white">
                {fixture[0]?.resultado?.total?.visitante}
                </span>
              </div>
              <div className="mt-4 flex flex-col items-center gap-1">
                <span className="text-gray-400 text-sm font-medium uppercase tracking-widest">
                  {fixture[0]?.estadio}
                </span>
                <span className="text-gray-600 text-xs">{fixture[0]?.fecha}</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 w-full md:w-1/3">
              <img
                src={fixture[0]?.visitante?.logo?.url}
                className="h-24 w-24 md:h-32 md:w-52 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                alt="Visitante"
              />
              <h3 className="text-white font-black text-2xl md:text-3xl uppercase tracking-tighter text-center">
               {fixture[0]?.visitante?.name}
              </h3>
              <span className="text-gray-500 text-sm font-bold">VISITANTE</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-10 bg-[#191919] bg-dark-gradient mt-10 flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-4 rounded-md px-4 lg:px-10">
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
            <MenuItem value={1}>Fecha 1</MenuItem>
            <MenuItem value={2}>Fecha 2</MenuItem>
            <MenuItem value={3}>Fecha 3</MenuItem>
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
            <div className="col-span-4 mt-6 h-auto">
              <div className="h-auto w-full">
              <div className="mb-5 bg-white/2 py-0.5 px-4 mt-3 border-b border-gray-300/10">
                <h3 className="text-white text-3xl font-bold mb-4 mt-5">Jornada 1 del torneo</h3>
              </div>
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

      <div className="h-auto w-full mt-24">
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
