import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const MenuNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 shadow-md border-b border-gray-500">
      <div className="container mx-auto flex md:justify-start justify-between items-center gap-10">
        <div className="w-full flex justify-start gap-20 items-center">
          {/* Logo o Nombre de la Marca */}
          <a href="/" className="text-xl font-bold">
            MiLogo
          </a>

          {/* Enlaces de Navegación para Desktop */}
          <ul className="hidden md:flex  space-x-6">
            <li>
              <a
                href="/"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Noticias
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Partidos
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Resultados
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Tabla 
              </a>
            </li>
          </ul>
        </div>
        <div className="md:flex md:items-center gap-10 hidden">
          <TextField
            id="outlined-search"
            label="Buscar"
            type="search"
            size="small"
            className="w-70"
            sx={{
              input: {
                color: "gray",
                backgroundColor: "black",
                "&::-webkit-search-cancel-button": {
                  filter: "invert(1) brightness(2)",
                },
                borderRadius: "10px",
              },
              "& .MuiInputLabel-root": {
                color: "gray",
                "&.Mui-focused": {
                  color: "yellow",
                },
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "gray",
                  borderWidth: "1px !important", // fuerza el ancho
                  borderRadius: "10px",
                },
                "&:hover fieldset": {
                  borderColor: "gray",
                  borderWidth: "1px !important",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "yellow",
                  borderWidth: "1px !important",
                },
              },
            }}
          />

          <a href="*" className="text-sm w-30 text-center px-3 py-2.5 bg-amber-400 rounded-md">Iniciar Sesion</a>
        </div>
        {/* Botón de Hamburguesa para móvil */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              // Ícono de Cierre (X)
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              // Ícono de Hamburguesa
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Menú Desplegable para Móvil */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-4`}>
        <ul className="flex flex-col items-start space-y-4">
          <li>
            <a
              href="/"
              className="block hover:text-gray-300 transition-colors duration-300"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="block hover:text-gray-300 transition-colors duration-300"
            >
              Acerca de
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="block hover:text-gray-300 transition-colors duration-300"
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="block hover:text-gray-300 transition-colors duration-300"
            >
              Contacto
            </a>
          </li>
        </ul>
        <div className="flex items-start flex-col-reverse gap-7 mt-5">
           <TextField
            id="outlined-search"
            label="Buscar"
            type="search"
            size="small"
            className="w-full"
            sx={{
              input: {
                color: "gray",
                backgroundColor: "black",
                "&::-webkit-search-cancel-button": {
                  filter: "invert(1) brightness(2)",
                },
                borderRadius: "10px",
              },
              "& .MuiInputLabel-root": {
                color: "gray",
                "&.Mui-focused": {
                  color: "yellow",
                },
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "gray",
                  borderWidth: "1px !important", // fuerza el ancho
                  borderRadius: "10px",
                },
                "&:hover fieldset": {
                  borderColor: "gray",
                  borderWidth: "1px !important",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "yellow",
                  borderWidth: "1px !important",
                },
              },
            }}
          />
            <a href="*" className="text-sm w-30 text-center px-3 py-2 bg-amber-400 rounded-md">Iniciar Sesion</a>
        </div>
      </div>
    </nav>
  );
};

export default MenuNav;
