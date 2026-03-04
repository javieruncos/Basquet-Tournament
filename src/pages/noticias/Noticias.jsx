import React, { useContext, useState } from "react";
import PortadaNoticias from "./components/PortadaNoticias";
import CardNoticias from "../../components/cards/CardNoticias";
import SponsorCTA from "./components/SponsorCTA";
import Sponsor from "../../components/common/Sponsor";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import ProximosResultSection from "../home/components/ProximosResultSection";
import NewsContext from "../../context/NewsContext";
import ClubesContext from "../../context/ClubesContext";

const Noticias = () => {
  const { noticias } = useContext(NewsContext);
  const { clubes } = useContext(ClubesContext);
  const [filters, setFilters] = useState({
    fecha: "",
    categoria: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(name, value);
  };

  const filterResult = noticias.filter(
    (noticia) =>
      (!filters.fecha ||
        new Date(noticia.createdAt).toISOString().slice(0, 10) ===
          filters.fecha) &&
      (!filters.categoria || noticia.category === filters.categoria) 
     
  );

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
              Fecha
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Equipos"
              name="fecha"
              value={filters.fecha}
              onChange={HandleChange}
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
              {noticias.slice(0, 6).map((not) => (
                <MenuItem
                  key={not._id}
                  value={new Date(not.createdAt).toISOString().split("T")[0]}
                >
                  {new Date(not.createdAt).toLocaleDateString()}
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
              name="categoria"
              value={filters.categoria}
              className="bg-amber-300"
              onChange={HandleChange}
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
              <MenuItem value={"masculino"}>Masculino</MenuItem>
              <MenuItem value={"femenino"}>Femenino</MenuItem>
              <MenuItem value={"juvenil"}>Juveniles</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="">
        {filterResult.length === 0 ? (
          <div className="h-50 w-full text-center bg-dark-gradient flex items-center justify-center">
            <p className="text-gray-500 text-4xl animate-pulse">No hay Resultados relacionados</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 mt-10">
            { filterResult.map((noticia) => (
             <CardNoticias noticia={noticia} key={noticia._id}></CardNoticias>
          )) }
          </div>
        )}
       
      </div>
      <div className="">
        <ProximosResultSection />
      </div>
      <div className="mt-20">
        <SponsorCTA />
      </div>
    </div>
  );
};

export default Noticias;
