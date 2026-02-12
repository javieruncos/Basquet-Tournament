import React from "react";

const ClubesPage = () => {
  return (
    <div className="p-5 lg:p-10">
      <div className=" flex flex-col items-center gap-5 lg:items-start lg:gap-2 text-center lg:text-left">
        <h1 className="text-7xl">Directorio de Clubes</h1>
        <p className="text-sm lg:text-2xl text-amber-300 numberFonts">
          32 clubes registrados compitiendo
        </p>
      </div>
      {/* <div className="w-full mt-5 flex flex-wrap items-center gap-4 md:gap-7 numberFonts">
        <button className="py-3 px-6 md:w-40 bg-[#171717] rounded-md hover:bg-amber-300 transition-all duration-300 hover:text-black cursor-pointer grow md:flex-none">Todos</button>
        <button className="py-3 px-6 md:w-40 bg-[#171717] rounded-md hover:bg-amber-300 transition-all duration-300 hover:text-black cursor-pointer grow md:flex-none">Masculino</button>
        <button className="py-3 px-6 md:w-40 bg-[#171717] rounded-md hover:bg-amber-300 transition-all duration-300 hover:text-black cursor-pointer grow md:flex-none">Femenino</button>
        <button className="py-3 px-6 md:w-40 bg-[#171717] rounded-md hover:bg-amber-300 transition-all duration-300 hover:text-black cursor-pointer grow md:flex-none">Juveniles</button>
      </div> */}
      <div className="w-full mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-7 numberFonts pt-5 lg:pt-0">
        <button className="w-40 py-3 bg-[#171717] rounded-md hover:bg-amber-300 transition-all duration-300 hover:text-black cursor-pointer text-center">
          Todos
        </button>
        <button className="w-40 py-3 bg-[#171717] rounded-md hover:bg-amber-300 transition-all duration-300 hover:text-black cursor-pointer text-center">
          Masculino
        </button>
        <button className="w-40 py-3 bg-[#171717] rounded-md hover:bg-amber-300 transition-all duration-300 hover:text-black cursor-pointer text-center">
          Femenino
        </button>
        <button className="w-40 py-3 bg-[#171717] rounded-md hover:bg-amber-300 transition-all duration-300 hover:text-black cursor-pointer text-center">
          Juveniles
        </button>
      </div>
      <div className="h-auto py-10 w-full  grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="h-80 w-full bg-dark-gradient to-black rounded-md  transition-all duration-300  cursor-pointer  border">
          <div className="flex justify-center items-center h-40">
            <div className="h-30 w-30 bg-[#323232] rounded-full flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Escudo_del_Club_Estaci%C3%B3n_Experimental_Tucum%C3%A1n.svg"
                alt="Visitante"
                className="h-full w-15  object-contain"
              />
            </div>
          </div>
          <div className="text-center uppercase flex flex-col justify-center items-center gap-5  font-bold">
            <span className="text-2xl">CAEE</span>
            <p className="numberFonts">Las Talitas - tucuman</p>
            <button className="py-2 px-8 bg-amber-300  transition-all duration-300  hover:bg-black hover:text-amber-300 cursor-pointer rounded-md border">
              Ver mas
            </button>
          </div>
        </div>
        <div className="h-80 w-full bg-dark-gradient to-black rounded-md  transition-all duration-300  cursor-pointer  border">
          <div className="flex justify-center items-center h-40">
            <div className="h-30 w-30 bg-[#323232] rounded-full flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Escudo_del_Club_Estaci%C3%B3n_Experimental_Tucum%C3%A1n.svg"
                alt="Visitante"
                className="h-full w-15  object-contain"
              />
            </div>
          </div>
          <div className="text-center uppercase flex flex-col justify-center items-center gap-5  font-bold">
            <span className="text-2xl">CAEE</span>
            <p className="numberFonts">Las Talitas - tucuman</p>
            <button className="py-2 px-8 bg-amber-300  transition-all duration-300  hover:bg-black hover:text-amber-300 cursor-pointer rounded-md border">
              Ver mas
            </button>
          </div>
        </div>
        <div className="h-80 w-full bg-dark-gradient from-[#1e1e1e] to-black rounded-md  transition-all duration-300  cursor-pointer  border">
          <div className="flex justify-center items-center h-40">
            <div className="h-30 w-30 bg-[#323232] rounded-full flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Escudo_del_Club_Estaci%C3%B3n_Experimental_Tucum%C3%A1n.svg"
                alt="Visitante"
                className="h-full w-15  object-contain"
              />
            </div>
          </div>
          <div className="text-center uppercase flex flex-col justify-center items-center gap-5  font-bold">
            <span className="text-2xl">CAEE</span>
            <p className="numberFonts">Las Talitas - tucuman</p>
            <button className="py-2 px-8 bg-amber-300  transition-all duration-300  hover:bg-black hover:text-amber-300 cursor-pointer rounded-md border">
              Ver mas
            </button>
          </div>
        </div>
        <div className="h-80 w-full bg-dark-gradient from-[#1e1e1e] to-black rounded-md  transition-all duration-300  cursor-pointer  border">
          <div className="flex justify-center items-center h-40">
            <div className="h-30 w-30 bg-[#323232] rounded-full flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Escudo_del_Club_Estaci%C3%B3n_Experimental_Tucum%C3%A1n.svg"
                alt="Visitante"
                className="h-full w-15  object-contain"
              />
            </div>
          </div>
          <div className="text-center uppercase flex flex-col justify-center items-center gap-5  font-bold">
            <span className="text-2xl">CAEE</span>
            <p className="numberFonts">Las Talitas - tucuman</p>
            <button className="py-2 px-8 bg-amber-300  transition-all duration-300  hover:bg-black hover:text-amber-300 cursor-pointer rounded-md border">
              Ver mas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubesPage;
