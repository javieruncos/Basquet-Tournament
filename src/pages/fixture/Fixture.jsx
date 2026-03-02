import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import TournamentContext from "../../context/TournamentContext";
import { useContext } from "react";
import ClubesContext from "../../context/ClubesContext";
import CardProximos from "../../components/cards/CardProximos";

const Fixture = () => {
  const { fixture } = useContext(TournamentContext);
  const { clubes } = useContext(ClubesContext);

  const partidosFilter = fixture.filter((item) => item.estado === "Programado");

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
          <div className="h-auto w-full bg-black/5 backdrop-blur rounded-md overflow-x-auto  ">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {partidosFilter.map((item) => (
                <CardProximos key={item._id} partido={item} clubes={clubes} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fixture;
