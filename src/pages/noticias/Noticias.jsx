import React, { useContext, useState } from "react";
import PortadaNoticias from "./components/PortadaNoticias";
import CardNoticias from "../../components/cards/CardNoticias";
import SponsorCTA from "./components/SponsorCTA";
import { motion } from "framer-motion";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import ProximosResultSection from "../home/components/ProximosResultSection";
import NewsContext from "../../context/NewsContext";
import ClubesContext from "../../context/ClubesContext";
import SkeletonCard from "../../components/cards/CardSkeleton";

const Noticias = () => {
  const { noticias, loading: contextLoading } = useContext(NewsContext);
  const [filters, setFilters] = useState({
    fecha: "",
    categoria: "",
  });
  const [isFiltering, setIsFiltering] = useState(false);

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setIsFiltering(true);

    setTimeout(() => {
      setIsFiltering(false);
    }, 800);

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
      (!filters.categoria || noticia.category === filters.categoria),
  );

  return (
    <div className="md:px-0 main-container">
      <PortadaNoticias></PortadaNoticias>
      <div className=" lg:pt-10 max-w-7xl mx-auto px-4 md:px-10">
        <div className="w-full py-10 bg-dark-gradient flex flex-col sm:flex-row gap-4 justify-between rounded-md px-4 lg:px-10">
          <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto ">
            <h2 className="text-5xl">Noticias Destacadas</h2>
            <span className="text-gray-400 text-3xl ml-2">
              ({filterResult.length})
            </span>
          </div>
          <div className="flex justify-center sm:justify-end w-full sm:w-auto">
            <FormControl className="w-full md:w-60">
              <Select
                id="demo-simple-select"
                displayEmpty
                name="categoria"
                value={filters.categoria}
                className="bg-neutral-900 border border-gray-400/60 text-white"
                onChange={HandleChange}
                sx={{
                  color: "white",
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
                <MenuItem value="" disabled>
                  Categoria
                </MenuItem>
                <MenuItem value={"masculino"}>Masculino</MenuItem>
                <MenuItem value={"femenino"}>Femenino</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      

      <motion.div
        className="relative z-30 max-w-7xl mx-auto "
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.03 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="">
          {contextLoading || isFiltering ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 mt-10"
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <SkeletonCard key={n} />
              ))}
            </motion.div>
          ) : filterResult.length === 0 ? (
            <div className="h-50 w-full text-center bg-dark-gradient flex items-center justify-center">
              <p className="text-gray-500 text-4xl animate-pulse">
                No hay Resultados relacionados
              </p>
            </div>
          ) : (
            <div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 mt-10"
            >
              {filterResult.map((noticia) => (
                <CardNoticias
                  noticia={noticia}
                  key={noticia._id}
                ></CardNoticias>
              ))}
            </div>
          )}
        </div>
      </motion.div>
      <div className=" max-w-7xl mx-auto lg:px-4">
        <ProximosResultSection />
      </div>
      <div className="mt-32">
        <SponsorCTA />
      </div>
    </div>
  );
};

export default Noticias;
