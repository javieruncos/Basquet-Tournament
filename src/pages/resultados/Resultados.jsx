import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import CardResultados from "../../components/cards/CardResultados";
import TournamentContext from "../../context/TournamentContext";
import ClubesContext from "../../context/ClubesContext";
import ProximosResultSection from "../../pages/home/components/ProximosResultSection";
import Sponsor from "../../components/common/Sponsor";

const Resultados = () => {
  const { fixture, setFixture } = useContext(TournamentContext);
  const { clubes } = useContext(ClubesContext);

  const [filters, setFilters] = useState({
    estado: "",
    equipos: "",
    jornada: "",
    fecha: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
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
        (!filters.fecha || item.fecha === filters.fecha)
      );
    });
  };
  const filtro = filterResult(fixture);
  console.log(filtro);

  return (
    <>
      <div className="md:px-10 px-5 main-container mt-30">
        <div className="py-5 w-full flex gap-1 text-gray-400 numberFonts text-sm lg:gap-4">
          <span>Torneo</span>
          <span>/</span>
          <span>Regional Amateur</span>
          <span>/</span>
          <span className="">Fixture</span>
        </div>
        <div className="flex flex-col gap-2 ">
          <h1 className="text-7xl">Resultados Destacados</h1>
          <p className="numberFonts text-amber-300">
            Torneo Regional Amateur de Basquet - Temporada 2026
          </p>
        </div>
        <div className="w-full py-10  bg-[#191919] bg-dark-gradient mt-10 flex flex-col lg:flex-row gap-4 lg:justify-between rounded-md">
          <div className="flex flex-col md:flex-row gap-4 px-4 lg:px-10 items-center w-full lg:w-auto">
            <FormControl className="w-full md:w-60 text-white">
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
            <FormControl className="w-full md:w-60 text-white">
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
                label="Equipos"
                name="fecha"
                value={filters.fecha}
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
                {fixture.map((partido) => (
                  <MenuItem
                    key={partido._id}
                    value={
                      new Date(partido.createdAt).toISOString().split("T")[0]
                    }
                  >
                    {new Date(partido.createdAt).toLocaleDateString()}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="flex justify-center lg:justify-end px-4 lg:px-10 w-full lg:w-auto">
            <FormControl className="w-full md:w-60">
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
          </div>
        </div>
        <div className="">
          {filtro.length === 0 ? (
            <div className="h-50 w-full text-center  flex items-center justify-center">
              <p className="text-gray-500 text-4xl animate-pulse">
                No hay Resultados relacionados
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-3   py-6">
              {filtro.map((partido) => (
                <CardResultados
                  resultados={partido}
                  key={partido._id}
                ></CardResultados>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="mb-20">
        <ProximosResultSection></ProximosResultSection>
      </div>
    </>
  );
};

export default Resultados;
