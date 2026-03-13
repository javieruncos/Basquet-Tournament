import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import TournamentContext from "../../context/TournamentContext";
import { useContext } from "react";
import ClubesContext from "../../context/ClubesContext";
import CardProximos from "../../components/cards/CardProximos";
import { motion } from "framer-motion";
import SkeletonCard from "../../components/cards/CardSkeleton";


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

  return (
    <div className="p-20 px-3 max-widht-7xl md:px-10 lg:px-10 lg:pt-30">
      <div>
        <div className="py-5 w-full flex justify-center md:justify-start lg:justify-start gap-1 text-gray-400 numberFonts text-sm lg:gap-4">
          <span>Torneo</span>
          <span>/</span>
          <span>Regional Amateur</span>
          <span>/</span>
          <span className="">Fixture</span>
        </div>
      </div>
      <div className="numberFonts text-center md:text-left">
        <div>
          <h1 className="text-5xl lg:text-7xl">Fixture Del Torneo</h1>
          <p className="text-amber-300">Temporada 2026 - Regional Amateur</p>
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
          <FormControl className="w-full md:w-48 lg:w-48 text-white">
            <InputLabel
              id="demo-simple-select-label"
              className="text-white"
              sx={{ color: "white", "&.Mui-focused": { color: "white" } }}
            >
              Fase
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="fase"
              name="fase"
              value={filter.fase}
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
              <MenuItem value={"Regular"}>Regular</MenuItem>
              <MenuItem value={"Octavos"}>Octavos</MenuItem>
              <MenuItem value={"Cuartos"}>Cuartos</MenuItem>
              <MenuItem value={"Semifinal"}>Semifinal</MenuItem>
              <MenuItem value={"Final"}>Final</MenuItem>
            </Select>
          </FormControl>
       
        </div>
      </div>
      <div className=" gap-5 mt-10">
        <div className="col-span-3 h-auto numberFonts">
          <div className="h-auto w-full bg-black/5 backdrop-blur rounded-md overflow-x-auto px-2 lg:px-0">
            {contextLoading || isFiltering ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((n) => (
                  <SkeletonCard key={n} />
                ))}
              </div>
            ) : partidosFilter.length === 0 ? (
              <div className="h-30 w-full text-center flex items-center justify-center">
                <p className="animate-pulse text-4xl">No hay partidos programados</p>
              </div>
            ) : (
              <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partidosFilter.map((item) => (
                  <CardProximos key={item._id} partido={item} clubes={clubes} />
                ))}
              </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fixture;
