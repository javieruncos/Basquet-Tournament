import React, { useContext } from "react";
import PortadaNoticias from "./components/PortadaNoticias";
import CardNoticias from "../../components/cards/CardNoticias";
import SponsorCTA from "./components/SponsorCTA";
import Sponsor from "../../components/common/Sponsor";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import ResultadosSection from "../home/components/ResultadosSection";
import ProximosResultSection from "../home/components/ProximosResultSection";
import NewsContext from "../../context/NewsContext";

const Noticias = () => {
  const {noticias} = useContext(NewsContext);
  const filtros = ["Todos", "Masculino", "Femenino", "Juveniles"];

  return (
    <div className="md:px-0 main-container">
      <PortadaNoticias></PortadaNoticias>

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
          <TextField
            label="Fecha"
            type="date"
            className="w-full md:w-60"
            InputLabelProps={{
              shrink: true,
              sx: { color: "white", "&.Mui-focused": { color: "white" } },
            }}
            sx={{
              "& .MuiInputBase-input": { color: "white", colorScheme: "dark" },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#313131",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#313131",
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#313131 !important",
                },
              "& .MuiSvgIcon-root": {
                color: "white",
              },
            }}
          />
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
                Categorias
              </MenuItem>
              <MenuItem value={10}>Primera</MenuItem>
              <MenuItem value={20}>Femenino</MenuItem>
              <MenuItem value={30}>Juveniles</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 mt-15">
        {
          noticias.map((noticia) => (
            <CardNoticias noticia={noticia}></CardNoticias>
          ))
        }
      </div>
      <div className="">
        <ProximosResultSection />
      </div>
      <div className="mt-20">
        <SponsorCTA />
        <Sponsor></Sponsor>
      </div>
    </div>
  );
};

export default Noticias;
