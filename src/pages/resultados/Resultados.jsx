import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useContext, useState, useMemo } from "react";
import TournamentContext from "../../context/TournamentContext";
import ClubesContext from "../../context/ClubesContext";
import ProximosResultSection from "../../pages/home/components/ProximosResultSection";
import SkeletonCard from "../../components/cards/CardSkeleton";
import Tabla from "../../components/common/Tabla";
import TablaResultados from "./components/TablaResultados";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";


const Resultados = () => {
  const { fixture, loading: contextLoading } = useContext(TournamentContext);
  const { clubes } = useContext(ClubesContext);

  const partidoDestacado = useMemo(() => {
    return fixture
      ?.filter((p) => p.estado === "Finalizado")
      .sort((a, b) => (b.resultado?.total?.local + b.resultado?.total?.visitante) - (a.resultado?.total?.local + a.resultado?.total?.visitante))[0];
  }, [fixture]);

  const [filters, setFilters] = useState({
    estado: "",
    equipos: "",
    jornada: "",
    fase: "",
    fecha: "",
  });
  const [isFiltering, setIsFiltering] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setIsFiltering(true);
    
    setTimeout(() => {
      setIsFiltering(false);
    }, 600);

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(name, value);
  };

  const filterResult = (fixture) => {
    return fixture.filter((item) => {
      return (
        (filters.estado || item.estado === "Finalizado") &&
        (!filters.equipos ||
          item.local._id === filters.equipos ||
          item.visitante._id === filters.equipos) &&
        (!filters.jornada || item.jornada === filters.jornada) &&
        (!filters.fase || item.jornada === filters.fase) &&
        (!filters.fecha || item.fecha === filters.fecha)
      );
    });
  };
  const filtro = filterResult(fixture);
  console.log(filtro);

  return (
    <>
      <div className="md:px-10 lg:px-10 px-5 main-container mt-30">
       {partidoDestacado && (
          <div className="mb-12 bg-[#111] border-y-4 border-amber-400 rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-amber-400 px-6 py-2 flex justify-between items-center">
              <span className="text-black font-black uppercase tracking-tighter text-sm flex items-center gap-2">
                <FaCalendarAlt /> Partido Destacado
              </span>
              <span className="text-black font-bold text-xs uppercase tracking-widest">
                Jornada {partidoDestacado.jornada || "Fase Regular"}
              </span>
            </div>

            <div className="p-6 md:p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative">
              <div className="flex flex-col md:flex-col lg:flex-row items-center gap-4 lg:gap-6 flex-1 w-full lg:justify-end">
                <div className="text-center md:text-center lg:text-right order-2 lg:order-1">
                  <h4 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter leading-tight">
                    {partidoDestacado.local?.name}
                  </h4>
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Local</span>
                </div>
                <img
                  src={partidoDestacado.local?.logo?.url}
                  alt="Local"
                  className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] order-1 lg:order-2"
                />
              </div>

              <div className="flex flex-col items-center px-4 md:px-6 lg:px-8 border-y md:border-y-0 md:border-x border-white/10 py-4 md:py-0 w-full md:w-auto">
                <div className="flex items-center gap-4 numberFonts">
                  <span className={`text-5xl md:text-6xl lg:text-7xl font-black ${partidoDestacado.resultado?.total?.local > partidoDestacado.resultado?.total?.visitante ? 'text-white' : 'text-gray-500'}`}>
                    {partidoDestacado.resultado?.total?.local}
                  </span>
                  <span className="text-2xl text-amber-400 font-bold">-</span>
                  <span className={`text-5xl md:text-6xl lg:text-7xl font-black ${partidoDestacado.resultado?.total?.visitante > partidoDestacado.resultado?.total?.local ? 'text-white' : 'text-gray-500'}`}>
                    {partidoDestacado.resultado?.total?.visitante}
                  </span>
                </div>
                <div className="text-center mt-2">
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{partidoDestacado.fecha}</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-col lg:flex-row items-center gap-4 lg:gap-6 flex-1 w-full lg:justify-start">
                <img
                  src={partidoDestacado.visitante?.logo?.url}
                  alt="Visitante"
                  className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] order-1 lg:order-1"
                />
                <div className="text-center md:text-center lg:text-left order-2 lg:order-2">
                  <h4 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter leading-tight">
                    {partidoDestacado.visitante?.name}
                  </h4>
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Visitante</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-4 flex justify-center items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-widest">
              <FaMapMarkerAlt className="text-amber-400" />
              {partidoDestacado.estadio || "Estadio a confirmar"}
            </div>
          </div>
        )} 

        <div className="flex flex-col gap-2 text-center md:text-left mt-20">
           <h1 className="text-6xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">
            resultados <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/40">destacados</span>
          </h1>
          <p className="numberFonts text-amber-300 uppercase font-bold tracking-wider">
            Torneo Regional Amateur de Basquet - Temporada 2026
          </p>
        </div>
        <div className="w-full py-10 bg-[#191919] bg-dark-gradient mt-10 flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-4 lg:justify-between rounded-md px-4 lg:px-10">
          <div className="flex flex-col sm:flex-row md:flex-1 lg:flex-none gap-4 items-center w-full lg:w-auto">
            <FormControl className="w-full sm:w-60 md:flex-1 lg:w-60 text-white">
              <InputLabel
                id="demo-simple-select-label"
                className="text-white"
                sx={{ color: "white", "&.Mui-focused": { color: "white" } }}
              >
                Equipos
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Equipos"
                name="equipos"
                value={filters.equipos}
                onChange={onChange}
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
                {clubes.map((club) => (
                  <MenuItem key={club._id} value={club._id}>
                    {club.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-end w-full md:w-full lg:w-auto gap-4">
            <FormControl className="w-full sm:w-60 md:w-full lg:w-60">
              <Select
                id="demo-simple-select"
                displayEmpty
                value={filters.jornada}
                onChange={onChange}
                name="jornada"
                className="bg-amber-300"
                sx={{
                  color: "black",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black !important",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "black",
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
                <MenuItem value="" disabled>
                  Fecha del torneo
                </MenuItem>
                {Array.from({ length: 10 }, (_, i) => (
                  <MenuItem key={i + 1} value={i + 1}>
                    Fecha {i + 1}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl className="w-full sm:w-60 md:w-full lg:w-60">
              <Select
                id="select-fase"
                displayEmpty
                value={filters.fase}
                onChange={onChange}
                name="fase"
                className="bg-white/5"
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
                <MenuItem value="">Todas las Fases</MenuItem>
                <MenuItem value="Octavos">Octavos de Final</MenuItem>
                <MenuItem value="Cuartos">Cuartos de Final</MenuItem>
                <MenuItem value="Semifinal">Semifinal</MenuItem>
                <MenuItem value="Final">Final</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="">
          {contextLoading || isFiltering ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-6">
              {[1, 2, 3, 4].map((n) => (
                <SkeletonCard key={n} />
              ))}
            </div>
          ) : filtro.length === 0 ? (
            <div className="h-50 w-full text-center  flex items-center justify-center">
              <p className="text-gray-500 text-4xl animate-pulse numberFonts">
                No hay Resultados relacionados
              </p>
            </div>
          ) : (
           <TablaResultados filtro={filtro} />
          )}
        </div>

        <div className="mt-20 mb-10">
          <div className="flex flex-col items-center gap-4 md:items-start text-center md:text-left mb-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-1 bg-amber-300"></div>
              <span className="text-amber-300 font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
                Clasificación
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">
              Tabla de <span className="text-amber-300">Posiciones</span>
            </h2>
          </div>
          <div className="bg-[#111] rounded-xl overflow-hidden border border-white/5">
            <Tabla />
          </div>
        </div>
      </div>
      <div className="mb-20 lg:px-5">
        <ProximosResultSection></ProximosResultSection>
      </div>
    </>
  );
};

export default Resultados;
