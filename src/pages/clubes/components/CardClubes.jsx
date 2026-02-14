import React from "react";

const CardClubes = () => {
  return (
    <div className="h-80 w-full bg-dark-gradient to-black rounded-md  transition-all duration-300  cursor-pointer  border border-white/30">
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
  );
};

export default CardClubes;
