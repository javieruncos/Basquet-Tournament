import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Fixture = () => {
  return (
    <div className="p-10 px-3 lg:px-10 lg:pt-30">
      <div>
        <div className="py-5 w-full flex gap-1 text-gray-400 numberFonts text-sm lg:gap-4">
          <span>Torneo</span>
          <span>/</span>
          <span>Regional Amateur</span>
          <span>/</span>
          <span className="">Fixture</span>
        </div>
      </div>
      <div className="numberFonts ">
        <div>
          <h1 className="text-5xl lg:text-7xl">Fixture Del Torneo</h1>
          <p className="text-amber-300">Temporada 2026 - Regional Amateur</p>
        </div>
        <div className="w-full py-10  bg-[#191919] bg-dark-gradient mt-10 flex flex-col lg:flex-row gap-4  rounded-md px-10">
          <FormControl className="w-full md:w-60 text-white ">
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
              <MenuItem value={10}>Fecha 1</MenuItem>
              <MenuItem value={20}>Fecha 2</MenuItem>
              <MenuItem value={30}>Fecha 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl className="w-full md:w-60 text-white">
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
              <MenuItem value={10}>Regular</MenuItem>
              <MenuItem value={20}>Octavos</MenuItem>
              <MenuItem value={30}>Cuartos</MenuItem>
              <MenuItem value={40}>Semifinal</MenuItem>
              <MenuItem value={50}>Final</MenuItem>
            </Select>
          </FormControl>
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
                Categoria
              </MenuItem>
              <MenuItem value={10}>Primera</MenuItem>
              <MenuItem value={20}>Femenino</MenuItem>
              <MenuItem value={30}>Juveniles</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className=" gap-5 mt-10">
        <div className="col-span-3 h-auto numberFonts">
          <div className="h-auto w-full bg-dark-gradient rounded-md overflow-x-auto border border-white/10">
            <table className="w-full text-left border-collapse min-w-full">
              <thead className="bg-[#222222] ">
                <tr>
                  <th className="py-4 px-6 font-medium w-1/3">Equipos</th>
                  <th className="py-4 px-6 font-medium text-center">
                    Fecha/Hora
                  </th>
                  <th className="py-4 px-6 font-medium text-center w-20">
                    Sede/localia
                  </th>
                  <th className="py-4 px-6 font-medium text-center">Estado</th>
                  <th className="py-4 px-6 font-medium text-center w-24">
                    Informacion
                  </th>
                </tr>
              </thead>
              <tbody className="text-white">
                {[1, 2, 3, 4, 5].map((item) => (
                  <tr
                    key={item}
                    className="border-b border-white/10 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-6 px-6">
                      <div className="flex flex-col gap-4">
                        {/* LOCAL */}
                        <div className="flex items-center gap-4">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Escudo_del_Club_Estaci%C3%B3n_Experimental_Tucum%C3%A1n.svg"
                            className="h-8 w-8"
                            alt="escudo local"
                          />
                          <div>
                            <span className="text-lg font-medium hidden md:block">
                              Est. Experimental
                            </span>
                            <span className="text-lg font-medium md:hidden">
                              CAEE
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Escudo_del_Club_Estaci%C3%B3n_Experimental_Tucum%C3%A1n.svg"
                            className="h-8 w-8"
                            alt="escudo visitante"
                          />
                          <div>
                            <span className="text-lg font-medium hidden md:block">
                              Talleres de Tafí
                            </span>
                            <span className="md:hidden">CAT</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-6">
                      <div className="flex flex-col gap-4 items-center">
                        <div className="text-xs text-white  flex flex-col gap-2 ">
                          <span className="text-amber-300">24/06/2026</span>
                          <span>20:30 hs.</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-10 px-6 f">
                      <div className="flex flex-col gap-4 items-center">
                        <div className="text-xs text-gray-400  flex flex-col gap-2 ">
                          <span className="text-white">Estadio unico</span>
                          <span>CAEE.</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <span className="text-[13px] uppercase tracking-wider  text-amber-300 px-2 py-1">
                        Programado
                      </span>
                    </td>
                    <td className="py-6 px-6">
                      <button className="text-amber-300 border border-amber-300/30 px-4 py-1 rounded-md hover:bg-amber-300 hover:text-black transition-all text-sm">
                        Detalles
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
