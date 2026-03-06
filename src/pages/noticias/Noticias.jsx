import React, { useContext, useState } from "react";
import PortadaNoticias from "./components/PortadaNoticias";
import CardNoticias from "../../components/cards/CardNoticias";
import SponsorCTA from "./components/SponsorCTA";
import { motion } from "framer-motion";
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

      <div className="w-full py-10 bg-white/5 backdrop-blur-3xl flex flex-col sm:flex-row gap-4 justify-between rounded-md px-4 lg:px-10">
        <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
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
              {[...new Set(noticias.map(not => new Date(not.createdAt).toISOString().split("T")[0]))]
                .slice(0, 6)
                .map((fechaIso) => (
                  <MenuItem
                    key={fechaIso}
                    value={fechaIso}
                  >
                    {new Date(fechaIso + "T12:00:00").toLocaleDateString()}
                  </MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </div>
        <div className="flex justify-center sm:justify-end w-full sm:w-auto">
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
            </Select>
          </FormControl>
        </div>
      </div>
      <motion.div 
        className="relative z-30"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.03 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
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
      </motion.div>
      <div className="mt-10">
        <ProximosResultSection />
      </div>
      <div className="mt-20">
        <SponsorCTA />
      </div>
    </div>
  );
};

export default Noticias;
