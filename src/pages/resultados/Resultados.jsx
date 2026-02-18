import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import CardResultados from "./components/CardResultados";

const Resultados = () => {
  const filter = [
    "Todos",
    "Clasificatoria",
    "Semifinal",
    "cuartos de final",
    "Final",
  ];
  return (
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
        <p className="numberFonts text-amber-300">Torneo Regional Amateur de Basquet - Temporada 2026</p>
      </div>
      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6  md:px-0 w-full mt-6">
        {filter.map((f) => (
          <button key={f} className="py-2 px-2 bg-[#191919] rounded-md hover:bg-amber-300 hover:text-black transition duration-300 ease-in-out">
            {f}
          </button>
        ))}
      </div> */}
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl className="w-full md:w-60 text-white">
            <InputLabel
              id="demo-simple-select-label"
              className="text-white"
              sx={{ color: "white", "&.Mui-focused": { color: "white" } }}
            >
              Categoria
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Equipos"
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
              <MenuItem value={10}>Primera</MenuItem>
              <MenuItem value={20}>Femenino</MenuItem>
              <MenuItem value={30}>Juveniles</MenuItem>
            </Select>
          </FormControl>
         
        </div>
        <div className="flex justify-center lg:justify-end px-4 lg:px-10 w-full lg:w-auto">
          <FormControl className="w-full md:w-60">
            <Select
              id="demo-simple-select"
              displayEmpty
              defaultValue=""
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-3   py-6">
          <CardResultados></CardResultados>
          <CardResultados></CardResultados>
          <CardResultados></CardResultados>
          <CardResultados></CardResultados>
      </div>
    </div>
  );
};

export default Resultados;
