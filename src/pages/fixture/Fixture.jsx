import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const Fixture = () => {
  return (
    <div className="p-10 px-3 lg:px-10">
      <div>
        <div className="py-5 w-full flex gap-4 text-gray-400 numberFonts">
          <span>Torneo</span>
          <span>/</span>
          <span>Regional Amateur</span>
          <span>/</span>
          <span className="">Fixture</span>
        </div>
      </div>
      <div className="numberFonts flex justify-between items-center">
        <div>
          <h2 className="text-7xl">Fixture Completo</h2>
          <p className="text-amber-300">Temporada 2026 - Regional Amateur</p>
        </div>
        <div>
          <FormControl className="w-full md:w-60 text-white">
            <InputLabel
              id="demo-simple-select-label"
              className="text-white"
              sx={{ color: "white", "&.Mui-focused": { color: "white" } }}
            >
              Categorias
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Equipos"
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10">
        <div className="col-span-1 pb-4">
          <div className="hidden lg:block">
            <ul className=" flex flex-col gap-2 numberFonts ">
              <li
                className="py-5 flex items-center gap-2 text-xl bg-[#171717] rounded-md px-3 
            transition-all duration-300 border border-gray-300/20  hover:bg-none hover:bg-amber-300 hover:text-black
            "
              >
                <FaCalendarAlt className="text-3xl "></FaCalendarAlt>
                fecha 1
              </li>
              <li
                className="py-5 flex items-center gap-2 text-xl bg-[#171717] rounded-md px-3 
            transition-all duration-300 border border-gray-300/20 hover:bg-amber-300 hover:text-black
            "
              >
                <FaCalendarAlt className="text-3xl "></FaCalendarAlt>
                fecha 1
              </li>
              <li
                className="py-5 flex items-center gap-2 text-xl bg-[#171717] rounded-md px-3 
            transition-all duration-300 border border-gray-300/20 hover:bg-amber-300 hover:text-black
            "
              >
                <FaCalendarAlt className="text-3xl "></FaCalendarAlt>
                fecha 1
              </li>
              <li
                className="py-5   flex items-center gap-2 text-xl bg-[#171717] rounded-md px-3
            transition-all duration-300 border border-gray-300/20 hover:bg-amber-300 hover:text-black
            "
              >
                <FaCalendarAlt className="text-3xl "></FaCalendarAlt>
                fecha 1
              </li>
              <li
                className="py-5   flex items-center gap-2 text-xl bg-[#171717] rounded-md px-3 
            transition-all duration-300 border border-gray-300/20 hover:bg-amber-300 hover:text-black
            "
              >
                <FaCalendarAlt className="text-3xl "></FaCalendarAlt>
                fecha 1
              </li>
              <li
                className="py-5   flex items-center gap-2 text-xl bg-[#171717] rounded-md px-3 
            transition-all duration-300 border border-gray-300/20 hover:bg-amber-300 hover:text-black
            "
              >
                <FaCalendarAlt className="text-3xl "></FaCalendarAlt>
                fecha 1
              </li>
            </ul>
          </div>
          <FormControl className="w-full text-white lg:hidden">
            <InputLabel
              id="demo-simple-select-label"
              className="text-white"
              sx={{ color: "white", "&.Mui-focused": { color: "white" } }}
            >
              fecha
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Equipos"
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="col-span-3 h-auto numberFonts">
          <div className="h-auto w-full bg-dark-gradient rounded-md overflow-x-auto border border-white/10">
            <table className="w-full text-left border-collapse min-w-full">
              <thead className="bg-[#222222] text-gray-400">
                <tr>
                  <th className="py-4 px-6 font-medium">Local</th>
                  <th className="py-4 px-6 font-medium text-center">
                    Resultado
                  </th>
                  <th className="py-4 px-6 font-medium text-right">
                    Visitante
                  </th>
                  <th className="py-4 px-6 font-medium text-center">Info</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {[1, 2, 3, 4, 5].map((item) => (
                  <tr
                    key={item}
                    className="border-b border-white/10 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-6 px-6">
                      <div className="flex items-center gap-3">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Escudo_del_Club_Estaci%C3%B3n_Experimental_Tucum%C3%A1n.svg"
                          className="h-8 w-8"
                          alt=""
                        />
                        <span className="text-lg">Est. Experimental</span>
                      </div>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <div className="flex justify-center items-center gap-4">
                        <span className="text-2xl font-bold bg-white/10 px-3 py-1 rounded">
                          85
                        </span>
                        <span className="text-gray-500">-</span>
                        <span className="text-2xl font-bold bg-white/10 px-3 py-1 rounded">
                          72
                        </span>
                      </div>
                    </td>
                    <td className="py-6 px-6">
                      <div className="flex items-center justify-end gap-3">
                        <span className="text-lg">Talleres de Tafí</span>
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Escudo_del_Club_Estaci%C3%B3n_Experimental_Tucum%C3%A1n.svg"
                          className="h-8 w-8"
                          alt=""
                        />
                      </div>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <button className="text-amber-300 border border-amber-300/30 px-4 py-1 rounded-full hover:bg-amber-300 hover:text-black transition-all">
                        Ver Boxscore
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fixture;
